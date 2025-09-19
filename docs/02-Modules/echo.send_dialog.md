---
title: echo.send_dialog
---


# Module: echo.send_dialog

## Overview
:::module
  Send text using the `dialog GUI`.
  
  
  
  For example:
  
  1. `/send-dialog Steve <blue>Hello`
  
  2. `/send-dialog Steve --noButtonSlotIndex -1 <green>Confirm me.`
  
  3. `/send-dialog Steve --yesButtonCommand "say confirmed" <blue>Confirm me.`
:::
## Commands
:::command
- Command Syntax: `/send-dialog <ServerPlayerEntity player> [Integer rows] [Integer yesButtonSlotIndex] [ItemStackWrapper yesButtonItem] [String yesButtonName] [String yesButtonCommand] [Integer noButtonSlotIndex] [ItemStackWrapper noButtonItem] [String noButtonName] [String noButtonCommand] [Boolean canCloseUsingNoButton] <GreedyString title>`
- Document:   Send a dialog GUI to a player.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
