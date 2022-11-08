import React from 'react';
import Datepicker from '@igloo-ui/datepicker';

const Example = () => {
  const [show, setShow] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    setShow(false);
  }, [inputValue]);

  const formattedValue =
    inputValue !== '' ? new Date(inputValue).toLocaleDateString() : inputValue;

  const handleChange = (date) => {
    if (!date) {
      setInputValue('');
    } else {
      setInputValue(date.utc);
    }
  };
  return (
    <div className="example">
      <Datepicker
        placeholder="Select date"
        isOpen={show}
        onFocus={() => setShow(!show)}
        onChange={handleChange}
        value={formattedValue}
        clearable
        clearLabel="Clear"
      />
    </div>
  );
};

export default Example;
