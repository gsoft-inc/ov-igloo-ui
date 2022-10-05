import React from 'react';
import Breadcrumb from '@igloo-ui/breadcrumb';

const Example = () => {
  return (
    <div className="example">
      <Breadcrumb
        items={[
          {
            label: 'Home',
            link: '#',
          },
          {
            label: 'Career',
            link: '#',
          },
          {
            label: 'Developer',
          },
        ]}
      />
    </div>
  );
};

export default Example;
