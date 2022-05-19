import React, { useState } from 'react';
import ButtonGroup, { ButtonItem } from '@igloo-ui/button-group';

const Example = () => {
  const [active, setActive] = useState('score');

  return (
    <div className="example">
      <ButtonGroup>
        <ButtonItem
          active={active === 'score'}
          onClick={() => setActive('score')}
        >
          Score
        </ButtonItem>
        <ButtonItem
          active={active === 'variation'}
          onClick={() => setActive('variation')}
        >
          Variation
        </ButtonItem>
      </ButtonGroup>
    </div>
  );
};

export default Example;
