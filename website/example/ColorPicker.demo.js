import React from 'react';
import ColorPicker from '@igloo-ui/color-picker';

const Example = () => {
  const [selectedColor, setSelectedColor] = React.useState("dandelion200");

  return (
    <div className="example">
      <ColorPicker 
        onSelect={
            (color) => {
                setSelectedColor(color);
            }          
        } 
        selectedColor={selectedColor} 
    />
    </div>
  );
};

export default Example;
