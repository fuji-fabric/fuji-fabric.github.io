---
title: command_meta.NOT
---


# Module: command_meta.NOT

## Overview
:::module
Provides a `/NOT <command>` command.
To execute the specified command, and `reverse` the return values of `SUCCESS` and `FAILURE`.
:::
## Color Boxes

:::colorbox-note

◉ How it works?

1. Execute the `target command` as the command source, and get the `command return value`.

1.a. If the `command return value` represents `SUCCESS` (value > 0), then return `FAILURE` (value 0).

1.b. If the `command return value` represents `FAILURE` (value = 0), then return `SUCCESS` (value 1).
:::

:::colorbox-example

◉ Use with other `predicate` commands.

Issue: /IF NOT has-item? \<player\> minecraft:apple 16 THEN say You don't have 16 apples. ELSE say You have 16 apples.
:::

## Commands
:::command
- Command Syntax: `/NOT <GreedyString command>`
- Document: Execute the command as the console, and reverse the return values of `SUCCESS` and `FAILURE`.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
