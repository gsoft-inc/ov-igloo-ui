import React from 'react';
import Tooltip from '@igloo-ui/tooltip';
import IconButton from '@igloo-ui/icon-button';
import Settings from '@igloo-ui/icons/dist/Settings';

const Example = () => {
  return (
    <div className="example">
      <Tooltip content="Settings">
        <IconButton appearance="ghost" rounded icon={<Settings />} />
      </Tooltip>
    </div>
  );
};

export default Example;
