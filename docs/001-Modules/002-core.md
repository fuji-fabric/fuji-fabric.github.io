---
title: core
---


# Module: core

## Color Boxes

:::colorbox-note

  ◉ Does fuji support the `hot reload`?
  
  
  
  Yes, fuji does support to `hot reload` the `files` from a `enabled module`.
  
  To do that, just issue `/fuji reload`.
  
  
  
  However, you can't `enable` or `disable` a module when the server `is running`.
  
  This is a design decision.
  
  Fuji will `never load` a `disabled module` at all, for these considerations:
  
  1. For flexible, you can `disable any module` you don't like.
  
  2. If any other mods conflicts with `a module`, you can just `disable that module`.
  
  3. You only enable the `interested modules`, and there is no performance paying for `disabled module`.


:::

:::colorbox-tip

  ◉ How to use fuji?
  
  
  
  All `modules` are `disabled` by default.
  
  You can only enable the `interested modules`.
  
  Modify the `config/fuji/config.json` file to `enable` a module.
  
  After that, `re-start` the server, to apply the `module enable status`.


:::

:::colorbox-tip

  ◉ Adjust the `lore` text font size.
  
  If the `lore` text is too large in your UI.
  
  You can configure it in `Esc` - `Options` - `Video Settings` - `GUI Scale`
  
  
  
  ◉ Install the `client-side` mod to improve the displaying of `tooltip`.
  
  If adjusting the `GUI Scale` option doesn't work well for you.
  
  You can install the `ToolTipFix` mod to enhance the `tooltip` displaying.
  
  - https://modrinth.com/mod/tooltipfix
  
  - https://www.curseforge.com/minecraft/mc-mods/tooltipfix


:::

:::colorbox-tip

  ◉ Use a `modern` text editor.
  
  The most of `config files` are written in `json language`, and contains lots of lines.
  
  A `modern` text editor can `highlight` the structure of the file, and check the `syntax errors` for you.
  
  So that you can `read` and `edit` the config files easier.
  
  
  
  Here are recommended text editors:
  
  1. Visual Studio Code: https://code.visualstudio.com/
  
  2. Vim: https://neovim.io/
  
  3. Emacs: https://www.gnu.org/software/emacs/


:::

:::colorbox-tip

  ◉ Setup a `test server` in your `local machine`.
  
  You may have a `remote machine` (Typically named `production server`) that is `running` and `hosting` your `Minecraft network`.
  
  However, it's strongly recommended to setup a `test server` in your `local machine`.
  
  The `test server` should be a `mirror` of that `production server`.
  
  It should contains the `mods` files and the `config files`.
  
  
  
  You can modify and test new things in your `test server`.
  
  After everything is configured and working properly, you just upload the `mods` and `config files` into your `remote machine`.


:::

:::colorbox-example

  ◉ Open `this` GUI
  
  Issue: `/fuji`
  
  
  
  ◉ List all `fuji commands`
  
  Issue: `/fuji inspect fuji-commands`
  
  
  
  ◉ List all `fuji permissions` and `fuji metas`
  
  Issue: `/fuji inspect permissions-and-metas`
  
  
  
  ◉ List all `fuji placeholders`
  
  Issue: `/fuji inspect placeholders`
  
  
  
  ◉ List all `fuji configurations`
  
  Issue: `/fuji inspect configurations`
  
  
  
  ◉ List all `fuji jobs`
  
  Issue: `/fuji inspect jobs`
  
  
  
  ◉ List all `fuji languages`
  
  Issue: `/fuji inspect languages`
  
  
  
  ◉ List all `fuji argument types`
  
  Issue: `/fuji inspect argument-types`
  
  
  
  ◉ List all `fuji events`
  
  Issue: `/fuji inspect events`


:::

## Configurations
<Admonition type="warning" icon="" title="">
**The following JSON content is provided for reference only.**
It must NOT be copied directly into the configuration directory, as it does not represent valid JSON syntax.
</Admonition>
:::config
- File Name: `config.json`
- Document:   This file is named `Main Control File`.
  
  It's used to:
  
  1. Configure the options for `core`, which affects all `modules`.
  
  2. Enable or disable a `module`.
  
  
  
  NOTE: You need to re-start the server, to `enable` or `disable` a `module`.

- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/config.json"
{
  /* Fuji is composed by `core` and `module`.
  The `core` config affects `all` modules.
  The `module` config only affects that specific module. */
  "core": {
    "debug": {
      "disable_all_modules": false,
      "log_debug_messages": false,
      "print_user_guide_in_console": true
    },
    "backup": {
      "max_slots": 15,
      "skip": [
        "modules/head/head-data"
      ]
    },
    "language": {
      "default_language": "en_US",
      "validator": {
        "validate_arguments": true
      }
    },
    "command": {
      "assistant": {
        "enable": true,
        "requirement": {
          "level_permission": 0
        }
      }
    },
    "permission": {
      "all_commands_require_level_4_permission_to_use_by_default": false
    },
    "scheduler": {
      "logger_level": "WARN"
    },
    "formatter": {
      "date_formatter": "yyyy-MM-dd HH:mm:ss"
    },
    "document": {
      "always_use_built_in_doc_strings": true
    }
  }
  /* Fuji is designed to be fully-modular.
  All modules is `disabled` by default.
  You can modify the `enable` field to enable a module <red>after a server re-start</red>.
  <b>Remember to `restart` the server to apply the modification.
  
  Issue `/fuji inspect modules` to see the module status. */,
  "modules": {
    "fuji": {
      "enable": true
    },
    "language": {
      "enable": false
    },
    "chat": {
      "enable": false,
      "style": {
        "enable": true
      },
      "display": {
        "enable": true
      },
      "history": {
        "enable": true
      },
      "trigger": {
        "enable": true
      },
      "replace": {
        "enable": true
      },
      "mention": {
        "enable": true
      },
      "spy": {
        "enable": false
      }
    },
    "placeholder": {
      "enable": false
    },
    "predicate": {
      "enable": false
    },
    "motd": {
      "enable": false
    },
    "nametag": {
      "enable": false
    },
    "tab": {
      "enable": false
    },
    "tpa": {
      "enable": false
    },
    "back": {
      "enable": false
    },
    "home": {
      "enable": false
    },
    "pvp": {
      "enable": false
    },
    "afk": {
      "enable": false,
      "effect": {
        "enable": true
      }
    },
    "rtp": {
      "enable": false
    },
    "works": {
      "enable": false
    },
    "deathlog": {
      "enable": false
    },
    "view": {
      "enable": false
    },
    "echo": {
      "enable": true,
      "send_message": {
        "enable": true
      },
      "send_broadcast": {
        "enable": true
      },
      "send_actionbar": {
        "enable": true
      },
      "send_title": {
        "enable": true
      },
      "send_toast": {
        "enable": true
      },
      "send_chat": {
        "enable": true
      },
      "send_bossbar": {
        "enable": true
      },
      "send_custom": {
        "enable": true
      },
      "send_console": {
        "enable": true
      },
      "send_dialog": {
        "enable": true
      }
    },
    "functional": {
      "enable": false,
      "workbench": {
        "enable": false
      },
      "enchantment": {
        "enable": false
      },
      "grindstone": {
        "enable": false
      },
      "stonecutter": {
        "enable": false
      },
      "anvil": {
        "enable": false
      },
      "cartography": {
        "enable": false
      },
      "enderchest": {
        "enable": false
      },
      "smithing": {
        "enable": false
      },
      "loom": {
        "enable": false
      }
    },
    "economy": {
      "enable": false
    },
    "system_message": {
      "enable": false
    },
    "cleaner": {
      "enable": false
    },
    "world": {
      "enable": false,
      "border": {
        "enable": true
      },
      "gamerule": {
        "enable": true
      }
    },
    "skin": {
      "enable": false
    },
    "title": {
      "enable": false
    },
    "leaderboard": {
      "enable": false
    },
    "jail": {
      "enable": false
    },
    "kit": {
      "enable": false
    },
    "rank": {
      "enable": false
    },
    "head": {
      "enable": false
    },
    "color": {
      "enable": false,
      "sign": {
        "enable": true
      },
      "anvil": {
        "enable": true
      }
    },
    "sit": {
      "enable": false
    },
    "teleport_warmup": {
      "enable": false
    },
    "temp_ban": {
      "enable": false
    },
    "anti_build": {
      "enable": false
    },
    "warning": {
      "enable": false
    },
    "maintenance": {
      "enable": false
    },
    "command_scheduler": {
      "enable": false
    },
    "command_permission": {
      "enable": false
    },
    "command_rewrite": {
      "enable": false
    },
    "command_alias": {
      "enable": false
    },
    "command_bundle": {
      "enable": false
    },
    "command_attachment": {
      "enable": false
    },
    "command_interactive": {
      "enable": false
    },
    "command_warmup": {
      "enable": false
    },
    "command_cooldown": {
      "enable": false
    },
    "command_toolbox": {
      "enable": false,
      "bed": {
        "enable": false
      },
      "extinguish": {
        "enable": false
      },
      "feed": {
        "enable": false
      },
      "fly": {
        "enable": false
      },
      "god": {
        "enable": false
      },
      "hat": {
        "enable": false
      },
      "heal": {
        "enable": false
      },
      "itemname": {
        "enable": false
      },
      "lore": {
        "enable": false
      },
      "more": {
        "enable": false
      },
      "ping": {
        "enable": false
      },
      "realname": {
        "enable": false
      },
      "nickname": {
        "enable": false
      },
      "repair": {
        "enable": false
      },
      "reply": {
        "enable": false
      },
      "seen": {
        "enable": false
      },
      "suicide": {
        "enable": false
      },
      "top": {
        "enable": false
      },
      "down": {
        "enable": false
      },
      "trashcan": {
        "enable": false
      },
      "tppos": {
        "enable": false
      },
      "tphere": {
        "enable": false
      },
      "warp": {
        "enable": false
      },
      "burn": {
        "enable": false
      },
      "help_op": {
        "enable": false
      },
      "near": {
        "enable": false
      },
      "jump": {
        "enable": false
      },
      "compass": {
        "enable": false
      },
      "glow": {
        "enable": false
      },
      "freeze": {
        "enable": false
      },
      "rules": {
        "enable": false
      },
      "speed": {
        "enable": false
      },
      "disconnect": {
        "enable": false
      }
    },
    "command_spy": {
      "enable": false
    },
    "command_event": {
      "enable": false
    },
    "command_debug": {
      "enable": false
    },
    "command_advice": {
      "enable": false
    },
    "command_state": {
      "enable": false
    },
    "command_menu": {
      "enable": false
    },
    "command_meta": {
      "enable": false,
      "run": {
        "enable": false
      },
      "for_each": {
        "enable": false
      },
      "one_of": {
        "enable": false
      },
      "chain": {
        "enable": false
      },
      "IF": {
        "enable": false
      },
      "NOT": {
        "enable": false
      },
      "AND": {
        "enable": false
      },
      "OR": {
        "enable": false
      },
      "nop": {
        "enable": false
      },
      "delay": {
        "enable": false
      },
      "json": {
        "enable": false
      },
      "attachment": {
        "enable": false
      },
      "shell": {
        "enable": false
      },
      "when_online": {
        "enable": false
      }
    },
    "top_chunks": {
      "enable": false
    },
    "world_downloader": {
      "enable": false
    },
    "whitelist": {
      "enable": false
    },
    "profiler": {
      "enable": false
    },
    "launcher": {
      "enable": false
    },
    "multiplier": {
      "enable": false
    },
    "disabler": {
      "enable": false,
      "chat_speed_disabler": {
        "enable": false
      },
      "move_speed_disabler": {
        "enable": false
      },
      "move_wrongly_disabler": {
        "enable": false
      },
      "max_player_disabler": {
        "enable": false
      }
    },
    "queue": {
      "enable": false
    },
    "gameplay": {
      "enable": false,
      "multi_obsidian_platform": {
        "enable": false
      },
      "carpet": {
        "enable": false,
        "fake_player_manager": {
          "enable": false
        },
        "better_info": {
          "enable": false
        }
      }
    },
    "doctor": {
      "enable": true
    },
    "tester": {
      "enable": false
    },
    "document": {
      "enable": false
    }
  }
}
```
</details>
:::
:::config
- File Name: `permission.json`
- Document:   ◉ How is `permission` handled for each fuji command?
  
  1. Each fuji command is registered with a `default level permission`.
  
  1.a. Check the status of `all_commands_require_level_4_permission_to_use_by_default` option in `config.json` file.
  
  1.a.i. If it's `true`, then all fuji commands are registered with `level permission 4`.
  
  1.a.ii. If it's `false`, then each fuji command is registered with `level permission N` defined in `permission.json` file.
  
  2. You can use `command_permission` module to assign a `string permission` for each command, and override the `default level permission`.
  
  
  
  ◉ What is the `permission.json` file?
  
  This file is used to define the `default required level permission` for each registered fuji commands.
  
  After modifying this file, issue the `/reload` command to reload all the commands.
  
  
  
  This config is typically used in a `single-player world`, where no `LuckPerms` mod is installed.
  
  If you are hosting a dedicated Minecraft server, you can configure the `string permission` for each command using `command_permission` module.
  
  The `command_permission` module will override the `command requirement` defined in this file.
  
  So, if you are hosting a dedicated Minecraft server, you can simply use `command_permission` module, and ignore this file.

- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/permission.json"
{
  "default_level_permission": {
    "commands": {}
  }
}
```
</details>
:::
## Jobs
:::job
- Job Name: `FlushCacheJob`
- Document:   This `job` is used to `flush` the `cache data` from `memory` into `storage`.
  
  
  
  The `cache files` are located in `config/fuji/cache/` directory.


:::
:::job
- Job Name: `CleanTTLMapJob`
- Document:   This `job` is used to clean up the `TTL Map` data structure, and remove `expired entries`.
  
  The `TTL Map` is used in `/command-callback` command, to store the `callback entry`.
  
  
  
  NOTE: The `/command-callback` command is typically used for `click event` in text.
  
  A player requires the permission to use `/command-callback` command, or the client will get the `Unknown Command Error`.


:::
## Argument Types
:::argument-type
- Argument Type Name: `[biome]`
- Argument Type Class: `[BiomeId]`
:::
:::argument-type
- Argument Type Name: `[blockpos, block-pos]`
- Argument Type Class: `[BlockPos]`
:::
:::argument-type
- Argument Type Name: `[blockstate, block-state]`
- Argument Type Class: `[BlockState]`
:::
:::argument-type
- Argument Type Name: `[bool, boolean]`
- Argument Type Class: `[boolean, Boolean]`
:::
:::argument-type
- Argument Type Name: `[bossbar-color]`
- Argument Type Class: `[Color]`
:::
:::argument-type
- Argument Type Name: `[bossbar-style]`
- Argument Type Class: `[Style]`
:::
:::argument-type
- Argument Type Name: `[color]`
- Argument Type Class: `[Formatting]`
:::
:::argument-type
- Argument Type Name: `[column-pos]`
- Argument Type Class: `[ColumnPos]`
:::
:::argument-type
- Argument Type Name: `[]`
- Argument Type Class: `[CommandActor]`
:::
:::argument-type
- Argument Type Name: `[]`
- Argument Type Class: `[CommandContext]`
:::
:::argument-type
- Argument Type Name: `[command-function]`
- Argument Type Class: `[CommandFunction]`
:::
:::argument-type
- Argument Type Name: `[dimension, world]`
- Argument Type Class: `[Dimension]`
:::
:::argument-type
- Argument Type Name: `[dimension-type, world-type]`
- Argument Type Class: `[DimensionType]`
:::
:::argument-type
- Argument Type Name: `[double]`
- Argument Type Class: `[double, Double]`
:::
:::argument-type
- Argument Type Name: `[entity-anchor]`
- Argument Type Class: `[EntityAnchor]`
:::
:::argument-type
- Argument Type Name: `[entity]`
- Argument Type Class: `[Entity]`
:::
:::argument-type
- Argument Type Name: `[entities]`
- Argument Type Class: `[EntityCollection]`
:::
:::argument-type
- Argument Type Name: `[entity-type]`
- Argument Type Class: `[NotSupportedType]`
:::
:::argument-type
- Argument Type Name: `[float]`
- Argument Type Class: `[float, Float]`
:::
:::argument-type
- Argument Type Name: `[float-range]`
- Argument Type Class: `[DoubleRange]`
:::
:::argument-type
- Argument Type Name: `[game-profile, profile]`
- Argument Type Class: `[GameProfileCollection]`
:::
:::argument-type
- Argument Type Name: `[gamemode]`
- Argument Type Class: `[GameMode]`
:::
:::argument-type
- Argument Type Name: `[greedy-string, greedy]`
- Argument Type Class: `[GreedyString]`
:::
:::argument-type
- Argument Type Name: `[greedy-string-list, greedy-list]`
- Argument Type Class: `[GreedyStringList]`
:::
:::argument-type
- Argument Type Name: `[id, identifier]`
- Argument Type Class: `[Identifier]`
:::
:::argument-type
- Argument Type Name: `[int-range]`
- Argument Type Class: `[IntRange]`
:::
:::argument-type
- Argument Type Name: `[int, integer]`
- Argument Type Class: `[int, Integer]`
:::
:::argument-type
- Argument Type Name: `[item-predicate]`
- Argument Type Class: `[ItemStackPredicateArgument]`
:::
:::argument-type
- Argument Type Name: `[item-slot]`
- Argument Type Class: `[ItemSlotArgumentType]`
:::
:::argument-type
- Argument Type Name: `[item, itemstack]`
- Argument Type Class: `[ItemStackWrapper]`
:::
:::argument-type
- Argument Type Name: `[long]`
- Argument Type Class: `[long, Long]`
:::
:::argument-type
- Argument Type Name: `[nbt-compound]`
- Argument Type Class: `[NbtCompound]`
:::
:::argument-type
- Argument Type Name: `[nbt-element]`
- Argument Type Class: `[NbtElement]`
:::
:::argument-type
- Argument Type Name: `[nbt-path]`
- Argument Type Class: `[NbtPath]`
:::
:::argument-type
- Argument Type Name: `[offline-game-profile]`
- Argument Type Class: `[OfflineGameProfile]`
:::
:::argument-type
- Argument Type Name: `[offline-player]`
- Argument Type Class: `[OfflinePlayerName]`
:::
:::argument-type
- Argument Type Name: `[operation]`
- Argument Type Class: `[Operation]`
:::
:::argument-type
- Argument Type Name: `[particle-effect]`
- Argument Type Class: `[ParticleEffect]`
:::
:::argument-type
- Argument Type Name: `[player]`
- Argument Type Class: `[ServerPlayerEntity]`
:::
:::argument-type
- Argument Type Name: `[players, player-list]`
- Argument Type Class: `[PlayerCollection]`
:::
:::argument-type
- Argument Type Name: `[rotation]`
- Argument Type Class: `[PosArgument]`
:::
:::argument-type
- Argument Type Name: `[scoreboard-criterion]`
- Argument Type Class: `[ScoreboardCriterion]`
:::
:::argument-type
- Argument Type Name: `[scoreboard-objective]`
- Argument Type Class: `[ScoreboardObjective]`
:::
:::argument-type
- Argument Type Name: `[scoreboard-slot]`
- Argument Type Class: `[ScoreboardDisplaySlot]`
:::
:::argument-type
- Argument Type Name: `[]`
- Argument Type Class: `[ServerCommandSource]`
:::
:::argument-type
- Argument Type Name: `[slot-range]`
- Argument Type Class: `[SlotRange]`
:::
:::argument-type
- Argument Type Name: `[str, string]`
- Argument Type Class: `[String]`
:::
:::argument-type
- Argument Type Name: `[string-list]`
- Argument Type Class: `[StringList]`
:::
:::argument-type
- Argument Type Name: `[style]`
- Argument Type Class: `[Style]`
:::
:::argument-type
- Argument Type Name: `[team]`
- Argument Type Class: `[Team]`
:::
:::argument-type
- Argument Type Name: `[text]`
- Argument Type Class: `[Text]`
:::
:::argument-type
- Argument Type Name: `[vec2f, vec2]`
- Argument Type Class: `[Vec2f]`
:::
:::argument-type
- Argument Type Name: `[vec3d]`
- Argument Type Class: `[Vec3d]`
:::
:::argument-type
- Argument Type Name: `[word]`
- Argument Type Class: `[Word]`
:::
:::argument-type
- Argument Type Name: `[step-type]`
- Argument Type Class: `[StepType]`
:::
:::argument-type
- Argument Type Name: `[duration]`
- Argument Type Class: `[Duration]`
:::
