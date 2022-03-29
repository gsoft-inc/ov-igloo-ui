import * as React from 'react';
import cx from 'classnames';

import './button-group.scss';

type Event = React.MouseEvent<HTMLButtonElement>;

export interface ButtonGroupProps extends React.ComponentProps<'button'> {
  items: React.ReactNode[] | string[];
  /** Changes the size of button group  */
  small?: boolean;
  disabled?: boolean;
  onClick?: (event: Event) => void;
}

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = (
  props: ButtonGroupProps
) => {
  const { items, small = false, onClick, disabled } = props;
  const [selected, setSelected] = React.useState(-1);

  const actionsList = items?.map((action, index) => {
    const key = index.toString();
    const handleClick = (event: Event, id: number): void => {
      setSelected(id);
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <button
        className={cx('ids-btn-group__item', {
          'is-selected': selected === index,
          'is-disabled': disabled,
        })}
        key={key}
        id={`ids-btn-group-${key}`}
        onClick={(event) => handleClick(event, index)}
      >
        {action}
      </button>
    );
  });

  return (
    <div className={cx('ids-btn-group', { 'ids-btn-group--small': small })}>
      {actionsList}
    </div>
  );
};

export default ButtonGroup;
