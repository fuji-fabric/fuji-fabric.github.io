---
title: command_meta.chain
---


# Module: command_meta.chain

## Overview
:::module
  This module provides the `/chain` command, which allows executing `two commands` sequentially:
  
  1. The first command, is `any command`. (Required)
  
  2. The second command, is `/chain` command. (Optionally)


:::
## Color Boxes

:::colorbox-note

  ◉ What is the purpose of `/chain` command?
  
  Its typical use-case is to `condense` two commands into one command.
  
  So that you can put `more than 1 command` in some places.
  
  For example: `/execute run chain say 1 chain say 2`
  
  
  
  ◉ The `return value` of a vanilla Minecraft command.
  
  In vanilla Minecraft, the `return value` of a command, is a `integer`.
  
  If integer less than zero, it's `failed`.
  
  If integer equals zero, it's `passed`.
  
  If integer grater than zero, it's `success`.
  
  
  
  So, we can know whether a command was executed successfully or not, based on the return value of that command.
  
  
  
  ◉ How the `/chain` command works?
  
  The `/chain` command takes `exactly one argument`, whose type is `greedy string`.
  
  A `greedy string` argument type is always be `the last` argument of a command.
  
  Once the `command parser` sees a `greedy string` argument type, it knows this is `the last` argument.
  
  So the parser will `feed` the `greedy string argument` all the remaining characters.
  
  In other words, a `greedy string argument` will `eat` all the remaining characters that are still not be consumed by preceding arguments.
  
  
  
  For example, the `/say Hello Alice` also has exactly one argument, whose type is `greedy string`.
  
  You didn't need to use `"` character to escape the `space character`, this is because the argument type of `/say` is `greedy string`.
  
  
  
  Take `/chain say 1 chain say 2` as an example:
  
  The first `/chain` command will receive the `say 1 chain say 2` as the value of `its first and only argument`.
  
  Then the `/chain` command will split the value into two parts.
  
  The first part is `say 1`, and the `/chain` command will submit it to the `command executor`.
  
  The second part is `chain say 2`, and the `/chain` command will decide whether to submit it `based on` the return value of `the previous submitted command`.
  
  It's a recursive process.


:::

:::colorbox-example

  ◉ A nested chain
  
  Issue: `/chain say 1 chain say 2 chain say 3`
  
  
  
  ◉ A breakable chain
  
  Issue: `/chain bad command here chain say 2`
  
  
  
  ◉ Use chain command with predicate command
  
  Issue: `/run as player Alice chain test-level-perm %player:name% 4 chain say value is true`
  
  
  
  ◉ Leverage the `/execute if` command.
  
  Issue: `/chain execute if block ~ ~-1 ~ minecraft:diamond_block if entity @s[nbt={Inventory:[{id:"minecraft:diamond"}]}] chain say You are standing on diamond block and have diamond.`
  
  NOTE: This use-case is similar to `command_meta.if` module.


:::

## Commands
:::command
- Command Syntax: `/chain <ChainGreedyCommandString rest>`
- Document:   Chain commands and executes them in sequence, the chain will break if the previous one command fails.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[chain-greedy-command-string]`
- Argument Type Class: `[ChainGreedyCommandString]`
:::
