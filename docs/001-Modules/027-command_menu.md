---
title: command_menu
---


# Module: command_menu

## Overview
:::module
  This module allows defining `menu GUIs` that can execute commands.


:::
## Color Boxes

:::colorbox-note

  ◉ The definition of `menu` and `slot`.
  
  A `menu` is a virtual `container GUI`.
  
  The `virtual GUI` is composed of `slots`.
  
  A `slot` is used to hold an `item stack`.
  
  The `minimal size` of the GUI is `9 x 1 = 9 slots`
  
  The `maximal size` of the GUI is `9 x 6 = 54 slots`
  
  
  
  In short, you can define a `menu` to hold `slots`.
  
  And bind `commands` to the `slots`.


:::

:::colorbox-tip

  ◉ Use the built-in `event`, to open the `GUI`
  
  The `command_menu` module provides an event called `onSneakingAndSwapHandsEvent`.
  
  It will be triggered when a player press `SHIFT + F` key.
  
  You can configure this event in the config file.
  
  
  
  ◉ Use `command_bundle` to create a command, to open the `GUI`
  
  The `/command-menu open` command is an `admin-level` command.
  
  You need to use `command_bundle` module, to creat a `user-level` command.


:::

:::colorbox-tip

  ◉ Switch the `command context` of `command execution`.
  
  All commands bound to `slot` are executed `as console`.
  
  You may need the `command_meta.run` module, to modify the `command context`.
  
  - `/run as console <cmd>`
  
  - `/run as player %player:name% <cmd>`
  
  - `/run as fake-op %player:name% <cmd>`


:::

:::colorbox-tip

  ◉ Handle the `menu closing` manually.
  
  You can use `/run as fake-op %player:name% command-menu close %player:name%` command.
  
  To `close` the `opened GUI` for a `player`.


:::

:::colorbox-tip

  ◉ Use the `menu editor` online to design a menu easily.
  
  Thanks to Hitnam, we have an `online editor` for `command_menu` module.
  
  The tool is hosted in: https://fuji-command-menu-editor-k4k4.vercel.app/


:::

:::colorbox-tip

  ◉ Use a custom player skull as the slot's icon.
  
  You can modify the `item` property for that slot directly.
  
  The syntax of `item` is the same as the `/give <item>` command.
  
  
  
  NOTE: The data format may be different across MC versions.
  
  1. `/give @s minecraft:player_head[minecraft:profile=Steve]`
  
  2. `/give @s minecraft:player_head{SkullOwner:"Steve"}`


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

```json showLineNumbers title="config/fuji/modules/command_menu/config.json"
{
  "onSneakingAndSwapHandsEvent": {
    "enable": true,
    "commands": [
      "command-menu open %player:name% example-menu"
    ]
  }
}
```
</details>
:::
:::config
- File Name: `menus.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/command_menu/menus.json"
{
  /* Defined `menus`. */
  "menus": {
    "another-menu": {
      /* The `title` of this GUI. */
      "title": "<blue>Another menu."
      /* Ranged [1, 6] */,
      "lines": 2
      /* Should we `close` this GUI automatically when any `slot` is `clicked`?
      
      Or you need to execute `/command-menu close <player>` command.
      To close the GUI manually. */,
      "close_menu_on_clicked": false,
      "commands": {
        "on_open_commands": [],
        "on_closed_commands": []
      }
      /* Defined `slots` for this GUI. */,
      "slots": [
        {
          /* Where to place this item in GUI? */
          "index": 0
          /* Also place this item in these specified indexes. */,
          "other_indexes": []
          /* Whether to place this item in all blank slots. */,
          "fill_blank_indexes": false
          /* What is the item? */,
          "item": "minecraft:golden_apple"
          /* The count of this item. */,
          "count": 2
          /* The display name of this item. */,
          "display_name": "This is another menu.",
          "hide_tooltip": false
          /* Should we glow this item? */,
          "glow": false
          /* The lore of this item. */,
          "lore": []
          /* The `requirement` to `see` this item in GUI. */,
          "view_requirement": {
            "level": 0,
            "string": null
          },
          "commands": {
            "on_left_click_commands": [
              "send-message %player:name% You just clicked me.",
              "chain has-level? %player:name% 4 chain send-message %player:name% <yellow>You are op player.",
              "command-menu close %player:name%"
            ],
            "on_left_shift_click_commands": [],
            "on_right_click_commands": [],
            "on_right_shift_click_commands": [],
            "on_middle_click_commands": []
          }
        },
        {
          /* Where to place this item in GUI? */
          "index": 1
          /* Also place this item in these specified indexes. */,
          "other_indexes": []
          /* Whether to place this item in all blank slots. */,
          "fill_blank_indexes": false
          /* What is the item? */,
          "item": "minecraft:clock"
          /* The count of this item. */,
          "count": 1
          /* The display name of this item. */,
          "display_name": "Click me to refresh: %server:uptime%",
          "hide_tooltip": false
          /* Should we glow this item? */,
          "glow": false
          /* The lore of this item. */,
          "lore": []
          /* The `requirement` to `see` this item in GUI. */,
          "view_requirement": {
            "level": 0,
            "string": null
          },
          "commands": {
            "on_left_click_commands": [
              "command-menu open %player:name% another-menu"
            ],
            "on_left_shift_click_commands": [],
            "on_right_click_commands": [],
            "on_right_shift_click_commands": [],
            "on_middle_click_commands": []
          }
        }
      ]
    },
    "example-menu": {
      /* The `title` of this GUI. */
      "title": "<blue>My Example Menu"
      /* Ranged [1, 6] */,
      "lines": 6
      /* Should we `close` this GUI automatically when any `slot` is `clicked`?
      
      Or you need to execute `/command-menu close <player>` command.
      To close the GUI manually. */,
      "close_menu_on_clicked": false,
      "commands": {
        "on_open_commands": [],
        "on_closed_commands": []
      }
      /* Defined `slots` for this GUI. */,
      "slots": [
        {
          /* Where to place this item in GUI? */
          "index": 0
          /* Also place this item in these specified indexes. */,
          "other_indexes": []
          /* Whether to place this item in all blank slots. */,
          "fill_blank_indexes": false
          /* What is the item? */,
          "item": "minecraft:stone"
          /* The count of this item. */,
          "count": 42
          /* The display name of this item. */,
          "display_name": "<blue>My Nice Item Name",
          "hide_tooltip": false
          /* Should we glow this item? */,
          "glow": false
          /* The lore of this item. */,
          "lore": [
            "<green>Hello %player:name%",
            "<yellow>You are in %world:id%"
          ]
          /* The `requirement` to `see` this item in GUI. */,
          "view_requirement": {
            "level": 0,
            "string": null
          },
          "commands": {
            "on_left_click_commands": [
              "send-message %player:name% You just clicked me.",
              "chain has-level? %player:name% 4 chain send-message %player:name% <yellow>You are op player.",
              "command-menu close %player:name%"
            ],
            "on_left_shift_click_commands": [],
            "on_right_click_commands": [],
            "on_right_shift_click_commands": [],
            "on_middle_click_commands": []
          }
        },
        {
          /* Where to place this item in GUI? */
          "index": 1
          /* Also place this item in these specified indexes. */,
          "other_indexes": []
          /* Whether to place this item in all blank slots. */,
          "fill_blank_indexes": false
          /* What is the item? */,
          "item": "minecraft:apple"
          /* The count of this item. */,
          "count": 42
          /* The display name of this item. */,
          "display_name": "<green>Click to to open another menu.",
          "hide_tooltip": false
          /* Should we glow this item? */,
          "glow": true
          /* The lore of this item. */,
          "lore": []
          /* The `requirement` to `see` this item in GUI. */,
          "view_requirement": {
            "level": 0,
            "string": null
          },
          "commands": {
            "on_left_click_commands": [
              "command-menu open %player:name% another-menu"
            ],
            "on_left_shift_click_commands": [],
            "on_right_click_commands": [],
            "on_right_shift_click_commands": [],
            "on_middle_click_commands": []
          }
        }
      ]
    }
  }
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/command-menu close <ServerPlayerEntity player>`
- Document:   Close the currently `opened GUI` for the player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-menu open <ServerPlayerEntity player> <MenuName menuName>`
- Document:   Open the specified `menu` for the player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[menu-name]`
- Argument Type Class: `[MenuName]`
:::
