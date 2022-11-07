import React from 'react';
import { Toast } from '@igloo-ui/toaster';
import Button from '@igloo-ui/button';

const Example = () => {
  const [showToast, setShowToast] = React.useState(false);

  return (
    <div className="example">
      <Button appearance="secondary" onClick={() => setShowToast(true)}>
        Make me a toast
      </Button>
      {showToast && (
        <Toast
          message="Your reminder is on the way!"
          onDissmiss={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default Example;
