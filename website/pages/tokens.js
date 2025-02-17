import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import Link from 'next/link';
import pkg from '@igloo-ui/tokens/package.json';
import Display from '../components/Display';
import Title from '../components/Title';
import Code from '../components/Code';
import Tag from '../components/Tag';
import TokenList from '../components/TokenList';

import iconToken from '../svg/token.svg';

export default function Tokens(props) {
  const { data, categories } = props;
  const { asPath } = useRouter();

  const [activeLink, setActiveLink] = useState();
  const [baseToken, setBaseToken] = useState('10');
  const [styleToken, setStyleToken] = useState('scss');

  const handleTokenChange = (event) => {
    setBaseToken(event.currentTarget.value);
  };

  const handleStyleChange = (event) => {
    setStyleToken(event.currentTarget.value);
  };

  useEffect(() => {
    setActiveLink(window.location.hash);
  }, [asPath]);

  const tokensList = categories.map((key) => {
    const dataType = baseToken === '10' ? 'base10' : 'default';

    const token = data[dataType].filter(
      (obj) => Object.keys(obj).toString() === key
    );
    return (
      <TokenList
        key={key}
        data={token[0][key]}
        title={key}
        options={{ base: baseToken, style: styleToken }}
      />
    );
  });

  const tokensNav = categories.map((category, index) => {
    return (
      <li className="io-subnav__item" key={index.toString()}>
        <Link
          className={cx(activeLink === `#${category}` && 'is-active')}
          href={`/tokens#${category}`}
        >
          {category}
        </Link>
      </li>
    );
  });

  return (
    <>
      <Head>
        <title>Design tokens - Igloo</title>
      </Head>
      <div className="io-section io-section--grid io-section--hasAside">
        <div className="io-aside">
          <div className="io-subnav">
            <ul className="io-subnav__list">{tokensNav}</ul>
          </div>
        </div>
        <div className="io-tokens">
          <Display icon={iconToken}>
            <div className="io-display__content">
              Tokens{' '}
              <Tag appearance="ghost" className="io-display__tag">
                v{pkg.version}
              </Tag>
            </div>
          </Display>
          <Title level={2} as="h2">
            Getting started
          </Title>
          <p>
            To install <Code inline>@igloo-ui/tokens</Code> in your project, you
            will need to run the following command using{' '}
            <a
              href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
              target="_blank"
            >
              npm:
            </a>
          </p>
          <Code language="bash">{`npm install @igloo-ui/tokens`}</Code>
          <p>If you prefer Yarn, </p>
          <Code language="bash">{`yarn add @igloo-ui/tokens`}</Code>
          <Title level={3} as="h3">
            Usage
          </Title>
          <p>In Sass, you can import the files by doing:</p>
          <Code language="jsx">
            {`// CSS${'\n'}@import '@igloo-ui/tokens/dist/variables.css';${'\n'}// SCSS${'\n'}@import '@igloo-ui/tokens/dist/_variables.scss';${'\n'}`}
          </Code>
          <Title level={3} as="h3">
            Fonts
          </Title>
          <p>
            To use the fonts it is important to import them into the global{' '}
            <Code inline>.css</Code> file of your application:
          </p>
          <Code language="jsx">
            {`// Fonts${'\n'}@import '@igloo-ui/tokens/dist/fonts.css';`}
          </Code>
          <Title level={3} as="h3">
            Base 10 support
          </Title>
          <p>
            If your project uses the mathematical trick of basing the value of{' '}
            <Code inline>1rem</Code> equals <Code inline>10px</Code>, there is
            also an <strong>base10</strong> output within the dist folder of
            this package.
          </p>
          <p>In CSS, you can import the files by doing:</p>
          <Code>@import '~@igloo-ui/tokens/dist/base10/variables.css';</Code>

          <div className="io-tokens__list">
            <div className="io-options io-options--large">
              <Title level={4} as="h3" className="io-options__title">
                Options
              </Title>
              <select
                className="io-select"
                value={styleToken}
                onChange={handleStyleChange}
              >
                <option selected value="scss">
                  scss
                </option>
                <option value="css">css</option>
              </select>
              <select
                className="io-select"
                value={baseToken}
                onChange={handleTokenChange}
              >
                <option selected value="10">
                  base 10
                </option>
                <option value="16">base 16</option>
              </select>
            </div>
            {tokensList}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fetcher = (path) =>
    fetch(
      `https://raw.githubusercontent.com/workleap/ov-igloo-tokens/main${path}`
    ).then((res) => res.json());

  const tokens = await fetcher('/docs/tokens.json');
  const tokensBase10 = await fetcher('/docs/base10/tokens.json');

  const categories = tokens.map((obj) => Object.keys(obj)).flat(1);

  if (!tokens || !tokensBase10) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: { default: tokens, base10: tokensBase10 }, categories }, // will be passed to the page component as props
  };
}
