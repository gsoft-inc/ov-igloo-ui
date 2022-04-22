import Image from 'next/image';

import Card from '../components/Card.js';
import iconToken from '../svg/token.svg';
import ClipboardCopy from '../components/ClipboardCopy';
import Code from '../components/Code';
import Display from '../components/Display';
import Highlighter from '../components/Highlighter';
import Tag from '../components/Tag';
import Title from '../components/Title';

export default function Playroom() {
  return (
    <>
      <h1>Playroom</h1>
      <section>
        <h2>Cards</h2>
        <p>Default</p>
        <Card
          title="card title"
          description="description comme here"
          icon={<Image layout="fixed" src={iconToken} />}
          link="https://www.google.com"
        />
        <p>inline</p>
        <Card
          title="card title"
          description="description comme here"
          inline
          link="https://www.google.com"
        />
      </section>

      <section>
        <h2>ClipboardCopy</h2>
        <p>default</p>
        <ClipboardCopy textToCopy="https://www.google.com" />
        <p>dark</p>
        <div style={{ backgroundColor: '#000', padding: '1rem' }}>
          <ClipboardCopy dark textToCopy="https://www.google.com" />
        </div>
      </section>
      <section>
        <h2>Code</h2>
        <p>default</p>
        <Code>yarn add @igloo-ui/button</Code>
        <p>light</p>
        <Code light>yarn add @igloo-ui/button</Code>
        <p>inline</p>
        <Code inline>yarn add @igloo-ui/button</Code>
      </section>
      <section>
        <h2>Display</h2>
        <Display icon={iconToken}>Tokens</Display>
      </section>
      <section>
        <h2>Highlighter</h2>
        <Highlighter>Utiliser par le composant Code </Highlighter>
      </section>
      <section>
        <h2>Tag</h2>
        <Tag>Default</Tag>
        <Tag appearance="ready">Ready</Tag>
        <Tag appearance="beta">Beta</Tag>
        <Tag appearance="ghost">Ghost</Tag>
      </section>
      <section>
        <h2>Title</h2>
        <Title>Default</Title>
        <Title level="2">level 2</Title>
        <Title level="3">level 3</Title>
      </section>
    </>
  );
}
