---
title: echo.send_toast
---


# Module: echo.send_toast

## Overview
:::module
This module provides `/send-toast` command.
To send the `text` as `toast` to a specified player.
:::
## Color Boxes

:::colorbox-tip

You can send a toast with a custom icon.

The syntax is the same as `/give` command.



For example:

1. `/send-toast @s --icon "minecraft:player_head[minecraft:profile=Steve]" <rb>Hello World`
:::

:::colorbox-example

◉ Send a toast to a player.

Issue: `/send-toast Alice --icon minecraft:golden_carrot <rb>eat this carrot`
:::

## Commands
:::command
- Command Syntax: `/send-toast <ServerPlayerEntity player> [AdvancementFrame toastType] [ItemStackWrapper icon] <GreedyString message>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[advancement-frame]`
- Argument Type Class: `[AdvancementFrame]`
:::
