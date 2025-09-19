---
title: command_toolbox.speed
---


# Module: command_toolbox.speed

## Overview
:::module
  Provides `/speed` command, to:
  
  1. Modify the `walk speed`.
  
  2. Modify the `fly speed`.


:::
## Color Boxes

:::colorbox-note

  ◉ Re-join the server to fix the client-side camera broken.
  
  When a new `speed` is set, the client's `camera` will be broken.
  
  You have to re-join the server, to fix the client-side camera settings.


:::

:::colorbox-example

  ◉ Double the `walk speed`
  
  The default value is `0.1`
  
  Issue: `/speed walk set Steve 0.2`
  
  
  
  ◉ Double the `fly speed`
  
  The default value is `0.05`
  
  Issue: `/speed fly set Steve 0.1`


:::

## Commands
:::command
- Command Syntax: `/speed fly get <ServerPlayerEntity target>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/speed fly reset <ServerPlayerEntity target>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/speed fly set <ServerPlayerEntity target> <float speed>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/speed walk get <ServerPlayerEntity target>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/speed walk reset <ServerPlayerEntity target>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/speed walk set <ServerPlayerEntity target> <float speed>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
