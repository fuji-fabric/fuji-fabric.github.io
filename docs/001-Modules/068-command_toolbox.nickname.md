---
title: command_toolbox.nickname
---


# Module: command_toolbox.nickname

## Overview
:::module
  This module allows customization of the `display name` of a player.


:::
## Color Boxes

:::colorbox-note

  ◉ Using the `nickname` module with `Styled Chat` mod.
  
  See: https://github.com/fuji-fabric/fuji/issues/489


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

```json showLineNumbers title="config/fuji/modules/command_toolbox/nickname/config.json"
{
  /* The `format` used when `setting` the nickname. */
  "nickname_format": "%s <grey>(%player:name%)",
  "nickname_constraints": {
    "max_length": 16,
    "accept_string_pattern": ".+",
    "reject_string_pattern": ""
  }
}
```
</details>
:::
:::config
- File Name: `nickname.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

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
- Document:   Clear the display name.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nickname reset others <PlayerCollection others>`
- Document:   Clear the display name.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nickname set <GreedyString format>`
- Document:   Set the display name.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nickname set others <PlayerCollection others> <GreedyString format>`
- Document:   Set the display name.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
