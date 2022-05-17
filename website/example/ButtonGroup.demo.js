import React, { useState } from 'react';
import ButtonGroup, { ButtonItem } from '@igloo-ui/button-group';

export default function Example() {
  const [active, setActive] = useState('score');

  const handleClick = (event) => {
    const currentActiveElement = event.currentTarget.id;
    setActive(currentActiveElement);

    return null;
  };

  return (
    <div className="example">
      <ButtonGroup>
        <ButtonItem
          id="score"
          active={active === 'score'}
          onClick={handleClick}
        >
          Score
        </ButtonItem>
        <ButtonItem
          id="variation"
          active={active === 'variation'}
          onClick={handleClick}
        >
          Variation
        </ButtonItem>
      </ButtonGroup>
    </div>
  );
}
