import React from 'react';
import Checkbox from '@igloo-ui/checkbox';

const Example = () => {
  return (
    <div className="example">
      <div className="example__block">
        <small>Teams</small>
        <div className="example__form">
          <Checkbox htmlFor="checkbox-example-id1">Groupe #1</Checkbox>
          <Checkbox htmlFor="checkbox-example-id2">Groupe #2</Checkbox>
          <Checkbox htmlFor="checkbox-example-id3">Groupe #3</Checkbox>
          <Checkbox htmlFor="checkbox-example-id4">Groupe #4</Checkbox>
        </div>
      </div>
    </div>
  );
};

export default Example;
