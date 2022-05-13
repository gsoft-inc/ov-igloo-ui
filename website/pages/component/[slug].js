import Head from 'next/head';
import dynamic from 'next/dynamic';
import path from 'path';
import cx from 'classnames';
import remarkGfm from 'remark-gfm';

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { getComponentAPI } from '../../../utils/generate-api.js';
import { generateComponentList } from '../../scripts/generate-component-list.js';
import { generatePagination } from '../../scripts/generate-pagination';
import { generateDoc } from '../../scripts/generate-doc';

import Title from '../../components/Title';
import Code from '../../components/Code';
import PropsTable from '../../components/PropsTable';
import Pagination from '../../components/Pagination';
import ReferenceLinks from '../../components/ReferenceLinks';

export const COMPONENTS_SOURCE = path.join(process.cwd(), '..', 'packages');

export default function DocPage(props) {
  const {
    componentProps,
    components,
    component,
    source,
    frontMatter,
    mdxCustomComponent,
  } = props;
  const { prev, next, empty } = frontMatter;

  const pkg = require(`../../../packages/${component}/package.json`);

  const mdxComponents = {
    Example: mdxCustomComponent.includes('Example')
      ? dynamic(() => import(`../../example/${component}.demo`))
      : null,
    ReferenceLinks: mdxCustomComponent.includes('ReferenceLinks')
      ? () => <ReferenceLinks component={component} version={pkg.version} />
      : null,
    h1: (props) => <Title as="h1" level={2} {...props} />,
    h2: (props) => <Title as="h2" level={4} {...props} />,
    code: (props) => {
      const isInlineCode = props.className === undefined;
      return (
        <Code inline={isInlineCode} language={props.className}>
          {props.children}
        </Code>
      );
    },
  };

  return (
    <>
      <Head>
        <title>{component} - Igloo</title>
      </Head>
      <div className="io-section io-section--grid io-section--hasAside">
        <div className="io-aside">
          <div className="io-subnav">
            <div className="io-subnav__title">Components</div>
            <ul className="io-subnav__list">
              {components.map((item, index) => (
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
                <MDXRemote {...source} components={mdxComponents} />
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

          <nav className={cx('io-pagination ', !prev && 'io-pagination--next')}>
            {prev && (
              <Pagination
                page={prev}
                link={`/component/${prev}`}
                type="preview"
              />
            )}
            {next && (
              <Pagination page={next} link={`/component/${next}`} type="next" />
            )}
          </nav>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug: component } = params;

  const components = generateComponentList(COMPONENTS_SOURCE);
  const { prev, next } = generatePagination(components, component);
  const { content, empty } = await generateDoc(component);

  const data = { prev, next, empty };
  const props = await getComponentAPI(
    path.join(process.cwd(), '..', 'packages', `${component}`, 'src')
  );

  const mdxCustomComponent = [
    /<Example/.test(content) ? 'Example' : null,
    /<ReferenceLinks/.test(content) ? 'ReferenceLinks' : null,
  ].filter(Boolean);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      componentProps: props.flat(),
      components,
      component,
      source: mdxSource,
      frontMatter: data,
      mdxCustomComponent,
    },
  };
};

export const getStaticPaths = async () => {
  const componentList = generateComponentList(COMPONENTS_SOURCE);
  const paths = componentList.map((slug) => ({ params: { slug } }));

  return {
    paths: paths,
    fallback: false,
  };
};
