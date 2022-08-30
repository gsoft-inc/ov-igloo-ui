import React from 'react';
import { DateTime } from 'luxon';

import Popover from '@igloo-ui/popover';

const Example = () => {
  const dt = DateTime.now();

  const data = [
    { tag: '#1053FF', value: '1.5', name: 'Metric name' },
    { tag: '#FABF2C', value: '3.0', name: 'Submetric name' },
  ];

  const overviewContent = (
    <div className="ex-popover__items">
      {data.map((d) => (
        <div className="ex-popover__item">
          <span
            className="ex-popover__tag"
            style={{ backgroundColor: d.tag }}
          ></span>
          <span className="ex-popover__value">{d.value}</span>
          <span className="ex-popover__name">{d.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="example">
      <Popover
        className="ex-popover"
        content={overviewContent}
        title={dt.setLocale('fr').toLocaleString(DateTime.DATE_FULL)}
        position="right"
        active
      >
        <div className="ex-trigger" />
      </Popover>
    </div>
  );
};

export default Example;
