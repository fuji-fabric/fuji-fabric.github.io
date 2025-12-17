---
title: core
---


# Module: core

## Color Boxes

:::colorbox-note

  ◉ Does this mod support hot reload?
  
  Yes. It supports hot reloading for files belonging to `enabled` modules.
  
  Use the command `/fuji reload` to do that.
  
  
  
  Limitations:
  
  - Modules cannot be `enabled` or `disabled` while the server is running.
  
  
  
  Design rationale:
  
  1. Disabled modules are never loaded.
  
  2. You can freely disable unwanted modules.
  
  3. Module-level conflicts can be resolved by disabling only the affected module.
  
  4. Disabled modules incur no performance cost.


:::

:::colorbox-tip

  ◉ How to use this mod?
  
  All modules are disabled by default.
  
  Enable only the modules you need.
  
  
  
  Steps:
  
  1. Edit `config/fuji/config.json` file.
  
  2. Set the desired modules to `enabled`.
  
  3. Re-start the server to apply the changes.


:::

:::colorbox-tip

  ◉ Adjust lore text font size
  
  If lore text appears too large:
  
  - Open `Esc` → `Options` → `Video Settings` → `GUI Scale`.
  
  
  
  ◉ Improve tooltip rendering
  
  If `GUI scaling` is insufficient, install the client-side mod `ToolTipFix`:
  
  - https://modrinth.com/mod/tooltipfix
  
  - https://www.curseforge.com/minecraft/mc-mods/tooltipfix


:::

:::colorbox-tip

  ◉ Use a modern text editor
  
  Most configuration files are written in JSON and may be large.
  
  A modern text editor provides `syntax highlighting` and `error checking`.
  
  It makes configuration easier and safer.
  
  
  
  Recommended text editors:
  
  1. Visual Studio Code: https://code.visualstudio.com/
  
  2. Vim: https://neovim.io/
  
  3. Emacs: https://www.gnu.org/software/emacs/


:::

:::colorbox-tip

  ◉ Set up a local test server
  
  If you run a remote production server, it is strongly recommended to
  
  maintain a local test server.
  
  
  
  The test server should mirror the production environment:
  
  1. Same mods
  
  2. Same configuration files
  
  
  
  Workflow:
  
  1. Test changes locally.
  
  2. Verify everything works as expected.
  
  3. Upload the updated mods and configurations to the production server.


:::

:::colorbox-example

  ◉ Open the interactive document GUI
  
  Command: `/fuji`
  
  
  
  ◉ List all Fuji commands
  
  Command: `/fuji inspect fuji-commands`
  
  
  
  ◉ List all Fuji permissions and metas
  
  Command: `/fuji inspect permissions-and-metas`
  
  
  
  ◉ List all Fuji placeholders
  
  Command: `/fuji inspect placeholders`
  
  
  
  ◉ List all Fuji configurations
  
  Command: `/fuji inspect configurations`
  
  
  
  ◉ List all Fuji jobs
  
  Command: `/fuji inspect jobs`
  
  
  
  ◉ List all Fuji languages
  
  Command: `/fuji inspect languages`
  
  
  
  ◉ List all Fuji argument types
  
  Command: `/fuji inspect argument-types`
  
  
  
  ◉ List all Fuji events
  
  Command: `/fuji inspect events`


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
    /* Debug related options. */
    "debug": {
      /* Force disable `all` modules.
      Used to test the compatibility between `fuji` and `other mods`. */
      "disable_all_modules": false
      /* Should we log the `debug` level messages into the `console`?
      This option can be changed using `/fuji debug` command. */,
      "log_debug_messages": false
      /* Should we print the user guide in the console on server startup? */,
      "print_user_guide_in_console": true
    }
    /* Fuji will back up the `config/fuji` dir before it loads any module. */,
    "backup": {
      /* How many `backup files` should we keep? */
      "max_slots": 15
      /* The `paths` that should be skipped when backup.
      The `path` is resolved and related to `config/fuji/` dir. */,
      "skip": [
        "modules/head/head-data"
      ]
    }
    /* The language related options. */,
    "language": {
      /* The `default language` used by Fuji.
      The language files are located in `config/fuji/lang` dir. */
      "default_language": "en_US",
      "validator": {
        /* Should we validate the `arguments` when loading a `language file`? */
        "validate_arguments": true
      }
    }
    /* The options for all fuji commands. */,
    "command": {
      /* The `command assistant` offers an `auto help` feature for all fuji commands.
      It dynamically inspects possible command paths and provides users with real-time command hints.
      
      <green>NOTE: To hot-switch this feature without a server re-start, you have to:
      1. Issue `/fuji reload` first, to reload the `main control file`.
      2. Issue `/reload`, to reload `all the commands`. */
      "assistant": {
        "enable": true
        /* The requirement to use the `command assistant`. */,
        "requirement": {
          "level_permission": 0
        }
      }
    }
    /* The permission related options. */,
    "permission": {
      /* Fuji defines commands into 2 groups, for different users.
      One group for `normal user`, these commands require `level 0 permission` to use.
      One group for `admin user`, these commands require `level 4 permission` to use.
      
      If you want to define the permission of commands by yourself,
      you can enable `this` option.
      And use `command_permission` module to define permission for each command. */
      "all_commands_require_level_4_permission_to_use_by_default": false
    }
    /* The scheduler related options.
    The `scheduler` system is used to run `jobs`. */,
    "scheduler": {
      /* The logger level for `quartz` library.
      The level is recommended to be higher than `WARN`, to prevent console spam.
      Acceptable levels: ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < OFF */
      "logger_level": "WARN"
    },
    "formatter": {
      "date_formatter": "yyyy-MM-dd HH:mm:ss"
    },
    "document": {
      /* When `enable` this option, we will always use the `built-in doc strings`, which is written in `English`.
      This option is used to ensure you always see the `latest version` of `doc strings` from your `current using version`.
      
      When `disable` this option, we will ues the `doc strings` from the `language files`. */
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
    }
    /* The language related options. */,
    "language": {
      "enable": true
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
    },
    "evaluator": {
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
- Argument Type Class: `[BossBarColor]`
:::
:::argument-type
- Argument Type Name: `[bossbar-style]`
- Argument Type Class: `[BossBarOverlay]`
:::
:::argument-type
- Argument Type Name: `[color]`
- Argument Type Class: `[ChatFormatting]`
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
- Argument Type Class: `[Anchor]`
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
- Argument Type Class: `[NotSupportedType]`
:::
:::argument-type
- Argument Type Name: `[fuji-identifier]`
- Argument Type Class: `[FujiIdentifier]`
:::
:::argument-type
- Argument Type Name: `[game-profile, profile]`
- Argument Type Class: `[GameProfileCollection]`
:::
:::argument-type
- Argument Type Name: `[gamemode]`
- Argument Type Class: `[GameType]`
:::
:::argument-type
- Argument Type Name: `[greedy-string, greedy]`
- Argument Type Class: `[GreedyString]`
:::
:::argument-type
- Argument Type Name: `[greedy-command-string]`
- Argument Type Class: `[GreedyCommandString]`
:::
:::argument-type
- Argument Type Name: `[greedy-string-list, greedy-list]`
- Argument Type Class: `[GreedyStringList]`
:::
:::argument-type
- Argument Type Name: `[id, identifier]`
- Argument Type Class: `[IdentifierIR]`
:::
:::argument-type
- Argument Type Name: `[int-range]`
- Argument Type Class: `[NotSupportedType]`
:::
:::argument-type
- Argument Type Name: `[int, integer]`
- Argument Type Class: `[int, Integer]`
:::
:::argument-type
- Argument Type Name: `[item-predicate]`
- Argument Type Class: `[Result]`
:::
:::argument-type
- Argument Type Name: `[item-slot]`
- Argument Type Class: `[SlotArgument]`
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
- Argument Type Class: `[CompoundTag]`
:::
:::argument-type
- Argument Type Name: `[nbt-element]`
- Argument Type Class: `[Tag]`
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
- Argument Type Class: `[ParticleOptions]`
:::
:::argument-type
- Argument Type Name: `[player]`
- Argument Type Class: `[ServerPlayer]`
:::
:::argument-type
- Argument Type Name: `[players, player-list]`
- Argument Type Class: `[PlayerCollection]`
:::
:::argument-type
- Argument Type Name: `[rotation]`
- Argument Type Class: `[Coordinates]`
:::
:::argument-type
- Argument Type Name: `[scoreboard-criterion]`
- Argument Type Class: `[ObjectiveCriteria]`
:::
:::argument-type
- Argument Type Name: `[scoreboard-objective]`
- Argument Type Class: `[Objective]`
:::
:::argument-type
- Argument Type Name: `[scoreboard-slot]`
- Argument Type Class: `[DisplaySlot]`
:::
:::argument-type
- Argument Type Name: `[]`
- Argument Type Class: `[CommandSourceStack]`
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
- Argument Type Class: `[PlayerTeam]`
:::
:::argument-type
- Argument Type Name: `[text]`
- Argument Type Class: `[Component]`
:::
:::argument-type
- Argument Type Name: `[vec2f, vec2]`
- Argument Type Class: `[Vec2]`
:::
:::argument-type
- Argument Type Name: `[vec3d]`
- Argument Type Class: `[Vec3]`
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
