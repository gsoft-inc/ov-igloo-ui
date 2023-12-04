import * as React from 'react';
import cx from 'classnames';
import {useButton} from 'react-aria';
import {m, AnimatePresence, LazyMotion, domAnimation} from 'framer-motion';

import ChevronDown from '@igloo-ui/icons/dist/ChevronDown';

import './disclosure.scss';

export interface DisclosureProps extends React.ComponentProps<'div'> {
    /** The component content to display when expanding */
    children: React.ReactNode;
    /** Add a specific class to the disclosure */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** The description of the disclosure */
    description?: React.ReactNode;
    /** An icon to show as the first element in disclosure */
    icon?: React.ReactNode;
    /** Whether or not the disclosure is expanded */
    isExpanded?: boolean;
    /** True for a light appearance (no shadow, icon or border) */
    isLowContrast?: boolean;
    /** Callback when the disclosure is closed */
    onClose?: () => void;
    /** Callback when the disclosure is opened */
    onOpen?: () => void;
    /** The title of the disclosure */
    title?: string;
}

const Disclosure: React.FunctionComponent<DisclosureProps> = ({
    children,
    className,
    dataTest,
    description,
    icon,
    isExpanded = false,
    isLowContrast = false,
    onClose,
    onOpen,
    title,
    }: DisclosureProps) => {
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const [expanded, setExpanded] = React.useState(isExpanded);

    console.log("Disclosure.tsx: Disclosure: expanded: ", expanded);

    const {buttonProps} = useButton(
        {
            onPress: () => {
                setExpanded(!expanded);
            },
        },
        btnRef,
    );

    React.useEffect(() => {
        setExpanded(isExpanded);
    }, [isExpanded]);

    React.useMemo(() => {
        if (expanded && onOpen) {
            onOpen();
        }

        if (!expanded && onClose) {
            onClose();
        }

    }, [expanded, onOpen, onClose])


    const classes = cx('ids-disclosure', className, {
        'ids-disclosure--low-contrast': isLowContrast,
    });

    return (
        <div className={classes} data-test={dataTest}>
            <button
                {...buttonProps}
                ref={btnRef}
                className="ids-disclosure__header"
                aria-expanded={expanded}
            >
                {icon && <span className="ids-disclosure__header-icon">{icon}</span>}
                <span className="ids-disclosure__header-content">
                    {title && (
                      <span className="ids-disclosure__header-title">{title}</span>
                    )}
                    {description && (
                        <span className="ids-disclosure__header-desc">{description}</span>
                    )}
                </span>
                {!isLowContrast && (
                    <ChevronDown
                        size="medium"
                        className="ids-disclosure__header-chevron"
                    />
                )}
            </button>
            <LazyMotion features={domAnimation} strict>
                <AnimatePresence initial={false}>
                    {expanded && (
                        <m.div
                            className="ids-disclosure__content"
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: {
                                    opacity: 1,
                                    height: 'auto',
                                    overflow: 'hidden',
                                    transitionEnd: {
                                        overflow: 'visible',
                                    },
                                },
                                collapsed: {opacity: 0, height: 0, overflow: 'hidden'},
                            }}
                            transition={{duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98]}}
                        >
                            {children}
                        </m.div>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </div>
    );
};

export default Disclosure;
