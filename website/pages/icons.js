import { useEffect, useState } from 'react';
import * as Icon from '@igloo-ui/icons/iconsList';
import pkg from '@igloo-ui/icons/package.json';
import Display from '../components/Display';
import Title from '../components/Title';
import Code from '../components/Code';
import Tag from '../components/Tag';

import iconIcon from '../svg/icon.svg';

export default function Icons() {
  const [size, setSize] = useState('medium');

  function handleSizeChange(event) {
    setSize(event.currentTarget.value);
  }

  useEffect(() => {
    let iconSize;
    switch (size) {
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
  }, [size]);

  const list = Icon.iconName;

  const IconsList = ({ size }) => {
    return list.map((icon, index) => {
      const IconComponent = Icon[icon];
      return (
        <div key={index.toString()} className="io-icon">
          <div className="io-icon__content">
            <div className="io-icon__svg">
              <IconComponent size={size} />
            </div>
            <div className="io-icon__name" title={icon}>
              {icon}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
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
        <p>
          This package support the following sizes: <Code inline>16</Code>,{' '}
          <Code inline>24</Code>, and <Code inline>32</Code> pixels. You can
          import an icon component into your project by referring to its name:
        </p>
        <Code language="jsx">
          {`import Alert from '@igloo-ui/icons/dist/Alert';${'\n'}<Alert size="small" /> // 16px${'\n'}<Alert size="medium" /> // 24px${'\n'}<Alert size="large" /> // 32px`}
        </Code>
      </section>
      <section className="io-section">
        <div className="io-options">
          Choose a size:
          <label htmlFor="16">
            <input
              onChange={handleSizeChange}
              type="radio"
              id="16"
              value="small"
              name="size"
              checked={size === 'small'}
            />
            16px
          </label>
          <label htmlFor="24">
            <input
              onChange={handleSizeChange}
              type="radio"
              id="24"
              value="medium"
              name="size"
              checked={size === 'medium'}
            />
            24px
          </label>
          <label htmlFor="32">
            <input
              onChange={handleSizeChange}
              type="radio"
              id="32"
              value="large"
              name="size"
              checked={size === 'large'}
            />
            32px
          </label>
        </div>
        <div className="io-section__content io-section__content--icon">
          <IconsList size={size} />
        </div>
      </section>
    </>
  );
}
