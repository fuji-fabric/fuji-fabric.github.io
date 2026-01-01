---
title: anti_build
---


# Module: anti_build

## Overview
:::module
  This module `bans` specific player `actions`.
  
  
  
  The `actions` can be:
  
  1. Break a specified block.
  
  2. Place a specified block.
  
  3. Interact with a specified item.
  
  4. Interact with a specified block.
  
  5. Interact with a specified entity.
  
  6. Attack a specified entity.


:::
## Color Boxes

:::colorbox-example

  ◉ To ban the placement of TNT block.
  
  Add the `minecraft:tnt` into the `place_block` list in config file.
  
  
  
  ◉ To ban the placement of TNT block, but allow player Alice to use it.
  
  Assign a `bypass permission` for that player.
  
  Issue: `/lp user Alice permission set fuji.anti_build.place_block.bypass.minecraft:tnt`.
  
  
  
  ◉ To `ban` or `allow` the player Alice to do a specific action explicitly.
  
  Assign a `override permission` for that player.
  
  
  
  Issue: `/lp user Alice permission set fuji.anti_build.break_block.override.minecraft:grass_block false`
  
  It will `ban` the player Alice from breaking `minecraft:grass_block` block.
  
  
  
  Issue: `/lp user Alice permission set fuji.anti_build.break_block.override.minecraft:grass_block true`
  
  It will `allow` the player Alice to break `minecraft:grass_block` block.
  
  
  
  ◉ To ban the placement of `any` block.
  
  Add the `*` into the `place_block` list in config file.


:::

:::colorbox-example

  ◉ Ban the `placement` of `mushroom` blocks in `minecraft:the_end` dimension.
  
  Issue:
  
  1. `/lp group default permission set fuji.anti_build.place_block.override.minecraft:red_mushroom false world=the_end`
  
  2. `/lp group default permission set fuji.anti_build.place_block.override.minecraft:brown_mushroom false world=the_end`


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

```json showLineNumbers title="config/fuji/modules/anti_build/config.json"
{
  "anti_types": {
    "break_block": {
      "enable": false,
      "id": [
        "minecraft:gold_block"
      ]
    },
    "place_block": {
      "enable": false,
      "id": [
        "minecraft:tnt"
      ]
    },
    "interact_item": {
      "enable": false,
      "id": [
        "minecraft:lava_bucket"
      ]
    },
    "interact_block": {
      "enable": false,
      "id": [
        "minecraft:lever"
      ]
    },
    "interact_entity": {
      "enable": false,
      "id": [
        "minecraft:villager"
      ]
    },
    "attack_entity": {
      "enable": false,
      "id": [
        "minecraft:villager"
      ]
    }
  }
}
```
</details>
:::
