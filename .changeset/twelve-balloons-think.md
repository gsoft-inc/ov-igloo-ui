---
'@igloo-ui/text-editor': patch
---

Fixed a bug where onBlur would be called multiple times (once for each render since last call).
