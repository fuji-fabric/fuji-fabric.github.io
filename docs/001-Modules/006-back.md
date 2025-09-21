---
title: back
---


# Module: back

## Overview
:::module
  This module allows players to `teleport back` to:
  
  - Their last teleport point.
  
  - Their death location.


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
  /* Ignore `this teleport` if the `distance` is too close in between. */
  "ignore_distance": 32.0
  /* Should we save the location on player death? */,
  "enable_back_on_death": true
  /* Should we save the location on player teleport? */,
  "enable_back_on_teleport": true
  /* Max saved location slots. */,
  "max_back_location_entries_to_save": 3
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
- Document:   Back to the specified location.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back 1 <Dimension targetDimension>`
- Document:   Back to the specified location.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back clear others <PlayerCollection others>`
- Document:   Clear the back location history.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back clear <ServerPlayerEntity player>`
- Document:   Clear the back location history.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back <int lastNLocation>`
- Document:   Back to the specified location.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back <int lastNLocation> <Dimension targetDimension>`
- Document:   Back to the specified location.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back list`
- Document:   List the back location history.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back list <ServerPlayerEntity player>`
- Document:   List the back location history.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back push`
- Document:   Push current location into the back location history.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/back push others <PlayerCollection others>`
- Document:   Push current location into the back location history.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
