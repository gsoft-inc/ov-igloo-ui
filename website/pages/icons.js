import * as Icon from '@igloo-ui/icons/iconsList';
import pkg from '@igloo-ui/icons/package.json';
import Display from '../components/Display';
import Title from '../components/Title';
import Code from '../components/Code';

import iconIcon from '../svg/icon.svg';

export default function Icons() {
  const list = Icon.iconName;

  const IconsList = () => {
    return list.map((icon, index) => {
      const IconComponent = Icon[icon];
      return (
        <div key={index.toString()} className="io-icon">
          <div className="io-icon__content">
            <div className="io-icon__svg">
              <IconComponent size="medium" />
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
      <section className="io-section io-section--tight">
        <Display icon={iconIcon}>
          <div className="io-display__content">
            Icons <span className="io-tag io-display__tag">v{pkg.version}</span>
          </div>
        </Display>
        <Title level={2} as="h2">
          Getting started
        </Title>
        <p>
          To install @igloo-ui/icons in your project, you will need to run the
          following command using{' '}
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
          This package support the following sizes: 16, 24, and 32 pixels. You
          can import an icon component into your project by referring to its
          name:
        </p>
        <Code language="jsx">
          {`import Alert from '@igloo-ui/icons/dist/Alert';${'\n'}<Alert size="small" /> // 16px${'\n'}<Alert size="medium" /> // 24px${'\n'}<Alert size="large" /> // 32px`}
        </Code>
      </section>
      <section className="io-section">
        <div className="io-section__content io-section__content--icon">
          <IconsList />
        </div>
      </section>
    </>
  );
}
