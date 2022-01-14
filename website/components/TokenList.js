import cx from 'classnames';

import Title from './Title';
import Code from './Code';

export default function Table({ data, title, options }) {
  const renderTableBody = data.map((token, index) => {
    const property = Object.keys(token);
    const value = token[property];

    const { base, style } = options;

    let preview = {};
    const size = base === '10' ? `${parseFloat(value) / 1.6}rem` : value;

    switch (title) {
      case 'color':
        preview = {
          style: { backgroundColor: value },
          className: 'io-preview--color',
        };
        break;
      case 'fontFamily':
        preview = {
          style: { fontFamily: value },
          className: 'io-preview--fonts',
        };
        break;
      case 'fontWeight':
        preview = {
          style: { fontWeight: value },
          className: 'io-preview--fonts',
        };
        break;
      case 'fontSize':
        preview = {
          style: { fontSize: size },
          className: 'io-preview--fonts',
        };
        break;
      case 'lineHeight':
        preview = {
          style: { lineHeight: size },
          className: 'io-preview--fonts io-preview--lineHeight',
        };
        break;
      case 'mediaQuery':
      case 'zIndex':
        preview = {
          style: {},
          className: 'io-preview--empty',
        };
        break;
      case 'borderRadius':
        preview = {
          style: { borderRadius: value },
          className: 'io-preview--border',
        };
        break;
      case 'shadow':
      case 'focus':
        preview = {
          style: { boxShadow: value },
          className: 'io-preview--shadow',
        };
        break;
      case 'spacing':
        preview = {
          style: { width: size },
          className: 'io-preview--space',
        };
        break;
    }

    return (
      <tr key={index.toString()}>
        <td>
          <Code inline light copy>
            {style === 'scss' ? `$${property}` : `--${property}`}
          </Code>
        </td>
        <td>{value}</td>
        <td>
          <div
            style={preview.style}
            className={cx(
              'io-tokens__preview',
              'io-preview',
              preview.className
            )}
          >
            <span className="io-preview__text">Aa</span>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div id={title} className="io-tokens__header">
        <Title level={2} as="h2">
          {title}
        </Title>
      </div>
      <table className="io-tokens__table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </>
  );
}
