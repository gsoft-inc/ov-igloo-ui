import React from 'react';
import Filter from '@igloo-ui/filter';

const Example = () => {
  const [selected, setSelected] = React.useState(false);
  return (
    <div className="example example--truncate">
      <Filter
        onClick={() => {
          setSelected(!selected);
          alert('Filter was clicked');
        }}
        selected={selected}
      >
        Assigned to me (5)
      </Filter>
    </div>
  );
};

export default Example;
