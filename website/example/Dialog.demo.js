import React, { useState } from 'react';

import Dialog from '@igloo-ui/dialog';
import Button from '@igloo-ui/button';

const Example = () => {
  const [open, setOpen] = useState(false);
  const handleValidate = () => {
    alert('You said yes');
    setOpen(false);
  };

  return (
    <>
      <div className="example">
        <Button appearance="secondary" onClick={() => setOpen(true)}>
          open
        </Button>
        <Dialog
          title="Modal title"
          subTitle="This is a sub title"
          dismissText="Cancel"
          validateText="Confirm"
          isOpen={open}
          onDismiss={() => setOpen(false)}
          onValidate={handleValidate}
        />
      </div>
    </>
  );
};

export default Example;
