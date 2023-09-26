import React from "react";

import cx from "classnames";

// eslint-disable-next-line import/no-extraneous-dependencies
import { VisualIdentifier } from "@shared/components";
import Ellipsis from "@igloo-ui/ellipsis";

import type { TagItem } from "./TagPicker";

import "./tag-picker-result.scss";

export enum Keys {
    Comma = ",",
    Enter = "Enter",
    Space = " ",
    ArrowDown = "ArrowDown",
    ArrowUp = "ArrowUp",
    Escape = "Escape",
    Tab = "Tab"
}

export interface TagPickerResultProps {
    /** Specify if the result is focused */
    focused?: boolean;
    /** Callback to execute on result selection */
    onSelect: (id: string) => void;
    /** Callback to execute on tag hover */
    onHover: () => void;
    /** Specify the result item to display */
    result: TagItem;
}

const TagPickerResult: React.FunctionComponent<TagPickerResultProps> = (
    props: TagPickerResultProps
) => {
    const { focused, onSelect, onHover, result } = props;
    const classes = cx("ids-tag-picker-result", {
        "ids-tag-picker-result--focused": focused
    });

    const shouldShowVisualIdentifier = result.src || result.color || result.icon;

    return (
        <button
            className={classes}
            onMouseOver={onHover}
            onFocus={onHover}
            onClick={() => {
                onSelect(result.id);
            }}
            tabIndex={-1}
        >
            {shouldShowVisualIdentifier && (
                <div className="ids-tag-picker-result__visual-identifier-container">
                    <VisualIdentifier
                        id={result.id}
                        src={result.src}
                        color={result.color}
                        icon={result.icon}
                    />
                </div>
            )}
            <div className="ids-tag-picker-result__text-container">
                <Ellipsis className="ids-tag-picker-result__text" title={result.text}>
                    {result.text}
                </Ellipsis>
                {result.subtext && (
                    <Ellipsis className="ids-tag-picker-result__subtext">
                        {result.subtext}
                    </Ellipsis>
                )}
            </div>
        </button>
    );
};

export default TagPickerResult;
