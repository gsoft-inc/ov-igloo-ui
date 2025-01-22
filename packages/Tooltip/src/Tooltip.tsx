import {
    arrow,
    autoPlacement,
    autoUpdate,
    flip,
    FloatingPortal,
    offset,
    shift,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useRole,
    useTransitionStyles
} from "@floating-ui/react";
import cx from "classnames";
import * as React from "react";

import useDeviceDetect from "./hooks/useDeviceDetect";

import "./tooltip.scss";

export type Appearance = "dark" | "light";
export type Position = "top" | "right" | "bottom" | "left" | "auto";

export interface TooltipProps
    extends Omit<React.ComponentPropsWithoutRef<"div">, "content"> {
    /** The target button, text, svg etc.. of the Tooltip. */
    children: React.ReactNode;
    /** Add a specific class to the tooltip */
    tooltipClassName?: string;
    /** The content to display inside the tooltip */
    content?: React.ReactNode;
    /** The position the tooltip is on. */
    position?: Position;
    /** The appearance of the tooltip. */
    appearance?: Appearance;
    /** The max with of the tooltip */
    maxWidth?: number;
    /** When True, manually show the Tooltip. */
    active?: boolean;
    /** When True, disabled the tooltip */
    disabled?: boolean;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** When True, display the tooltip on a mobile device */
    showOnMobile?: boolean;
}

const getBrand = (): string => {
    return document.documentElement.getAttribute("data-brand") ?? "igloo";
};

const Tooltip: React.FunctionComponent<TooltipProps> = ({
    children,
    content,
    tooltipClassName,
    position = "top",
    appearance = "dark",
    maxWidth = 200,
    className,
    disabled,
    active = false,
    dataTest,
    showOnMobile = false,
    ...rest
}: TooltipProps) => {
    const isWorkleap = getBrand() === "workleap";
    const classes = cx("ids-tooltip__container", className);
    const fontBase = isWorkleap ? 16 : 10;

    const arrowRef = React.useRef(null);

    let floatingUIPlacement = {};
    const arrowMiddleware = arrow({
        element: arrowRef
    });

    if (position === "auto") {
        floatingUIPlacement = {
            middleware: [offset(8), autoPlacement(), shift(), arrowMiddleware]
        };
    } else {
        floatingUIPlacement = {
            placement: position,
            middleware: [offset(8), flip(), shift(), arrowMiddleware]
        };
    }

    const [show, setShow] = React.useState<boolean>(active);

    const { isMobile } = useDeviceDetect();

    const disabledOnMobile = isMobile && !showOnMobile;
    const showTooltip = !disabled && !disabledOnMobile && show;

    const {
        x,
        y,
        strategy,
        refs,
        context,
        middlewareData,
        placement: finalPlacement
    } = useFloating({
        open: showTooltip,
        strategy: "fixed",
        onOpenChange: open => {
            setShow(open);
        },
        whileElementsMounted: autoUpdate,
        ...floatingUIPlacement
    });

    const hover = useHover(context, { move: false });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);

    const role = useRole(context, { role: "tooltip" });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        dismiss,
        role
    ]);

    const staticSideObj = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    };
  type ObjectKey = keyof typeof staticSideObj;

  const finalPlacementKey = finalPlacement.split("-")[0] as ObjectKey;

  const staticSide = staticSideObj[finalPlacementKey];

  const tooltipClasses = cx("ids-tooltip", tooltipClassName, {
      "ids-tooltip--light": appearance === "light"
  });

  const fromPxToRem = (value: number, base = fontBase): string =>
      `${value / base}rem`;

  const center = position === "top" || position === "bottom";

  const { isMounted, styles } = useTransitionStyles(context, {
      duration: 150,
      initial: ({ side }) => ({
          opacity: 0,
          transform: side === "bottom" ? "translateY(1rem)" : "translateY(-1rem)"
      }),
      open: {
          opacity: 1,
          transform: "translateY(0rem)"
      }
  });

  const arrowStyles = {
      left: middlewareData.arrow?.x,
      top: middlewareData.arrow?.y,
      [staticSide]: "-2.5px"
  };

  return (
      <span ref={refs.setReference} className={classes} {...getReferenceProps()}>
          {children}
          {isMounted && (
              <FloatingPortal>
                  <div
                      ref={refs.setFloating}
                      className={tooltipClasses}
                      style={{
                          position: strategy,
                          top: y ?? 0,
                          left: x ?? 0,
                          maxWidth: fromPxToRem(maxWidth),
                          ...styles
                      }}
                      {...getFloatingProps()}
                      data-text={center && "center"}
                      data-show={show}
                      data-test={dataTest}
                      {...rest}
                  >
                      {content}
                      <div
                          className="ids-tooltip__arrow"
                          ref={arrowRef}
                          style={arrowStyles}
                      />
                  </div>
              </FloatingPortal>
          )}
      </span>
  );
};

export default Tooltip;
