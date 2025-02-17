import Alert from '@igloo-ui/icons/dist/Alert';

import Head from 'next/head';
import Title from '../../components/Title';
import Code from '../../components/Code';

import Aside from '../../components/ComponentAside';

import { COMPONENTS_SOURCE } from './[slug]';

import { generateComponentList } from '../../scripts/generate-component-list';

export default function GettingStarted(props) {
  const { components } = props;

  return (
    <>
      <Head>
        <title>Getting Started - Igloo</title>
      </Head>
      <div className="io-section io-section--grid io-section--hasAside">
        <Aside components={components} />
        <div className="io-doc io-mdx">
          <section className="io-section io-mdx__content">
            <div className="io-toc">
              <div className="io-subnav">
                <div className="io-subnav__title">Quick nav</div>
                <ol className="io-subnav__list">
                  <li className="toc-item toc-item-h2">
                    <a href="#first-component" className="toc-link toc-link-h2">
                      First Component
                    </a>
                  </li>
                  <li className="toc-item toc-item-h2">
                    <a
                      href="#project-structure"
                      className="toc-link toc-link-h2"
                    >
                      Project Structure
                    </a>
                  </li>
                </ol>
              </div>
            </div>

            <section>
              <Title as="h1" level={2}>
                Getting Started
              </Title>

              <section>
                <Title as="h2" level={3} id="first-component">
                  First Component
                </Title>

                <p>
                  <Alert size="medium" /> If you are on Windows, you need to add
                  a new flag in Git. Do this before cloning the project using
                  the following command:
                </p>
                <Code language="bash">{`git config core.protectNTFS false`}</Code>

                <section>
                  <Title as="h3" level={4}>
                    Work Flow
                  </Title>
                  <p>
                    <Alert size="medium" /> Before starting, make sure you have{' '}
                    <Code inline>node</Code> and <Code inline>yarn</Code>{' '}
                    installed.
                  </p>
                  <p>
                    After cloning{' '}
                    <a
                      href="https://github.com/workleap/ov-igloo-ui"
                      target="_blank"
                    >
                      ov-igloo-ui
                    </a>
                    , run the command <Code inline>yarn</Code> to retrieve the
                    project dependencies. Next, you can run the following
                    commands:
                  </p>
                  <ul>
                    <li>
                      <Code inline>yarn dev</Code>: builds the components and
                      launches Storybook
                    </li>

                    <li>
                      <Code inline>yarn storybook</Code>: launches Storybook
                    </li>

                    <li>
                      <Code inline>yarn test</Code>: launches the tests.
                      Alternatively, you can run the tests in watch mode with{' '}
                      <Code inline>yarn test --watch</Code>
                    </li>

                    <li>
                      <Code inline>yarn lint</Code>: validates that the JS and
                      TS correspond to the project's standards.
                    </li>

                    <li>
                      <Code inline>yarn lint:style</Code>: validates that the
                      style corresponds to the project's standards.
                    </li>
                  </ul>
                </section>

                <section>
                  <Title as="h3" level={4}>
                    Component Creation
                  </Title>
                  <p>
                    Run the command <Code inline>yarn bootstrap</Code> and
                    follow the instructions.
                  </p>
                  <p>
                    Ensure that the component name begins with{' '}
                    <Code inline>@igloo-ui/</Code>.
                  </p>
                </section>

                <section>
                  <Title as="h3" level={4}>
                    Style
                  </Title>
                  <Title as="h4" level={5}>
                    Class Names
                  </Title>
                  <p>
                    Prefix all the class names with{' '}
                    <Code inline language="scss">
                      ids-
                    </Code>
                    . This prefix prevents potential conflicts with user class
                    names.
                  </p>
                  <p>
                    Follow the{' '}
                    <a href="http://getbem.com/naming/" target="_blank">
                      BEM
                    </a>{' '}
                    naming convention for classes.
                  </p>
                  <Code language="scss">
                    {`.ids-block {}
.ids-block__element {}
.ids-block--modifier {}`}
                  </Code>
                </section>

                <section>
                  <Title as="h3" level={4}>
                    Semantic Versioning
                  </Title>
                  <p>
                    We release patch releases for bug fixes, minor releases for
                    new features and major releases for major updates that
                    require changes in library usage.
                  </p>

                  <Title as="h4" level={5}>
                    Commit Message Format
                  </Title>
                  <p>
                    Each commit message consists of a title and a body. The
                    title has a specific format that includes a type, scope and
                    subject:
                  </p>

                  <Title as="h4" level={5}>
                    Type
                  </Title>
                  <p>Must be one of the following:</p>
                  <ul>
                    <li>
                      <strong>build</strong>: Changes that affect the build
                      system or external dependencies
                    </li>
                    <li>
                      <strong>chore</strong>: Changes that don't affect the
                      logic of the code (formatting, white spaces, missing
                      semicolon, etc.)
                    </li>
                    <li>
                      <strong>ci</strong>: Modifications targeting configuration
                      files or CI scripts
                    </li>
                    <li>
                      <strong>docs</strong>: Modifications to the documentation
                    </li>
                    <li>
                      <strong>feat</strong>: For a new component or a new
                      feature
                    </li>
                    <li>
                      <strong>fix</strong>: Bug fix
                    </li>
                    <li>
                      <strong>refactor</strong>: Changes to the code base that
                      do not fix a bug or add a feature
                    </li>
                    <li>
                      <strong>test</strong>: Add missing tests or fix existing
                      ones
                    </li>
                  </ul>
                </section>
              </section>

              <section>
                <Title as="h2" level={3} id="project-structure">
                  Project Structure
                </Title>
                <section>
                  <Title as="h3" level={4}>
                    Lerna
                  </Title>
                  <p>
                    "Lerna is a tool that optimizes the workflow around managing
                    multi-package repositories with git and npm."
                  </p>
                  <p>
                    Documentation:&nbsp;
                    <a href="https://github.com/lerna/lerna" target="_blank">
                      GitHub - Lerna
                    </a>
                  </p>
                </section>

                <section>
                  <Title as="h3" level={4}>
                    Yarn Workspace
                  </Title>
                  <p>
                    It aims to make working with single repositories easier by
                    allowing multiple projects to live together and share
                    dependencies.
                  </p>
                </section>

                <section>
                  <Title as="h3" level={4}>
                    Tests
                  </Title>
                  <p>
                    Unit tests are performed with Jest. We essentially test the
                    proper functioning of the component.
                  </p>
                </section>

                <section>
                  <Title as="h3" level={4}>
                    Storybook
                  </Title>
                  <p>
                    It allows the creation of components and pages in isolation.
                    It provides us with an environment for development, testing
                    and documentation.
                  </p>
                </section>
              </section>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const components = await generateComponentList(COMPONENTS_SOURCE);
  return {
    props: {
      components,
    },
  };
};
