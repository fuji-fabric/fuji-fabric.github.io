---
title: echo.send_bossbar
---


# Module: echo.send_bossbar

## Overview
:::module
  This module provides `/send-bossbar` command.
  
  To send the `text` as the `bossbar` to a specified player.


:::
## Color Boxes

:::colorbox-example

  ◉ A simple example.
  
  Issue: `/send-bossbar Alice Hello World`
  
  
  
  ◉ All in one example.
  
  Issue: `/send-bossbar Alice --stepType BACKWARD --totalMs 5000 --color PURPLE --style NOTCHED_6 --notifyMeOnComplete true --commandList "say the player %player:name% is healed|heal others %player:name%" <rb>Healing is coming [elapsed_time]/[total_time]/[left_time]`


:::

## Commands
:::command
- Command Syntax: `/send-bossbar <ServerPlayer player> [Integer totalMs] [BossBarColor color] [BossBarOverlay style] [StringList commandList] [Boolean notifyMeOnComplete] [StepType stepType] <GreedyString title>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
