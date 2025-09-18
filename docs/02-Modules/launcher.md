---
title: launcher
---


# Module: launcher

## Overview
:::module
Launch a target `entity` in specified `direction` and `power`.
:::
## Color Boxes

:::colorbox-tip

◉ Create a `jump pad` that launches players when stepped on.

You can integrate with `command_attachment` module.

Issue: `/command-attachment attach-block-one ~ ~ ~ --interactType STEP_ON \<command\>`



◉ Create a `knock-back stick` that kick the entities around you.

Issue: `/command-attachment attach-item-one launch at %player:name% @e[type=!minecraft:player,distance=..8] 30 1`
:::

:::colorbox-example

◉ Use a lower `angle` for `fast horizontal movement`.

1. `/launch facing @s 15 1`

2. `/launch facing @s 15 3.9`

The `power` is clamped in `[-3.9, +3.9]`



◉ Use a median `angle` for `balanced horizontal and vertical movement`.

1. `/launch facing @s 30 3.9`

2. `/launch facing @s 45 3.9`



◉ Use a higher `angle` for a `rocket launcher` effect.

Issue: `/launch facing @s 60 3.9`

TIP: Remember to bring your `elytra`.



◉ Use a `vertical angle` for a `trampoline` effect.

Issue: `/launch facing @s 90 1`



◉ Use a `positive power` for a `push` effect.

Issue: `/launch facing @s 0 1`



◉ Use a `negative power` for a `pull` effect.

Issue: `/launch facing @s 0 -1`



◉ Use another entity's perspective as the direction, to `kick` the target entity.

Issue: `/launch at @s @e[type=!minecraft:player,distance=..8] 30 1`
:::

## Commands
:::command
- Command Syntax: `/launch at <Entity at> <EntityCollection target> <float angle> <double power>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/launch facing <EntityCollection target> <float angle> <double power>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
