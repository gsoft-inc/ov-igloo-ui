import { link } from '../navigation';

export default function Aside({ components }) {
  return (
    <div className="io-aside">
      <div className="io-subnav">
        <ul className="io-subnav__list io-subnav__getting-started-list">
          <li className="io-subnav__item">
            <a href={link.GETTING_STARTED}>Getting Started</a>
          </li>
        </ul>

        <div className="io-subnav__title">Components</div>
        <ul className="io-subnav__list">
          {components.map((item, index) => (
            <li className="io-subnav__item" key={index.toString()}>
              <a href={`/component/${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
