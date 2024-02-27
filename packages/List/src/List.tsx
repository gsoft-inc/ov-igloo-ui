import * as React from "react";
import cx from "classnames";

import ListItem, { type Option, type Member, type OptionType } from "./ListItem";

import "./list.scss";

export interface ListProps extends React.ComponentPropsWithRef<"ul"> {
    /** Add a specific class to the Select */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Whether or not to disable tabbing of list items */
    disableTabbing?: boolean;
    /** The option that is currently being focused or hovered */
    focusedOption?: OptionType | null;
    /** True for a compact appearance (In figma, isCompact = "small" and not compact is "medium") */
    isCompact?: boolean;
    /** Whether or not the list is loading */
    loading?: boolean;
    /** The List gains checkboxes beside each option
   * to be able to select multiple options */
    multiple?: boolean;
    /** Called when an option becomes focused or hovered */
    onOptionFocus?: (option: OptionType) => void;
    /** Called when an option is selected */
    onOptionChange?: (option: OptionType) => void;
    /** Called when the mouse moves outside of the option
   * or the option loses focus */
    onOptionBlur?: (option: OptionType) => void;
    /** A list of options */
    options?: OptionType[];
    /** The initial selected option or a list of selected options */
    selectedOption?: OptionType | OptionType[] | null;
    /** Whether or not to show the icon inside the
   * list if it's available */
    showIcon?: boolean;
}

const List: React.FunctionComponent<ListProps> = React.forwardRef(
    (
        {
            className,
            dataTest,
            disableTabbing = false,
            focusedOption,
            isCompact = true,
            loading,
            multiple,
            onOptionFocus,
            onOptionChange,
            onOptionBlur,
            options,
            selectedOption,
            showIcon = true,
            ...rest
        }: ListProps,
        ref: React.ForwardedRef<HTMLUListElement>
    ) => {
        const listClasses = cx("ids-list", className, {
            "ids-list--compact": isCompact,
            "ids-list--multi-select": multiple
        });

        const optionsAreLoading = loading || options?.length === 0;

        const loadingOptions = Array.from({ length: 6 }, (_, index) => (
            <ListItem
                loading
                optionKey={(index + 1).toString()}
                key={(index + 1).toString()}
                isCompact={isCompact}
            />
        ));

        const listItemOptions = options?.map((option: OptionType) => {
            let selected = false;

            if (multiple) {
                if (Array.isArray(selectedOption)) {
                    const selectedItem = selectedOption.filter(o => {
                        return o.value === option.value;
                    });
                    selected = !!selectedItem && selectedItem.length > 0;
                }
            } else if (selectedOption && !Array.isArray(selectedOption)) {
                selected = selectedOption.value === option.value;
            }

            let isFocused = false;
            if (focusedOption) {
                isFocused = focusedOption.value === option.value;
            }

            return (
                <ListItem
                    key={option.value}
                    option={option}
                    onOptionChange={onOptionChange}
                    onOptionFocus={onOptionFocus}
                    onOptionBlur={onOptionBlur}
                    isCompact={isCompact}
                    isFocused={isFocused}
                    isSelected={selected}
                    useCheckbox={multiple}
                    showIcon={showIcon}
                    disableTabbing={disableTabbing}
                />
            );
        });

        return (
            <ul
                ref={ref}
                className={listClasses}
                data-test={dataTest}
                tabIndex={-1}
                role="listbox"
                {...rest}
            >
                {optionsAreLoading ? loadingOptions : listItemOptions}
            </ul>
        );
    }
);

export default List;
export type { Option, Member, OptionType };
