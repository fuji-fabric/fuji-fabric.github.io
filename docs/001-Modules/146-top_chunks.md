---
title: top_chunks
---


# Module: top_chunks

## Overview
:::module
  Analyze all loaded chunks of the server, and find the most lagged chunks.


:::
## Color Boxes

:::colorbox-note

  ◉ How it works?
  
  This module use a `simple statistical method` to estimate the `degree of lag of a chunk`.
  
  The method is simple, it simply counts the `entities` and `block entities` inside a `chunk`.
  
  And sum up the `score` by the `type` of `entity` or `block entity`.
  
  
  
  It's simple, fast and useful.
  
  You can define the score of `a zombie` as `4`.
  
  The score of `a bee` as `15`.
  
  And the score of `a piston` as `10`.
  
  That depends on your case.
  
  Simple method often works.


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

```json showLineNumbers title="config/fuji/modules/top_chunks/config.json"
{
  /* The amount of `top chunks` to list in `all chunks`. */
  "top": {
    "rows": 10,
    "columns": 10
  }
  /* The `max distance` to search `the nearest player` for a `chunk`. */,
  "distance_to_search_nearest_player": 128
  /* Should we hide the `location` of `chunk`. */,
  "hide_location": true
  /* Define the `type` to `score` map.
  
  The `type` is `translatable key`. */,
  "type2score": {
    "entity.minecraft.armor_stand": 10,
    "block.minecraft.jukebox": 35,
    "block.minecraft.beehive": 15,
    "entity.minecraft.falling_block": 10,
    "entity.minecraft.item": 10,
    "block.minecraft.beacon": 35,
    "entity.minecraft.zoglin": 8,
    "entity.minecraft.vindicator": 20,
    "entity.minecraft.villager": 25,
    "entity.minecraft.bee": 15,
    "block.minecraft.mob_spawner": 100,
    "entity.minecraft.endermite": 5,
    "entity.minecraft.chest_boat": 5,
    "block.minecraft.conduit": 40,
    "entity.minecraft.cow": 3,
    "block.minecraft.piston": 10,
    "block.minecraft.comparator": 5,
    "entity.minecraft.creeper": 3,
    "entity.minecraft.item_frame": 3,
    "entity.minecraft.skeleton": 2,
    "entity.minecraft.cat": 8,
    "entity.minecraft.glow_item_frame": 3,
    "entity.minecraft.player": 15,
    "block.minecraft.trapped_chest": 2,
    "entity.minecraft.zombie": 4,
    "block.minecraft.chest": 1,
    "block.minecraft.dispenser": 10,
    "block.minecraft.furnace": 3,
    "entity.minecraft.zombified_piglin": 5,
    "entity.minecraft.ravager": 80,
    "entity.minecraft.panda": 5,
    "entity.minecraft.tnt": 70,
    "entity.minecraft.chicken": 3,
    "entity.minecraft.piglin": 2,
    "entity.minecraft.spider": 2,
    "default": 1,
    "entity.minecraft.evoker": 20,
    "entity.minecraft.enderman": 4,
    "entity.minecraft.boat": 5,
    "block.minecraft.smoker": 3,
    "entity.minecraft.hopper_minecart": 20,
    "block.minecraft.hopper": 8,
    "entity.minecraft.pillager": 20,
    "entity.minecraft.mooshroom": 3,
    "entity.minecraft.zombie_villager": 8,
    "entity.minecraft.wither": 55,
    "block.minecraft.daylight_detector": 25,
    "block.minecraft.blast_furnace": 4,
    "entity.minecraft.guardian": 6,
    "block.minecraft.dropper": 10,
    "entity.minecraft.drowned": 2,
    "entity.minecraft.sheep": 5,
    "block.minecraft.barrel": 1,
    "entity.minecraft.vex": 20,
    "entity.minecraft.experience_orb": 3,
    "entity.minecraft.wolf": 8
  }
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/chunks`
- Document:   An alias command to `/chunks message`.


- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/chunks gui`
- Document:   List all chunks ordered by lag score, and send in `GUI`.


- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/chunks message`
- Document:   List all chunks ordered by lag score, and send in `message`.


- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
