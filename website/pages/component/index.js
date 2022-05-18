import Head from 'next/head';
import Image from 'next/image';
import Display from '../../components/Display';
import Card from '../../components/Card';

import { COMPONENTS_SOURCE } from './[slug]';

import iconIcon from '../../svg/component.svg';
import { generateComponentList } from '../../scripts/generate-component-list';
import { getCardImage } from '../../scripts/files-utils';

export default function Components(props) {
  const { components, images } = props;

  const componentsList = components.map((component, index) => {
    const image = images.filter((image) => image[component])[0][component];
    const cardImage = require(`../../svg/components/${image}`);

    return (
      <Card
        icon={<Image src={cardImage} />}
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
      <section className="io-section io-container">
        <Display icon={iconIcon}>
          <div className="io-display__content">Components</div>
        </Display>
        <div className="io-section__content io-section__content--hub">
          {componentsList}
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const components = generateComponentList(COMPONENTS_SOURCE);
  const cardImage = await getCardImage(components);

  return {
    props: {
      components,
      images: cardImage,
    },
  };
};
