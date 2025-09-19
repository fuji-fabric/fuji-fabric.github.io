---
title: pvp
---


# Module: pvp

## Overview
:::module
  Provides PvP management for players.


:::
## Configurations
<Admonition type="warning" icon="" title="">
**The JSON content is provided for documentation purposes only.**

It should NOT be copied directly into your configuration folder, as the document format is not valid JSON syntax.
</Admonition>
:::config
- File Name: `pvp.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/pvp/pvp.json"
{
  "whitelist": []
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/pvp list`
- Document:   List the players that enable the PvP.


- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/pvp off`
- Document:   Disable the PvP for the player.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/pvp off others <PlayerCollection others>`
- Document:   Disable the PvP for the player.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/pvp on`
- Document:   Enable the PvP for the player.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/pvp on others <PlayerCollection others>`
- Document:   Enable the PvP for the player.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/pvp status`
- Document:   Query the status of PvP for the player.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/pvp status others <PlayerCollection others>`
- Document:   Query the status of PvP for the player.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
