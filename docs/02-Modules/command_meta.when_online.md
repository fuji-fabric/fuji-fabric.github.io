---
title: command_meta.when_online
---


# Module: command_meta.when_online

## Overview
:::module
This module provides the `/when-online <player> <cmd>` command.
To execute a specified command `exactly once` when the target player is `online`:
1. If the target player is `online` now, the command will be executed `at once`.
2. If the target player is `offline` now, the command will be executed `when the player online`.

Besides, you use `/when-online list` to manage `submitted commands`.

For example:
1. `/when-online Steve give %player:name% minecraft:apple 3`
2. `/when-online Alex delay 8 say Hi %player:name%`
:::
## Configurations
:::warning
The JSON content is provided for documentation purposes only.

It should not be copied directly into your configuration folder, as the document format is not valid JSON syntax.
:::
:::config
- File Name: `when-online-data.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/command_meta/when_online/when-online-data.json"
{
  "tickets": []
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/when-online`
- Document: An alias command for `/when-online list` command.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/when-online list`
- Document: List all submitted `when-online` tickets.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/when-online <OfflinePlayerName targetPlayer> <GreedyString command>`
- Document: Execute the specified command `exactly once`, when the target player `is online`.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
