import React from 'react';
import Dropdown from '@igloo-ui/dropdown';
import Button from '@igloo-ui/button';

const Example = () => {
  const [show, setShow] = React.useState(false);

  const List = ({ items }) => {
    const listItem = items.map((item) => (
      <li className="ex-list__item">{item}</li>
    ));
    return <ul className="ex-list">{listItem}</ul>;
  };

  return (
    <div className="example">
      <Dropdown
        isOpen={show}
        onClose={() => setShow(false)}
        content={
          <List
            items={[
              'Organization details',
              'Billing',
              'Permissions',
              'Segments',
            ]}
          />
        }
      >
        <Button
          appearance="secondary"
          size="small"
          onClick={() => setShow(!show)}
        >
          Settings
        </Button>
      </Dropdown>
    </div>
  );
};

export default Example;
