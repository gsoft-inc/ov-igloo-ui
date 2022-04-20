import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { docsFilePaths } from '../../utils/mdxUtils';

export default function DocPage(props) {
  const { slug, source, frontMatter } = props;

  const component = frontMatter.title;

  return (
    <>
      <Head>
        <title>{component} - Igloo</title>
      </Head>
      <section className="io-section io-section--tight io-container">
        <h1 className="io-h1">{component}</h1>
        {frontMatter.description && <p>{frontMatter.description}</p>}
        <div>
          <MDXRemote {...source} />
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const docFilePath = path.join(process.cwd(), 'docs/files', `${slug}.mdx`);
  const source = fs.readFileSync(docFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
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
