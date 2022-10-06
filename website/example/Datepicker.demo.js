import React from 'react';
import Datepicker from '@igloo-ui/datepicker';

const Example = () => {
  const [show, setShow] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    setShow(false);
  }, [inputValue]);

  const formatedValue =
    inputValue !== '' ? new Date(inputValue).toLocaleDateString() : '';

  return (
    <div className="example">
      <Datepicker
        placeholder="Select date"
        isOpen={show}
        onFocus={() => setShow(!show)}
        onChange={(date) => setInputValue(date.utc)}
        value={formatedValue}
      />
    </div>
  );
};

export default Example;
