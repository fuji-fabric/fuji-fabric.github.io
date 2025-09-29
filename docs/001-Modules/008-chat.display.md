---
title: chat.display
---


# Module: chat.display

## Overview
:::module
  This module allows players to show things to others:
  
  1. Show their main-hand item.
  
  2. Show their inventory.
  
  3. Show their ender chest.


:::
## Color Boxes

:::colorbox-note

  ◉ Advanced `server-side` show-case mod.
  
  A new mod is released in https://modrinth.com/mod/showcase
  
  You may want to check it!


:::

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
<Admonition type="warning" icon="" title="">
**The following JSON content is provided for reference only.**
It must NOT be copied directly into the configuration directory, as it does not represent valid JSON syntax.
</Admonition>
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

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
- Document:   Show your enderchest.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/chat display inv`
- Document:   Show your inventory.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/chat display item`
- Document:   Show your item in main hand.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:item`
- Document:   Create a `item display` and return the `clickable` text to open that display.


:::
:::placeholder
- Placeholder Name: `fuji:inv`
- Document:   Create a `inventory display` and return the `clickable` text to open that display.


:::
:::placeholder
- Placeholder Name: `fuji:ender`
- Document:   Create a `enderchest display` and return the `clickable` text to open that display.


:::
