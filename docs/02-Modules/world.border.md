---
title: world.border
---


# Module: world.border

## Overview
:::module
  This module allows you to customize the `per-dimension border`.


:::
## Color Boxes

:::colorbox-warning

  ◉ The `per-dimension worldborder` since `MC 1.21.9`
  
  Since `MC 1.21.9`, the `/worldborder` command is `dimension specific`.
  
  You should only use `world.border` module when your MC version is lower than `MC 1.21.9`.


:::

:::colorbox-note

  ◉ How it works?
  
  In internal Minecraft, each `dimension` has a function named `getWorldBorder()`.
  
  It returns the `world border` of this `dimension`.
  
  
  
  The vanilla Minecraft only returns the `world border` of `minecraft:overworld`.
  
  Fuji modify the `getWorldBorder()` function, to let it return the `per-dimension border`.
  
  
  
  ◉ How can I configure the `per-dimension border`?
  
  You can modify the config file directly, and issue `/fuji reload` to apply changes.
  
  
  
  ◉ Can I use this module in vanilla dimensions?
  
  Yes, you can.


:::

:::colorbox-tip

  ◉ The logic of `/worldborder` command.
  
  The `/worldborder` command only sets the `World Border` of `minecraft:overworld`.
  
  But the `minecraft:the_nether` and `minecraft:the_end` dimensions will `sync` the `world border` of `minecraft:overworld`.


:::

:::colorbox-tip

  ◉ The semantics of options for `world border`.
  
  See: https://minecraft.wiki/w/World_border


:::

## Configurations
<Admonition type="warning" icon="" title="">
**The JSON content is provided for documentation purposes only.**

It should NOT be copied directly into your configuration folder, as the document format is not valid JSON syntax.
</Admonition>
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/world/border/config.json"
{
  /* Define the `border` for each `dimension`. */
  "borders": [
    {
      "enable": true,
      "dimension_id": "fuji:example",
      "border": {
        "center_x": 0.0,
        "center_z": 0.0,
        "size": 9.999968E13,
        "size_lerp_time": 0,
        "size_lerp_target": 0.0,
        "warning_blocks": 5,
        "warning_time": 15,
        "damage_per_block": 0.2,
        "safe_zone": 5.0
      }
    }
  ]
}
```
</details>
:::
