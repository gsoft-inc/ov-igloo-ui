import Image from 'next/image';
import Link from 'next/link';

import storybook from '../svg/sb.svg';

export default function ReferenceLinks({ component, version }) {
  return (
    <div className="reference__wrapper">
      <div className="reference__version">Version {version}</div>
      <ul className="reference">
        <li className="reference__item">
          <a
            className="reference__link"
            target="_blank"
            href={`https://github.com/workleap/ov-igloo-ui/tree/main/packages/${component}`}
          >
            View source
          </a>
        </li>

        <li className="reference__item">
          <a
            className="reference__link"
            target="_blank"
            href={`https://www.npmjs.com/package/@igloo-ui/${component.toLowerCase()}`}
          >
            View on npm
          </a>
        </li>
        <li className="reference__item">
          <a
            className="reference__link"
            target="_blank"
            href={`https://github.com/workleap/ov-igloo-ui/issues/new?title=${component}`}
          >
            Report an Issue
          </a>
        </li>
        <li className="reference__item">
          <Link
            href={`/storybook/?path=/docs/components-${component.toLowerCase()}--docs`}
            className="reference__link"
            target="_blank"
          >
            <Image
              alt="storybook logo"
              width={16}
              height={16}
              src={storybook}
            />
            Storybook
          </Link>
        </li>
      </ul>
    </div>
  );
}
