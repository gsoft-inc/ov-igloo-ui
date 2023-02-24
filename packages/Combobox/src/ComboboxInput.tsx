import * as React from 'react';

import cx from 'classnames';

import ChevronUp from '@igloo-ui/icons/dist/TableChevronSelectedUp';
import ChevronDown from '@igloo-ui/icons/dist/TableChevronSelectedDown';
import IconButton from '@igloo-ui/icon-button';
import Close from '@igloo-ui/icons/dist/Close';
import Tooltip from '@igloo-ui/tooltip';
import Input from '@igloo-ui/input';
import { VisualIdentifier } from '../../../shared/components';

import './combobox-input.scss';

export interface ComboboxInputProps extends React.ComponentProps<'div'> {
  /** If true, it clears any selected option */
  clear?: boolean;
  /** The tooltip text for the clear button */
  clearTooltipText?: string;
  /** Add a colored square instead of an image or an icon */
  color?: string;
  /** If the combobox is disabled */
  disabled?: boolean;
  /** Add an icon to the left of the option */
  icon?: React.ReactElement;
  /** True if the option list is displayed */
  isOpen?: boolean;
  /** True if the value is a placeholder */
  isPlaceholder?: boolean;
  /** Option title. */
  label: React.ReactNode;
  /** Callback for when the clear button is clicked */
  onClear?: () => void;
  /** Callback to execute on input of the searchbox */
  onSearch?: (value: string) => void;
  /** Whether or not to display a search box when open */
  search?: boolean;
  /** The ref for the search field */
  searchRef?: React.RefObject<HTMLInputElement>;
  /** Specifies the url for the image to show */
  src?: string;
}

const ComboboxInput: React.FunctionComponent<ComboboxInputProps> = (
  props: ComboboxInputProps
) => {
  const {
    clear = false,
    clearTooltipText,
    color,
    disabled,
    icon,
    isOpen = false,
    isPlaceholder,
    label,
    onClear,
    onSearch,
    search,
    searchRef,
    src,
    ...rest
  } = props;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;

    if (onSearch) {
      onSearch(value);
    }
  };

  const clearBtn = (
    <IconButton
      appearance={{ type: 'ghost', variant: 'secondary' }}
      className="ids-combobox-input__clear"
      type="button"
      size="small"
      icon={<Close size="medium" />}
      onClick={onClear}
    />
  );

  const comboboxInputClasses = cx('ids-combobox-input', {
    'ids-combobox-input--disabled': disabled,
    'ids-combobox-input--placeholder': !disabled && isPlaceholder,
  });

  const shouldShowVisualIdentifier = src || color || icon;

  return (
    <div className={comboboxInputClasses} {...rest}>
      {search && isOpen ? (
        <Input
          className="ids-combobox-input__search"
          type="text"
          onChange={handleChange}
          ref={searchRef}
        />
      ) : (
        <div className="ids-combobox-input__value">
          {shouldShowVisualIdentifier && (
            <div className="ids-combobox-input__visual-identifier-container">
              <VisualIdentifier
                className="ids-combobox-input__visual"
                color={color}
                src={src}
                icon={icon}
              />
            </div>
          )}
          <span className="ids-combobox-input__value-label">{label}</span>
        </div>
      )}
      <div className="ids-combobox-input__actions">
        {clear &&
          (clearTooltipText ? (
            <Tooltip content={clearTooltipText} position="top">
              {clearBtn}
            </Tooltip>
          ) : (
            clearBtn
          ))}
        {isOpen ? (
          <ChevronUp className="ids-combobox-input__chevron" size="small" />
        ) : (
          <ChevronDown className="ids-combobox-input__chevron" size="small" />
        )}
      </div>
    </div>
  );
};

export default ComboboxInput;
