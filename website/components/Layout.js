import Head from 'next/head';
import Header from './Header';
import Nav from './Nav';
import { nav } from '../navigation';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Igloo Design System</title>
        <link rel="icon" type="image/png" href="/igloo.svg" />
      </Head>
      <div className="io-layout">
        <Header>
          <Nav items={nav} />
        </Header>
        <main>{children}</main>
      </div>
    </>
  );
}
