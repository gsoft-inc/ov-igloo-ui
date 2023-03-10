import * as React from 'react';
import cx from 'classnames';

import type { DataSet } from './StackedBar';

import './stacked-bar-tooltip.scss';

export interface StackedBarTooltipProps {
  /** All the data needed to build the stacked bar */
  dataSet?: DataSet[];
  /** A function to format the value in the tooltip (Default: adds %) */
  formatValue?: (value: number) => string;
  /** Whether or not the bar has data */
  hasData?: boolean;
  /** Message to display in the tooltip when there is no data */
  noDataMessage?: string;
}

const StackedBarTooltip: React.FunctionComponent<StackedBarTooltipProps> = (
  props: StackedBarTooltipProps
) => {
  const { dataSet, formatValue, hasData = false, noDataMessage } = props;

  return (
    <div className="ids-stacked-bar-tooltip__content">
      {hasData && dataSet && dataSet.length && (
        <ul className="ids-stacked-bar-tooltip__data">
          {dataSet.map((dataInfo: DataSet): React.ReactElement => {
            const listItemClass = cx('ids-stacked-bar-tooltip__data-item', {
              // eslint-disable-next-line max-len
              [`ids-stacked-bar-tooltip__data-item--strength-${dataInfo.strength}`]:
                dataInfo.strength !== undefined,
              'ids-stacked-bar-tooltip__data-item--no-color':
                dataInfo.strength === undefined && !dataInfo.color,
            });

            let styles = {};
            if (dataInfo.color) {
              styles = { color: dataInfo.color };
            }
            return (
              <li key={dataInfo.key} className={listItemClass} style={styles}>
                <div className="ids-stacked-bar-tooltip__data-item-content">
                  <span className="ids-stacked-bar-tooltip__value">
                    {formatValue?.(dataInfo.value)}
                  </span>
                  <span className="ids-stacked-bar-tooltip__label">
                    {dataInfo.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {!hasData && noDataMessage && (
        <div className="ids-stacked-bar-tooltip__no-data">{noDataMessage}</div>
      )}
    </div>
  );
};
export default StackedBarTooltip;
