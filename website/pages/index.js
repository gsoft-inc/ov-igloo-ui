import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Igloo</title>
        <link rel="icon" type="image/png" href="/igloo.svg" />
      </Head>
      <header>
        <h1>Igloo</h1>
        <p>
          Igloo gives a collection of React components for building Officevibe
        </p>
      </header>
      <main>
        <Link href="/tokens">
          <a>Tokens</a>
        </Link>
        <Link href="/tokens">
          <a>Icons</a>
        </Link>
        <Link href="/tokens">
          <a>Components</a>
        </Link>
      </main>
      <footer>
        <a href="https://officevibe.com">officevibe.com</a>
      </footer>
    </div>
  );
}
