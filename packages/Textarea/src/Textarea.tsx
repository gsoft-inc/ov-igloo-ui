import * as React from 'react';
import cx from 'classnames';
import autosize from 'autosize';

import './textarea.scss';

export interface TextareaProps extends React.ComponentProps<'textarea'> {
  /** True if the textarea should allow new lines with Enter */
  allowNewline?: boolean;
  /** Add class names to the surrounding DOM container. */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
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

const Textarea: React.FunctionComponent<TextareaProps> = ({
  allowNewline = true,
  className,
  dataTest,
  error = false,
  isAutoResize = false,
  maxLength,
  onChange,
  showCharactersIndicator = false,
  value,
  ...props
}) => {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [currentCharLength, setCurrentCharLength] = React.useState(
    value?.length ?? 0
  );
  const [currentValue, setCurrentValue] = React.useState(value ?? '');
  const textareaMaxLength = maxLength ?? 0;
  const displayCharIndicator = showCharactersIndicator && textareaMaxLength > 0;

  const getClasses = (prefix = 'ids-textarea'): string => {
    const classes = cx(prefix, {
      [`${prefix}--error`]: error,
      [`${prefix}--has-char-count`]: displayCharIndicator,
      [`${prefix}--disabled`]: props.disabled,
    });

    return classes;
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setCurrentValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter') {
      e.stopPropagation();

      if (!allowNewline) {
        e.preventDefault();
      }
    }
  };

  React.useEffect(() => {
    if (isAutoResize && textareaRef && textareaRef.current) {
      autosize(textareaRef.current);
      autosize.update(textareaRef.current);
    }
  }, [textareaRef, isAutoResize]);

  React.useEffect(() => {
    setCurrentCharLength(currentValue?.length ?? 0);
  }, [currentValue]);

  return (
    <div className={`${getClasses()} ${className}`} data-test={dataTest}>
      <textarea
        ref={textareaRef}
        className={getClasses('ids-textarea__field')}
        maxLength={maxLength}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={value}
        {...props}
      />

      {displayCharIndicator && (
        <div className="ids-textarea__char-indicator">
          {textareaMaxLength - currentCharLength}
        </div>
      )}
    </div>
  );
};

export default Textarea;
