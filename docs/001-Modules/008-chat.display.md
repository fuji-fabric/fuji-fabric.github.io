---
title: chat.display
---


# Module: chat.display

## Overview
:::module
  This module allows a player to `show` things to `others`.
  
  The `thing` can be:
  
  1. Their main-hand item.
  
  2. Their inventory.
  
  3. Their ender chest.


:::
## Color Boxes

:::colorbox-note

  ◉ Advanced `server-side` show-case mod.
  
  A new mod is released in https://modrinth.com/mod/showcase
  
  You may want to check it!


:::

:::colorbox-tip

  ◉ Integrate this module with other `chat-related` mods.
  
  
  
  ➜ Integrate via the `placeholder` way.
  
  You can use `chat.replace` module.
  
  That module can be used to define a `chat text` replacement.
  
  To replace the chat text from `item` to the `%fuji:item%` placeholder.
  
  To replace the chat text from `inv` to the `%fuji:inv%` placeholder.
  
  To replace the chat text from `ender` to the `%fuji:ender%` placeholder.
  
  
  
  ➜ Integrate via the `command` way.
  
  You can use `chat.trigger` module.
  
  That module can be used to define a `chat string` trigger.
  
  To execute the `/run as fake-op %player:name% chat display item` command, when the `trigger` is `fired`.
  
  To execute the `/run as fake-op %player:name% chat display inv` command, when the `trigger` is `fired`.
  
  To execute the `/run as fake-op %player:name% chat display ender` command, when the `trigger` is `fired`.


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
  /* The expiration duration for a created `display`. */
  "expiration_duration_seconds": 3600
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/chat display ender`
- Document:   Show your enderchest to others.


- Can be executed by console: `false`
- Required Level Permission: `0`
:::
:::command
- Command Syntax: `/chat display inv`
- Document:   Show your inventory to others.


- Can be executed by console: `false`
- Required Level Permission: `0`
:::
:::command
- Command Syntax: `/chat display item`
- Document:   Show your item in main hand to others.


- Can be executed by console: `false`
- Required Level Permission: `0`
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
