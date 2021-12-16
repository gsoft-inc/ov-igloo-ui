import React, { PureComponent, ReactElement } from 'react';
import classNames from 'classnames';

import './tooltip.scss';

import TooltipContainer, { Position } from './TooltipContainer';
import { GetTextWidth } from './GetTextWidth';

export type Appearance = 'dark' | 'light';

export interface TooltipProps extends React.ComponentProps<'div'> {
  children: string | React.ReactNode;
  tooltipClassName?: string;
  content?: React.ReactNode;
  position?: Position;
  appearance?: Appearance;
  maxWidth?: number;
  spacing?: number;
  arrowVisible?: boolean;
}

export interface TooltipStates {
  isVisible: boolean;
  contentWidth?: number;
  positionLeft: number;
  positionTop: number;
  relativePosition: Position;
}

class TooltipComponent extends PureComponent {
  private readonly targetElement: React.RefObject<HTMLDivElement>;

  private readonly tooltipElement: React.RefObject<HTMLDivElement>;

  private interval: ReturnType<typeof setInterval>;

  constructor(props: TooltipProps) {
    super(props);

    this.targetElement = React.createRef<HTMLDivElement>();
    this.tooltipElement = React.createRef<HTMLDivElement>();

    this.state = {
      isVisible: false,
      contentWidth: null,
    };
  }

  public componentDidMount(): void {
    this.updateContentWidth();

    window.addEventListener('scroll', this.updatePositionIfVisible);
    window.addEventListener('resize', this.updatePositionIfVisible);

    // Workaround for a React known issue: onMouseLeave not being triggered for disabled elements
    if (this.targetElement.current != null) {
      this.targetElement.current.addEventListener(
        'mouseleave',
        this.handleMouseLeave
      );
    }

    // When visible, re-calculate the position every 500ms, in case the layout has changed
    this.interval = setInterval(this.updatePositionIfVisible, 500);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('scroll', this.updatePositionIfVisible);
    window.removeEventListener('resize', this.updatePositionIfVisible);

    if (this.targetElement.current != null) {
      this.targetElement.current.removeEventListener(
        'mouseleave',
        this.handleMouseLeave
      );
    }

    clearInterval(this.interval);
  }

  public componentDidUpdate(prevProps: TooltipProps): void {
    const { children, content } = this.props as TooltipProps;

    if (prevProps.children !== children) {
      // height might change and arrow needs repositioning
      this.updatePositionIfVisible();
    }

    if (prevProps.content !== content) {
      this.updateContentWidth();
    }
  }

  public handleMouseEnter = (): void => {
    this.updatePosition();
    this.setState({ isVisible: true });
  };

  public handleMouseLeave = (): void => {
    this.updatePosition();
    this.setState({ isVisible: false });
  };

  public handleTouchStart = (): void => {
    this.updatePosition();
    this.setState((s: TooltipStates) => ({ isVisible: !s.isVisible }));
  };

  public updatePositionIfVisible = (): void => {
    const { isVisible } = this.state as TooltipStates;

    if (isVisible) {
      this.updatePosition();
    }
  };

  public updateContentWidth = (): void => {
    const { content, maxWidth } = this.props as TooltipProps;

    if (typeof content === 'string') {
      // Add 1px tolerance for IE
      const contentWidth = GetTextWidth(content, '12px Inter') + 1;

      this.setState({ contentWidth });
    } else {
      this.setState({ contentWidth: maxWidth });
    }
  };

  private updatePosition = (): void => {
    requestAnimationFrame(() => {
      const { position } = this.props as TooltipProps;
      const { positionLeft, positionTop, relativePosition } = this
        .state as TooltipStates;

      const targetElement = this.targetElement.current;
      const tooltipElement = this.tooltipElement.current;

      if (targetElement === null || tooltipElement === null) {
        return;
      }

      const targetElementRect = targetElement.getBoundingClientRect();
      const tooltipElementRect = tooltipElement.getBoundingClientRect();

      const location =
        position ||
        this.determineTooltipLocation(targetElementRect, tooltipElementRect);
      const positions = this.calculatePositionFromLocation(
        targetElementRect,
        tooltipElementRect,
        location
      );

      if (
        positions.left !== positionLeft ||
        positions.top !== positionTop ||
        location !== relativePosition
      ) {
        this.setState({
          positionLeft: positions.left,
          positionTop: positions.top,
          relativePosition: location,
        });
      }
    });
  };

  private determineTooltipLocation = (
    targetElementRect: DOMRect,
    tooltipElementRect: DOMRect
  ): Position => {
    const { spacing } = this.props as TooltipProps;

    // Check if the tooltip fits vertically (top or bottom)
    const hasEnoughSpaceLeft =
      tooltipElementRect.width / 2 <= targetElementRect.left;
    const hasEnoughSpaceRight =
      tooltipElementRect.width / 2 <=
      window.innerWidth - targetElementRect.right;

    // It fits vertically. Try to place on top. If not, place on the bottom
    if (hasEnoughSpaceLeft && hasEnoughSpaceRight) {
      // ie11 doesn't have the y property, it uses top instead
      const y = targetElementRect.y || targetElementRect.top;
      const hasEnoughSpaceTop = tooltipElementRect.height + (spacing || 0) <= y;

      return hasEnoughSpaceTop ? 'top' : 'bottom';
    }

    // It does not fit vertically. Prioritize right.
    return hasEnoughSpaceRight ? 'right' : 'left';
  };

  private calculatePositionFromLocation = (
    targetElementRect: DOMRect,
    tooltipElementRect: DOMRect,
    location: Position
  ): { left: number; top: number } => {
    const { spacing } = this.props as TooltipProps;

    let left = 0;
    let top = 0;

    const leftPositionWhenVertical =
      targetElementRect.left +
      (targetElementRect.width - tooltipElementRect.width) / 2;
    const topPositionWhenLateral =
      targetElementRect.top +
      (targetElementRect.height - tooltipElementRect.height) / 2;

    switch (location) {
      case 'top':
        left = leftPositionWhenVertical;
        top =
          targetElementRect.top - tooltipElementRect.height - (spacing || 0);
        break;
      case 'bottom':
        left = leftPositionWhenVertical;
        top = targetElementRect.bottom + (spacing || 0);
        break;
      case 'right':
        left = targetElementRect.right + (spacing || 0);
        top = topPositionWhenLateral;
        break;
      case 'left':
        left =
          targetElementRect.left - tooltipElementRect.width - (spacing || 0);
        top = topPositionWhenLateral;
        break;
      default:
    }

    return { left, top };
  };

  public render(): ReactElement {
    const { className, tooltipClassName, children, content, maxWidth } = this
      .props as TooltipProps;
    const {
      positionLeft,
      positionTop,
      isVisible,
      relativePosition,
      contentWidth,
    } = this.state as TooltipStates;

    const shouldShowTooltip = !!content && isVisible;

    return (
      <div
        ref={this.targetElement}
        className={classNames(className, 'tooltip')}
        onMouseEnter={this.handleMouseEnter}
      >
        {children}
        {shouldShowTooltip && (
          <TooltipContainer
            ref={this.tooltipElement}
            className={tooltipClassName}
            left={positionLeft}
            top={positionTop}
            width={contentWidth}
            maxWidth={maxWidth}
            relativePosition={relativePosition}
          >
            {content}
          </TooltipContainer>
        )}
      </div>
    );
  }
}

const Tooltip: React.FunctionComponent<TooltipProps> = (
  props: TooltipProps
) => {
  const {
    children,
    content,
    tooltipClassName,
    position = 'top',
    appearance = 'dark',
    maxWidth = 200,
    spacing = 8,
    arrowVisible = true,
    className,
    ...rest
  } = props;

  const classes = classNames('ids-tooltip__container', className);

  const tooltipClasses = classNames('ids-tooltip', tooltipClassName, {
    [`ids-tooltip--${position}`]: true,
    'has-arrow': arrowVisible,
    'ids-tooltip-dark': appearance === 'dark',
  });

  const tooltipStyle = {
    maxWidth: `${maxWidth}px`,
  };

  return (
    <div className={classes}>
      <div className={tooltipClasses} style={tooltipStyle} {...rest}>
        {content}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
