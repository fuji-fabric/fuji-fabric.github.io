---
title: command_advice
---


# Module: command_advice

## Overview
:::module
  This module allows defining `advices` to decorate `an existing target command`.
  
  
  
  The command `advice types` include:
  
  - `BEFORE_EXECUTION`
  
  - `AFTER_EXECUTION`
  
  - `ON_EXECUTION_SUCCESS`
  
  - `ON_EXECUTION_FAILURE`
  
  - `ON_EXECUTION_CANCELLED`
  
  - `CANCEL_AS_SUCCESS`
  
  - `CANCEL_AS_FAILURE`
  
  - `CANCEL_IF_ANY_SUCCESS`
  
  - `CANCEL_IF_ALL_SUCCESS`
  
  - ...


:::
## Color Boxes

:::colorbox-note

  ◉ Semantics of each `advice type`.
  
  - `BEFORE_EXECUTION`: Run specified commands `before` the execution of target command (If it's not `cancelled` by other advices).
  
  - `AFTER_EXECUTION`: Run specified commands `after` the execution of target command (Regardless of whether it's `SUCCESS` or `FAILURE`).
  
  - `ON_EXECUTION_SUCCESS`: Run specified commands `if` the execution of target command is `SUCCESS` (Return value > 0).
  
  - `ON_EXECUTION_FAILURE`: Run specified commands `if` the execution of target command is `FAILURE` (Return value = 0).
  
  - `ON_EXECUTION_CANCELLED`: Run specified commands `if` the execution of target command is `CANCELLED` by other advices.
  
  - `CANCEL_AS_SUCCESS`: Cancel the execution of target command, and treat it as `SUCCESS` (Return value = 1).
  
  - `CANCEL_AS_FAILURE`: Cancel the execution of target command, and treat it as `FAILURE` (Return value = 0).
  
  - `CANCEL_IF_ANY_SUCCESS`: If `ANY specified command is SUCCESS`, then cancel the execution of target command, and treat it as `FAILURE` (Return value = 0).
  
  - `CANCEL_IF_ALL_SUCCESS`: If `ALL specified commands are SUCCESS`, then cancel the execution of target command, and treat it as `FAILURE` (Return value = 0).


:::

:::colorbox-tip

  ◉ Compare between `command_advice` and `command_bundle` module.
  
  The `command_advice` module is used to `decorate` an `existing target command`.
  
  The `command_bundle` module is used to `create` a `new command`.


:::

:::colorbox-example

  ◉ `Decorate` an existing target command.
  
  See the example for `/heal` command in default config.
  
  
  
  ◉ `Cancel` the execution of target command, and execute specified commands instead.
  
  See the example for `/say` command in default config.
  
  
  
  ◉ Ensure that the target command executes only when the specified `conditions` are met, and apply the `cost` if the execution succeeds.
  
  See the example for `/repair` command in default config:
  
  1. Use `CANCEL_IF_ANY_SUCCESS` advice type, to check the `conditions`.
  
  2. Use `ON_EXECUTION_CANCELLED` advice type, to send `feedback` if conditions are not met.
  
  3. Use `ON_EXECUTION_SUCCESS` advice type, to apply the `cost` for the execution of target command.


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

```json showLineNumbers title="config/fuji/modules/command_advice/config.json"
{
  /* Define `advices` for the `target command`. */
  "advices": [
    {
      "enable": true,
      "document": "Spawn a heart particle after the execution of `/heal` command.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "heal",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "AFTER_EXECUTION"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "say Display the heard particle for player %player:name%",
        "run as fake-op %player:name% --silent true particle minecraft:heart ~ ~1 ~ 0.6 0.6 0.6 0 20 force %player:name%"
      ]
    },
    {
      "enable": true,
      "document": "Replace the execution of `/say` command with the `/send-broadcast` command.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "say (.+)",
        "accept_player_command_source": true,
        "accept_console_command_source": true
      }
      /* The type of this advice. */,
      "advice_type": "CANCEL_AS_SUCCESS"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "send-broadcast <rb>[My Server]</rb> $1"
      ]
    },
    {
      "enable": false,
      "document": "Replace the execution of `/msg` command with our own DIY `/send-message` command.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "(?:msg|tell) (\\S+?) (.+)",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "CANCEL_AS_SUCCESS"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "send-message %player:name% <green>[PM] You -> $1: $2",
        "send-message $1 <green>[PM] %player:name% -> you: $2"
      ]
    },
    {
      "enable": true,
      "document": "Print a message before the execution of `/repair` command.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "repair",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "BEFORE_EXECUTION"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "send-message %player:name% <pink>Before the execution of `/repair` command for %player:name%"
      ]
    },
    {
      "enable": true,
      "document": "Print a message after the execution of `/repair` command.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "repair",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "AFTER_EXECUTION"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "send-message %player:name% <pink>After the execution of `/repair` command for %player:name%"
      ]
    },
    {
      "enable": true,
      "document": "Cancel the execution of `/repair` command, if the player doesn't have the required items in their inventory.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "repair",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "CANCEL_IF_ANY_SUCCESS"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "NOT has-item? %player:name% minecraft:iron_ingot 16",
        "NOT has-item? %player:name% minecraft:gold_ingot 16"
      ]
    },
    {
      "enable": true,
      "document": "Send a feedback message when the execution of `/repair` command is cancelled.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "repair",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "ON_EXECUTION_CANCELLED"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "send-message %player:name% <red>You need `iron_ingot x 16` and `gold_ingot x 16` to use the `/repair` command."
      ]
    },
    {
      "enable": true,
      "document": "Take required items from the player's inventory, when the execution of `/repair` command is SUCCESS.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "repair",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "ON_EXECUTION_SUCCESS"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "send-message %player:name% The `/repair` command execution result is `SUCCESS`, I will take `iron_ingot x 16` and `gold_ingot x 16` from your inventory.",
        "clear %player:name% minecraft:iron_ingot 16",
        "clear %player:name% minecraft:gold_ingot 16"
      ]
    },
    {
      "enable": true,
      "document": "Print a message, when the execution of `/repair` command is FAILURE.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "repair",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "ON_EXECUTION_FAILURE"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "send-message %player:name% The `/repair` command execution result is `FAILURE`, I will do nothing."
      ]
    },
    {
      "enable": true,
      "document": "Cancel the dangerous `/kill @e` command.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "kill @e",
        "accept_player_command_source": true,
        "accept_console_command_source": true
      }
      /* The type of this advice. */,
      "advice_type": "CANCEL_AS_FAILURE"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "send-message %player:name% <red>The `/kill @e` command should be used with a filter."
      ]
    },
    {
      "enable": true,
      "document": "Add a `exempt` feature for `/view inv <player>` command.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "view inv (.+)",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "CANCEL_IF_ANY_SUCCESS"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "has-perm? $1 your.custom.permission"
      ]
    },
    {
      "enable": true,
      "document": "Add a `exempt` feature for `/view inv <player>` command.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "view inv (.+)",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "ON_EXECUTION_CANCELLED"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "send-message %player:name% <red>You can't view the inventory of $1 player, it's exempted."
      ]
    },
    {
      "enable": false,
      "document": "Ban the use of `/home set` command in the minecraft:the_end dimension.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "home set (.+)",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "CANCEL_IF_ANY_SUCCESS"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "is-in-world? %player:name% minecraft:the_end"
      ]
    },
    {
      "enable": false,
      "document": "Ban the use of `/home set` command in the minecraft:the_end dimension.",
      "matcher": {
        /* The `regex` expression used to match the `target command`. */
        "command_string_regex": "home set (.+)",
        "accept_player_command_source": true,
        "accept_console_command_source": false
      }
      /* The type of this advice. */,
      "advice_type": "ON_EXECUTION_CANCELLED"
      /* The commands to execute when `perform` this `advice`. */,
      "commands": [
        "send-message %player:name% <red>You can't set a home in %world:id% dimension."
      ]
    }
  ]
}
```
</details>
:::
