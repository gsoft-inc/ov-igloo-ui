import { useRouter } from 'next/router';
import Link from 'next/link';

import cx from 'classnames';

export default function Nav({ items }) {
  const { asPath } = useRouter();

  const navList = items.map((item, index) => {
    const navItem = (
      <Link
        key={index.toString()}
        href={item.link}
        className={cx('io-nav__link', cx(asPath === item.link && 'is-active'))}
      >
        {item.label}
      </Link>
    );

    return (
      <li key={index.toString()} className="io-nav__item">
        {navItem}
      </li>
    );
  });

  return (
    <nav className="io-nav">
      <ul className="io-nav__list">{navList}</ul>
    </nav>
  );
}
