---
title: command_cooldown
---


# Module: command_cooldown

## Overview
:::module
  This module allows defining a `cooldown` after command execution.


:::
## Color Boxes

:::colorbox-note

  ◉ There are 2 types of `cooldown`.
  
  1. `Unnamed Cooldown`
  
  You can use it to define a `cooldown duration` for a specified command. (It is `tested` and managed automatically)
  
  A `unnamed cooldown` will not be `persisted` on the server shutdown.
  
  Its typical use is to define a `cooling duration` for a specified command.
  
  And a `unnamed cooldown` will be `tested` automatically when a player executes a command.
  
  For example: define a `3 seconds` cooling duration for `/back` command.
  
  To define a `unnamed cooldown`, you need to modify the config file, and issue `/fuji reload` command to apply it.
  
  
  
  2. `Named Cooldown`
  
  You have to use commands to create a `named cooldown`, and use commands to `test` it.
  
  A `named cooldown` will be `persisted` on the server shutdown.
  
  Its typical use is to define a `named cooldown`, and `associate` it with `arbitrary command instance`.
  
  For example, you have to use `/command-cooldown create` to `create` a `named cooldown`.
  
  Then, you have to use `/command-cooldown test` to `test` a `named cooldown` manually.
  
  You have to specify the `failure case commands` and `success case commands` when `testing` a `named cooldown`.
  
  If the `conditions` defined by the `named cooldown` is satisfied, then it is a `success case`, else it is a `failure case`.
  
  For `success case`, we will execute `the success case command`.
  
  For `failure case`, we will execute `the failure case command`.
  
  
  
  TL;DR: If you only want to define a simple `cooling duration` for a specified command, just use `unnamed cooldown`.


:::

:::colorbox-example

  ◉ Create a `named cooldown`. (With 3 seconds `cooldown duration`.)
  
  Issue: `/command-cooldown create kitfood 3000`
  
  
  
  ◉ Test a `named cooldown` with `arbitrary command instance`.
  
  Issue: `/command-cooldown test kitfood Alice say Used successfully once`.
  
  This command will `test` the specified `named cooldown`:
  
  1. If the result is `the success case`, then it will execute `/say Used successfully once`.
  
  2. If the result is `the failure case`, then it will do nothing.
  
  
  
  Issue: `/command-cooldown test kitfood Alice --onFailed "say false" say true`
  
  This command will `test` the specified `named cooldown`:
  
  1. If the result is `the success case`, then it will execute `/say true`.
  
  2. If the result is `the failure case`, then it will execute `/say false`.
  
  
  
  TIP: You can insert `%fuji:command_cooldown_left_time kitfood%` placeholder to display the remaining duration.
  
  TIP: To specify `more than 1 command` in the `the success command` or `the failure command` place, you can use `chain` module.
  
  
  
  ◉ Test a `named cooldown` with `pre-defined command instance`.
  
  You can `pre-define` the `success case commands` and `failure case commands` in the config file.
  
  And use `/command-cooldown try-use kitfood Alice` to `test` it.
  
  This method is much more brief.
  
  
  
  ◉ Reset a `named cooldown` for a player.
  
  Issue: `/command-cooldown reset kitfood Alice`
  
  
  
  ◉ Create a `named cooldown`. (With 15 seconds `cooldown duration`, and `limit of number of use` is 3)
  
  Issue: `/command-cooldown create kitfood 15000 --maxUses 3`
  
  
  
  ◉ Create a global `named cooldown`.
  
  By default, a `named cooldown` applies `per-player`.
  
  A `global` named cooldown applies `per-server`.
  
  Issue: `/command-cooldown create kitfood 3000 --global true`


:::

:::colorbox-example

  ◉ Make a `non-persistent named cooldown`.
  
  By default, a `named cooldown` will be `persisted` on the `storage`.
  
  However, you can create a `non-persist named cooldown`.
  
  Issue: `/command-cooldown create kitfood 999999999999 --persistent false`
  
  This cooldown says that, it can be used only once after each server re-start.


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

```json showLineNumbers title="config/fuji/modules/command_cooldown/config.json"
{
  "admin_players_can_bypass": true
  /* The `unnamed cooldown` is applied `per-player`.
  
  Define the `regex` expression to match the `target command`.
  And the `cooldown ms` for that `target command`. */,
  "unnamed_cooldown": {
    "chunks.*": 60000,
    "rtp.*": 60000,
    "download.*": 120000,
    "heal.*": 10000
  }
  /* The `named cooldown` is created by `/command-cooldown create` command. */,
  "named_cooldown": {
    "list": {}
  }
}
```
</details>
:::
:::config
- File Name: `named-cooldown-data.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/command_cooldown/named-cooldown-data.json"
{
  "nodes": []
}
```
</details>
:::
## Jobs
:::job
- Job Name: `ConfigurationHandlerWriteStorageJob`
- Document:   This `job` is used to `write data` from `memory` into `storage`.
  
  
  
  NOTE: If you modify the `file` in `disk`, then you need to issue `/fuji reload` as soon as possible.
  
  NOTE: The `disk` will be `overridden` when `fire` this job.


:::
## Commands
:::command
- Command Syntax: `/command-cooldown create <String name> <long cooldownDuration> [Integer maxUses] [Boolean persistent] [Boolean global]`
- Document:   Create a named-cooldown.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/command-cooldown delete <NamedCooldownDescriptor namedCooldown> [Boolean confirm]`
- Document:   Delete a named-cooldown.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/command-cooldown list`
- Document:   List all `unnamed-cooldown` and `named-cooldown`.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/command-cooldown reset <NamedCooldownDescriptor namedCooldown> <ServerPlayer player>`
- Document:   Reset `the last use time` of a named-cooldown for a player.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/command-cooldown test <NamedCooldownDescriptor namedCooldown> <ServerPlayer player> [StringList onFailed] <GreedyCommandString onSuccess>`
- Document:   Test a named-cooldown with `arbitrary command instance`, and execute `success case command` or `failure case command`.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/command-cooldown try-use <NamedCooldownDescriptor namedCooldown> <ServerPlayer player>`
- Document:   Test a named-cooldown with `pre-defined command instance`, and execute `success case command` or `failure case command`.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:command_cooldown_left_time`
- Document:   Returns the `remaining cooldown duration` for `specified named cooldown` in `1d2h3m4s` format.
  
  
  
  For example, if you have a `named cooldown` whose name is `kitfood`.
  
  You can use: `%fuji:command_cooldown_left_time kitfood%`


:::
:::placeholder
- Placeholder Name: `fuji:command_cooldown_left_time_date`
- Document:   Returns the `next available date` for `specified named cooldown`.
  
  
  
  For example, if you have a `named cooldown` whose name is `kitfood`.
  
  You can use: `%fuji:command_cooldown_left_time_date kitfood%`


:::
:::placeholder
- Placeholder Name: `fuji:command_cooldown_left_usage`
- Document:   Returns the `remaining available uses` for `specified named cooldown` in integer.
  
  
  
  For example, if you have a `named cooldown` whose name is `kitfood`.
  
  You can use: `%fuji:command_cooldown_left_usage kitfood%`


:::
## Argument Types
:::argument-type
- Argument Type Name: `[named-command-cooldown]`
- Argument Type Class: `[NamedCooldownDescriptor]`
:::
