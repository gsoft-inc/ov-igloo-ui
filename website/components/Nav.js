import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import github from '../svg/github.svg';

export default function Nav({ items }) {
  const { asPath } = useRouter();

  const navList = items.map((item, index) => {
    const navItem = (
      <Link key={index.toString()} href={item.link}>
        <a
          className={cx(
            'io-nav__link',
            cx(asPath === item.link && 'is-active')
          )}
        >
          {item.label}
        </a>
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
      <ul className="io-nav__list">
        {navList}
        <li className="io-nav__item io-nav__item--icon">
          <a
            className="io-link-icon"
            href="https://github.com/gsoft-inc/ov-igloo-ui"
          >
            <Image src={github} />
            <span>Github</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
