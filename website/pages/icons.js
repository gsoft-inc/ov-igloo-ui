import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';

import * as Icon from '@igloo-ui/icons/iconsList';
import pkg from '@igloo-ui/icons/package.json';

import Display from '../components/Display';
import Title from '../components/Title';
import Code from '../components/Code';
import Tag from '../components/Tag';
import IconsList from '../components/IconsList';
import IconsOptions from '../components/IconsOptions';

import iconIcon from '../svg/icon.svg';

const defaultSize = 'medium';
const defaultSearch = '';

export default function Icons() {
  const router = useRouter();
  const { search, size } = router.query;

  const [sizeSelector, setSizeSelector] = useState(defaultSize);
  const [searchBar, setSearchBar] = useState(defaultSearch);

  useEffect(() => {
    let iconSize;
    switch (sizeSelector) {
      case 'small':
        iconSize = '16px';
        break;

      case 'medium':
        iconSize = '24px';
        break;

      case 'large':
        iconSize = '32px';
        break;
    }
    document.body.style.setProperty('--icon-size', iconSize);
  }, [sizeSelector]);

  useEffect(() => {
    setSearchBar(search ? `${search}` : defaultSearch);

    switch (size) {
      case 'small':
      case 'medium':
      case 'large':
        setSizeSelector(`${size}`);
        break;
      default:
        setSizeSelector(defaultSize);
    }
  }, [search, size]);

  function handleSizeChange(event) {
    setSizeSelector(event.currentTarget.value);
  }

  function handleSearchChange(event) {
    setSearchBar(event.currentTarget.value);
  }

  const options = {
    includeScore: true,
    threshold: 0.2,
  };
  const list = Icon.iconName;
  const fuse = new Fuse(list, options);
  const results = fuse.search(searchBar);
  const emptyResult = results.length === 0 && searchBar !== '';

  const EmptyResult = () => {
    return (
      <div className="io-empty">
        <Title level={3} as="h4">
          No results for "{searchBar}"
        </Title>
        <p>
          Not finding an icon that you want?{' '}
          <a
            href="https://github.com/workleap/ov-igloo-icons/issues/new"
            target="_blank"
          >
            File an issue
          </a>{' '}
          and suggest a new icon.
        </p>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Icons - Igloo</title>
      </Head>
      <section className="io-section io-section--tight io-container">
        <Display icon={iconIcon}>
          <div className="io-display__content">
            Icons{' '}
            <Tag appearance="ghost" className="io-display__tag">
              v{pkg.version}
            </Tag>
          </div>
        </Display>
        <Title level={2} as="h2">
          Getting started
        </Title>
        <p>
          To install <Code inline>@igloo-ui/icons</Code> in your project, you
          will need to run the following command using{' '}
          <a href="https://npmjs.org" target="_blank">
            npm:
          </a>
        </p>
        <Code language="bash">{`npm install @igloo-ui/icons`}</Code>
        <p>If you prefer Yarn, </p>
        <Code language="bash">{`yarn add @igloo-ui/icons`}</Code>
        <Title level={3} as="h3">
          Usage
        </Title>
        <p>
          This package support the following sizes: <Code inline>16</Code>,{' '}
          <Code inline>24</Code>, and <Code inline>32</Code> pixels. You can
          import an icon component into your project by referring to its name:
        </p>
        <Code language="jsx">
          {`import Alert from '@igloo-ui/icons/dist/Alert';${'\n'}<Alert size="small" /> // 16px${'\n'}<Alert size="medium" /> // 24px${'\n'}<Alert size="large" /> // 32px`}
        </Code>
      </section>
      <IconsList
        list={list}
        size={sizeSelector}
        search={results}
        emptyResult={emptyResult ? <EmptyResult /> : null}
        options={
          <IconsOptions
            search={searchBar}
            searchOnChange={handleSearchChange}
            sizeOnChange={handleSizeChange}
            size={sizeSelector}
          />
        }
      />
    </>
  );
}
