import React from 'react';
import classNames from 'classnames';

export type Position = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipContainerProps extends React.ComponentProps<'div'> {
  children: string | React.ReactNode;
  left: number;
  top: number;
  width?: number;
  maxWidth?: number;
  relativePosition: Position;
}

const TooltipContainer: React.FunctionComponent<TooltipContainerProps> = (
  props: TooltipContainerProps
) => {
  const {
    children,
    left,
    top,
    width,
    maxWidth = 200,
    relativePosition = 'top',
    className,
    ...rest
  } = props;

  const contentStyles = width
    ? {
        width: width > maxWidth ? maxWidth : width,
      }
    : undefined;

  const position = {
    left,
    top,
  };

  const containerClasses = classNames(
    'tooltip__container',
    `tooltip__container--${relativePosition}`
  );
  const contentClasses = classNames('tooltip__content', className);

  return (
    <div className={containerClasses} {...rest} style={position}>
      <div className={contentClasses}>
        <div style={contentStyles}>{children}</div>
      </div>
    </div>
  );
};

export default TooltipContainer;
