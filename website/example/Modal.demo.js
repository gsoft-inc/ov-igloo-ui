import React, { useState } from 'react';

import IconButton from '@igloo-ui/icon-button';
import Input from '@igloo-ui/input';
import Button from '@igloo-ui/button';
import HelperText from '@igloo-ui/helper-text';
import Modal from '@igloo-ui/modal';

import SettingsSolid from '@igloo-ui/icons/dist/SettingsSolid';
import Close from '@igloo-ui/icons/dist/Close';

const Example = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="example">
        <span
          className="example__inline"
          onClick={() => setOpen(!open)}
          role="button"
        >
          John Doe
          <IconButton
            appearance="ghost"
            icon={<SettingsSolid size="medium" />}
          />
        </span>
      </div>
      {open && (
        <Modal
          fullContent
          title="John Doe"
          isOpen={open}
          isDismissable
          isClosable
          size="large"
          onClose={() => setOpen(!open)}
        >
          <>
            <header className="ex-modal__header">
              <div className="ex-modal__profile">
                <div className="ex-modal__avatar" />
                <h2>John Doe</h2>
              </div>
              <IconButton
                appearance="ghost"
                size="small"
                icon={<Close />}
                onClick={() => setOpen(!open)}
              />
            </header>
            <h4>Your personal info</h4>
            <form className="ex-modal__form">
              <div className="ex-modal__formGroup">
                <HelperText>First name</HelperText>
                <Input value="John" />
              </div>
              <div className="ex-modal__formGroup">
                <HelperText>Last name</HelperText>
                <Input value="Doe" />
              </div>
              <div className="ex-modal__formGroup">
                <HelperText>Job title</HelperText>
                <Input placeholder="e.g. Designer" />
              </div>
              <div className="ex-modal__formGroup">
                <HelperText>Email</HelperText>
                <Input disabled value="john.doe@acm.com" />
              </div>
            </form>
            <footer className="ex-modal__footer">
              <Button onClick={() => setOpen(!open)} appearance="secondary">
                Cancel
              </Button>
              <Button disabled>Update profile</Button>
            </footer>
          </>
        </Modal>
      )}
    </>
  );
};

export default Example;
