---
"@igloo-ui/tag": major
"@igloo-ui/tag-picker": major
---

Renamed the appearance prop values for the tag component and removed the original default appearance. It now takes on the old "grey" appearance.

## BREAKING CHANGE

Anywhere Tag uses the appearance tag, it'll need to be renamed like the following:
info → progress
success → positive
warning → caution
error → negative
grey → default
default → Keep as is, it'll take on the new look
secondary → neutral
primary → primary