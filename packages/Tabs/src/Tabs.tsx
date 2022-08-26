import * as React from 'react';

import cx from 'classnames';

import CrownSolid from '@igloo-ui/icons/dist/CrownSolid';
import TextBulletSolid from '@igloo-ui/icons/dist/TextBulletSolid';

import './tabs.scss';

export interface TabInterface {
  /** The tab pane contents of the tabs list */
  children?: React.ReactNode;
  /** Add an id attribute to the tab */
  id?: string;
  /** Add text for the tab */
  label: React.ReactNode;
  /** Add a notification indicator to the tab */
  notification?: boolean;
  /** Add a premium indicator to the tab */
  premium?: boolean;
}

export interface TabsProps extends React.ComponentProps<'div'> {
  /** The function that's called when a tab is clicked */
  onSelectTab?: (index: number) => void;
  /** The index number of the Tab that should be selected on load */
  selected?: number;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Add a specific class to the Tabs component */
  className?: string;
  /** Add an inline style to the Tabs */
  isInline?: boolean;
  /** An array of objects that specify the props of the tab buttons */
  tabs: Array<TabInterface>;
}

const Tabs: React.FunctionComponent<TabsProps> = ({
  onSelectTab,
  selected = 0,
  dataTest,
  className,
  isInline = true,
  tabs,
}) => {
  const classes = cx('ids-tabs', className, {
    'ids-tabs--inline': isInline,
    'ids-tabs--heading': !isInline,
  });

  /* Handle the on click */
  const handleOnClick = (index: number): void => {
    if (onSelectTab) {
      onSelectTab(index);
    }
  };

  /* Render the Tab */
  const renderTabItem = (tab: TabInterface, index: number): React.ReactNode => {
    const isTypeString = typeof tab.label === 'string';
    let tabItem = (
      <>
        {tab.label}

        {tab.notification && (
          <TextBulletSolid
            size="small"
            className="ids-tab__icon ids-tab__bullet"
          />
        )}
        {tab.premium && (
          <CrownSolid size="small" className="ids-tab__icon ids-tab__crown" />
        )}
      </>
    );

    if (isTypeString) {
      tabItem = (
        <button className="ids-tab__btn" onClick={() => handleOnClick(index)}>
          {tabItem}
        </button>
      );
    } else {
      tabItem = <span className="ids-tab__nav">{tabItem}</span>;
    }

    return (
      <li
        key={index.toString()}
        className={cx('ids-tab', {
          'ids-tab--active': index === selected,
          'ids-tab--has-btn': isTypeString,
          'ids-tab--no-btn': !isTypeString,
        })}
        id={tab.id}
      >
        {tabItem}
      </li>
    );
  };

  return (
    <div className={classes} data-test={dataTest}>
      <ul className="ids-tabs__list">
        {tabs.map((tab, index) => renderTabItem(tab, index))}
      </ul>

      {/* show selcted tab by index */}
      {tabs[selected].children && tabs[selected].children}
    </div>
  );
};

export default Tabs;
