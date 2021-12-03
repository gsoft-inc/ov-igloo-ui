import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Nav, { navigation } from '../components/Nav';
import Card from '../components/Card';
import Title from '../components/Title';
import RoadMap from '../components/Roadmap';

import brand from '../svg/brand.svg';
import iconToken from '../svg/token.svg';
import iconIcon from '../svg/icon.svg';
import iconComponent from '../svg/component.svg';
import slack from '../svg/slack.svg';
import issue from '../svg/issue.svg';

import roadMap from '../roadmap.json';

export default function Home() {
  return (
    <div className="io-layout">
      <Head>
        <title>Igloo Design System</title>
        <link rel="icon" type="image/png" href="/igloo.svg" />
      </Head>
      <header className="io-header">
        <Link href="/">
          <a className="io-link-icon" href="/">
            <Image src={brand} />
          </a>
        </Link>
        <Nav />
      </header>
      <main>
        <div className="io-hero">
          <Title className="io-hero__title" as="h1" level={1}>
            Igloo helps us to create a great experience for Officevibe
          </Title>
        </div>
        <section className="io-section">
          <Title level={2} as="h2">
            Resources
          </Title>

          <div className="io-section__content">
            <Card
              icon={<Image src={iconToken} />}
              title="Tokens"
              description="Are visual values that construct the foundational pieces of our products"
              link={navigation.TOKENS}
              featureFlag
            />
            <Card
              icon={<Image src={iconIcon} />}
              title="Icons"
              description="Help assist users in finding certain actions on a page"
              link={navigation.ICONS}
              featureFlag
            />
            <Card
              icon={<Image src={iconComponent} />}
              title="Components"
              description="A set of React components for building the interfaces of our products"
              link={navigation.COMPONENTS}
            />
          </div>
        </section>
        <section className="io-section io-section--grid">
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
          <div className="io-roadMap">
            <Title as="h3" level={3}>
              Coming next
            </Title>
            <RoadMap data={roadMap} />
          </div>
        </section>
      </main>
    </div>
  );
}
