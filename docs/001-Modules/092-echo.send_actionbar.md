---
title: echo.send_actionbar
---


# Module: echo.send_actionbar

## Overview
:::module
  This module provides `/send-actionbar` command.
  
  To send the `text` as `action bar` to a specified player.


:::
## Color Boxes

:::colorbox-example

  ◉ Send a title to a player.
  
  Issue: `/send-title Alice --mainTitle "<rainbow>Hello" --subTitle "<blue>World" --fadeInTicks 60 --stayTicks 60 --fadeOutTicks 60`
  
  
  
  ◉ Send a title to online players.
  
  Issue: `/foreach send-title %player:name% --mainTitle "<rainbow>Hello %player:name%"`


:::

## Commands
:::command
- Command Syntax: `/send-actionbar <ServerPlayer player> <GreedyString rest>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
:::
