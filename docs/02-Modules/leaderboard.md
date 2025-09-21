---
title: leaderboard
---


# Module: leaderboard

## Overview
:::module
  This module defining a `leaderboard`.
  
  The `score provider` of a `leaderboard` can be a `placeholder`, `statistics` or `objective`.
  
  The `time window` of a `leaderboard` can be `hourly`, `daily`, `weekly`, `monthly`, `yearly` and `all_time`.
  
  You can display the `leaderboard` using `placeholders` or `commands`.


:::
## Color Boxes

:::colorbox-note

  ◉ How it works?
  
  1. You need to define a `leaderboard` in the config file.
  
  2. The defined `leaderboards` will be `updated` if:
  
  2.a. All leaderboards will be updated when a player `joins` or `leaves` the server.
  
  2.b. All leaderboards will be updated when the `Leaderboard Updater Job` is `fired`.
  
  2.c. You can use `/leaderboard update-all` command to update manually.
  
  3. You can `display` the leaderboard in various ways.
  
  3.a. You can use `placeholders` to display the `leaderboard`.
  
  3.b. You can use `commands` to display the `leaderboard`.


:::

:::colorbox-tip

  ◉ You can use a `placeholder` to fetch data from `statistics`.
  
  For example:
  
  1. `%player:statistic_raw minecraft:deaths%`
  
  2. `%player:statistic_raw minecraft:killed minecraft:zombie%`
  
  
  
  See more `statistics` in: https://minecraft.wiki/w/Statistics
  
  
  
  ◉ You can use a `placeholder` to fetch data from `objective`.
  
  For example: `%player:objective [objective]%`


:::

:::colorbox-example

  ◉ How to define a `leaderboard`?
  
  To define a `leaderboard`, you need to specify:
  
  1. `Leaderboard ID`: The unique name for this leaderboard.
  
  2. `Score Provider`: It's a string which evaluates to a `numeric value`. (Typically a `placeholder`)
  
  
  
  ◉ What is the `lowest N` and `highest N`.
  
  For any leaderboard, all its `scores` are `sorted` in `natural order`.
  
  The `natural order` is the order that from `lowest` to `highest`. (e.g. `0`, `1`, `2`, `3` ...)
  
  
  
  You can use a `lowest placeholder` to select `the lowest N score`.
  
  You can use a `highest placeholder` to select `the highest N score`.
  
  
  
  For example, you may want to `select` the `lowest score` for `death-board`, and `highest score` for `zombie-kill-board`.
  
  1. `%fuji:lowest_n_score death-board 1 all_time%`
  
  2. `%fuji:highest_n_score zombie-kill-board 1 all_time%`


:::

:::colorbox-example

  ◉ List the specified `leaderboard` with `lowest first` order.
  
  Issue: `/leaderboard lowest death-board ALL_TIME`
  
  
  
  ◉ List the specified `leaderboard` with `highest first` order.
  
  Issue: `/leaderboard highest zombie-kill-board ALL_TIME`
  
  
  
  ◉ List the specified `leaderboard` with `highest first` order and `daily` time window.
  
  Issue: `/leaderboard highest zombie-kill-board DAILY`
  
  
  
  ◉ Award the top player.
  
  Issue:
  
  1. `/run as console send-broadcast The greatest zombie killer this week is %fuji:highest_n_name zombie-kill-board 1 weekly%`
  
  2. `/run as console give %fuji:highest_n_name zombie-kill-board 1 weekly% minecraft:diamond 1`


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

```json showLineNumbers title="config/fuji/modules/leaderboard/config.json"
{
  /* The `text` to display when there is no data for specified `lowest N` or `highest N` player. */
  "leaderboard_no_player_text": "<red>None Player"
  /* The `text` to display when there is no data for specified `score`. */,
  "leaderboard_no_score_text": "<yellow>---"
  /* The beginning of the week used for `weekly` time window. */,
  "beginning_of_the_week": "SUNDAY"
  /* The `default page size` for `/leaderboard lowest` and `/leaderboard highest` commands. */,
  "page_size": 10
  /* A `leaderboard descriptor` is used to define a `leaderboard`. */,
  "leaderboard_descriptors": [
    {
      "leaderboard_id": "death-board",
      "display_name": "<dark_red>Death Board</dark_red>",
      "score_provider": "%player:statistic_raw minecraft:deaths%"
    },
    {
      "leaderboard_id": "zombie-kill-board",
      "display_name": "<blue>Zombie Kills</blue>",
      "score_provider": "%player:statistic_raw minecraft:killed minecraft:zombie%"
    }
  ]
}
```
</details>
:::
:::config
- File Name: `leaderboard-data.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/leaderboard/leaderboard-data.json"
{
  "leaderboard_data": []
}
```
</details>
:::
## Jobs
:::job
- Job Name: `UpdateLeaderboardsJob`
- Document:   This `job` is used to execute `/leaderboard update-all` command automatically.


:::
## Commands
:::command
- Command Syntax: `/leaderboard highest <LeaderBoardDescriptor leaderboard> <LeaderBoardTimeWindow timeWindow> [Integer pageSize]`
- Document:   List the highest N players for specified leaderboard.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/leaderboard lowest <LeaderBoardDescriptor leaderboard> <LeaderBoardTimeWindow timeWindow> [Integer pageSize]`
- Document:   List the lowest N players for specified leaderboard.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/leaderboard update-all`
- Document:   Update all `leaderboards` for `online players`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:lowest_n_name`
- Document:   Returns the `lowest N` player name of specified `leaderboard id`.
  
  
  
  The syntax is `%fuji:lowest_n_name <leaderboard-id> <n> <time-window>`
  
  The `time window` can be `hourly`, `daily`, `weekly`, `monthly`, `yearly` and `all_time`.
  
  
  
  For example:
  
  The `%fuji:lowest_n_name death-board 1 all_time%` returns `the name of the player with the least number of death` from the leaderboard with the id `death-board`.


:::
:::placeholder
- Placeholder Name: `fuji:highest_n_name`
- Document:   Returns the `highest N` player name of specified `leaderboard id`.
  
  
  
  The syntax is `%fuji:highest_n_name <leaderboard-id> <n> <time-window>`
  
  The `time window` can be `hourly`, `daily`, `weekly`, `monthly`, `yearly` and `all_time`.
  
  
  
  For example:
  
  The `%fuji:highest_n_name zombie-kill-board 1 all_time%` returns `the name of the player with the highest number of zombie kills` from the leaderboard with the id `zombie-kill-board`.


:::
:::placeholder
- Placeholder Name: `fuji:lowest_n_score`
- Document:   Returns the `lowest N` score of specified `leaderboard id`.
  
  
  
  The syntax is `%fuji:lowest_n_score <leaderboard-id> <n> <time-window>`
  
  The `time window` can be `hourly`, `daily`, `weekly`, `monthly`, `yearly` and `all_time`.
  
  
  
  For example:
  
  The `%fuji:lowest_n_score death-board 1 all_time%` returns the `the least number of death score` from the leaderboard with the id `death-board`.


:::
:::placeholder
- Placeholder Name: `fuji:highest_n_score`
- Document:   Returns the `highest N` score of specified `leaderboard id`.
  
  
  
  The syntax is `%fuji:highest_n_score <leaderboard-id> <n> <time-window>`
  
  The `time window` can be `hourly`, `daily`, `weekly`, `monthly`, `yearly` and `all_time`.
  
  
  
  For example:
  
  The `%fuji:highest_n_score zombie-kill-board 1 all_time%` returns `the highest zombie kill score` from the leaderboard with the id `zombie-kill-board`.


:::
## Argument Types
:::argument-type
- Argument Type Name: `[leaderboard]`
- Argument Type Class: `[LeaderBoardDescriptor]`
:::
:::argument-type
- Argument Type Name: `[leaderboard-time-window]`
- Argument Type Class: `[LeaderBoardTimeWindow]`
:::
