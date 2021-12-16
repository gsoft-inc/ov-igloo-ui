import pkg from '@igloo-ui/tokens/package.json';
import Display from '../components/Display';
import Title from '../components/Title';
import Code from '../components/Code';
import Tag from '../components/Tag';
import TokenList from '../components/TokenList';

import iconToken from '../svg/token.svg';

export default function Tokens(props) {
  const { data, categories } = props;

  const tokensList = categories.map((key) => {
    const token = data.filter((obj) => Object.keys(obj).toString() === key);
    return <TokenList key={key} data={token[0][key]} title={key} />;
  });

  const tokensNav = categories.map((category) => {
    return (
      <li>
        <a href={`#${category}`}>{category}</a>
      </li>
    );
  });

  return (
    <>
      <div className="io-section io-section--grid io-section--hasAside">
        <div className="io-aside">
          <ul className="io-subnav">{tokensNav}</ul>
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
            <a href="npmjs.org" target="_blank">
              npm:
            </a>
          </p>
          <Code language="bash">{`npm install @igloo-ui/icons`}</Code>
          <p>If you prefer Yarn, </p>
          <Code language="bash">{`yarn add @igloo-ui/icons`}</Code>
          <Title level={3} as="h3">
            Usage
          </Title>
          <p>In Sass, you can import the files by doing:</p>
          <Code language="jsx">
            {`// Fonts${'\n'}@import '@igloo-ui/tokens/dist/_fonts.scss';${'\n'}// SCSS${'\n'}@import '@igloo-ui/tokens/dist/_variables.scss';${'\n'}// CSS${'\n'}@import '@igloo-ui/tokens/dist/_colors.scss';${'\n'}`}
          </Code>
          <div className="io-tokens__list">{tokensList}</div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://raw.githubusercontent.com/gsoft-inc/ov-igloo-tokens/main/docs/base10/tokens.json'
  );
  const data = await res.json();
  const categories = data.map((obj) => Object.keys(obj)).flat(1);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, categories }, // will be passed to the page component as props
  };
}
