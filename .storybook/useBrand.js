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
        "Carousel",
        "Checkbox",
        "Card",
        "Color",
        "Dialog",
        "Dropdown",
        "FormGroup",
        "Hyperlink",
        "HelperText",
        "IconButton",
        "Input",
        "List",
        "Metric",
        "Modal",
        "OptionButton",
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
