import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { docsFilePaths } from '../../utils/mdxUtils';

import Button from '../../../packages/Button';

const components = { Button };

export default function DocPage(props) {
  const { slug, source, frontMatter, navItems } = props;
  const component = frontMatter.title;

  return (
    <>
      <Head>
        <title>{component} - Igloo</title>
      </Head>
      <ul>
        {navItems.map((item, index) => (
          <li key={index.toString()}>
            <a href={`/component/${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <section className="io-section io-section--tight io-container">
        <h1 className="io-h1">{component}</h1>
        {frontMatter.description && <p>{frontMatter.description}</p>}
        <div>
          <MDXRemote {...source} components={components} />
        </div>
      </section>
      <section className="io-section io-section--tight io-container">
        <h2 className="io-h2">Satisfaction</h2>
        <div>⭐️⭐️⭐️⭐️⭐️</div>
      </section>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const componentList = require('../../data/components.json');
  const docFilePath = path.join(process.cwd(), 'data/', `${slug}.mdx`);

  // let mdxSource = '';
  // if (fs.existsSync(docFilePath)) {
  const source = fs.readFileSync(docFilePath);
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  });
  // }

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      navItems: componentList,
      slug: params.slug,
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
