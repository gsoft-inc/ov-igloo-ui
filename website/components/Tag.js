import cx from 'classnames';

export default function Tag({ children, className, appearance }) {
  return (
    <span
      className={cx('io-tag', className, {
        [`io-tag--${appearance}`]: appearance,
      })}
    >
      {children}
    </span>
  );
}
