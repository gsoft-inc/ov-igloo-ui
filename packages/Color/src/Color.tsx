import * as React from 'react';

import cx from 'classnames';

import './color.scss';

export type Size = 'small' | 'medium' | 'large' | 'xlarge';

export interface ColorProps {
  /** The content of the color */
  children?: React.ReactNode;
  /** Add a specific class to the color */
  className?: string;
  /** The background color */
  color?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Specify the name that will be used to create initials */
  name?: string;
  /** Specifies the size of the color */
  size?: Size;
  /** The color of the text */
  textColor?: string;
}

const Color: React.FunctionComponent<ColorProps> = ({
  children,
  className,
  color,
  dataTest,
  name,
  size = 'small',
  textColor,
}) => {
  const classes = cx('ids-color', `ids-color--${size}`, className);

  const initialsFromName = React.useMemo(() => {
    if (!name) {
      return null;
    }

    let initials = '';
    const splitName = name.trim().split(' ');

    // If only one word, take the first 2 characters
    if (splitName.length === 1) {
      initials = splitName[0].slice(0, 2);
    }
    // If more than 1 word, take the first word's first character
    // then take the next first character of a segment who is alphadecimal
    else if (splitName.length > 1) {
      initials = splitName[0].slice(0, 1);
      for (let i = 1; i < splitName.length; i += 1) {
        const firstLetterOrSegment = splitName[i].slice(0, 1);
        if (firstLetterOrSegment.match(/\w/)) {
          initials += firstLetterOrSegment;

          break;
        }
      }

      if (initials.length < 2) {
        initials = splitName[0].slice(0, 2);
      }
    }

    if (size === 'small' || size === 'medium') {
      initials = initials.charAt(0);
    }

    return initials;
  }, [name, size]);

  return (
    <div
      className={classes}
      data-test={dataTest}
      style={{ backgroundColor: color, color: textColor }}
    >
      {children || initialsFromName}
    </div>
  );
};

export default Color;
