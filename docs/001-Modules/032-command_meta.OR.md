---
title: command_meta.OR
---


# Module: command_meta.OR

## Overview
:::module
  Provides the `/OR` command, which allows composing the return values of multiple commands.


:::
## Color Boxes

:::colorbox-example

  ◉ Compose the return values of multiple commands.
  
  Issue: `/OR <command-1> OR <command-2> OR <command-3> OR ...`
  
  
  
  ◉ Returns `SUCCESS` if the player has `iron_ingot x 8` or `gold_ingot x 4`
  
  Issue: `/OR has-item? Steve minecraft:iron_ingot 8 OR has-item? Steve minecraft:gold_ingot 4`


:::

## Commands
:::command
- Command Syntax: `/OR <OrGreedyCommandString rest>`
- Document:   Returns `SUCCESS` if and only if `any of` the commands returns `SUCCESS`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[or-greedy-command-string]`
- Argument Type Class: `[OrGreedyCommandString]`
:::
