---
'@igloo-ui/combobox': major
---

Added onAfterClose, onInput, onScrollEnd and scrollEndThreshold props to the Combobox.

## BREAKING CHANGE

The search no longer does the filtering itself. The user must use the onInput callback to filter the results as well as add any debouncing needed. Since it is the user filtering the results, they must also reset the results in the onAfterClose callback.
