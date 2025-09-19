---
title: gameplay.carpet.fake_player_manager
---


# Module: gameplay.carpet.fake_player_manager

## Overview
:::module
  This module provides `fake player management` for `carpet` mod.


:::
## Color Boxes

:::colorbox-note

  ◉ This module introduces the `authority` for each `fake-player`.
  
  1. Disables the `/player shadow` command.
  
  2. For each `fake-player`, the `player` who `spawned` it is its `owner player`.
  
  3. For each `fake-player`, it can only be `interacted` (right-click) with by its `owner player`.
  
  4. For each `fake-player`, it can only be `manipulated` (The `/player` command) by its `owner player`.
  
  5. The `console`, `the ops` or `the owner player` are considered authorized.
  
  
  
  ◉ This module allows you to define the naming-format for `fake-player`.
  
  You can define a `prefix` and `suffix` for fake player names.
  
  The `fake player name` argument value will be transformed when you use `/player <playerName> spawn` command.
  
  
  
  ◉ This module introduce the `spawn caps limit` and `expiration time` for each fake player.
  
  1. You can define the `spawn caps limit` at different time.
  
  2. You can specify the `max living duration` for each fake player. (By default, it is `12h`.)
  
  3. A player can use `/player renew` command to `renew` the `expiration time` for all of its fake players.
  
  4. The `console` can bypass the `spawn caps limit`.


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

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/gameplay/carpet/fake_player_manager/config.json"
{
  /* The `rules` to define how many fake-players can each player spawned. (At different times)
  
  The tuple means (`day_of_week`, `minutes_of_the_day`, `max_fake_players_per_player`)
  The range of `day_of_week` is `[1, 7]`
  The range of `minutes_of_the_day` is `[0, 1440]`
  
  Taken the tuple `(1, 0 2)` for example.
  The rule says, if `day_of_week` >= 1, and `minutes_of_the_day` >= 0, then the `max_fake_players_per_player` is now `2`.
  
  You can define multiple `rules`.
  Rules are matched from up to down.
  The first matched rule will be used. */
  "caps_limit_rules": [
    [
      1,
      0,
      2
    ]
  ]
  /* The `renew duration` when using the `/player renew` command. */,
  "renew_duration_ms": 43200000
  /* The format of `fake player name`.
  
  You can use this option to define the `prefix` and `suffix` of `fake player name`. */,
  "transform_name": "_fake_%s"
}
```
</details>
:::
## Jobs
:::job
- Job Name: `ManageFakePlayersJob`
- Document:   This `job` is used to check the `fake-player caps limit` for each player.


:::
## Commands
:::command
- Command Syntax: `/player renew`
- Document:   Renew the expiration time of `all` fake-player you have `spawned`.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/player who`
- Document:   List all fake-player and its owner player.


- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
