import * as React from 'react';
import cx from 'classnames';
import autosize from 'autosize';
import { mergeRefs } from '@react-aria/utils';

import './textarea.scss';

export interface TextareaProps extends React.ComponentPropsWithRef<'textarea'> {
  /** True if the textarea should allow new lines with Enter. */
  allowNewline?: boolean;
  /** If the textarea should be automatically focused. */
  autoFocus?: boolean;
  /** Add class names to the surrounding DOM container. */
  className?: string;
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
  /** True if the textarea should be disabled. */
  disabled?: boolean;
  /** True if the textarea has an error. */
  error?: boolean;
  /** True if the textarea should resize
   * automatically when a multiline value is set. */
  isAutoResize?: boolean;
  /** The maximum number of characters allowed. Required if
   *  "showCharactersIndicator" is enabled. */
  maxLength?: number;
  /** Function called when the value changes. */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** True to display the number of remaining allowed characters
   *  in the bottom right of the text area. Requires a valid
   *  value in the "maxLength" prop. */
  showCharactersIndicator?: boolean;
  /** Specifies the value inside the input. */
  value?: string;
}

const Textarea: React.FunctionComponent<TextareaProps> = React.forwardRef(
  (
    {
      allowNewline = true,
      autoFocus = false,
      className,
      dataTest,
      disabled = false,
      error = false,
      isAutoResize = false,
      maxLength,
      onChange,
      showCharactersIndicator = false,
      value,
      ...rest
    }: TextareaProps,
    ref: React.Ref<HTMLTextAreaElement | null>
  ) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const mergedTextareaRef = mergeRefs(textareaRef, ref);
    const [currentCharLength, setCurrentCharLength] = React.useState(
      value?.length ?? 0
    );
    const [currentValue, setCurrentValue] = React.useState(value ?? '');
    const textareaMaxLength = maxLength ?? 0;
    const displayCharIndicator =
      showCharactersIndicator && textareaMaxLength > 0;

    const classes = cx('ids-textarea', className, {
      'ids-textarea--has-char-count': displayCharIndicator,
    });

    const fieldClasses = cx('ids-textarea__field', {
      'ids-textarea__field--error': error,
      'ids-textarea__field--disabled': disabled,
    });

    const handleOnChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
      setCurrentValue(event.target.value);
      if (onChange) {
        onChange(event);
      }
    };

    const handleKeyDown = (
      e: React.KeyboardEvent<HTMLTextAreaElement>
    ): void => {
      if (e.key === 'Enter') {
        e.stopPropagation();

        if (!allowNewline) {
          e.preventDefault();
        }
      }
    };

    React.useEffect(() => {
      if (autoFocus && textareaRef && textareaRef.current) {
        textareaRef.current.focus();
      }
    }, [ref, autoFocus]);

    React.useEffect(() => {
      if (isAutoResize && textareaRef && textareaRef.current) {
        autosize(textareaRef.current);
        autosize.update(textareaRef.current);
      }
    }, [textareaRef, isAutoResize]);

    React.useEffect(() => {
      setCurrentCharLength(currentValue?.length ?? 0);
    }, [currentValue]);

    const characterDisplay =
      currentCharLength > textareaMaxLength
        ? 0
        : textareaMaxLength - currentCharLength;

    return (
      <div className={classes} data-test={dataTest}>
        <textarea
          ref={mergedTextareaRef}
          className={fieldClasses}
          maxLength={maxLength}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          value={value}
          disabled={disabled}
          {...rest}
        />

        {displayCharIndicator && (
          <div className="ids-textarea__char-indicator">{characterDisplay}</div>
        )}
      </div>
    );
  }
);

export default Textarea;
