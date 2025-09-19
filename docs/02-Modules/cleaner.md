---
title: cleaner
---


# Module: cleaner

## Overview
:::module
This module provides the `entity` cleaner.
It monitors defined `conditions` and removes `entities` accordingly.
:::
## Color Boxes

:::colorbox-note

◉ The vanilla Minecraft `Item Entity` de-spawning.

In `vanilla Minecraft`, all `item entities` automatically de-spawn after `6000 ticks (5 minutes)`.

In most case, the vanilla `item de-spawning mechanism` is sufficient to meet your needs.



It's strongly recommended to use the `cleaner` module only for handling `special case`.

For example, if your players have built a `large mob farm`, which produces excessive amount of `ender pearls`.

You may define a `clean matcher` to match the `ender pearl` entity.



◉ Cleaning scope of the `cleaner` module.

This module exclusively targets `entities`.

It can not be used to clean `blocks` or `block entities`

NOTE: The `block entity` is not a true `entity` within Minecraft internal.
:::

:::colorbox-note

◉ Supported `cleanup methods`

- `KILL`: Remove the entity as if it had `died`, triggering the `entity death event`. (Loot will be dropped.)

- `DISCARD`: Remove the entity by `discarding` it, without triggering any events. (No loot will be dropped.)



NOTE: For `item entity`, there is no significant difference between the available cleanup methods.
:::

:::colorbox-note

◉ What is a `translatable key`?

A `translatable key` is an identifier used internally by Minecraft to reference `items`, `block-based items`, and other `entities`.

It corresponds to the keys defined in Minecraft's `translation files`.

An example translation file can be found here:

https://github.com/sakurawald/fuji/blob/dev/.github/files/en_us.json



Common key formats include:

- `item.minecraft.*`

- `block.minecraft.*`

- `entity.minecraft.*`
:::

:::colorbox-example

◉ Define a `matcher` to clean `item entities`.

A `matcher` identifies entities using their `translatable key`.

- For `minecraft:gold_ingot` item-entity, the key is `item.minecraft.gold_ingot`

- For `minecraft:gold_block` item-entity, the key is `block.minecraft.gold_block`



Although the key for a block-based item begins with `block.`, it still refers to an `item entity` whose stack contains `minecraft:gold_block`.



◉ Define a `matcher` to clean `living entity`.

To enable cleaning of living entities:

1. Set `ignore_living_entity` to `false`.

2. Define a `matcher` for the target entity, for example: `entity.minecraft.skeleton`.
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

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/cleaner/config.json"
{
  /* The `cron` expression used to trigger entity `cleaner`. */
  "cron": "0 * * ? * * *"
  /* Ignore and never remove entities that meet the condition. */,
  "ignore": {
    "ignore_item_entity": false,
    "ignore_living_entity": true,
    "ignore_named_entity": true,
    "ignore_entity_with_vehicle": true,
    "ignore_entity_with_passengers": true,
    "ignore_glowing_entity": true,
    "ignore_leashed_entity": true
  }
  /* The `translatable key` to `age` map.
  
  The `translatable key` defines which `entity` should we remove.
  The `living ticks` says that we `only` removes the entity whose `age` greater than defined value.
  
  The unit of `age` is `game tick` (20 ticks = 1 sec). */,
  "matchers": [
    {
      "enable": false,
      "translatable_key": "block.minecraft.sand",
      "lives_longer_than_age": 1200,
      "cleanup_method": "DISCARD"
    },
    {
      "enable": false,
      "translatable_key": "item.minecraft.ender_pearl",
      "lives_longer_than_age": 1200,
      "cleanup_method": "DISCARD"
    },
    {
      "enable": false,
      "translatable_key": "block.minecraft.white_carpet",
      "lives_longer_than_age": 1200,
      "cleanup_method": "DISCARD"
    },
    {
      "enable": false,
      "translatable_key": "block.minecraft.cobblestone",
      "lives_longer_than_age": 1200,
      "cleanup_method": "DISCARD"
    },
    {
      "enable": false,
      "translatable_key": "entity.minecraft.skeleton",
      "lives_longer_than_age": 1200,
      "cleanup_method": "KILL"
    }
  ]
}
```
</details>
:::
## Jobs
:::job
- Job Name: `CleanerJob`
- Document: This `job` is used to execute `/cleaner clean` command automatically.
:::
## Commands
:::command
- Command Syntax: `/cleaner clean`
- Document: Perform entity cleanup, and generate a cleanup report if any entities are removed.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
