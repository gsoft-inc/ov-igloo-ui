import * as React from 'react';
import { useButton, AriaButtonProps } from 'react-aria';
import IconButton from '@igloo-ui/icon-button';

export interface ButtonProps extends AriaButtonProps {
  className: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { className, children } = props;

  const ref = React.useRef(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <IconButton
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
      icon={children}
      size="small"
      appearance={{ type: 'ghost', variant: 'secondary' }}
      className={className}
      {...buttonProps}
    />
  );
};

export default Button;
