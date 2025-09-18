---
title: kit
---


# Module: kit

## Overview
:::module
Make a set of `item stacks` as a `kit`, and give the kit to players.
:::
## Color Boxes

:::colorbox-tip

◉ Claim a specific kit automatically for online players.

You can use `command_scheduler` module, to execute the `kit claim command` for online players automatically every minute.
:::

:::colorbox-tip

◉ Give the new-bie player a kit.

You can use `command_event` module, to give a kit to the new-bie player.
:::

:::colorbox-tip

◉ Make a GUI to display all available kits.

You can integrate with the `command_menu` module.

To create a `menu` to `display` available kits, making it easier to `claim` a `kit`.



◉ Attach the kit claim command to objects.

You can integrate with `command_attachment` module.

To attach the kit claim command to a `block`, `entity` or `item`.
:::

:::colorbox-example

◉ Create a kit.

Issue: `/kit editor` to create a new `kit`.



◉ Give a kit to a player.

Issue: `/kit give Alice <kit-name>` to give a `kit` to a player.



◉ Create a user-level command, for players to `claim a kit`.

The `/kit give` command is a `admin-level` command, you should NOT allow players to use it directly.

TIP: You need to use `command_bundle` module to create a new `user-level` command, for players to `claim a kit`.
:::

:::colorbox-example

◉ Associate a cooldown to a kit.

You can use `command_cooldown` module, to create a `named cooldown` for the `kit claim command`.



To create a `named cooldown`

Issue: `/command-cooldown create example-kit-cooldown 60000`



To test the cooldown, and give the kit if the cooldown is satisfied.

Issue: `/command-cooldown test example-kit-cooldown Alice --onFailed "send-message %player:name% wait a moment" kit give %player:name% example-kit|send-message %player:name% kit received.`
:::

## Commands
:::command
- Command Syntax: `/kit editor`
- Document: Open the kit editor GUI.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/kit give <ServerPlayerEntity player> <KitName kit>`
- Document: Give the kit to the player.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/kit preview <ServerPlayerEntity player> <KitName kit>`
- Document: Open a GUI to pre-view the specified kit.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[kit-name]`
- Argument Type Class: `[KitName]`
:::
