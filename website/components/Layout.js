import Head from 'next/head';

import Header from './Header';
import Nav from './Nav';
import { nav } from '../navigation';

import brand from '../svg/brand.svg';
import github from '../svg/github.svg';
import slack from '../svg/slack-monochrome.svg';
import darkMode from '../svg/dark-mode.svg';

export default function Layout({ children }) {
  const externalLink = [
    {
      href: 'https://github.com/gsoft-inc/ov-igloo-ui',
      icon: github,
      label: 'GitHub',
    },
    {
      href: 'https://github.com/gsoft-inc/ov-igloo-ui',
      icon: slack,
      label: 'Slack',
    },
    {
      href: '#',
      icon: darkMode,
      label: 'Dark mode',
    },
  ];

  return (
    <>
      <Head>
        <title>Igloo Design System</title>
        <link rel="icon" type="image/png" href="/igloo.svg" />
      </Head>
      <div className="io-layout">
        <Header brand={brand} links={externalLink}>
          <Nav items={nav} />
        </Header>
        <main className="io-main">{children}</main>
      </div>
    </>
  );
}
