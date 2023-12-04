---
"@igloo-ui/disclosure": major
---

Separated the controlled and uncontrolled expanded props.

  ## BREAKING CHANGE

  defaultExpanded prop was added. isExpanded props that were being used as uncontrolled must be updated to use defaultExpanded. Once isExpanded is set, the component becomes controlled and clicking the disclosure header will no longer expand or collapse unless the user specifies this.