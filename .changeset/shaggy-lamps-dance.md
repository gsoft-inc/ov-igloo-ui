---
"@igloo-ui/input": patch
---

Added proper placeholder color for Workleap brand. Brought placeholder css outside of the layer so that it worked as before and is used instead of keeper browser extension. We are not using !important because we don't actually want to override other browser extensions that really need to change the placeholder color.
