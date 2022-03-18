import React from 'react';
import cx from 'classnames';

const Section = ({ children, column, className }) => {
  const classes = cx(
    'isb-section',
    { 'isb-section--column': column },
    className
  );

  return <section className={classes}>{children}</section>;
};

export default Section;
