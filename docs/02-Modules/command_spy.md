---
title: command_spy
---


# Module: command_spy

## Overview
:::module
This module allows you to spy `command execution`.
:::
## Color Boxes

:::colorbox-note

◉ How it works?

1. Match the defined `rules` in top-down order.

2. Find the `first matched rule`.

3. Apply the `first matched rule`, if it exists.
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

```json showLineNumbers title="config/fuji/modules/command_spy/config.json"
{
  "rules": [
    {
      "enable": true,
      "document": "Match the `/login ...` command, and ignore it.",
      "matcher": {
        "command_string_regex": "login .+",
        "accept_silent_command": false,
        "accept_player_command_source": true,
        "accept_server_command_source": false
      },
      "if_matched": {
        "log_to_console": false,
        "notify_players_with_level_permission": 5
      }
    },
    {
      "enable": true,
      "document": "Match all commands, and log it.",
      "matcher": {
        "command_string_regex": ".+",
        "accept_silent_command": false,
        "accept_player_command_source": true,
        "accept_server_command_source": false
      },
      "if_matched": {
        "log_to_console": true,
        "notify_players_with_level_permission": 5
      }
    }
  ]
}
```
</details>
:::
