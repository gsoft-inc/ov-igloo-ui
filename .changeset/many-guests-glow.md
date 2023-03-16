---
'@igloo-ui/action-menu': patch
'@igloo-ui/alert': patch
'@igloo-ui/area-chart': patch
'@igloo-ui/bar-chart': patch
'@igloo-ui/breadcrumb': patch
'@igloo-ui/button': patch
'@igloo-ui/button-group': patch
'@igloo-ui/card': patch
'@igloo-ui/carousel': patch
'@igloo-ui/checkbox': patch
'@igloo-ui/combobox': patch
'@igloo-ui/datepicker': patch
'@igloo-ui/dialog': patch
'@igloo-ui/disclosure': patch
'@igloo-ui/dropdown': patch
'@igloo-ui/ellipsis': patch
'@igloo-ui/filter': patch
'@igloo-ui/form-group': patch
'@igloo-ui/helper-text': patch
'@igloo-ui/hyperlink': patch
'@igloo-ui/icon-button': patch
'@igloo-ui/input': patch
'@igloo-ui/list': patch
'@igloo-ui/modal': patch
'@igloo-ui/option-button': patch
'@igloo-ui/pager': patch
'@igloo-ui/popover': patch
'@igloo-ui/progress-bar': patch
'@igloo-ui/radio': patch
'@igloo-ui/select': patch
'@igloo-ui/stacked-bar': patch
'@igloo-ui/tag': patch
'@igloo-ui/tag-picker': patch
'@igloo-ui/toaster': patch
'@igloo-ui/toggle': patch
'@igloo-ui/tooltip': patch
'@shared/components': patch
---

Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
