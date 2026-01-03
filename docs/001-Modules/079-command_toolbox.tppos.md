---
title: command_toolbox.tppos
---


# Module: command_toolbox.tppos

## Overview
:::module
  Provides `/tppos` command.
  
  A `unified` and `powerful` teleport command.
  
  
  
  For example:
  
  - `/tppos --z 64 --x 32 --y 128` to teleport to `a specified position`
  
  - `/tppos --others Steve` to specify the `target player`.
  
  - `/tppos offline Alex` to teleport to the `offline position of Alex`.
  
  - `/tppos --dimension` to specify the `target dimension`, and start `a random tp`.
  
  - `/tppos --minRange 1000 --maxRange 2000` to specify the setup for `a random tp`.
  
  - `/tppos here @a` to teleport `all online players` to `you`.
  
  - `/tppos --biome minecraft:mushroom_fields`


:::
## Commands
:::command
- Command Syntax: `/tppos [Dimension dimension] [Double x] [Double y] [Double z] [Float yaw] [Float pitch] [Integer centerX] [Integer centerZ] [Boolean circle] [Integer minRange] [Integer maxRange] [Integer minY] [Integer maxY] [Integer maxTryTimes] [Integer asyncChunkLoadingTimeoutTicks] [Integer chunkInhabitedTimeLowerThanTicks] [BiomeId biome]`
- Document:   The unified teleport command.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/tppos here <PlayerCollection targets>`
- Document:   Teleport `others` to `you`.
  
  
  
  For example:
  
  1. `/tppos here Steve` to teleport `Steve` to `you`.
  
  2. `/tppos here @a` to teleport `all online players` to `you`.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/tppos offline <OfflinePlayerName player>`
- Document:   Teleport to the offline position of a player.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/tppos others <PlayerCollection others> [Dimension dimension] [Double x] [Double y] [Double z] [Float yaw] [Float pitch] [Integer centerX] [Integer centerZ] [Boolean circle] [Integer minRange] [Integer maxRange] [Integer minY] [Integer maxY] [Integer maxTryTimes] [Integer asyncChunkLoadingTimeoutTicks] [Integer chunkInhabitedTimeLowerThanTicks] [BiomeId biome]`
- Document:   The unified teleport command.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
