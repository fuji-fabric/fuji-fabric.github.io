---
title: world.gamerule
---


# Module: world.gamerule

## Overview
:::module
  This module allows you to customize the `per-dimension gamerule`.


:::
## Color Boxes

:::colorbox-note

  ◉ How it works?
  
  In internal Minecraft, each `dimension` has a function named `getGameRules()`.
  
  It returns the `gamerules` of this `dimension`.
  
  
  
  The vanilla Minecraft only returns the `gamerules` of `minecraft:overworld`.
  
  Fuji modify the `getGameRules()` function, to let it return the `per-dimension gamerules`.
  
  
  
  ◉ How can I configure the `per-dimension gamerules`?
  
  You can modify the config file directly, and issue `/fuji reload` to apply changes.
  
  
  
  ◉ Can I use this module in vanilla dimensions?
  
  Yes, you can.


:::

:::colorbox-tip

  ◉ The logic of `/gamerule` command.
  
  The `/gamerule` command `only` operates on `minecraft:overworld` dimension.
  
  
  
  To see the `true info` of `a specified dimension`, you should use `/world info` command.
  
  
  
  ◉ Set the `per-dimension gamerules` using commands.
  
  You can install the `WorldGameRules` mod to provide such commands.
  
  See https://github.com/DrexHD/WorldGameRules


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

```json showLineNumbers title="config/fuji/modules/world/gamerule/config.json"
{
  "game_rules": [
    {
      "enable": true,
      "dimension_id": "fuji:example",
      "game_rules": {
        "boolean_rules": {
          "keepInventory": true
        },
        "int_rules": {
          "playersSleepingPercentage": 50
        }
      }
    }
  ]
}
```
</details>
:::
