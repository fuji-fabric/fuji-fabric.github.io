---
title: chat.display
---


# Module: chat.display

## Overview
:::module
This module allows players to show things to others:
1. Show their item in main hand.
2. Show their inventory.
3. Show their ender chest.
:::
## Color Boxes

:::colorbox-tip

◉ This module is designed to work with other `chat-related` mods.

For example, you use this with `Styled Chat` mod.
:::

:::colorbox-tip

◉ Define a `chat shortcut` to create a display

You can use `chat.replace` module, to define chat shortcut.

The shortcut can be `"item"` for example.

Then you can type `"item"` in chat.

To create a display directly using chat, without the commands.
:::

## Configurations
:::warning
The JSON content is provided for documentation purposes only.

It should not be copied directly into your configuration folder, as the document format is not valid JSON syntax.
:::
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/chat/display/config.json"
{
  /* The expiration duration for each created `display`. */
  "expiration_duration_seconds": 3600
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/chat display ender`
- Document: Show your enderchest.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/chat display inv`
- Document: Show your inventory.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/chat display item`
- Document: Show your item in main hand.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:item`
- Document: Create a `item display` and return the `clickable` text to open that display.
:::
:::placeholder
- Placeholder Name: `fuji:inv`
- Document: Create a `inventory display` and return the `clickable` text to open that display.
:::
:::placeholder
- Placeholder Name: `fuji:ender`
- Document: Create a `enderchest display` and return the `clickable` text to open that display.
:::
