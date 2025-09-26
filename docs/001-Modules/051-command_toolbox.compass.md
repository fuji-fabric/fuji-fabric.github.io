---
title: command_toolbox.compass
---


# Module: command_toolbox.compass

## Overview
:::module
  Allow you to set the target point of a compass item.


:::
## Commands
:::command
- Command Syntax: `/compass reset`
- Document:   Let the compass in hand track nothing.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/compass reset others <PlayerCollection others>`
- Document:   Let the compass in hand track nothing.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/compass track player <ServerPlayerEntity target>`
- Document:   Let the compass in hand track a specified player.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/compass track player others <PlayerCollection others> <ServerPlayerEntity target>`
- Document:   Let the compass in hand track a specified player.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/compass track pos <Dimension dimension> <BlockPos blockPos>`
- Document:   Let the compass in hand track a specified position.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/compass track pos others <PlayerCollection others> <Dimension dimension> <BlockPos blockPos>`
- Document:   Let the compass in hand track a specified position.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
