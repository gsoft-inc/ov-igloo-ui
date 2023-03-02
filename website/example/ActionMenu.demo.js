import React from 'react';
import ActionMenu from '@igloo-ui/action-menu';

const Example = () => {
  return (
    <div className="example">
      <ActionMenu
        options={[
          {
            label: 'Add Item',
            value: 'add',
          },
          {
            label: 'Delete Item',
            value: 'delete',
            disabled: true,
          },
          {
            label: 'Copy Item',
            value: 'copy',
          },
        ]}
      />
    </div>
  );
};

export default Example;
