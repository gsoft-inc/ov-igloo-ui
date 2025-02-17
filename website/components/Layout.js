import Head from 'next/head';
import cx from 'classnames';

import Header from './Header';
import Nav from './Nav';
import { nav } from '../navigation';

import brand from '../svg/brand.svg';
import github from '../svg/github.svg';
import darkMode from '../svg/dark-mode.svg';

export default function Layout({ children, page }) {
  const externalLink = [
    {
      href: 'https://github.com/workleap/ov-igloo-ui',
      icon: github,
      label: 'GitHub',
    },
    // {
    //   href: '#',
    //   icon: darkMode,
    //   label: 'Dark mode',
    // },
  ];

  let layout;
  const componentLayout = page.search(/component/) !== -1;
  if (componentLayout) {
    layout = 'component';
  } else {
    layout = page.replace('/', '');
  }

  return (
    <>
      <Head>
        <title>Igloo Design System</title>
        <link rel="icon" type="image/png" href="/igloo.svg" />
      </Head>
      <div className={cx('io-layout', layout)}>
        <Header brand={brand} links={externalLink}>
          <Nav items={nav} />
        </Header>
        <main className="io-main">{children}</main>
      </div>
    </>
  );
}
