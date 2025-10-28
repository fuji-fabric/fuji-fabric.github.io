---
title: predicate
---


# Module: predicate

## Overview
:::module
  This module provides a collection of `predicate commands`.
  
  They can be used to test the `conditions`.


:::
## Color Boxes

:::colorbox-note

  ◉ How it works?
  
  A `predicate command` will return an `integer value` to represent the `SUCCESS` or `FAILED` test result.
  
  It relies on the `return value of command` in vanilla Minecraft.
  
  See https://minecraft.fandom.com/wiki/Commands/return
  
  
  
  Actually, you can also use the `predicate command` with `command block`.


:::

:::colorbox-example

  ◉ Test a condition, and then run a command if success.
  
  Issue: `/run as player Alice chain has-perm? %player:name% 4 chain say value is true`


:::

:::colorbox-example

  ◉ Test if a player is holding an apple
  
  Issue: `/command-debug is-holding? Steve minecraft:apple`
  
  
  
  ◉ Test if a player has specified string permission
  
  Issue: `/command-debug has-perm? Steve fuji.permission.back`
  
  
  
  ◉ Test if a player's health >= 10
  
  Issue: `/command-debug <=? Steve 10 %player:health%`
  
  
  
  ◉ Test if a player killed more than 100 zombies.
  
  Issue: `/command-debug <=? Steve 100 %player:statistic_raw minecraft:deaths%`
  
  
  
  ◉ Leverage the `vanilla Minecraft statistics`
  
  See: https://minecraft.fandom.com/wiki/Statistics
  
  
  
  ◉ More examples
  
  You can see more examples in `command_meta.IF` module and `command_meta.chain` module.


:::

## Commands
:::command
- Command Syntax: `/!=? <ServerPlayerEntity player> <double value> <GreedyString numericValueString>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/<=? <ServerPlayerEntity player> <double value> <GreedyString numericValueString>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/<? <ServerPlayerEntity player> <double value> <GreedyString numericValueString>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/=? <ServerPlayerEntity player> <double value> <GreedyString numericValueString>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/>=? <ServerPlayerEntity player> <double value> <GreedyString numericValueString>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/>? <ServerPlayerEntity player> <double value> <GreedyString numericValueString>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/equals? <ServerPlayerEntity player> <String expectedString> <GreedyString placeholderString>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/false? <ServerPlayerEntity player> <GreedyString placeholderString>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/has-exp-level? <ServerPlayerEntity player> <int expLevel>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/has-exp? <ServerPlayerEntity player> <int exp>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/has-item? <ServerPlayerEntity player> <ItemStackPredicateArgument itemPredicate> <int count>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/has-level? <OfflineGameProfile player> <int levelPermission>`
- Document:   Predicate to test if the player has the level-perm?


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/has-perm? <OfflineGameProfile player> <GreedyString stringPermission>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/has-players? [Integer n]`
- Document:   Predicate if online players >= n.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/is-holding? <ServerPlayerEntity player> <ItemStackPredicateArgument itemPredicate>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/is-in-gamemode? <ServerPlayerEntity player> <GameMode gameMode>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/is-in-world? <ServerPlayerEntity player> <Dimension dimension>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/is-op? <ServerPlayerEntity player>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/matches? <ServerPlayerEntity player> <String expectedString> <GreedyString placeholderString>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/true? <ServerPlayerEntity player> <GreedyString placeholderString>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
