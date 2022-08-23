import * as React from 'react';

import './tabs.scss';

import { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import CrownSolid from '@igloo-ui/icons/dist/CrownSolid';
import TextBulletSolid from '@igloo-ui/icons/dist/TextBulletSolid';

export interface TabInterface {
  /** The tab pane contents of the tabs list */
  children?: React.ReactNode;
  /** Add an id attribute to the tab */
  id?: string;
  /** Add text for the tab */
  label: string;
  /** Add a notification indicator to the tab */
  notification?: boolean;
  /** Add a premium indicator to the tab */
  premium?: boolean;
  /** Use this to redirect to another route */
  to?: string;
}

export interface TabsProps extends React.ComponentProps<'div'> {
  /** The function that's called when a tab is clicked */
  onSelect?: () => void;
  /** The index number of the Tab that should be selected on load */
  defaultIndex?: number;
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
  onSelect,
  defaultIndex = 0,
  dataTest,
  className,
  isInline = true,
  tabs,
}) => {
  const classes = classNames('ids-tabs', className, {
    'ids-tabs--inline': isInline,
    'ids-tabs--heading': !isInline,
  });

  const [selectedTabIndex, setSelectedTabIndex] =
    useState<number>(defaultIndex);
  const handleOnClick = (index: number): void => {
    if (setSelectedTabIndex) {
      setSelectedTabIndex(index);
    }
    if (onSelect) {
      onSelect();
    }
  };

  const renderTabButton = (
    tab: TabInterface,
    index: number
  ): React.ReactNode => {
    let button = (
      <button
        className="ids-tabs__tab-button"
        onClick={() => handleOnClick(index)}
      >
        {tab.label}

        {tab.notification && (
          <TextBulletSolid
            size="small"
            className="ids-tabs__tab-icon ids-tabs__bullet-icon"
          />
        )}
        {tab.premium && (
          <CrownSolid
            size="small"
            className="ids-tabs__tab-icon ids-tabs__crown-icon"
          />
        )}
      </button>
    );

    if (tab.to) {
      button = (
        <NavLink
          className="ids-tabs__tab-button"
          onClick={() => handleOnClick(index)}
          to={tab.to}
        >
          {tab.label}

          {tab.notification && (
            <TextBulletSolid
              size="small"
              className="ids-tabs__tab-icon ids-tabs__bullet-icon"
            />
          )}
          {tab.premium && (
            <CrownSolid
              size="small"
              className="ids-tabs__tab-icon ids-tabs__crown-icon"
            />
          )}
        </NavLink>
      );
    }

    return button;
  };

  return (
    <div className={classes} data-test={dataTest}>
      <ul className="ids-tabs__list">
        {tabs.map((tab, index) => (
          <li
            key={tab.label}
            className={classNames('ids-tabs__tab', {
              'ids-tabs__tab--active': index === selectedTabIndex,
            })}
            id={tab.id}
          >
            {renderTabButton(tab, index)}
          </li>
        ))}
      </ul>

      {/* show selcted tab by index */}
      {tabs[selectedTabIndex].children && tabs[selectedTabIndex].children}
    </div>
  );
};

export default Tabs;
