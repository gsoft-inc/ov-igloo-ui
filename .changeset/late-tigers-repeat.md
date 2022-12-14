---
'@igloo-ui/dropdown': major
---

Updated the way the dropdown list displays. It is appended to the body.

## BREAKING CHANGE

The dropdown uses the usePopper hook from react popper to allow the dropdown to be appended to the body. This prevents many potential bugs such as creating a scrollbar in a div when the dropdown should display outside the div.
Default position looks the same, but was updated to bottomLeft. Position 'bottom' used to look like 'bottomLeft'. It was pointless to have two positions do the same thing so now 'bottom' is horizontally positioned in the center to be aligned with js popper positioning.
