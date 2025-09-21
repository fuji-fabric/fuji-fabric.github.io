---
title: color.sign
---


# Module: color.sign

## Overview
:::module
  This module allows you to use `color tags` in `sign blocks`.


:::
## Color Boxes

:::colorbox-tip

  ◉ You can write `style tags` on the sign.
  
  Foe example: `<red>`, `<rb>`, `<bold>` and `<i>`.


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

```json showLineNumbers title="config/fuji/modules/color/sign/config.json"
{
  /* By default, any player can use `all style tags`.
  Enable this option requires the player to has `corresponding permission` to use that `style tag`.
  
  For example, to use `<red>` tag, requires `fuji.style.sign.red` permission. */
  "requires_corresponding_permission_to_use_style_tag": false
}
```
</details>
:::
