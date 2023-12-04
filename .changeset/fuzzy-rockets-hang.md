---
"@igloo-ui/disclosure": major
---

Separated the controlled and uncontrolled expanded props.

  ## BREAKING CHANGE

  The defaultExpanded prop was added, which means isExpanded may need to be exchanged for this new prop.
  If you use isExpanded to make the disclosure expanded by default, rename it to defaultExpanded. 
  If you use isExpanded to open/close the disclosure programmatically, keep isExpanded. 
  Rule of thumb: If isExpanded was used without onOpen and onClose, it most likely has to be renamed to defaultExpanded.