import Head from 'next/head';
import Display from '../../components/Display';
import Card from '../../components/Card';

import { COMPONENTS_SOURCE } from './[slug]';

import iconIcon from '../../svg/component.svg';
import { generateComponentList } from '../../scripts/generate-component-list';

export default function Components(props) {
  const { components } = props;
  const componentsList = components.map((component, index) => {
    return (
      <Card
        key={index.toString()}
        component
        title={component}
        link={`/component/${component}`}
      />
    );
  });
  return (
    <>
      <Head>
        <title>Components - Igloo</title>
      </Head>
      <section className="io-section io-section--tight io-container">
        <Display icon={iconIcon}>
          <div className="io-display__content">Components</div>
        </Display>
        <div className="io-section__content">{componentsList}</div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const components = generateComponentList(COMPONENTS_SOURCE);
  return {
    props: {
      components,
    },
  };
};
