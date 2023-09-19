import { useEffect } from 'react';

export const useBrand = (StoryFn, context) => {
    const {brand} = context.globals;
    const {displayName} = context.component;
    const components = [
        "ActionMenu",
        "Alert",
        "AreaChart",
        "Avatar",
        "BarChart",
        "Button",
        "ButtonGroup",
        "Breadcrumb",
        "Checkbox",
        "Card",
        "Color",
        "Dropdown",
        "Hyperlink",
        "HelperText",
        "IconButton",
        "Input",
        "List",
        "Metric",
        "Pager",
        "PieChart",
        "Popover",
        "Radio",
        "Select",
        "StackedBar",
        "Tag",
        "Textarea",
        "Toast",
        "Toggle",
        "Tooltip",
        "VerticalBarChart",
        "VisualIdentifier"
    ];

    useEffect(() => {
        //document.documentElement refers to html tag inside iframe#storybook-preview-iframe
        if (components.includes(displayName)) {
            document.documentElement.setAttribute('data-brand', brand);
        } else {
            document.documentElement.removeAttribute('data-brand');
        }
    }, [brand]);

    return StoryFn();
}
