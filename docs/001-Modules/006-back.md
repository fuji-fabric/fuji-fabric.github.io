---
title: back
---


# Module: back

## Overview
:::module
  This module allows a player to `teleport` to their `last location`.
  
  The `last location` can be:
  
  - Their last teleport location.
  
  - Their last death location.


:::
## Configurations
<Admonition type="warning" icon="" title="">
**The following JSON content is provided for reference only.**
It must NOT be copied directly into the configuration directory, as it does not represent valid JSON syntax.
</Admonition>
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/back/config.json"
{
  /* Do not push the current `location` if it is too `close` to the most recently pushed `location`. */
  "do_not_push_back_location_if_closer_than_n_blocks": 32.0,
  "push_back_location_on_player_death": true,
  "push_back_location_on_player_teleport": true,
  "max_back_locations_to_save": 3
}
```
</details>
:::
:::config
- File Name: `location-history.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/back/location-history.json"
{
  "player2history": {}
}
```
</details>
:::
## Jobs
:::job
- Job Name: `ConfigurationHandlerWriteStorageJob`
- Document:   This `job` is used to `write data` from `memory` into `storage`.
  
  
  
  NOTE: If you modify the `file` in `disk`, then you need to issue `/fuji reload` as soon as possible.
  
  NOTE: The `disk` will be `overridden` when `fire` this job.


:::
## Commands
:::command
- Command Syntax: `/back`
- Document:   Teleport to the last `one` location in the location history.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back 1 <Dimension targetDimension>`
- Document:   Teleport to the last `one` location in specified `dimension` in the location history.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back <int lastNLocation>`
- Document:   Teleport to the last `N` location in the location history.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back <int lastNLocation> <Dimension targetDimension>`
- Document:   Teleport to the last `N` location in specified `dimension` in the location history.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back clear <ServerPlayer player>`
- Document:   Clear the location history.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back clear others <PlayerCollection others>`
- Document:   Clear the location history.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back list`
- Document:   List the locations in the location history.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back list <ServerPlayer player>`
- Document:   List the locations in the location history.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back push`
- Document:   Push current location into the location history.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back push others <PlayerCollection others>`
- Document:   Push current location into the location history.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
