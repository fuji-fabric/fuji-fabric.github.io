---
title: command_attachment
---


# Module: command_attachment

## Overview
:::module
This module allows you to attach commands into things:
1. Attach commands into an item stack.
2. Attach commands into a block.
3. Attach commands into an entity.
:::
## Color Boxes

:::colorbox-note

◉ How it works?

When you attach commands into an item.

We will save a `binding ID` in the item NBT.

Every item that has the same `binding ID` in its NBT data, shares the same `binding commands instance`.
:::

:::colorbox-note

◉ Valid `interaction types` for each `attached types`.

- `item`: `LEFT_CLICK`, `RIGHT_CLICK`, `ANY_CLICK`, `SWAP_HAND`

- `block`: `LEFT_CLICK`, `RIGHT_CLICK`, `ANY_CLICK`, `STEP_ON`

- `entity`: `RIGHT_CLICK`, `ANY_CLICK`
:::

:::colorbox-tip

◉ Give the `attached item` to players.

You can use `kit` module.

The kit module will save the item NBT.

So if you define a kit, puts `the attached item` inside it.

Then give the kit to a player.

The player will get the magic item.
:::

:::colorbox-tip

◉ Integrate with `command_cooldown` module.

You can use `command_cooldown` module to create a `named cooldown`.

The `named cooldown` can restrict the `use interval` and `use times` of a specified command.

And then, attach the `named cooldown test command` to an `item` using `command_attachment` module.
:::

:::colorbox-example

◉ Make a magic-stick, which heals the player on clicked.

Issue `/command-attachment attach-item-one heal`



◉ Make a magic-stick, which:

1. Gives diamonds * 1 on left clicked. (With use limit 3)

2. Gives gold_ingot *1 on right clicked. (With use limit 5)



Issue the following commands:

1. `/command-attachment attach-item-one --maxUseTimes 3 --interactType LEFT_CLICK give %player:name% minecraft:diamond 1`

2. `/command-attachment attach-item-one --maxUseTimes 5 --interactType RIGHT_CLICK give %player:name% minecraft:gold_ingot 1`



◉ Make a magic-stick, which gives apple * 1, with use limit 3 times, and keep the item without destroying it.

Issue: `/command-attachment attach-item-one --maxUseTimes 3 --destroyItem false give %player:name% minecraft:apple 1`.



◉ Query the attached commands in a specific item.

Issue `/command-attachment query-item`.



◉ Let an entity say hello on right clicked.

Issue: `/command-attachment attach-entity-one <entity-id> say hello %player:name%`



◉ Make a portal block.

Issue: `/command-attachment attach-block-one 0 0 0 --interactType STEP_ON tppos --targetPlayer %player:name% --dimension minecraft:the_end --x 0 --y 66 --z 0 %player:name%`.



◉ View and edit the attached object.

Issue: `/command-attachment editor`
:::

## Configurations
:::warning
The JSON content is provided for documentation purposes only.

It should not be copied directly into your configuration folder, as the document format is not valid JSON syntax.
:::
:::config
- File Name: `command-attachment-data.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/command_attachment/command-attachment-data.json"
{
  "nodes": []
}
```
</details>
:::
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/command_attachment/config.json"
{
  "test_stepping_on_block_interval_in_mill_seconds": 100
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
- Job Name: `TestSteppingOnBlockJob`
- Document: This `job` is used to test if the player is stepping on a `block` with `attached commands`.
:::
## Commands
:::command
- Command Syntax: `/command-attachment attach-block-one <BlockPos blockPos> [InteractType interactType] [Integer maxUseTimes] [ExecuteAsType executeAsType] <GreedyString command>`
- Document: Attach one command to specified block.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-attachment attach-entity-one <Entity entity> [InteractType interactType] [Integer maxUseTimes] [ExecuteAsType executeAsType] <GreedyString command>`
- Document: Attach one command to an entity.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-attachment attach-item-one [InteractType interactType] [Integer maxUseTimes] [ExecuteAsType executeAsType] [Boolean destroyItem] <GreedyString command>`
- Document: Attach one command to an item.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-attachment detach-block-all <BlockPos blockPos> [Boolean confirm]`
- Document: Detach all attached commands in the block.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-attachment detach-entity-all <Entity entity> [Boolean confirm]`
- Document: Detach all attached commands in the entity.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-attachment detach-item-all [Boolean confirm]`
- Document: Detach all attached commands in the item.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-attachment editor`
- Document: Open the command attachment editor.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-attachment query-block <BlockPos blockPos>`
- Document: Query all attached commands in the block.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-attachment query-entity <Entity entity>`
- Document: Query all attached commands in the entity.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-attachment query-item`
- Document: Query all attached commands in the item.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[execute-as-type]`
- Argument Type Class: `[ExecuteAsType]`
:::
:::argument-type
- Argument Type Name: `[interact-type]`
- Argument Type Class: `[InteractType]`
:::
