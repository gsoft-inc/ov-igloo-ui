import * as React from "react";

import cx from "classnames";

import CrownSolid from "@igloo-ui/icons/dist/CrownSolid";
import TextBulletSolid from "@igloo-ui/icons/dist/TextBulletSolid";
import { BulletIcon, UpsellIcon } from "@hopper-ui/icons-react16";

import "./tabs.scss";

export interface TabInterface {
    /** The contents of the tabs list */
    children?: React.ReactNode;
    /** Add an id attribute to the tab */
    id?: string;
    /** Add text for the tab */
    label: React.ReactElement | string;
    /** Add a notification indicator to the tab */
    notification?: boolean;
    /** Add a premium indicator to the tab */
    premium?: boolean;
}

export interface TabsProps extends React.ComponentProps<"div"> {
    /** The function that's called when a tab is clicked */
    onSelectTab?: (index: number) => void;
    /** The index number of the tab that should be selected on load */
    selected?: number;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Add a specific class to the tabs component */
    className?: string;
    /** Add an inline style to the tabs */
    isInline?: boolean;
    /** An array of objects that specify the props of the tab buttons */
    tabs: Array<TabInterface>;
}

const getBrand = (): string => {
    return document.documentElement.getAttribute("data-brand") ?? "igloo";
};

const Tabs: React.FunctionComponent<TabsProps> = ({
    onSelectTab,
    selected = 0,
    dataTest,
    className,
    isInline = true,
    tabs,
    ...rest
}) => {
    const classes = cx("ids-tabs", className, {
        "ids-tabs--inline": isInline,
        "ids-tabs--heading": !isInline
    });
    
    const isWorkleap = getBrand() === "workleap";

    const handleOnClick = (index: number): void => {
        if (onSelectTab) {
            onSelectTab(index);
        }
    };

    const renderTabItem = (tab: TabInterface, index: number): React.ReactNode => {
        const isTypeString = typeof tab.label === "string";
        const notificationClass = "ids-tab__icon ids-tab__bullet";
        const premiumClass = "ids-tab__icon ids-tab__crown";
        const tabTextClass = "ids-tab__text";
        let tabContents = (
            <>
                {tab.notification && (
                    isWorkleap ? (
                        <BulletIcon
                            size="sm"
                            className={notificationClass}
                        />
                    ) : (
                        <TextBulletSolid
                            size="small"
                            className={notificationClass}
                        />
                    )
                )}
                {tab.premium && (
                    isWorkleap ? (
                        <UpsellIcon
                            size="sm"
                            className={premiumClass}
                        />
                    ) : (
                        <CrownSolid
                            size="small"
                            className={premiumClass}
                        />
                    )
                )}
            </>
        );

        if (isTypeString) {
            tabContents = (
                <button className="ids-tab__btn" onClick={() => handleOnClick(index)}>
                    <span className={tabTextClass}>{tab.label}</span>
                    {tabContents}
                </button>
            );
        } else if (React.isValidElement(tab.label)) {
            const textWrapper = <span className={tabTextClass}>
                {(tab.label as React.ReactElement).props.children}
            </span>;
            tabContents = <span className="ids-tab__nav">
                {React.cloneElement(tab.label,
                                    {},
                                    textWrapper, tabContents)
                }
            </span>;
        }

        return (
            <li
                key={index.toString()}
                className={cx("ids-tab", {
                    "ids-tab--active": index === selected
                })}
                id={tab.id}
            >
                {tabContents}
            </li>
        );
    };

    return (
        <div className={classes} data-test={dataTest} {...rest}>
            <ul className="ids-tabs__list">
                {tabs.map((tab, index) => renderTabItem(tab, index))}
            </ul>

            {tabs[selected].children && tabs[selected].children}
        </div>
    );
};

export default Tabs;
