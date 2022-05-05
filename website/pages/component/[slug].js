import Head from 'next/head';
import dynamic from 'next/dynamic';
import path from 'path';

import remarkGfm from 'remark-gfm';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { getComponentAPI } from '../../../utils/generate-api.js';
import { docsFilePaths } from '../../scripts/mdx-utils';
import { generatePagination } from '../../scripts/generate-pagination';
import { generateDoc } from '../../scripts/generate-doc';

import Title from '../../components/Title';
import Code from '../../components/Code';
import PropsTable from '../../components/PropsTable';
import Pagination from '../../components/Pagination';

export default function DocPage(props) {
  const { source, frontMatter, navItems, componentProps } = props;
  const { title, prev, next, empty } = frontMatter;

  // TODO: intégrer la version mobile.
  // TODO: automatiser l'import des exemples'
  const components = {
    ButtonDemo: dynamic(() =>
      import('../../../packages/Button/example/Button.demo.jsx')
    ),
    h1: (props) => <Title as="h1" level={2} {...props} />,
    h2: (props) => <Title as="h2" level={4} {...props} />,
    code: (props) => <Code language="jsx">{props.children}</Code>,
  };

  return (
    <>
      <Head>
        <title>{title} - Igloo</title>
      </Head>
      <div className="io-section io-section--grid io-section--hasAside">
        <div className="io-aside">
          <div className="io-subnav">
            <div className="io-subnav__title">Components</div>
            <ul className="io-subnav__list">
              {navItems.map((item, index) => (
                <li className="io-subnav__item" key={index.toString()}>
                  <a href={`/component/${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="io-doc io-mdx">
          <section className="io-section io-mdx__content">
            {empty ? (
              <div>There are no documentation to show</div>
            ) : (
              <>
                <MDXRemote {...source} components={components} />
                <Title as="h2" level={4}>
                  API
                </Title>
                {componentProps.map((data, i) => (
                  <PropsTable
                    data={data}
                    key={i.toString()}
                    showTitle={i > 0}
                  />
                ))}
              </>
            )}
          </section>

          <nav className="io-pagination">
            <Pagination
              page={prev}
              link={`/component/${prev}`}
              type="preview"
            />
            <Pagination page={next} link={`/component/${next}`} type="next" />
          </nav>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug: component } = params;

  const componentList = require('../../data/components.json');
  const { prev, next } = generatePagination(componentList, component);
  const { content, empty } = await generateDoc(component);
  const data = { title: component, prev, next, empty };

  const componentFiles = path.join(
    process.cwd(),
    '..',
    'packages',
    `${component}`,
    'src'
  );
  const props = await getComponentAPI(componentFiles);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  });

  /**
   * mdxSource = {
   *   compiledSource: '...',
   *   frontMatter: {}
   *   scope: {title: '...', preview: '...', next: '...'}
   * }
   */

  const componentSource = path.join(
    process.cwd(),
    '..',
    'packages',
    component,
    'src'
  );

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      navItems: componentList,
      slug: component,
      componentProps: props.flat(),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = docsFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths: paths,
    fallback: false,
  };
};
