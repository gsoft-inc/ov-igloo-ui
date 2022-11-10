import * as React from 'react';
import cx from 'classnames';

import './progress-bar.scss';

export interface ProgressBarProps extends React.ComponentProps<'div'> {
  value: number;
  className?: string;
  dataTest?: string;
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = (
  props: ProgressBarProps
) => {
  const { value, className, dataTest, ...rest } = props;

  const isCompleted = value >= 100;

  const classes = cx('ids-progress-bar', className, {
    'ids-progress-bar--completed': isCompleted,
  });

  return (
    <div role="progressbar" className={classes} data-test={dataTest} {...rest}>
      <span
        className="ids-progress-bar__status"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
