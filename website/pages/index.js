import Image from 'next/image';

import { link } from '../navigation';
import Card from '../components/Card';
import Title from '../components/Title';

import iconToken from '../svg/token.svg';
import iconIcon from '../svg/icon.svg';
import iconComponent from '../svg/component.svg';
import slack from '../svg/slack.svg';
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
        <Title level={3} as="h2">
          Resources
        </Title>

        <div className="io-section__content">
          <Card
            className="io-card--tokens"
            icon={<Image layout="fixed" src={iconToken} />}
            title="Tokens"
            description="Are visual values that construct the foundational pieces of our products"
            link={link.TOKENS}
          />
          <Card
            className="io-card--icons"
            icon={<Image layout="fixed" src={iconIcon} />}
            title="Icons"
            description="Help assist users in finding certain actions on a page"
            link={link.ICONS}
          />
          <Card
            className="io-card--components"
            icon={<Image layout="fixed" src={iconComponent} />}
            title="Components"
            description="A set of React components for building the interfaces of our products"
            link={link.COMPONENTS}
          />
        </div>
      </section>
      <section className="io-section">
        <div className="io-contact">
          <Card
            icon={<Image src={slack} />}
            title="Be part of the journey"
            description="Join our Slack community to shape the future of Igloo."
            link="https://gsoft.slack.com/archives/C0225DYUSH1"
            inline
          />
          <Card
            icon={<Image src={issue} />}
            title="Report a Issue"
            description="Submit comments or feature requests to grow Igloo"
            link="https://github.com/gsoft-inc/ov-igloo-ui/issues/new"
            inline
          />
        </div>
      </section>
    </>
  );
}
