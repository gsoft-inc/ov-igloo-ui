import Image from 'next/image';

import { link } from '../navigation';
import Card from '../components/Card';
import Title from '../components/Title';

import iconToken from '../svg/token.svg';
import iconIcon from '../svg/icon.svg';
import iconComponent from '../svg/component.svg';
import Note from '@igloo-ui/icons/dist/Note';
import issue from '../svg/issue.svg';

export default function Home() {
  return (
    <>
      <div className="io-hero">
        <Title className="io-hero__title" as="h1" level={1}>
          Igloo helps us create a great experience for Officevibe
        </Title>
      </div>
      <section className="io-section">
        <Title className="io-section__title" level={3} as="h2">
          Resources
        </Title>

        <div className="io-section__content">
          <Card
            className="io-card--tokens"
            icon={<Image alt="icon for tokens" src={iconToken} />}
            title="Tokens"
            description="Are visual values that construct the foundational pieces of our products"
            link={link.TOKENS}
          />
          <Card
            className="io-card--icons"
            icon={<Image alt="icon for icons section" src={iconIcon} />}
            title="Icons"
            description="Help assist users in finding certain actions on a page"
            link={link.ICONS}
          />
          <Card
            className="io-card--components"
            icon={<Image alt="icon for components" src={iconComponent} />}
            title="Components"
            description="A set of React components for building the interfaces of our products"
            link={link.COMPONENTS}
          />
        </div>
      </section>

      <section className="io-section">
        <div className="io-contribute">
          <Card
            icon={<Note size="large" />}
            title="Getting started"
            description="If you want to participate in the development of Igloo, here is a guide to get started "
            link={link.GETTING_STARTED}
            inline
          />
          <Card
            icon={<Image src={issue} />}
            title="Report an Issue"
            description="Submit comments or feature requests to grow Igloo"
            link="https://github.com/workleap/ov-igloo-ui/issues/new/choose"
            inline
          />
        </div>
      </section>
    </>
  );
}
