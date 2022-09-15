import * as React from 'react';
import cx from 'classnames';

import {
  TextIcon,
  OptionScaleIcon,
  MultipleChoiceIcon,
  LikertIcon,
  TextIconDisabled,
  OptionScaleIconDisabled,
  MultipleChoiceIconDisabled,
  LikertIconDisabled,
} from './svgs';

import './option-button.scss';

export type ButtonType = 'Text' | 'OptionScale' | 'MultipleChoice' | 'Likert';

export interface OptionButtonProps extends React.ComponentProps<'input'> {
  /** True when the option button is selected */
  checked?: boolean;
  /** Add a specific class to the option button */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Add a description that is displayed below the text prop */
  description?: string;
  /** True if the option button should be disabled */
  disabled?: boolean;
  /** Add an icon the the beginning of the option button.
   * This overrides the icon that comes with buttonType */
  icon?: React.ReactNode;
  /** Add an id to the radio button of the option button.
   * This will also be used as the htmlFor attribute on the label */
  id: string;
  /** Add an onChange event to the option button */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Added the main text to the option button */
  text: string;
  /** Add a button type, which will come with its own icon.
   * If adding an icon, this will be overridden */
  buttonType?: ButtonType;
  /** True if the option button should have an unchecked appearance */
  unchecked?: boolean;
}

const OptionButton: React.FunctionComponent<OptionButtonProps> = (
  props: OptionButtonProps
) => {
  const {
    checked,
    className,
    dataTest,
    description,
    disabled,
    icon,
    id,
    onChange,
    text,
    buttonType,
    unchecked,
    ...rest
  } = props;

  const renderIcon = (): React.ReactNode => {
    if (icon) {
      return icon;
    }
    switch (buttonType) {
      case 'Text':
        if (disabled || unchecked) {
          return (
            // eslint-disable-next-line max-len
            <TextIconDisabled className="ids-option-button__text-icon-disabled" />
          );
        }
        return <TextIcon className="ids-option-button__text-icon" />;
      case 'OptionScale':
        if (disabled || unchecked) {
          return (
            // eslint-disable-next-line max-len
            <OptionScaleIconDisabled className="ids-option-button__option-scale-icon-disabled" />
          );
        }
        return (
          // eslint-disable-next-line max-len
          <OptionScaleIcon className="ids-option-button__option-scale-icon" />
        );
      case 'MultipleChoice':
        if (disabled || unchecked) {
          return (
            // eslint-disable-next-line max-len
            <MultipleChoiceIconDisabled className="ids-option-button__multiple-choice-icon-disabled" />
          );
        }
        return (
          // eslint-disable-next-line max-len
          <MultipleChoiceIcon className="ids-option-button__multiple-choice-icon" />
        );
      case 'Likert':
        if (disabled || unchecked) {
          return (
            // eslint-disable-next-line max-len
            <LikertIconDisabled className="ids-option-button__likert-icon-disabled" />
          );
        }
        return <LikertIcon className="ids-option-button__likert-icon" />;
      default:
        return null;
    }
  };

  const classes = cx('ids-option-button', className, {
    'ids-option-button--unchecked': unchecked,
  });

  return (
    <span className={classes} data-test={dataTest}>
      <input
        id={id}
        className="ids-option-button__radio"
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        type="radio"
        {...rest}
      />
      <label htmlFor={id} className="ids-option-button__label">
        <span className="ids-option-button__icon-container">
          {renderIcon()}
        </span>
        <span className="ids-option-button__text-container">
          <span className="ids-option-button__text">{text}</span>
          <span className="ids-option-button__desc">{description}</span>
        </span>
      </label>
    </span>
  );
};

export default OptionButton;
