---
title: placeholder
---


# Module: placeholder

## Overview
:::module
  Provides extra placeholders for `Text Placeholder API` mod.


:::
## Color Boxes

:::colorbox-note

  ◉ Install more mods to provide extra placeholders.
  
  See https://placeholders.pb4.eu/user/mod-placeholders/


:::

:::colorbox-tip

  ◉ Use `placeholder` in `language file`
  
  Actually, you can write the `placeholder` in the `language file`.
  
  The `contextual player` will be used to parse the placeholders.


:::

## Jobs
:::job
- Job Name: `UpdateSumUpPlaceholderJob`
- Document:   This `job` is used to `update` the `sum up placeholders` of the `server`.


:::
## Commands
:::command
- Command Syntax: `/placeholder list`
- Document:   List all placeholders registered in server.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/placeholder parse [ServerPlayerEntity player] <GreedyString input>`
- Document:   Parse a placeholder with a contextual player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:player_mined`
- Document:   Returns the mined blocks by the player.


:::
:::placeholder
- Placeholder Name: `fuji:server_mined`
- Document:   Returns the total mined blocks by all players in the server.


:::
:::placeholder
- Placeholder Name: `fuji:player_placed`
- Document:   Returns the placed blocks by the player.


:::
:::placeholder
- Placeholder Name: `fuji:server_placed`
- Document:   Returns the total placed blocks by all players in the server.


:::
:::placeholder
- Placeholder Name: `fuji:player_killed`
- Document:   Returns the killed entities by the player.


:::
:::placeholder
- Placeholder Name: `fuji:server_killed`
- Document:   Returns the total entities killed by all players in the server.


:::
:::placeholder
- Placeholder Name: `fuji:player_moved`
- Document:   Returns the distance traveled by the player.


:::
:::placeholder
- Placeholder Name: `fuji:server_moved`
- Document:   Returns the total distance traveled by all players in the server.


:::
:::placeholder
- Placeholder Name: `fuji:player_playtime`
- Document:   Returns the playtime of the player.


:::
:::placeholder
- Placeholder Name: `fuji:server_playtime`
- Document:   Returns the total playtime of all players in the server.


:::
:::placeholder
- Placeholder Name: `fuji:health_bar`
- Document:   Returns the `health` of the `player`, in visual heart characters.


:::
:::placeholder
- Placeholder Name: `fuji:has_permission`
- Document:   The `first string argument` is the `permission` to check.
  
  Returns whether the `player` has that permission, in boolean.


:::
:::placeholder
- Placeholder Name: `fuji:get_meta`
- Document:   The `first string argument` is the `luckperms meta` key.
  
  Returns the `string` to represent the `meta value`.


:::
:::placeholder
- Placeholder Name: `fuji:random_player`
- Document:   Pick a `random` player in `online` players, and returns its `name`.


:::
:::placeholder
- Placeholder Name: `fuji:random`
- Document:   The `first integer argument` is the `min value`.
  
  The `second integer argument` is the `max value`,
  
  Returns a random integer ranged `[min, max)`.


:::
:::placeholder
- Placeholder Name: `fuji:escape`
- Document:   To escape the `placeholder` from the `text parser`.
  
  The `first argument` is the literal string of the `target placeholder`.
  
  The `second argument` is the integer for `escape levels`, by default is 1.


:::
:::placeholder
- Placeholder Name: `fuji:protect`
- Document:   Accept one `required string argument`, and returns the `literal text` of that.


:::
:::placeholder
- Placeholder Name: `fuji:date`
- Document:   Returns current `date`.
  
  Accept an optional argument to specify the `date format`.
  
  
  
  For example:
  
  - `%fuji:date yyyy MM dd%`
  
  
  
  See details in https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html


:::
:::placeholder
- Placeholder Name: `fuji:player_prefix`
- Document:   Returns the `luckperms prefix` of the player.


:::
:::placeholder
- Placeholder Name: `fuji:player_suffix`
- Document:   Returns the `luckperms suffix` of the player.


:::
:::placeholder
- Placeholder Name: `fuji:pos`
- Document:   Returns the `location` of the player.


:::
