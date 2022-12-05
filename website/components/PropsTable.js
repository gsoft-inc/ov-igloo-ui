import React from 'react';
import cx from 'classnames';

import Title from './Title';
import Code from './Code';

export default function PropsTable({ data, showTitle }) {
  const { displayName, props } = data;

  const rewriteDisplayName = (name) => {
    if (name === 'ButtonGroupItem') {
      return 'ButtonItem';
    }

    return name;
  };

  const getReadableType = (type) => {
    switch (type.name) {
      case 'enum':
        return type.value.map(({ value }) => value).join(' | ');
      case 'union':
        return type.value
          .map((subType) => getReadableType(subType))
          .join(' | ');
      case 'custom':
        return type.raw;
      default:
        return type.name;
    }
  };

  const column = ['Prop', 'Type', 'Default', 'Description'];

  return (
    <div className="io-table__wrapper">
      {showTitle && (
        <Title as="h3" level={4}>
          {rewriteDisplayName(displayName)}
        </Title>
      )}
      <table className="io-table io-table--api">
        <thead>
          <tr>
            {column.map((item) => (
              <th
                className={cx(
                  'io-table__cell',
                  item === 'Default' && 'is-hidden'
                )}
                key={item}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(props).map((prop) => {
            const { defaultValue, type, description, required } = props[prop];

            return (
              <tr key={prop}>
                <td className="io-table__cell io-table__cell--prop">
                  <Code inline> {prop}</Code>
                  {required && <span className="io-required" />}
                </td>
                <td className="io-table__cell io-table__cell--mono">
                  {getReadableType(type)}
                </td>
                <td className="io-table__cell is-hidden">
                  {defaultValue === null && '-'}
                </td>
                <td className="io-table__cell">{description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
