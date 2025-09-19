---
title: afk
---


# Module: afk

## Overview
:::module
This module provides:
1. Afk detection: If a player idle too long, we will mark it as afk state.
2. Afk event: Execute commands when a player enters or leaves afk state.
3. Afk name customization: For a afk player, we can customize its display name in tab list.
:::
## Color Boxes

:::colorbox-note

◉ How it works?



For each player, define a `number` to track `the last action time`.

Actions can be: `mine a block`, `movement`, `issue a command` ...

When action received, update the number.

Define a `job` using cron, to be triggered periodically.

The job will check and compare 2 consecutive value of the `number`.

If number is identical, then the player is considered as in `afk`.
:::

## Configurations
<Admonition type="warning" icon="" title="">
**The JSON content is provided for documentation purposes only.**

It should NOT be copied directly into your configuration folder, as the document format is not valid JSON syntax.
</Admonition>
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/afk/config.json"
{
  /* The `display name` of an afk player in `tab` list. */
  "afk_display_name_format": "<gray>[AFK] %player:displayname_visual%"
  /* Afk checker is `triggered` periodically.
  To check whether a player has any input action.
  And mark the player as `afk` if there is no `action` for too long. */,
  "afk_checker": {
    "cron": "0 0/5 * ? * *"
  }
  /* Define commands to run on afk events. */,
  "afk_event": {
    "on_enter_afk": [
      "send-broadcast <gold>Player %player:name% is now afk"
    ],
    "on_leave_afk": [
      "send-broadcast <gold>Player %player:name% is no longer afk"
    ]
  }
}
```
</details>
:::
## Jobs
:::job
- Job Name: `AfkMarkerJob`
- Document: This `job` is used to check the last action time for each player.
:::
## Commands
:::command
- Command Syntax: `/afk`
- Document: Enter afk state.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/afk others <PlayerCollection others>`
- Document: Enter afk state.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/is-afk? <ServerPlayerEntity player>`
- Document: Test if a player is in afk state.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
