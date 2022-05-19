import React from 'react';
import Hyperlink from '@igloo-ui/hyperlink';
import Expand from '@igloo-ui/icons/dist/Expand';

const Example = () => {
  return (
    <div className="example">
      <Hyperlink>View complete report</Hyperlink>
      <Hyperlink appearance="secondary" iconLeading={<Expand size="small" />}>
        How does anonymity work
      </Hyperlink>
    </div>
  );
};

export default Example;
