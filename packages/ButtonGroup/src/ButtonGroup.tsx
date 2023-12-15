import * as React from 'react';
import cx from 'classnames';

import './button-group.scss';

import ButtonGroupItem from './ButtonGroupItem';

export interface ButtonGroupProps {
    /** Changes the padding of button group */
    compact?: boolean;
    /** Changes the size of button group */
    small?: boolean;
    /** React child node representing the button content text or icon */
    children: React.ReactNode;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Add a specific class to the button group */
    className?: string;
}

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({
    children,
    compact = false,
    small = false,
    className,
    dataTest,
    ...rest
}: ButtonGroupProps) => {
    let childrenClone = React.Children.toArray(children);

    childrenClone = childrenClone.map((child, index) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                ...child.props,
                ["data-item"]: cx({
                    'is-first': index === 0,
                    'is-last': index === childrenClone.length - 1,
                }),
            });
        }
        return child;
    });

    return (
        <div
            data-test={dataTest}
            className={cx('ids-btn-group', className, {
                'ids-btn-group--small': small,
                'ids-btn-group--compact': compact,
            })}
            {...rest}
        >
            {childrenClone}
        </div>
    );
};

export { ButtonGroupItem as ButtonItem };
export default ButtonGroup;
