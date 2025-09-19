---
title: command_meta.run
---


# Module: command_meta.run

## Overview
:::module
  Provides `/run` command, to run a command with context.
:::
## Color Boxes

:::colorbox-warning

  ◉ Be careful with the vanilla Minecraft `target selector`.
  
  The vanilla Minecraft `target selectors` are: `@a`, `@e`, `@n`, `@p`, `@r` and `@s`.
  
  They are used to select the value for `Player` argument type and `Entity` argument type:
  
  1. The `@a` in `/give @a minecraft:apple` will `select` all online players. (Player Argument)
  
  2. The `@e` in `/kill @e` will `select` all entities. (Entity Argument)
  
  Remember, the `target selector` can only be used to select specific `argument types`, like the `Player` and `Entity`.
  
  
  
  However, the `%player:name%` is a `placeholder` which will always be replaced with `the contextual player`.
  
  If you want to specify the name of `the contextual player`, you should use a `placeholder`, because it always works.
  
  For example:
  
  1. `/run as console say I am @s` will say `I am @s`
  
  2. `/run as console say I am %player:name%` will say `I am Steve` (Assume that your account is named `Steve`)
  
  
  
  NOTE: The `@s` does work if you use `/execute as @a run say I am @s` (If you actually know what you are doing.)
  
  
  
  Anyway, if you are trying to mix the usage of `target selector` and `placeholders`, you must be careful with the `semantics`.
  
  
  
  ◉ The semantics of `@p` and `%player:name%`.
  
  All fuji commands that execute a command, will try to parse the `placeholders`.
  
  So, you can insert placeholders like `%player:name%` in `/run as console say I am %player:name%` command.
  
  
  
  The `@p` is just a `target selector`, you can use it with the `/execute` command.
  
  However, you should not use `/run as console give @p minecraft:apple`.
  
  The `@p` will select `the nearest player` as the value of `Player Argument`.
  
  Then here comes the question: `Which player is considered as the nearest player to the console?`
  
  The answer is: The `console` is considered as a dummy player in the spawnpoint of `minecraft:overworld`.
  
  So if you use `@p` with `/run as console` command, then there will be `in-consistent`.
  
  The player referred to by the `@p` will be in-consistent.
  
  It depends on which player is the closest player to the spawnpoint of `minecraft:overworld` at that time.
:::

:::colorbox-note

  ◉ What is the difference between `/run` and `/execute` command?
  
  1. The main purpose of `/run` command is to `modify the command context` while executing a `command` instance.
  
  2. The `/run` command will parse `placeholders` like `%player:name%`. (However, you can still use vanilla target selector, but NOT recommended)
  
  3. The `/run as {player/fake-op/console}` allows you to switch the `role` of the `command source` easily.
  
  
  
  ◉ A `command` is executed with a `command context`.
  
  In internal Minecraft, when you submit a `command` to the `command executor`. You need to provide a `command context`.
  
  A `command context` contains important information like:
  
  1. `the command source`
  
  2. `the value of command arguments`
  
  3. `the executing dimension`
  
  4. `the execution position`
  
  5. `the executing permission level`
  
  And more.
  
  
  
  ◉ The `/run` command can be used to switch the `command context`.
  
  You can use `/run as player` to modify the `command source` to another player.
  
  If player `Alice` issues the `/run as player Bob say I am %player:name%`.
  
  Then the `initializing command source` is `Alice`, and `executing command source` is `Bob`.
  
  We will report `command exception` to both the `initializing command source` and `executing command source`.
  
  We will use player `Bob` as the `contextual player` to `parse placeholders`.
  
  So the result is: The player `Bob` executes the `/say I am Bob` command.
  
  
  
  ◉ How the `/run as fake-op` works?
  
  When you issue `/run as fake-op Alice say Hi`, the `/run` command will modify the `command context`.
  
  To make the `command executor` treat the player `Alice` as if he has a `level permission` of `4`.
  
  
  
  The effect is like: We `/op` the player `Alice`, and the console executes `/run as player Alice say Hi`, then we `/deop` the player `Alice`.
  
  However, we didn't actually `/op` the player `Alice`.
  
  What we do is simple, we just tell the `command executor` to treat the player `Alice` as if he has a `level permission` of `4` when executing `this command` instance.
:::

:::colorbox-example

  ◉ Execute a command as a specified player.
  
  Issue: `/run as player Alice back`
  
  
  
  ◉ Execute a command as a fake-op.
  
  Issue: `/run as fake-op Alice give %player:name% minecraft:apple 1`
  
  
  
  ◉ Give random amount of diamonds to online players.
  
  Issue: `/run as console give @a minecraft:diamond %fuji:random 8 32%`
  
  
  
  ◉ Give online players random amount of diamonds.
  
  Issue: `/run as console foreach give %fuji:escape player:name% minecraft:diamond %fuji:escape fuji:random 8 32 1%`
:::

## Commands
:::command
- Command Syntax: `/run as console <GreedyString rest>`
- Document:   Execute a command as console.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/run as fake-op <ServerPlayerEntity player> <GreedyString rest>`
- Document:   Execute a command as a player with fake-op.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/run as player <ServerPlayerEntity player> <GreedyString rest>`
- Document:   Execute a command as a player.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
