---
'@igloo-ui/action-menu': major
---

Fixed some styling issues with the Action Menu. Moved two callbacks in action menu from ActionMenuProps to the props of the option.

## BREAKING CHANGE

ActionMenu is called differently when using the callbacks for when an option is clicked or determining if the menu is closed on select. They were removed from ActionMenuProps and added to the option props instead.
