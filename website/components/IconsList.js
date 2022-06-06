import { useRouter } from 'next/router';
import * as Icon from '@igloo-ui/icons/iconsList';
import Link from '@igloo-ui/icons/dist/Link';

import ClipboardCopy from './ClipboardCopy';

export default function IconsList({
  options,
  list,
  size,
  search,
  emptyResult,
}) {
  const searching = search.length > 0;
  const router = useRouter();

  function generateCodeSnippet(name, size) {
    return `import ${name} from '@igloo-ui/icons/dist/${name}';${'\n'}<${name} size="${size}" />`;
  }

  function generateShareLink(name, size) {
    const basePath =
      typeof window !== 'undefined'
        ? location.protocol + '//' + location.host
        : router.basePath;
    const pathname = router.pathname;

    return `${basePath}${pathname}?search=%3D${name}&size=${size}`;
  }

  function setSearch(name, size) {
    router.push(`?search=%3D${name}&size=${size}`, undefined, {
      shallow: true,
    });
  }

  const Item = ({ index, name, size }) => {
    const IconComponent = Icon[name];
    return (
      <div key={index.toString()} className="io-icon">
        <div className="io-icon__content">
          <div
            className="io-icon__svg"
            onClick={() => {
              setSearch(name, size);
            }}
          >
            <IconComponent size={size} />
          </div>
          <div className="io-icon__name" title={name}>
            {name}
          </div>
          <ClipboardCopy
            className="io-highlighter__action-left"
            textToCopy={generateShareLink(name, size)}
            icon={<Link />}
            left
          />
          <ClipboardCopy
            className="io-highlighter__action"
            textToCopy={generateCodeSnippet(name, size)}
          />
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
