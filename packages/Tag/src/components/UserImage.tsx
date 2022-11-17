import * as React from 'react';

import cx from 'classnames';

import './user-image.scss';

export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface UserImageProps extends React.ComponentProps<'div'> {
  /** Add a specific class to the team color icon */
  className?: string;
  /** Specifies the size of the team icon */
  size?: Size;
  /** Specifies the image url to show */
  src: string;
}

const UserImage: React.FunctionComponent<UserImageProps> = ({
  className,
  size = 'medium',
  src,
}) => {
  const classes = cx('ids-user-image', `ids-user-image--${size}`, className);

  const checkImgSrc = (): string => {
    const validBase64Regex =
      /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

    let image = src;
    if (validBase64Regex.exec(image) !== null) {
      image = `data:image/jpeg;base64,${image}`;
    }

    return image;
  };

  return (
    <div className={classes}>
      <img
        alt=""
        className={cx(
          'ids-user-image__image',
          `ids-user-image__image--${size}`
        )}
        src={checkImgSrc()}
      />
    </div>
  );
};

export default UserImage;
