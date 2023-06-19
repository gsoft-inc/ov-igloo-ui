import * as React from 'react';
import cx from 'classnames';

import './button.scss';

export type Appearance =
  | 'primary'
  | 'secondary'
  | 'premium'
  | 'ghost'
  | 'danger'
  | { type: 'ghost'; variant?: 'secondary' }
  | { type: 'ghost'; variant?: 'danger' };
export type Size = 'small' | 'medium';

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

export interface ButtonOwnProps {
  /** The content to display inside the button */
  children?: React.ReactNode;
  /** Disabled the button, the user cannot click on them */
  disabled?: boolean;
  /** Sets the button in an active state */
  active?: boolean;
  /** Replaces button text with a spinner while a
   * background action is being performed */
  loading?: boolean;
  /** Changes the size of button, giving more or less padding */
  size?: Size;
  /** Button appearance */
  appearance?: Appearance;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Icon to display to the left of button content */
  iconLeading?: React.ReactNode;
  /** Icon to display to the right of button content */
  iconTrailing?: React.ReactNode;
  /** Display only the icon in mobile */
  showOnlyIconOnMobile?: boolean;
  /** Callback when clicked */
  onClick?: () => void;
  /** Optional prop to specify the type of the Button */
  type?: 'button' | 'reset' | 'submit';
  /** Add a data-intercom-target with unique id to link a
   * component to a Product Tour step */
  intercomTarget?: string;
  /** Add a specific class to the button */
  className?: string;
  //** Return to the default size on mobile */
  resetSizeOnMobile?: boolean;
}

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  ButtonOwnProps
>;

type ButtonComponent<C extends React.ElementType = 'button'> = {
  <T extends React.ElementType = C>(
    props: ButtonProps<T>
  ): React.ReactElement | null;

  displayName?: string;
};

const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      children,
      disabled = false,
      active = false,
      loading = false,
      size = 'medium',
      appearance = 'primary',
      type = 'button',
      onClick,
      dataTest,
      iconLeading,
      iconTrailing,
      showOnlyIconOnMobile,
      resetSizeOnMobile = false,
      intercomTarget,
      className,
      as,
      ...rest
    }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const hasIconLeading = iconLeading !== undefined;
    const hasIconTrailing = iconTrailing !== undefined;
    const hasIcon = hasIconLeading || hasIconTrailing;
    const childrenIsAString =
      typeof children === 'string' || children instanceof String;

    const normalizeAppearanceClass = (appearance: Appearance): {} => {
      if (typeof appearance === 'object') {
        return {
          [`ids-btn--${appearance.type}`]: !appearance.variant,
          [`ids-btn--${appearance.type}-${appearance.variant}`]:
            appearance.variant,
        };
      }

      return {
        [`ids-btn--${appearance}`]: appearance !== 'primary',
      };
    };

    const appearanceClasses = normalizeAppearanceClass(appearance);

    const classes = cx('ids-btn', className, appearanceClasses, {
      'ids-btn--small': size === 'small',
      'ids-btn--active': active,
      'ids-btn--loading': loading,
      'ids-btn--disabled': as === 'a' && disabled,
      'ids-btn--mobile': showOnlyIconOnMobile,
      'has-icon': hasIcon,
      'has-icon--leading': hasIconLeading,
      'has-icon--trailing': hasIconTrailing,
      'ids-btn--size-mobile': resetSizeOnMobile,
    });

    const renderContent = (): JSX.Element => {
      return (
        <>
          {hasIconLeading && iconLeading}
          {showOnlyIconOnMobile ? (
            <span
              className={cx('ids-btn__label', {
                'is-hidden': loading,
              })}
            >
              {children}
            </span>
          ) : (
            <span
              className={cx({
                'is-hidden': loading,
              })}
            >
              {children}
            </span>
          )}
          {hasIconTrailing && iconTrailing}
        </>
      );
    };

    const Component = as || 'button';

    return (
      <Component
        disabled={disabled}
        className={classes}
        data-test={dataTest}
        data-intercom-target={intercomTarget}
        type={type}
        title={childrenIsAString ? children?.toString() : ''}
        onClick={onClick}
        ref={ref}
        {...rest}
      >
        {loading && <div className="ids-loader" />}
        {renderContent()}
      </Component>
    );
  }
);

Button.displayName = 'Button'; // This fixed issue OV-42946

export default Button;
