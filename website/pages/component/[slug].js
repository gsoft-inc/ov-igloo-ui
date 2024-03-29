import Head from 'next/head';
import dynamic from 'next/dynamic';
import path from 'path';
import cx from 'classnames';
import remarkGfm from 'remark-gfm';
import rehypeToc from 'rehype-toc';
import rehypeSlug from 'rehype-slug';
import sectionize from 'remark-sectionize';

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { generateComponentList } from '../../scripts/generate-component-list.mjs';
import { generatePagination } from '../../scripts/generate-pagination';
import { generateDoc } from '../../scripts/generate-doc';

import Title from '../../components/Title';
import Code from '../../components/Code';
import Aside from '../../components/ComponentAside';
import PropsTable from '../../components/PropsTable';
import Pagination from '../../components/Pagination';
import ReferenceLinks from '../../components/ReferenceLinks';
import Toc from '../../components/Toc';

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
    nav: (props) => {
      return <Toc {...props} />;
    },
    Example: mdxCustomComponent.includes('Example')
      ? dynamic(() => import(`../../example/${component}.demo`))
      : null,
    ReferenceLinks: mdxCustomComponent.includes('ReferenceLinks')
      ? () => <ReferenceLinks component={component} version={pkg.version} />
      : null,
    h1: (props) => <Title id="test" as="h1" level={2} {...props} />,
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
        <Aside components={components} />
        <div className="io-doc io-mdx">
          <section className="io-section io-mdx__content">
            {empty ? (
              <div>There are no documentation to show</div>
            ) : (
              <>
                <MDXRemote {...source} components={mdxComponents} />
                {/*API title is created by generateDoc()*/}
                {componentProps.map((data, i) => (
                  <PropsTable
                    data={data}
                    key={i.toString()}
                    showTitle={componentProps.length > 1}
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

  const componentList = await generateComponentList(COMPONENTS_SOURCE);

  const { prev, next } = generatePagination(componentList, component);
  const { content, empty } = await generateDoc(component);

  const data = { prev, next, empty };

  const mdxCustomComponent = [
    /<Example/.test(content) ? 'Example' : null,
    /<ReferenceLinks/.test(content) ? 'ReferenceLinks' : null,
  ].filter(Boolean);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, sectionize],
      rehypePlugins: [rehypeSlug, rehypeToc],
    },
    scope: data,
  });

  const props = require(`../../data/components/${component}.json`);
  const componentProps = props.flat();

  return {
    props: {
      componentProps,
      components: componentList,
      component,
      source: mdxSource,
      frontMatter: data,
      mdxCustomComponent,
    },
  };
};

export const getStaticPaths = async () => {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  const componentList = await generateComponentList(COMPONENTS_SOURCE);
  const paths = componentList.map((slug) => ({ params: { slug } }));

  return {
    paths: paths,
    fallback: false,
  };
};
