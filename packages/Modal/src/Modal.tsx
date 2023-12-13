import * as React from "react";
import ReactDom from "react-dom";
import cx from "classnames";
import {
    LazyMotion, domAnimation, m, AnimatePresence
} from "framer-motion";

import {
    type OverlayProps,
    useOverlay,
    usePreventScroll, 
    useDialog, 
    type AriaDialogProps,
    FocusScope
} from "react-aria";

import IconButton from "@igloo-ui/icon-button";
import Close from "@igloo-ui/icons/dist/Close";
import ChevronLeft from "@igloo-ui/icons/dist/ChevronLeft";
import Carousel from "@igloo-ui/carousel";

import "./modal.scss";

export type Size = "small" | "medium" | "large" | "xlarge";

export interface CarouselInterface {
    /** The current slide number starting at 0 */
    currentSlide?: number;
    /** Event called when the page is changed */
    onPageChange?: (index: number) => void;
    /** Contains the list of slides */
    slides: React.ReactNode[];
}

export interface ModalProps extends OverlayProps, AriaDialogProps {
    /** The content to display inside the modal */
    children: React.ReactNode;
    /** Add a specific class to the modal */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Changes the modal width
   * @default small
   */
    size?: Size;
    /** The content for the title of the modal */
    title?: string;
    /** Render the close button */
    isClosable?: boolean;
    /** Whether the modal is open or not */
    isOpen: boolean;
    /** Whether to close the overlay when the user interacts outside it
   * @default false
   */
    isDismissable?: boolean;
    /** Handler that is called when the overlay should close */
    onClose?: () => void;
    /** Handler that is called when the modal is closed and no longer visible */
    onAfterClose?: () => void;
    /** The content for the aria-label on the close button */
    closeBtnAriaLabel?: string;
    /** Remove the default padding and the title from the modal */
    fullContent?: boolean;
    /** The button displayed on the right */
    primaryAction?: React.ReactElement;
    /** The secondary button displayed on the left */
    secondaryAction?: React.ReactElement;
    /** The object to build the carousel inside the modal */
    carousel?: CarouselInterface;
    /** A unique key for the modal */
    keyValue?: string;
    /** Whether to close the modal when the escape key is pressed
   * @default true
   */
    dismissOnEscape: boolean;
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
    const {
        children,
        className,
        closeBtnAriaLabel,
        dataTest,
        title,
        onClose,
        onAfterClose,
        isClosable,
        isDismissable = false,
        fullContent,
        size = "small",
        isOpen,
        primaryAction,
        secondaryAction,
        carousel,
        keyValue = "",
        dismissOnEscape = true
    } = props;

    const displayBackBtn = carousel && carousel.currentSlide && carousel.currentSlide > 0;
    const handleOnPageChange = (index: number): void => {
        if (carousel?.onPageChange && index >= 0) {
            carousel?.onPageChange(index);
        }
    };

    const ref = React.useRef<HTMLDivElement>(null);
    const { overlayProps, underlayProps } = useOverlay(
        { isOpen, onClose, isDismissable, isKeyboardDismissDisabled: !dismissOnEscape },
        ref
    );

    usePreventScroll({ isDisabled: !isOpen });

    const onExitComplete = (): void => {
        if (!isOpen) {
            onAfterClose?.();
        }
    };

    const overlayVariants = {
        open: {
            opacity: 1
        },
        close: { opacity: 0 }
    };

    const modalVariants = {
        open: {
            opacity: 1,
            scale: 1
        },
        close: {
            opacity: 0,
            scale: 1
        },
        initial: {
            opacity: 0,
            scale: 0.95
        }
    };

    const { dialogProps } = useDialog(props, ref);

    const classes = cx("ids-modal", className, {
        [`ids-modal--${size}`]: size !== "small",
        "ids-modal--full-content": fullContent,
        "ids-modal--with-title": title !== undefined,
        "ids-modal--dismissable": isDismissable,
        "ids-modal--closable": isClosable
    });

    const modal = (
        <LazyMotion features={domAnimation} strict>
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        key={`${keyValue}_overlay`}
                        className="ids-overlay"
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        {...(underlayProps as any)}
                        initial="close"
                        animate="open"
                        exit="close"
                        variants={overlayVariants}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence onExitComplete={onExitComplete}>
                {isOpen && (
                    <FocusScope restoreFocus autoFocus contain>
                        <m.div className="ids-modal__wrapper">
                            <m.div
                                key={`${keyValue}_modal`}
                                className={classes}
                                data-test={dataTest}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                {...(overlayProps as any)}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                {...(dialogProps as any)}
                                initial="initial"
                                animate="open"
                                exit="close"
                                variants={modalVariants}
                                transition={{ duration: 0.2 }}
                                ref={ref}
                            >
                                <div
                                    className={cx("ids-modal__header", {
                                        "ids-modal__header--with-back-btn": displayBackBtn
                                    })}
                                >
                                    {displayBackBtn ? (
                                        <IconButton
                                            size="small"
                                            className="ids-modal__back"
                                            onClick={() => {
                                                if (carousel && carousel.currentSlide) {
                                                    handleOnPageChange(carousel.currentSlide - 1);
                                                }
                                            }}
                                            appearance={{ type: "ghost", variant: "secondary" }}
                                            icon={<ChevronLeft size="medium" />}
                                        />
                                    ) : (
                                        <></>
                                    )}

                                    {title && <h5 className="ids-modal__title">{title}</h5>}

                                    <IconButton
                                        size="small"
                                        className="ids-modal__close"
                                        onClick={onClose}
                                        appearance={{ type: "ghost", variant: "secondary" }}
                                        aria-label={closeBtnAriaLabel}
                                        icon={<Close />}
                                    />
                                </div>
                                <div className="ids-modal__content">
                                    {children}

                                    {carousel && (
                                        <Carousel
                                            onPageChange={carousel.onPageChange}
                                            currentSlide={carousel.currentSlide}
                                            primaryAction={primaryAction}
                                            secondaryAction={secondaryAction}
                                            className="ids-modal__carousel"
                                        >
                                            {carousel.slides.map((slide, index) => (
                                                <div
                                                    key={`slide_${index.toString()}`}
                                                    className="ids-modal__carousel-slide"
                                                >
                                                    {slide}
                                                </div>
                                            ))}
                                        </Carousel>
                                    )}

                                    {(primaryAction || secondaryAction) && !carousel && (
                                        <div className="ids-modal__footer">
                                            {secondaryAction
                      && React.cloneElement(secondaryAction, {
                          className: "ids-modal__footer-action"
                      })}
                                            {primaryAction
                      && React.cloneElement(primaryAction, {
                          className: "ids-modal__footer-action"
                      })}
                                        </div>
                                    )}
                                </div>
                            </m.div>
                        </m.div>
                    </FocusScope>
                )}
            </AnimatePresence>
        </LazyMotion>
    );

    return ReactDom.createPortal(modal, document.body);
};

export default Modal;
