---
title: color.anvil
---


# Module: color.anvil

## Overview
:::module
  This module introduces `style tags` in `anvil block`.


:::
## Configurations
<Admonition type="warning" icon="" title="">
**The following JSON content is provided for reference only.**
It must NOT be copied directly into the configuration directory, as it does not represent valid JSON syntax.
</Admonition>
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/color/anvil/config.json"
{
  /* By default, any player can use `all style tags`.
  Enable this option requires the player to has `corresponding permission` to use that `style tag`.
  
  For example, to use `<red>` tag, requires `fuji.style.anvil.red` permission. */
  "requires_corresponding_permission_to_use_style_tag": false
}
```
</details>
:::
