import cx from 'classnames';

export default function Title({ as = 'h1', level = 1, children, className }) {
  const Component = as;
  return (
    <Component
      className={cx('io-title', className, {
        [`io-title--level${level}`]: level,
      })}
    >
      {children}
    </Component>
  );
}
