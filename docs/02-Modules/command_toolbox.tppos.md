---
title: command_toolbox.tppos
---


# Module: command_toolbox.tppos

## Overview
:::module
  Provides `/tppos` command.
  
  A `unified` and `powerful` teleport command.
  
  
  
  For example:
  
  1. `/tppos --z 64 --x 32 --y 128` to teleport to `a specified position`
  
  2. `/tppos --others Steve` to specify the `target player`.
  
  3. `/tppos offline Alex` to teleport to the `offline position of Alex`.
  
  4. `/tppos --dimension` to specify the `target dimension`, and start `a random tp`.
  
  5. `/tppos --minRange 1000 --maxRange 2000` to specify the setup for `a random tp`.
  
  6. `/tppos here @a` to teleport `all online players` to `you`.
:::
## Commands
:::command
- Command Syntax: `/tppos [Dimension dimension] [Double x] [Double y] [Double z] [Float yaw] [Float pitch] [Integer centerX] [Integer centerZ] [Boolean circle] [Integer minRange] [Integer maxRange] [Integer minY] [Integer maxY] [Integer maxTryTimes] [Integer asyncChunkLoadingTimeoutTicks] [Integer chunkInhabitedTimeLowerThanTicks] [BiomeId biome]`
- Document:   The unified teleport command.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/tppos here <PlayerCollection targets>`
- Document:   Teleport `others` to `you`.
  
  
  
  For example:
  
  1. `/tppos here Steve` to teleport `Steve` to `you`.
  
  2. `/tppos here @a` to teleport `all online players` to `you`.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/tppos offline <OfflinePlayerName player>`
- Document:   Teleport to the offline position of a player.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/tppos others <PlayerCollection others> [Dimension dimension] [Double x] [Double y] [Double z] [Float yaw] [Float pitch] [Integer centerX] [Integer centerZ] [Boolean circle] [Integer minRange] [Integer maxRange] [Integer minY] [Integer maxY] [Integer maxTryTimes] [Integer asyncChunkLoadingTimeoutTicks] [Integer chunkInhabitedTimeLowerThanTicks] [BiomeId biome]`
- Document:   The unified teleport command.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
