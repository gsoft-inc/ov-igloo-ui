import React from 'react';
import Title from './Title';

export default function PropsTable({ data, showTitle }) {
  const { displayName, props } = data;

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
    <div>
      {showTitle && (
        <Title as="h3" level={4}>
          {displayName}
        </Title>
      )}
      <table className="io-table">
        <thead>
          <tr>
            {column.map((item) => (
              <th className="io-table__cell" key={item}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(props).map((prop) => {
            const { defaultValue, type, description } = props[prop];

            return (
              <tr key={prop}>
                <td className="io-table__cell">{prop}</td>
                <td className="io-table__cell">{getReadableType(type)}</td>
                <td className="io-table__cell">
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
