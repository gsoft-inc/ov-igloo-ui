import Tag from '../components/Tag';

export default function RoadMap({ data }) {
  const listItems = data.map((item, index) => {
    if (item.length < 2) {
      return;
    }

    const [component, tag] = item;

    let appearance;
    switch (tag) {
      case 'beta':
        appearance = 'beta';
        break;
      case 'ready':
        appearance = 'ready';
        break;

      default:
        appearance - undefined;
        break;
    }

    return (
      <li key={index.toString()} className="io-list__item">
        {component} <Tag appearance={appearance}>{tag}</Tag>
      </li>
    );
  });

  return <ul className="io-list">{listItems}</ul>;
}
