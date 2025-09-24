---
title: command_bundle
---


# Module: command_bundle

## Overview
:::module
  This module allows `creating` a new command (Called `template command` or `bundle command`):
  
  - `User-Defined Arguments`: the new command can accept user-defined arguments.
  
  - `Command Body`: the body of a new command can consist of a list of existing commands.
  
  - `Placeholders`: the body can support placeholder parsing.
  
  
  
  It can be used as a generic `command template` system.


:::
## Color Boxes

:::colorbox-note

  ◉ The features of this module:
  
  1. Provide a user-friendly DSL, to create `a new custom command` easily.
  
  2. Support the inter-operation with `user-defined variable`, `placeholders` and `vanilla target selectors`.
  
  3. Support complex `argument types`: `required argument`, `literal argument` and even `optional argument with a specified default value`.
  
  4. A powerful `type-system`, to use the built-in `argument types`.
  
  5. Register and un-register `custom commands` on the fly, without a server re-start.


:::

:::colorbox-note

  ◉ The `purpose` of this module
  
  This module allows you to `define` a `new command`.
  
  To `define` a new command, you need to specify the following things:
  
  1. The `pattern` of this new command: If the pattern is `claim-kit example`, then the new command is `/claim-kit example`.
  
  2. The `bundle` of this new command: It is the `body` of this new command. It is `a list of commands` to be executed.
  
  
  
  To define a new `bundle command`, you need to specify the `pattern` and the `bundle` for it.
  
  The `pattern` describes: what does your `new command` look like?
  
  The `bundle` describes: what `commands` should we execute when your `new command` is executed?


:::

:::colorbox-note

  ◉ The syntax of the `pattern`.
  
  The `pattern` is composed by a list of `command node`.
  
  For example, the `pattern` instance `first second third` describes a command `/first second third`.
  
  It is composed by 3 `command node`, they are all `literal arguments`.
  
  
  
  In the syntax of `pattern`, there are 3 types of `arguments`:
  
  1. `Literal Argument`: You can write it down directly. For example `first`, `second`, `third`, and `claim-kit` are all literal arguments.
  
  2. `Required Argument`: It's syntax is `<arg-type arg-name>`. For example, `<int age>` means a `required argument` whose `argument type is int` and `argument name is age`.
  
  3. `Optional Argument`: It's syntax is `[arg-type arg-name default-value]`. It is similar to `required argument`, but you can provide a `default value` if this argument is not specified by the `command source`.
  
  
  
  You can `reference` the value of `Required Argument` or `Optional Argument` in the `bundle` component.
  
  For example, you can write down `$age` to refer to a `variable` named `age` defined in the `pattern` component.
  
  
  
  ◉ What is the `type system` used by the syntax of `pattern`?
  
  Fuji will register an `argument type adapter` for a specific `argument type`.
  
  You can issue `/fuji inspect argument-types` to list all registered `adapters`.
  
  You can use any `argument type` listed in that GUI.


:::

:::colorbox-note

  ◉ The syntax of the `bundle`.
  
  Actually, the `bundle` is just a `list of commands`.
  
  You can write `Minecraft commands` directly in the `bundle` list.
  
  
  
  When a `bundle command` is executed, we will execute the `list of commands` defined by `bundle` from up to down.
  
  Commands are executed `as console`.
  
  You can use `/run as player` or `/run as fake-op` to switch the command execution context, if it is needed.


:::

:::colorbox-tip

  ◉ Generate powerful commands using a generator.
  
  You can use command generator to get powerful commands:
  
  https://www.gamergeeks.net/apps/minecraft/particle-command-generator


:::

:::colorbox-example

  ◉ Use a `bundle command` to combine many commands into one command.
  
  In this example, we want to register a new command `/composite-heal`.
  
  To `decorate` an existed command `/heal`.
  
  The decorations are:
  
  1. We will `say` before the execution of `/heal` command.
  
  2. We will spawn a `heart particle` before the execution of `/heal` command.
  
  3. We will `say` after the execution of `/heal` command.
  
  
  
  To define this `bundle command` as shown below.
  
  Pattern: `composite-heal`
  
  Bundle:
  
  1. `say before heal %player:name%`
  
  2. `run as fake-op %player:name% particle minecraft:heart ~ ~2 ~`
  
  3. `run as player %player:name% heal`
  
  4. `say after heal %player:name%`


:::

:::colorbox-example

  ◉ Use a `bundle command` to transform the form of an existed command.
  
  In this example, we want to register a new command `/warn`.
  
  As a `shortcut command` to a specific command instance.
  
  
  
  Pattern: `warn <player player-arg> <greedy greedy-arg>`
  
  Bundle:
  
  1. `run as player %player:name% send-message $player-arg <red>You are warned: $greedy-arg`


:::

:::colorbox-example

  ◉ Use a `bundle command` to wrap a specific command instance.
  
  In this example, if you want to allow players to use `/give @s minecraft:apple`.
  
  You only want to allow the players to get free `apples`.
  
  And you didn't want to allow players to use `/give` command arbitrarily.
  
  
  
  Then, you can define a `bundle command` like `/free-apple` to `wrap` a specific instance of `/give` command.
  
  Pattern: `free-apple`
  
  Bundle:
  
  1. `run as fake-op %player:name% give @s minecraft:apple`
  
  
  
  ◉ Define a `bundle command` to wrap a specific `/kit give` command instance.
  
  Pattern: `kitfood`
  
  Bundle:
  
  1. `run as fake-op %player:name% kit give @s kit-food`


:::

:::colorbox-example

  ◉ See more advanced examples.
  
  The default config file contains a set of `advanced examples`.
  
  You can see there are many pre-defined `bundle commands`.
  
  Their name starts with `/my-command`.
  
  
  
  Besides, there are also a set of pre-defined `bundle commands` for convenience.
  
  For example: `/gmc`, `/gms`, `/day`, `/sun`...


:::

:::colorbox-example

  ◉ Transform the form of a command.
  
  - `/blocknbt` -> `/data get block`
  
  - `/entitynbt` -> `/data get entity`
  
  - `/gm`, `/gms` and `/gmc` -> `/gamemode`
  
  - `/findbiome` -> `/locate biome`
  
  - `/flyspeed` -> `/attribute Alice minecraft:generic.flying_speed`
  
  - `/walkspeed` -> `/attribute Alice minecraft:movement_speed`
  
  - `/maxhealth` -> `/attribute Alice minecraft:generic.max_health`
  
  - `/groundclean` -> `/kill @e[type=...]`
  
  - `/spawnmob` -> `/summon`
  
  - `/shoot` -> `/summon` with motion
  
  - `/smite` and `/thunder` -> `/summon minecraft:lighting_bolt`


:::

:::colorbox-example

  ◉ Define a `/tpw` command to teleport players to a specified dimension.
  
  Pattern: `tpw resource-world`
  
  Bundle:
  
  1. `run as fake-op %player:name% tppos --centerX 0 --centerZ 0 --maxRange 128 --dimension fuji:overworld`


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

```json showLineNumbers title="config/fuji/modules/command_bundle/config.json"
{
  /* Defined `bundle commands`. */
  "bundle_commands": [
    {
      "enable": true,
      "document": "This command is used to test the `optional argument`.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "my-command a-command-with-optional-arg <int int-arg-name> [str str-arg-name this is the default value]",
      "bundle": [
        "say hello %player:name%",
        "say int is $int-arg-name",
        "say str is $str-arg-name"
      ]
    },
    {
      "enable": true,
      "document": "This command is used to test the `literal argument` and `required argument`.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "my-command a-command-with-required-arg first-literal second-literal <str str-arg-name>",
      "bundle": [
        "say hello %player:name%",
        "say str is $str-arg-name"
      ]
    },
    {
      "enable": true,
      "document": "This command is used to test the `greedy string` argument type.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "my-command a-command-with-a-greedy-string <int int-arg-name> first-literal [greedy-string greedy-string-arg-name this is the default value]",
      "bundle": [
        "say hello %player:name%",
        "say int is $int-arg-name",
        "say str is $greedy-string-arg-name"
      ]
    },
    {
      "enable": true,
      "document": "This command is used to test the `literal argument`, `required argument` and `optional argument`.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "my-command a-command-with-all-types-of-args <int int-arg-name> first-literal [str str-arg-name the default value can contains placeholder %player:name% in %world:name%]",
      "bundle": [
        "say hello %player:name%",
        "say int is $int-arg-name",
        "say str is $str-arg-name"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/gamemode`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "gm <gamemode gamemode-arg>",
      "bundle": [
        "run as player %player:name% gamemode $gamemode-arg"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/gamemode creative`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "gmc",
      "bundle": [
        "run as player %player:name% gamemode creative"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/gamemode survival`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "gms",
      "bundle": [
        "run as player %player:name% gamemode survival"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/gamemode spectator`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "gmsp",
      "bundle": [
        "run as player %player:name% gamemode spectator"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/weather clear`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "sun",
      "bundle": [
        "run as player %player:name% weather clear"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/weather rain`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "rain",
      "bundle": [
        "run as player %player:name% weather rain"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/weather thunder`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "thunder",
      "bundle": [
        "run as player %player:name% weather thunder"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/time set day`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "day",
      "bundle": [
        "run as player %player:name% time set day"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/time set night`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "night",
      "bundle": [
        "run as player %player:name% time set night"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/time set midnight`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "midnight",
      "bundle": [
        "run as player %player:name% time set midnight"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/time set noon`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "noon",
      "bundle": [
        "run as player %player:name% time set noon"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/data get entity`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "nbt entity <entity target>",
      "bundle": [
        "run as fake-op %player:name% data get entity $target"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/data get block`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "nbt block <block-pos target>",
      "bundle": [
        "run as fake-op %player:name% data get block $target"
      ]
    },
    {
      "enable": true,
      "document": "This command is an alias for `/data get entity @s SelectedItem`",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "nbt item",
      "bundle": [
        "run as fake-op %player:name% data get entity %player:name% SelectedItem"
      ]
    },
    {
      "enable": true,
      "document": "This command is an easter egg for `/plugins` in Bukkit.",
      "requirement": {
        "level": 0,
        "string": null
      },
      "pattern": "plugins",
      "bundle": [
        "send-message %player:name% Server Plugins (0): "
      ]
    },
    {
      "enable": true,
      "document": "This command is an easter egg for `/icanhasbukkit` in Bukkit.",
      "requirement": {
        "level": 0,
        "string": null
      },
      "pattern": "icanhasbukkit",
      "bundle": [
        "send-message %player:name% <i>Checking version, please wait...",
        "delay 2 send-message %player:name% This server is running Bukkit version (MC: %server:version%)",
        "delay 3 send-message %player:name% <green>You are running the latest version"
      ]
    },
    {
      "enable": true,
      "document": "This command summons an entity with specified entity type, with an initial motion.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "shoot <entity-type entity-type-arg-name>",
      "bundle": [
        "execute as %player:name% run summon $entity-type-arg-name ~ ~1 ~ {ExplosionPower:4,Motion:[3.0,0.0,0.0]}"
      ]
    },
    {
      "enable": true,
      "document": "This command summons a lightning_bolt entity.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "strike",
      "bundle": [
        "execute as %player:name% at @s run summon lightning_bolt ^ ^ ^32"
      ]
    },
    {
      "enable": true,
      "document": "This command applies the `unbreakable` enchantment for the item in hand.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "unbreakable",
      "bundle": [
        "run as player %player:name% enchant %player:name% minecraft:unbreaking"
      ]
    },
    {
      "enable": true,
      "document": "This command modifies your movement_speed attribute.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "move-speed set <double double-arg>",
      "bundle": [
        "run as player %player:name% attribute %player:name% minecraft:generic.movement_speed base set $double-arg"
      ]
    },
    {
      "enable": true,
      "document": "This command modifies your movement_speed attribute.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "move-speed reset",
      "bundle": [
        "run as player %player:name% attribute %player:name% minecraft:generic.movement_speed base set 0.10000000149011612"
      ]
    },
    {
      "enable": true,
      "document": "This command will introduce yourself to others.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "introduce-me",
      "bundle": [
        "run as fake-op %player:name% me i am %player:name%"
      ]
    },
    {
      "enable": true,
      "document": "This command will roll a random dice.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "dice",
      "bundle": [
        "say %player:name% just roll out %fuji:random 1 6% points."
      ]
    },
    {
      "enable": true,
      "document": "This command will give `all` recipes to the player.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "obtain-all-recipes",
      "bundle": [
        "run as fake-op %player:name% recipe give %player:name% *"
      ]
    },
    {
      "enable": true,
      "document": "This command will give the skull of specified player.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "skull <offline-player offline-player-arg>",
      "bundle": [
        "give %player:name% minecraft:player_head[minecraft:profile=$offline-player-arg]"
      ]
    },
    {
      "enable": true,
      "document": "This command will print the UUID of specified player.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "pattern": "uuid <player target>",
      "bundle": [
        "run as fake-op $target send-message %player:name% <yellow>The UUID of player $target is %fuji:escape player:uuid 2%"
      ]
    }
  ]
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/command-bundle list`
- Document:   List all registered bundle-commands in server.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-bundle register`
- Document:   Register all commands defined in bundle-command configuration file.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-bundle un-register`
- Document:   Un-register all bundle-commands registered in server.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/day`
- Document:   This command is an alias for `/time set day`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/dice`
- Document:   This command will roll a random dice.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/gm <GameMode gamemode-arg>`
- Document:   This command is an alias for `/gamemode`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/gmc`
- Document:   This command is an alias for `/gamemode creative`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/gms`
- Document:   This command is an alias for `/gamemode survival`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/gmsp`
- Document:   This command is an alias for `/gamemode spectator`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/icanhasbukkit`
- Document:   This command is an easter egg for `/icanhasbukkit` in Bukkit.


- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/introduce-me`
- Document:   This command will introduce yourself to others.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/midnight`
- Document:   This command is an alias for `/time set midnight`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/move-speed reset`
- Document:   This command modifies your movement_speed attribute.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/move-speed set <double double-arg>`
- Document:   This command modifies your movement_speed attribute.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/my-command a-command-with-a-greedy-string <int int-arg-name> first-literal [GreedyString greedy-string-arg-name]`
- Document:   This command is used to test the `greedy string` argument type.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/my-command a-command-with-all-types-of-args <int int-arg-name> first-literal [String str-arg-name]`
- Document:   This command is used to test the `literal argument`, `required argument` and `optional argument`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/my-command a-command-with-optional-arg <int int-arg-name> [String str-arg-name]`
- Document:   This command is used to test the `optional argument`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/my-command a-command-with-required-arg first-literal second-literal <String str-arg-name>`
- Document:   This command is used to test the `literal argument` and `required argument`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nbt block <BlockPos target>`
- Document:   This command is an alias for `/data get block`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nbt entity <Entity target>`
- Document:   This command is an alias for `/data get entity`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nbt item`
- Document:   This command is an alias for `/data get entity @s SelectedItem`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/night`
- Document:   This command is an alias for `/time set night`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/noon`
- Document:   This command is an alias for `/time set noon`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/obtain-all-recipes`
- Document:   This command will give `all` recipes to the player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/plugins`
- Document:   This command is an easter egg for `/plugins` in Bukkit.


- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rain`
- Document:   This command is an alias for `/weather rain`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/shoot <NotSupportedType entity-type-arg-name>`
- Document:   This command summons an entity with specified entity type, with an initial motion.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/skull <OfflinePlayerName offline-player-arg>`
- Document:   This command will give the skull of specified player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/strike`
- Document:   This command summons a lightning_bolt entity.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/sun`
- Document:   This command is an alias for `/weather clear`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/thunder`
- Document:   This command is an alias for `/weather thunder`


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/unbreakable`
- Document:   This command applies the `unbreakable` enchantment for the item in hand.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/uuid <ServerPlayerEntity target>`
- Document:   This command will print the UUID of specified player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
