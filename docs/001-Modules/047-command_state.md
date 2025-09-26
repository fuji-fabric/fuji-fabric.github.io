---
title: command_state
---


# Module: command_state

## Overview
:::module
  This module allows defining a `state` using `predicate commands`.
  
  Using this defined `state`, you can:
  
  - Define commands to be executed when a player `enters` or `leaves` this `state`.
  
  - Check whether a player is currently in the `state`.
  
  - Display `placeholders` relevant to the `state`.


:::
## Color Boxes

:::colorbox-tip

  ◉ Define a `state` using `predicate commands`.
  
  A `state` is composed by `predicate commands`.
  
  
  
  You can define a `state` called `has-iron-and-gold`, with the following `predicate commands`:
  
  1. `has-item? %player:name% minecraft:iron_ingot 16`
  
  2. `has-item? %player:name% minecraft:gold_ingot 8`
  
  
  
  ◉ Integrate with `luckperms`'s `temporary permission`.
  
  Assign a `temporary permission` using `/lp group default permission settemp fuji.permission.fly true 10s`
  
  
  
  Then define a `state` to check whether a player `has specified temporary permission`.
  
  This `state` can be called `can-use-fly-command` with the following `predicate commands`:
  
  1. `has-perm? %player:name% fuji.permission.fly`
  
  
  
  Last, you can define `commands to be executed` when a player `leave this state`.
  
  For example, define commands to `turn off the flying` while the player `leaves` the `state`.
  
  
  
  ◉ Check the value of a `state` of a player.
  
  Issue: `/command-state info Steve`
  
  
  
  Besides that, the `/is-in-state? <player> <state-id>` can be used as a `predicate command`.


:::

## Configurations
<Admonition type="warning" icon="" title="">
**The following JSON content is provided for reference only.**
It must NOT be copied directly into the configuration directory, as it does not represent valid JSON syntax.
</Admonition>
:::config
- File Name: `command-state-data.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/command_state/command-state-data.json"
{
  "player_states_map": {}
}
```
</details>
:::
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/command_state/config.json"
{
  "state_descriptors": [
    {
      "enable": true,
      "id": "is-in-overworld",
      "definition": {
        "predicate_commands": [
          "is-in-world? %player:name% minecraft:overworld"
        ]
      },
      "update_interval_seconds": 3,
      "events": {
        "on_enter_this_state_commands": [
          "send-message %player:name% <green>You entered the overworld dimension."
        ],
        "on_leave_this_state_commands": [
          "send-message %player:name% <green>You left the overworld dimension."
        ]
      }
    },
    {
      "enable": true,
      "id": "has-iron-and-gold",
      "definition": {
        "predicate_commands": [
          "has-item? %player:name% minecraft:iron_ingot 16",
          "has-item? %player:name% minecraft:gold_ingot 8"
        ]
      },
      "update_interval_seconds": 3,
      "events": {
        "on_enter_this_state_commands": [
          "send-message %player:name% <green>You have `iron_ingot x 16` and `gold_ingot x 8`."
        ],
        "on_leave_this_state_commands": [
          "send-message %player:name% <green>You don't have `iron_ingot x 16` and `gold_ingot x 8`."
        ]
      }
    },
    {
      "enable": true,
      "id": "can-use-fly-command",
      "definition": {
        "predicate_commands": [
          "has-perm? %player:name% fuji.permission.fly"
        ]
      },
      "update_interval_seconds": 3,
      "events": {
        "on_enter_this_state_commands": [
          "send-message %player:name% <green>You have gained access to `/fly` command."
        ],
        "on_leave_this_state_commands": [
          "send-message %player:name% <red>You temporary `/fly` command access has expired.",
          "run as fake-op %player:name% fly false"
        ]
      }
    }
  ]
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
:::job
- Job Name: `CommandStateAutoUpdaterJob`
- Document:   This `job` is used to `check` and `update` the value of all the defined `states` for all online players.
  
  
  
  When fired, its effect is equivalent to running the `/command-state update-all` command.


:::
## Commands
:::command
- Command Syntax: `/command-state info <ServerPlayerEntity player>`
- Document:   Display the value of all `states` of the specified player.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-state list`
- Document:   List all defined `states`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-state update <StateDescriptor state>`
- Document:   Update the specified `state` for online players.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-state update-all`
- Document:   Update all defined `states` for online players.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/is-in-state? <ServerPlayerEntity player> <StateDescriptor state>`
- Document:   Returns whether the specified `state` value for the player is currently `true`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:is_in_state`
- Document:   Returns the value of specified `state` of the player.
  
  
  
  Example:
  
  - `%fuji:is_in_state is-in-overworld%`


:::
## Argument Types
:::argument-type
- Argument Type Name: `[state-id]`
- Argument Type Class: `[StateDescriptor]`
:::
