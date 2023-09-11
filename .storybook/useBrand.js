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
        "Breadcrumb",
        "Checkbox",
        "Card",
        "Color",
        "Hyperlink",
        "HelperText",
        "IconButton",
        "List",
        "Metric",
        "PieChart",
        "Popover",
        "StackedBar",
        "Tag",
        "Textarea",
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
