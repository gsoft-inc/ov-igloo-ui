---
"@igloo-ui/dialog": patch
"@igloo-ui/modal": patch
---

dismissOnEscape is now optional. 'contain' was removed from FocusScope inside Modal. This was causing errors in OV when dialog displayed above modal.
