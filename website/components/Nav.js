import Link from 'next/link';
import Image from 'next/image';

import github from '../svg/github.svg';

export const navigation = {
  TOKENS: '/tokens',
  ICONS: '/icons',
  COMPONENTS: '/storybook',
};

const nav = [
  {
    link: navigation.TOKENS,
    label: 'Tokens',
    featurFlag: true,
  },
  {
    link: navigation.ICONS,
    label: 'Icons',
    featurFlag: true,
  },
  {
    link: navigation.COMPONENTS,
    label: 'Components',
  },
];

export default function Nav() {
  const navList = nav.map((item) => {
    const navItem = item.featurFlag ? (
      item.label
    ) : (
      <Link href={item.link}>
        <a className="io-nav__link">{item.label}</a>
      </Link>
    );

    return <li className="io-nav__item">{navItem}</li>;
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
