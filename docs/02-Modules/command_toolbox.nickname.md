---
title: command_toolbox.nickname
---


# Module: command_toolbox.nickname

## Overview
:::module
Allows you to customize the `display name` of players.
:::
## Color Boxes

:::colorbox-note

◉ Using the `nickname` module with `Styled Chat` mod.

See: https://github.com/sakurawald/fuji/issues/489
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

```json showLineNumbers title="config/fuji/modules/command_toolbox/nickname/config.json"
{
  /* The `format` used when `setting` the nickname. */
  "nickname_format": "%.12s <grey>(%player:name%)"
}
```
</details>
:::
:::config
- File Name: `nickname.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/command_toolbox/nickname/nickname.json"
{
  "format": {
    "player2format": {
      "Steve": "<rainbow>Steve"
    }
  }
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/nickname reset`
- Document: Clear the display name.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nickname reset others <PlayerCollection others>`
- Document: Clear the display name.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nickname set <GreedyString format>`
- Document: Set the display name.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nickname set others <PlayerCollection others> <GreedyString format>`
- Document: Set the display name.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
