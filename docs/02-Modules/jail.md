---
title: jail
---


# Module: jail

## Overview
:::module
This module allows you to define a `jail`.
It can be used to `punish` a player with bad behaviour, without `banning` it.
:::
## Color Boxes

:::colorbox-note

◉ How it works?

1. Each `jail descriptor` is used to define a `jail` instance.

1.a. You can `create` a descriptor using the `/jail create` command.

1.b. You can `delete` a descriptor using the `/jail delete` command.

1.c. You can `list` all created descriptors using the `/jail list` command.

2. Each `jail` can hold `more than 1 player`.

2.a. Each `jailed player` is recorded with a `jail record`.

2.b. A `player` can only be put in one `jail` at a time.

3. Each `jail` has a `position` property.

3.a. It's `initialized` to your current position when you run the `/jail create` command.

3.b. You can set a new position for it using `/jail set-position` command.

3.c. You can teleport to the position using `/jail tp` command.

4. You can `put` a `player` into a `jail`, or `un-put` it.

4.a. To `put`, use `/jail put` command.

4.b. To `un-put`, use `/jail un-put` command.

4.c. To query the info, use `/jail where` command.



◉ The difference between `banned players` and `jailed players`.

1. For a `banned players`: They can't `join` the server.

2. For a `jailed players`: They can `join` the server.



 NOTE: A `jail` is only used to hold information.

 You need to write `punishment commands` in `onJailedEvent` and `onUnjailedEvent`.

 You can also write `patrol commands` to check and restrict the actions of the jailed players.
:::

:::colorbox-note

◉ The `placeholders` to the `position` of a `jail`.

1. `%fuji:jail_dimension%`

2. `%fuji:jail_x%`

3. `%fuji:jail_y%`

4. `%fuji:jail_z%`

5. `%fuji:jail_yaw%`

6. `%fuji:jail_pitch%`



◉ Restrict the `movement` of `jailed players` within a specified area.

With the help of `position placeholders`, you can write `patrol commands` to restrict movements.

You can define commands to restrict the movement of jailed players within a specified area.

1. `/execute as %player:name% at @s unless dimension %fuji:jail_dimension% run execute in %fuji:jail_dimension% run tp @s %fuji:jail_x% %fuji:jail_y% %fuji:jail_z%`

2. `/execute as %player:name% if entity @s[x=%fuji:jail_x%,y=%fuji:jail_y%,z=%fuji:jail_z%,distance=8..] run tp @s %fuji:jail_x% %fuji:jail_y% %fuji:jail_z%`



NOTE: If you have enabled the `teleport_warmup` module, remember to assign the `warmup bypass` permission for the `jailed` user group.

So that `jailed players` can be `instantly` teleported back to the `position of the jail`.

1. `/lp group jailed permission set fuji.teleport_warmup.bypass`



NOTE: To disable the `vanilla Minecraft command feedbacks`, you can issue:

1. `/gamerule sendCommandFeedback false`
:::

:::colorbox-tip

◉ Understand the `execution time` of a `command`.

Some commands require the `target player` online to work.

For example, the `/send-message %player:name% You are jailed.` didn't work if the target player is `off-line`.

In this case, you can use the `command_meta.when_online` module, to submit and schedule a command.

Issue: `/when-online %player:name% send-message %player:name% You are jailed.`



◉ Create a `luckperms group` for `jailed players`.

You can create a `luckperms group` for `jailed players`.

And assign the `positive permissions` and `negative permissions` to `jailed players`.

Use the `permissions` to control the behaviours of `jailed players`.



◉ Restrict the actions of `jailed players`.

You can integrate with the `anti_build` module.

To assign `negative permissions` to `jailed user group`, to limit the actions of them.

Issue:

1. `/lp group jailed permission set fuji.anti_build.break_block.override.* false`

2. `/lp group jailed permission set fuji.anti_build.place_block.override.* false`

3. `/lp group jailed permission set fuji.anti_build.interact_item.override.* false`

4. `/lp group jailed permission set fuji.anti_build.interact_entity.override.* false`

5. `/lp group jailed permission set fuji.anti_build.interact_block.override.* false`

NOTE: You need to enable the `wildcard permission` feature in `luckperms` mod config.
:::

:::colorbox-tip

◉ Restrict `jailed players` to using only allowed commands.

You can integrate with `command_permission` module.

Issue:

1. `/lp group jailed permission set fuji.permission.* false`

Dis-allow to use `all commands`.



2. `/lp group jailed permission set fuji.permission.back true`

Allow to use the `/back` command.
:::

:::colorbox-example

◉ Create a `jail` in your current position.

Issue: `/jail create <jail-id>`



◉ Set the position of a jail to your current position.

Issue: `/jail set-position <jail-id>`



◉ Teleport to the position of a jail.

Issue: `/jail tp <jail-id>`



◉ List all created jails.

Issue: `/jail list`



◉ Put a player into a jail.

Issue:

1. `/jail put Steve <jail-id> Steal items.`

2. `/jail put Steve <jail-id> --duration 1s2m3h4d5w6M7y Steal items.`



◉ Un-put a player from the jail.

Issue: `/jail unput Steve`



◉ Query which jail a player is in.

Issue: `/jail where Steve`
:::

## Configurations
<Admonition type="warning" icon="" title="">
**The JSON content is provided for documentation purposes only.**

It should NOT be copied directly into your configuration folder, as the document format is not valid JSON syntax.
</Admonition>
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/jail/config.json"
{
  "no_jail_status_text": "<grey>[None]",
  "jailed_player_tab_list_text": "<dark_red>[Prisoner] %player:name%</dark_red>"
  /* A `jail descriptor` is used to define a `jail`. */,
  "jail_descriptors": [
    {
      "id": "example",
      "display_name": "<blue>The Great Jail</blue>",
      "default_jailed_duration": "15m",
      "count_remaining_jail_seconds_when_prisoners_offline": false,
      "global_position": {
        "level": "minecraft:overworld",
        "x": 0.0,
        "y": 64.0,
        "z": 0.0,
        "yaw": 0.0,
        "pitch": 0.0
      },
      "events": {
        "on_jailed_event": [
          "send-broadcast <dark_red><b>The player %player:displayname% has been jailed.<newline>◉ Duration: %fuji:jail_specified_duration%<newline>◉ Reason: %fuji:jail_reason%",
          "lp user %player:name% permission set group.jailed",
          "when-online %player:name% send-title %player:name% --mainTitle \"<dark_red>You have been jailed.\""
        ],
        "on_unjailed_event": [
          "send-broadcast <green><b>The player %player:displayname% has been un-jailed.",
          "lp user %player:name% permission unset group.jailed",
          "when-online %player:name% send-title %player:name% --mainTitle \"<green>You have been un-jailed.\""
        ]
      },
      "patrol": {
        "patrol_interval_mill_seconds": 3000,
        "patrol_commands": [
          "execute as %player:name% at @s unless dimension %fuji:jail_dimension% run execute in %fuji:jail_dimension% run tp @s %fuji:jail_x% %fuji:jail_y% %fuji:jail_z%",
          "execute as %player:name% if entity @s[x=%fuji:jail_x%,y=%fuji:jail_y%,z=%fuji:jail_z%,distance=8..] run tp @s %fuji:jail_x% %fuji:jail_y% %fuji:jail_z%"
        ]
      }
    }
  ]
}
```
</details>
:::
:::config
- File Name: `jail-data.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/jail/jail-data.json"
{
  "jail_data_nodes": []
}
```
</details>
:::
## Jobs
:::job
- Job Name: `ConfigurationHandlerWriteStorageJob`
- Document: This `job` is used to `write data` from `memory` into `storage`.

NOTE: If you modify the `file` in `disk`, then you need to issue `/fuji reload` as soon as possible.
NOTE: The `disk` will be `overridden` when `fire` this job.
:::
:::job
- Job Name: `PatrolJailJob`
- Document: This `job` is used to `execute the patrol commands` for a `jail` periodically.
:::
:::job
- Job Name: `UpdateJailRecordsJob`
- Document: This job is used to update all active `jail records` across all `jails`.
:::
## Commands
:::command
- Command Syntax: `/is-jailed? <String playerName>`
- Document: A predicate command to check if the target player is jailed.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/jail create <String jailId>`
- Document: Create a new `jail` descriptor.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/jail delete <JailDescriptor jail> [Boolean confirm]`
- Document: Delete an existing `jail` descriptor
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/jail gui`
- Document: Open the jail GUI.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/jail list`
- Document: List all defined `jails`.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/jail put <OfflinePlayerName playerName> <JailDescriptor jail> [Duration duration] <GreedyString reason>`
- Document: Put the `player` into a specified `jail`.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/jail set-position <JailDescriptor jail>`
- Document: Set the `position` of the specified `jail` to your current position.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/jail tp <JailDescriptor jail>`
- Document: Teleport to the `position` of an existing `jail`.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/jail tp others <PlayerCollection others> <JailDescriptor jail>`
- Document: Teleport to the `position` of an existing `jail`.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/jail un-put <JailedPlayerName playerName>`
- Document: Remove a player from the jail it is currently in.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/jail where <JailedPlayerName playerName>`
- Document: Find the `jail` the player is in.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:jail_id`
- Document: Returns the `jail id` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_displayname`
- Document: Returns the `jail display name` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_creator_name`
- Document: Returns the `creator name` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_created_date`
- Document: Returns the `created date` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_specified_duration`
- Document: Returns the `specified jail duration` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_remaining_duration`
- Document: Returns the `remaining jail duration` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_reason`
- Document: Returns the `reason` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_dimension`
- Document: Returns the `dimension` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_x`
- Document: Returns the `position x` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_y`
- Document: Returns the `position y` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_z`
- Document: Returns the `position z` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_yaw`
- Document: Returns the `position yaw` from the player's active `jail record`.
:::
:::placeholder
- Placeholder Name: `fuji:jail_pitch`
- Document: Returns the `position pitch` from the player's active `jail record`.
:::
## Argument Types
:::argument-type
- Argument Type Name: `[jail-id]`
- Argument Type Class: `[JailDescriptor]`
:::
:::argument-type
- Argument Type Name: `[jailed-player-name]`
- Argument Type Class: `[JailedPlayerName]`
:::
