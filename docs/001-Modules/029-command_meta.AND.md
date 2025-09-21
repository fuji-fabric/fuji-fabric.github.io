---
title: command_meta.AND
---


# Module: command_meta.AND

## Overview
:::module
  Provides the `/AND` command, which allows composing the return values of multiple commands.


:::
## Color Boxes

:::colorbox-example

  ◉ Compose the return values of multiple commands.
  
  Issue: `/AND <command-1> AND <command-2> AND <command-3> AND ...`
  
  
  
  ◉ Returns `SUCCESS` if the player has `iron_ingot x 8` and `gold_ingot x 4`
  
  Issue: `/AND has-item? Steve minecraft:iron_ingot 8 AND has-item? Steve minecraft:gold_ingot 4`


:::

## Commands
:::command
- Command Syntax: `/AND <GreedyString rest>`
- Document:   Returns `SUCCESS` if and only if `all of` the commands returns `SUCCESS`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
