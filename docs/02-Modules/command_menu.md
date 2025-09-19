---
title: command_menu
---


# Module: command_menu

## Overview
:::module
  This module allows you to define `menu` GUI, to execute commands.


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

  ◉ Create a `nested` menus.
  
  If you want to create a `nested menu`:
  
  Click a `slot` in `menu A`, it will opens the `menu B`.
  
  Then you need to disable the `close_menu_on_clicked` option for `menu A`.
  
  To prevent the `menu B` being `opened` and `closed instantly`.
  
  
  
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
**The JSON content is provided for documentation purposes only.**

It should NOT be copied directly into your configuration folder, as the document format is not valid JSON syntax.
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
      "title": "<blue>Another menu.",
      "lines": 2,
      "close_menu_on_clicked": false,
      "commands": {
        "on_open_commands": [],
        "on_closed_commands": []
      },
      "slots": [
        {
          "index": 0,
          "other_indexes": [],
          "fill_blank_indexes": false,
          "item": "minecraft:golden_apple",
          "count": 2,
          "display_name": "This is another menu.",
          "hide_tooltip": false,
          "glow": false,
          "lore": [],
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
          "index": 1,
          "other_indexes": [],
          "fill_blank_indexes": false,
          "item": "minecraft:clock",
          "count": 1,
          "display_name": "Click me to refresh: %server:uptime%",
          "hide_tooltip": false,
          "glow": false,
          "lore": [],
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
      "title": "<blue>My Example Menu",
      "lines": 6,
      "close_menu_on_clicked": false,
      "commands": {
        "on_open_commands": [],
        "on_closed_commands": []
      },
      "slots": [
        {
          "index": 0,
          "other_indexes": [],
          "fill_blank_indexes": false,
          "item": "minecraft:stone",
          "count": 42,
          "display_name": "<blue>My Nice Item Name",
          "hide_tooltip": false,
          "glow": false,
          "lore": [
            "<green>Hello %player:name%",
            "<yellow>You are in %world:id%"
          ],
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
          "index": 1,
          "other_indexes": [],
          "fill_blank_indexes": false,
          "item": "minecraft:apple",
          "count": 42,
          "display_name": "<green>Click to to open another menu.",
          "hide_tooltip": false,
          "glow": true,
          "lore": [],
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
