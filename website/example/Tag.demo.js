import React from 'react';
import Tag from '@igloo-ui/tag';
import LabelSolid from '@igloo-ui/icons/dist/LabelSolid';

const Example = () => {
  return (
    <div className="example">
      <Tag icon={<LabelSolid size="small" />} dismissible appearance="success">
        This is a tag
      </Tag>
    </div>
  );
};

export default Example;
