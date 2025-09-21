---
title: command_permission
---


# Module: command_permission

## Overview
:::module
  This module provides the `luckperms permissions` for `all commands`.
  
  The `target command` can be a command from the `vanilla Minecraft`, or any other `mods`.


:::
## Color Boxes

:::colorbox-note

  ◉ How it works?
  
  The vanilla Minecraft use a command system, named `brigadier command system`.
  
  All `commands` are `registered`, `parsed` and `executed` by this system.
  
  In the design of this command system, all commands are built into a `tree structure`.
  
  That is the `command tree`.
  
  All commands starts with the `root command`, and walking down the `path` of the `command tree`.
  
  All commands are a `direct child` or `in-direct child` of the `root command node`.
  
  Based on these facts, we can `identify` a `command node` using its `path` in the `command tree`.
  
  
  
  For example, the command string `/gamemode creative Steve`.
  
  Can be parsed into command nodes: `gamemode`, `creative` and `Steve`.
  
  And its `command path` is `gamemode.gamemode.target`.
  
  
  
  You can issue `/command-permission describe gamemode creative Steve` to see what is happening.
  
  To see the `tree structure` of this command node, issue `/help gamemode` command.
  
  
  
  To open the command permission GUI, issue `/command-permission gui` command.
  
  To list all commands and their command path, issue `/fuji inspect server-commands` command.


:::

:::colorbox-note

  Let's continue, the `brigadier command system`, organize all `command nodes` into a `tree structure`.
  
  And for each `command node`, there is a `requirement` option, it's a `predicate`, to decide whether the `command source` can use this `command node`.
  
  
  
  That's the core part.
  
  The `command_permission` module, will walk down the entire `command tree`.
  
  And `wrap` the `requirement` option for each `command node`.
  
  And then, we can assign a `luckperms permission` for each `command node`.
  
  That's because, we can `identify` a `command node` using its `command path` in the `command tree`.
  
  
  
  Issue: `/command-permission describe gamemode creative Steve` to see how it works.


:::

:::colorbox-note

  ◉ How does `command_permission` module handles the `inheritance permission`, `wildcard permission` and `regex permission`?
  
  
  
  Actually, the `command_permission` module didn't handle them.
  
  The module only does one simple thing: Let's check if the command source has the corresponding luckperms permission `fuji.permission.<command path of that target command>`.
  
  The complex things like `inheritance permission`, `wildcard permission` and `regex permission` are all processed by `luckperms` mod.
  
  Yeah, the `luckperms` mod does the complex `permission calculation`.


:::

:::colorbox-note

  ◉ Advanced universal permission mod.
  
  The `command_permission` module was originally inspired by the `Vanilla Permissions` mod.
  
  If you want advanced features, check `Vanilla Permissions` mod.


:::

:::colorbox-tip

  ◉ Advanced Usage
  
  The `luckperms` mod have a feature named `permission context`.
  
  Which allows you to specify the `per-dimension permission` and `temporary permission`.
  
  If you are interested, see the details in their official wiki.


:::

:::colorbox-example

  ◉ Allow everyone to use `/gamemode` command.
  
  You can issue `/lp group default permission set fuji.permission.gamemode true`
  
  
  
  NOTE: If you want to allow the client-side to use the gamemode switcher menu, you have to install extra mods in the client-side, to let the client-side believe they are `op`, and they can switch the gamemode.
  
  The mod can be https://modrinth.com/mod/switcher


:::

:::colorbox-example

  ◉ Allow everyone to use `/gamemode` command, except the player Alice.
  
  Issue the commands:
  
  1. `/lp group default permission set fuji.permission.gamemode true`
  
  2. `/lp user Alice permission set fuji.permission.gamemode false`


:::

:::colorbox-example

  ◉ Allow everyone to use `/gamemode spectator`, but disallows the `/gamemode creative`.
  
  You have touch the core, and the tricky things.
  
  Now, issue `/command-permission describe gamemode spectator` command.
  
  You will find that, the second command node `creative` is actually `an argument`.
  
  Its `argument` whose argument type is `gamemode`, and accepts the possible values `adventure`, `creative`, `spectator` and `survival`.
  
  All 4 gamemodes are possible values for `gamemode argument type`.
  
  That's the reason why you can't just ban the `creative` gamemode.
  
  
  
  If you really want to allow the user to use `/gamemode spectator`, and ban the `/gamemode creative`.
  
  You can use `command_bundle` to create a `user-level` command, to wrap the `/gamemode` command.
  
  Like, create a new command named `/switch-to-survival`, as a wrapper command for `/gamemode` command.


:::

:::colorbox-example

  ◉ Allow players to use `/seed` command.
  
  The `/seed` command provided by Mojang, requires `level permission` to be `3` to use.
  
  If you want to `allow` players to use `/seed` command, but you don't want to grant `op` for them.
  
  Then, you can `set` a `positive string permission` for them.
  
  Issue `/lp group default permission set fuji.permission.seed true`.
  
  It says `allow` the players to use `/seed` command.
  
  
  
  Issue `/command-permission describe seed` command, to see how it works.


:::

:::colorbox-example

  ◉ Dis-allow players to use `/list` command.
  
  The `/list` command provided by Mojang, requires `level permission` to be `0` to use.
  
  If you want to `dis-allow` players to use `/list` command.
  
  But because this command requires no string permission to use.
  
  So it's impossible to ban it via `luckperms` mod.
  
  
  
  In this case, you `can` set a `negative string permission` for them.
  
  Issue `/lp group default permission set fuji.permission.list false`.
  
  It says `dis-allow` the players to use `/list` command.
  
  
  
  Issue `/command-permission describe list` command, to see how it works.


:::

:::colorbox-example

  ◉ Unset the override of requirement of a specific command.
  
  To `undo` the operation in the `/seed` example.
  
  You can `unset` the assigned permission before.
  
  Issue `/lp group default permission unset fuji.permission.seed` command, to unset the assign permission.


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

```json showLineNumbers title="config/fuji/modules/command_permission/config.json"
{
  /* You can define `rules` to handle `special case`.
  If the `command permission` is `matched` by the `rule`.
  We return the pre-defined `permission test result` directly, without asking the luckperms.
  
  The `rules` can be used to handle `special case`.
  For example, if you enable the `permission implicitly inheritance` feature, and grant a `root permission` like `fuji.permission.fly`.
  You want to allow the players to use `/fly`, whose permission is `fuji.permission.fly`.
  But you don't want the players to use `/fly others <player>`, whose permission is `fuji.permission.fly.others.others`.
  In this case, you just enable the `permission implicitly inheritance` feature, and grant the `root permission`, then use rules to `exclude` special cases.
  
  NOTE: <red>Pre-defined rules only applied to non-operator players.</red> */
  "rules": [
    {
      "permission_pattern_regex": "fuji.permission.*others.*",
      "permission_test_result": "DENY_TO_USE_THE_COMMAND"
    }
  ]
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/command-permission describe <GreedyString command>`
- Document:   Describe the `required permissions` of `the given command`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-permission gui`
- Document:   Open the command permission gui.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-permission verbose`
- Document:   Toggle the command permission verbose mode.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
