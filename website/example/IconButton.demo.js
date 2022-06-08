import React from 'react';
import IconButton from '@igloo-ui/icon-button';

import Plus from '@igloo-ui/icons/dist/Plus';
import Settings from '@igloo-ui/icons/dist/Settings';
import Edit from '@igloo-ui/icons/dist/Edit';

const Example = () => {
  return (
    <div className="example">
      <IconButton icon={<Plus />} />
      <IconButton appearance="secondary" icon={<Edit />} />
      <IconButton appearance="ghost" rounded icon={<Settings />} />
    </div>
  );
};

export default Example;
