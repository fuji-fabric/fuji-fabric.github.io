---
title: warning
---


# Module: warning

## Overview
:::module
  This module provides the `information management` for `staffs`.
  
  A shared `warning GUI` to `track` the behaviours of players, between `staffs`.
  
  You can `create` a `warning` for a `player`.
  
  All `staffs` can `view` the `warnings` of a `player`.
  
  
  
  You can use `warnings` to `track` the behaviours of a `player`.


:::
## Color Boxes

:::colorbox-note

  ◉ Integrate with advanced `ban` tools.
  
  You can integrate the `warning` module with `temp_ban` module.
  
  However, you may want some advanced ban tools.
  
  See: https://github.com/Patbox/BanHammer


:::

:::colorbox-example

  ◉ Create a `permanent warning` for a player.
  
  Issue: `/warning create Steve Steal items.`
  
  
  
  ◉ Create a `temporal warning` for a player.
  
  Issue: `/warning create-temp Steve 3d Steal items.`
  
  
  
  ◉ List all the warnings of a player.
  
  Issue: `/warning list Steve`
  
  
  
  ◉ Open the `Warning GUI`.
  
  Issue: `/warning gui`


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

```json showLineNumbers title="config/fuji/modules/warning/config.json"
{
  /* Should we send the reminders to the warned player? */
  "warning_reminder": {
    "remind_warned_player_on_join_server": true,
    "reminder_source": {
      "remind_permanent_warnings_type": false,
      "remind_temporal_warnings_type": true
    }
  }
  /* Define `warning rules`, to execute `punishment commands`.
  
  When a new `warning` is `added` to a player, we will process the `warning rules`.
  And then pick up `one warning rule` to execute its commands.
  We will pick the `highest` number of warnings satisfied first. */,
  "on_permanent_warning_created": [
    {
      "if_number_of_warnings_greater_equal_than": 1,
      "commands": [
        "send-broadcast <dark_red>Player %player:name% has just received a permanent-warning.<newline><dark_red>◉ Reason: %fuji:last_warning_reason%",
        "when-online %player:name% send-message %player:name% <dark_red>You have received a warning."
      ]
    },
    {
      "if_number_of_warnings_greater_equal_than": 3,
      "commands": [
        "send-broadcast <dark_red>Player %player:name% has just received a permanent-warning.<newline><dark_red>◉ Reason: %fuji:last_warning_reason%",
        "temp-ban player %player:name% 30m Warned 3 times."
      ]
    }
  ],
  "on_temporal_warning_created": [
    {
      "if_number_of_warnings_greater_equal_than": 1,
      "commands": [
        "send-broadcast <dark_red>Player %player:name% has just received a temporal-warning.<newline><dark_red>◉ Expiration Date: %fuji:last_warning_expiration_date%<newline><dark_red>◉ Reason: %fuji:last_warning_reason%"
      ]
    },
    {
      "if_number_of_warnings_greater_equal_than": 3,
      "commands": [
        "send-broadcast <dark_red>Player %player:name% has just received a temporal-warning.<newline><dark_red>◉ Expiration Date: %fuji:last_warning_expiration_date%<newline><dark_red>◉ Reason: %fuji:last_warning_reason%",
        "warning create %player:name% Received too many temporal warnings in a short period of time."
      ]
    }
  ]
}
```
</details>
:::
:::config
- File Name: `warning-data.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/warning/warning-data.json"
{
  "players": []
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/warning`
- Document:   Open the warning GUI.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warning clear-all [Boolean confirm]`
- Document:   Clear all warnings for all players.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warning clear <OfflinePlayerName targetPlayer> [Boolean confirm]`
- Document:   Clear the warnings of a player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warning create-temp <OfflinePlayerName targetPlayer> <Duration duration> <GreedyString warning>`
- Document:   Create a new warning with expiration for the player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warning create <OfflinePlayerName targetPlayer> <GreedyString warning>`
- Document:   Create a new warning for the player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warning gui`
- Document:   Open the warning GUI.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warning list <OfflinePlayerName targetPlayer>`
- Document:   List the warnings of a player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:last_warning_created_date`
- Document:   Returns the `created date` of the last created warning.


:::
:::placeholder
- Placeholder Name: `fuji:last_warning_creator_name`
- Document:   Returns the `creator name` of the last created warning.


:::
:::placeholder
- Placeholder Name: `fuji:last_warning_expiration_date`
- Document:   Returns the `expiration date` of the last created warning.


:::
:::placeholder
- Placeholder Name: `fuji:last_warning_reason`
- Document:   Returns the `reason` of the last created warning.


:::
