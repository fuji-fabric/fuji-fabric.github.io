---
title: echo.send_title
---


# Module: echo.send_title

## Overview
:::module
  This module provides `/send-title` command.
  
  To send the `text` as `title` to a specified player.


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
- Command Syntax: `/send-title <ServerPlayerEntity player> [String mainTitle] [String subTitle] [Integer fadeInTicks] [Integer stayTicks] [Integer fadeOutTicks]`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
