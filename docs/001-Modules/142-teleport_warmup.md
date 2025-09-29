---
title: teleport_warmup
---


# Module: teleport_warmup

## Overview
:::module
  Adds a warmup cooldown before player teleportation.


:::
## Color Boxes

:::colorbox-note

  ◉ How it works?
  
  Inside the vanilla Minecraft, there is a teleport function for teleportation.
  
  We listen on this teleport function, and wrap it with a warmup cooldown.
  
  
  
  ◉ How can I specify different cooldown time for different commands?
  
  You need to use `command_warmup` module.
  
  The `command_cooldown` module will simply treats `all` the teleportation request the same.
  
  That's because we only know there is a teleport request.
  
  But we didn't even know who creates this teleport request.
  
  So we have to treat `all` teleportation the same.
  
  
  
  ◉ What's the purpose of teleport warmup.
  
  The main purpose is to prevent the `abuse` of `teleport commands` in vanilla Minecraft.
  
  Like, use teleport commands to escape death.
  
  NOTE: The `admin players` can bypass the teleport warmup.


:::

:::colorbox-note

  ◉ The `teleport warmup` will NOT be applied if...
  
  1. The target dimension is not defined in the `effective dimensions` list.
  
  2. The target player's `age <= 3`
  
  3. The target player is admin. (level permission >= 4)
  
  4. The target player is a `fake player`.
  
  5. The target player has the `warmup bypass permission`.


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

```json showLineNumbers title="config/fuji/modules/teleport_warmup/config.json"
{
  /* The `warmup seconds` for `all` teleports. */
  "warmup_second": 3.0,
  "interruptible": {
    "enable": true,
    "interrupt_distance": 1.0,
    "interrupt_on_damaged": true,
    "interrupt_in_combat": true
  },
  "dimension": {
    "effective_dimensions": [
      "minecraft:overworld",
      "minecraft:the_nether",
      "minecraft:the_end"
    ]
  }
}
```
</details>
:::
