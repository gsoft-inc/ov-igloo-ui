import * as React from 'react';

export const TOAST_CONTAINER_ID = 'ids-toast';

const ToasterContainer: React.FunctionComponent<
  React.ComponentProps<'section'>
> = ({ children }) => {
  return (
    <section
      aria-live="assertive"
      className="ids-toast__overlay"
      id={TOAST_CONTAINER_ID}
    >
      {children}
    </section>
  );
};

export default ToasterContainer;
