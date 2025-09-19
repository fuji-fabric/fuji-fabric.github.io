---
title: anti_build
---


# Module: anti_build

## Overview
:::module
This module allows you to ban `types of actions` for players.

Currently supported types are:
1. Break a specified block.
2. Place a specified block.
3. Interact with a specified item.
4. Interact with a specified block.
5. Interact with a specified entity.
6. Attack a specified entity.
:::
## Color Boxes

:::colorbox-tip

Read the document to see the definition of `identifier` in Minecraft.
:::

:::colorbox-tip

Use the `command suggestion` from `luckperms` mod to see the supported types by this module.
:::

:::colorbox-example

◉ To ban the placement of TNT block:

Just add the `minecraft:tnt` into the `place_block` list in config file.



◉ To ban the placement of TNT block, but allow player Alice to use it.

Grant a `bypass permission` for that player: `/lp user Alice permission set fuji.anti_build.place_block.bypass.minecraft:tnt`.



◉ To assign a override permission for a player explicitly.

Issue: `/lp user Alice permission set fuji.anti_build.break_block.override.minecraft:grass_block false`

This will `dis-allow` the player Alice to `break a minecraft:grass_block block`.



◉ Dis-allow to place `any` blocks.

Use `*` as the wildcard character, put it into the `place_block` list.
:::

:::colorbox-example

◉ Ban the `placement` of `mushroom` in `minecraft:the_end` dimension.

Issue:

1. `/lp group default permission set fuji.anti_build.place_block.override.minecraft:red_mushroom false world=the_end`

2. `/lp group default permission set fuji.anti_build.place_block.override.minecraft:brown_mushroom false world=the_end`
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

```json showLineNumbers title="config/fuji/modules/anti_build/config.json"
{
  "anti_types": {
    "break_block": {
      "enable": true,
      "id": [
        "minecraft:gold_block"
      ]
    },
    "place_block": {
      "enable": true,
      "id": [
        "minecraft:tnt"
      ]
    },
    "interact_item": {
      "enable": true,
      "id": [
        "minecraft:lava_bucket"
      ]
    },
    "interact_block": {
      "enable": true,
      "id": [
        "minecraft:lever"
      ]
    },
    "interact_entity": {
      "enable": true,
      "id": [
        "minecraft:villager"
      ]
    },
    "attack_entity": {
      "enable": true,
      "id": [
        "minecraft:villager"
      ]
    }
  }
}
```
</details>
:::
