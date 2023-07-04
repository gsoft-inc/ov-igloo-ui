import React from 'react';
import Metric from '@igloo-ui/metric';
import Wellness from '@igloo-ui/icons/dist/Wellness';

const Example = () => {
  const [selected, setSelected] = React.useState(false);
  const handleOnPress = () => {
    setSelected(!selected);
  }

  return (
    <div className="example" 
    style={{ padding: '0 5rem' }}>
      <Metric
        value={20}
        variation={3}
        label="Metric Name"
        icon={<Wellness size="medium" />}
        onPress={handleOnPress}
        appearance={selected ? 'selected' : 'positive'}
      />
    </div>
  );
};

export default Example;
