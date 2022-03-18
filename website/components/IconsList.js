import * as Icon from '@igloo-ui/icons/iconsList';

export default function IconsList({
  options,
  list,
  size,
  search,
  emptyResult,
}) {
  const searching = search.length > 0;

  const Item = ({ index, name, size }) => {
    const IconComponent = Icon[name];
    return (
      <div key={index.toString()} className="io-icon">
        <div className="io-icon__content">
          <div className="io-icon__svg">
            <IconComponent size={size} />
          </div>
          <div className="io-icon__name" title={name}>
            {name}
          </div>
        </div>
      </div>
    );
  };

  const listItems = list.map((icon, index) => {
    return <Item index={index} name={icon} size={size} />;
  });

  const searchItems = search.map((icon, index) => {
    const { item: name } = icon;
    return <Item index={index} name={name} size={size} />;
  });

  return (
    <section className="io-section io-section--icons">
      {options}
      {emptyResult ? (
        emptyResult
      ) : (
        <div className="io-section__content io-section__content--icon">
          {searching ? searchItems : listItems}
        </div>
      )}
    </section>
  );
}
