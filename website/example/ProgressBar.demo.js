import React from 'react';
import ProgressBar from '@igloo-ui/progress-bar';

const Example = () => {
  return (
    <div className="example example--truncate">
      <ProgressBar
        value={0.7}
        ariaLabel="Progress: 70% of objectives achieved"
      />
    </div>
  );
};

export default Example;
