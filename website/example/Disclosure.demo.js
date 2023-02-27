import React from 'react';
import Substract from '@igloo-ui/icons/dist/Substract';

import Disclosure from '@igloo-ui/disclosure';

const Example = () => {
  return (
    <div className="example">
      <Disclosure
        title="Diversity"
        icon={<Substract size="large" />}
        description="0.8pt in the last 30 days"
      >
        <div style={{ background: '#F7F9FA', padding: '2.4rem' }}>
          Our organization values diversity.
        </div>
      </Disclosure>
    </div>
  );
};

export default Example;
