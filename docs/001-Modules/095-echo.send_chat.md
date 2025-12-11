---
title: echo.send_chat
---


# Module: echo.send_chat

## Overview
:::module
  This module provides `/send-chat` command.
  
  To send a `chat message` as a player.


:::
## Color Boxes

:::colorbox-example

  ◉ Send a chat message as a player.
  
  Issue: `/send-chat Steve i am steve.`
  
  
  
  ◉ Send a chat message as a player for each online player.
  
  Issue: `/foreach send-chat %player:name% i am %player:name%`


:::

## Commands
:::command
- Command Syntax: `/send-chat <ServerPlayer player> <GreedyString message>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
