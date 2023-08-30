import React, { useState, useRef, useEffect, useCallback } from "react";

import cx from "classnames";

import Search from "@igloo-ui/icons/dist/Search";
import Tag from "@igloo-ui/tag";
import Dropdown from "@igloo-ui/dropdown";
import Input from "@igloo-ui/input";
import useClickOutside from "./hooks/useClickOutside";
import TagPickerResult from "./TagPickerResult";

import "./tag-picker.scss";

export enum Keys {
    Comma = ",",
    Enter = "Enter",
    Space = " ",
    ArrowDown = "ArrowDown",
    ArrowUp = "ArrowUp",
    Escape = "Escape",
    Tab = "Tab"
}

export interface TagItem {
    /** Add a colored square instead of an image or an icon */
    color?: string;
    /** Indicate whether the tag should have an error or not */
    hasError?: boolean;
    /** The icon used at the beginning of the Tag */
    icon?: React.ReactElement;
    /** Specify a specific ID */
    id: string;
    /** Specifies the url for the image icon */
    src?: string;
    /** The sub text for the tag */
    subtext?: string;
    /** The text for the tag */
    text: string;
}

export interface TagPickerProps
    extends Omit<React.ComponentProps<"div">, "results" | "onInput"> {
    /** Determines whether the tag picker should be focused on render */
    autoFocus?: boolean;
    /** Add a specific class to the tag picker */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Determines whether the tag picker is disabled (no interaction possible) */
    disabled?: boolean;
    /** Indicate whether the tag picker has an error or not */
    error?: boolean;
    /** Results of the current search to display
     * in the pop-up when the tag picker is focused */
    results?: TagItem[];
    /** Whether or not the list is loading */
    loading?: boolean;
    /** The max height of the tag picker container */
    maxHeight?: string;
    /** The max number of tags that can be selected */
    maxTags?: number;
    /**  Number of characters needed to display the results of the search */
    minSearchLength?: number;
    /** Specify the text to display when there are no results found */
    noResultsText?: string;
    /** Callback to execute on input blur */
    onBlur?: () => void;
    /** Callback to execute on input */
    onInput?: (value: string) => void;
    /** Callback to execute when the max number of tags is reached */
    onMaxTags?: () => void;
    /** Callback to execute on result selection */
    onSelection: (id: string) => void;
    /** Callback to execute on tag removal */
    onTagRemove: (id: string) => void;
    /** Text to display when there are no selectedResults and no input value */
    placeholder?: string;
    /** Selected results to display as tags */
    selectedResults: TagItem[];
    /** Specify whether to show the search icon */
    showSearchIcon?: boolean;
    /** KeyCodes used to separate the different tags */
    separators?: (Keys.Enter | Keys.Comma | Keys.Space)[];
}

const TagPicker: React.FunctionComponent<TagPickerProps> = ({
    autoFocus,
    className,
    dataTest,
    disabled,
    error,
    loading,
    maxHeight,
    maxTags,
    minSearchLength = 2,
    noResultsText,
    onBlur,
    onInput,
    onMaxTags,
    onSelection,
    onTagRemove,
    placeholder,
    results,
    selectedResults,
    showSearchIcon,
    separators = [Keys.Enter],
    ...rest
}: TagPickerProps) => {
    const defaultKeyboardFocusIndex = -1;
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState("");
    const tagPickerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [focused, setFocused] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [tagRemoved, setTagRemoved] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [keyboardFocusIndex, setKeyboardFocusIndex] = useState(
        defaultKeyboardFocusIndex
    );
    const selectedResultsCount = selectedResults.length;

    const hasResults = !!results;
    const shouldShowResults =
    !disabled && focused && showResults && (hasResults || loading);

    const handleChange = ({
        target
    }: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        const shouldShowResults = value.length >= minSearchLength;

        setInputValue(value);

        setShowResults(shouldShowResults);

        if (onInput && shouldShowResults) {
            onInput(value);
        }
    };

    const resetSearch = (): void => {
        setShowResults(false);
        if (inputRef && inputRef.current && inputValue !== "") {
            setInputValue("");
        }
    };

    const resetKeyboardFocus = useCallback((): void => {
        setKeyboardFocusIndex(defaultKeyboardFocusIndex);
    }, [defaultKeyboardFocusIndex]);

    const handleGainFocus = useCallback((): void => {
        if (!disabled && !inputDisabled && inputRef.current) {
            setFocused(true);

            if (inputRef.current !== document.activeElement) {
                inputRef.current.focus();
            }
        }
    }, [inputDisabled, inputRef, disabled]);

    const handleLoseFocus = (): void => {
        if (focused) {
            setFocused(false);
            resetKeyboardFocus();
            if (inputRef.current) {
                inputRef.current.blur();
            }

            if (onBlur) {
                onBlur();
            }
        }
    };

    useClickOutside([tagPickerRef, dropdownRef], handleLoseFocus);

    const handleResultHover = (): void => {
        resetKeyboardFocus();
    };

    const handleResultSelection = (resultId: string): void => {
        onSelection(resultId);
        resetSearch();

        if (maxTags && selectedResultsCount === maxTags - 1) {
            setInputDisabled(true);
            setTagRemoved(false);
            onMaxTags?.();
        } else {
            handleGainFocus();
            setTimeout(() => {
                inputRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }, 5);
        }
    };

    const handleKeyboardSelection = (index: number): void => {
        if (index >= 0 && results && results.length) {
            const focusedResult = results[index];
            handleResultSelection(focusedResult.id);
            resetKeyboardFocus();
        }
    };

    const handleNavigateUp = (): void => {
        if (keyboardFocusIndex >= 0) {
            setKeyboardFocusIndex(keyboardFocusIndex - 1);
        }
    };

    const handleNavigateDown = (): void => {
        if (results && keyboardFocusIndex < results.length - 1) {
            setKeyboardFocusIndex(keyboardFocusIndex + 1);
        }
    };

    const handleTagRemove = (tagId: string): void => {
        setInputDisabled(false);
        setTagRemoved(true);
        onTagRemove(tagId);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        const { value } = e.currentTarget;

        if (
            !hasResults &&
      separators &&
      Object.values<string>(separators).includes(e.key) &&
      value
        ) {
            handleResultSelection(value);
            e.preventDefault();
        }

        switch (e.key) {
            case Keys.Enter:
                if (hasResults) {
                    handleKeyboardSelection(keyboardFocusIndex);
                }
                e.preventDefault();
                break;
            case Keys.ArrowUp:
                if (hasResults) {
                    handleNavigateUp();
                }
                e.preventDefault();
                break;
            case Keys.ArrowDown:
                if (hasResults) {
                    handleNavigateDown();
                }
                e.preventDefault();
                break;
            case Keys.Escape:
                if (hasResults) {
                    handleLoseFocus();
                }
                e.preventDefault();
                break;
            case Keys.Tab:
                handleLoseFocus();
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (results && results.length === 0) {
            resetKeyboardFocus();
        }
    }, [results, resetKeyboardFocus]);

    useEffect(() => {
        if ((tagRemoved && !inputDisabled) || autoFocus) {
            handleGainFocus();
        }
    }, [tagRemoved, inputDisabled, handleGainFocus, autoFocus]);

    const renderSelectedResults = selectedResults.map(s => {
        const tagClasses = cx("ids-tag-picker__tag", {
            "ids-tag-picker__tag--error": s.hasError
        });

        return (
            <Tag
                key={s.id}
                className={tagClasses}
                id={s.id}
                src={s.src}
                color={s.color}
                icon={s.icon}
                dismissible={!disabled}
                appearance="neutral"
                onRemove={handleTagRemove}
                hasError={s.hasError}
            >
                {s.text}
            </Tag>
        );
    });

    const List = ({ items }: { items: TagItem[] | undefined }): JSX.Element => {
        if (items && items.length > 0) {
            const listItem = items.map((item, key) => (
                <li className="ids-tag-picker__results-item" key={item.id}>
                    <TagPickerResult
                        onHover={handleResultHover}
                        onSelect={handleResultSelection}
                        result={item}
                        focused={keyboardFocusIndex === key}
                    />
                </li>
            ));

            return <ul className="ids-tag-picker__results">{listItem}</ul>;
        }

        return <div className="ids-tag-picker__no-results">{noResultsText}</div>;
    };

    const loadingList = (
        <ul className="ids-tag-picker__results ids-tag-picker__results--loading">
            {Array.from({ length: 6 }, (_, index) => (
                <li
                    className="ids-tag-picker-result ids-tag-picker-result--loading"
                    key={`loading_${index.toString()}`}
                >
                    <span className="ids-tag-picker-result__loading-thumbnail" />
                    <span className="ids-tag-picker-result__loading-text" />
                </li>
            ))}
        </ul>
    );

    const showIcon = showSearchIcon && selectedResults.length === 0;

    const input = (
        <div className="ids-tag-picker__input-wrapper" data-value={inputValue}>
            {showIcon && (
                <Search size="medium" className="ids-tag-picker__search-icon" />
            )}
            <Input
                ref={inputRef}
                className="ids-tag-picker__input"
                disabled={disabled}
                placeholder={selectedResults.length === 0 ? placeholder : ""}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={handleGainFocus}
                onBlur={() => {
                    if (!shouldShowResults) {
                        handleLoseFocus();
                    }
                }}
                value={inputValue}
            />
        </div>
    );

    const classes = cx(
        className,
        "ids-tag-picker",
        { "ids-tag-picker--disabled": disabled },
        { "ids-tag-picker--input-disabled": inputDisabled },
        { "ids-tag-picker--focused": focused && !inputDisabled },
        {
            "ids-tag-picker--empty": selectedResults.length === 0
        },
        {
            "ids-tag-picker--has-selected": selectedResults.length > 0
        },
        { "ids-tag-picker--error": error }
    );

    const tagPickerElem = (
        <div
            ref={tagPickerRef}
            className={classes}
            data-test={dataTest}
            style={{ maxHeight }}
            role="button"
            tabIndex={-1}
            onClick={() => {
                handleGainFocus();
            }}
            {...rest}
        >
            <div className="ids-tag-picker__content">
                {selectedResults.length > 0 && renderSelectedResults}
                {!inputDisabled && input}
            </div>
        </div>
    );

    return results || loading ? (
        <Dropdown
            ref={dropdownRef}
            content={loading ? loadingList : <List items={results} />}
            isOpen={shouldShowResults}
            onClose={handleLoseFocus}
            onClick={handleGainFocus}
            isScrollable
        >
            {tagPickerElem}
        </Dropdown>
    ) : (
        tagPickerElem
    );
};

export default TagPicker;
