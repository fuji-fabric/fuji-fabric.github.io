---
title: command_event
---


# Module: command_event

## Overview
:::module
  This module allows executing `defined commands` in response to various `events`.


:::
## Color Boxes

:::colorbox-note

  ◉ How it works?
  
  When an interested event occurs, this module will execute specified commands for that event as console.
  
  The `contextual player` in that `event` will be used as the `placeholder context`, to parse the `placeholders` in the `command string`.


:::

:::colorbox-example

  ◉ Send messages on player join.
  
  You can use `/send-custom` or `/send-message` to send messages when a player joins.
  
  
  
  ◉ Execute commands to welcome a new player.
  
  You can use the player first join event.
  
  For example:
  
  1. `send-broadcast <light_purple>Welcome new player %player:name% to join us!`
  
  2. `kit give %player:name% <kit-name>`
  
  3. `send-custom as-message %player:name% new-player-guide`
  
  4. `run as fake-op %player:name% rtp`
  
  5. `delay 10 spawnpoint %player:name%"`


:::

:::colorbox-example

  ◉ Teleport the dead player to specified position.
  
  YOu can use the player death event.
  
  1. `run as fake-op %player:name% tppos --dimension minecraft:overworld --x 32 --y 64 --z 128`


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

```json showLineNumbers title="config/fuji/modules/command_event/config.json"
{
  /* Define `commands` to be execute on `specific events`. */
  "event": {
    "on_player_death": {
      "enable": true,
      "commands": [
        "send-actionbar %player:name% <pink>You just died."
      ]
    },
    "after_player_break_block": {
      "enable": true,
      "commands": [
        "send-actionbar %player:name% <pink>You just broke a block."
      ]
    },
    "after_player_place_block": {
      "enable": true,
      "commands": [
        "send-actionbar %player:name% <pink>You just placed a block."
      ]
    },
    "after_player_respawn": {
      "enable": true,
      "commands": [
        "give %player:name% minecraft:apple 1"
      ]
    },
    "after_player_change_world": {
      "enable": true,
      "commands": [
        "send-actionbar %player:name% <pink>You are in %world:id% dimension now!"
      ]
    },
    "on_player_first_joined": {
      "enable": true,
      "commands": [
        "send-broadcast <yellow>Welcome new player %player:name% to join us!"
      ]
    },
    "on_player_joined": {
      "enable": true,
      "commands": [
        "send-title %player:name% --mainTitle \"<yellow>Welcome to the server.\""
      ]
    },
    "on_player_left": {
      "enable": true,
      "commands": [
        "send-broadcast <dark_grey>%player:name% left the server."
      ]
    }
  }
}
```
</details>
:::
