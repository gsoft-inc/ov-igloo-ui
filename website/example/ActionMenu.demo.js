import React from 'react';
import ActionMenu from '@igloo-ui/action-menu';
import Button from '@igloo-ui/button';

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
        renderReference={(refProps) => {
          return (
            <Button appearance="secondary" {...refProps}>
              Button
            </Button>
          );
        }}
      />
    </div>
  );
};

export default Example;
