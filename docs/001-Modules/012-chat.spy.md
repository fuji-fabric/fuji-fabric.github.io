---
title: chat.spy
---


# Module: chat.spy

## Overview
:::module
  This module allows spying on specified `chat message types`. (Primarily private messages types.)


:::
## Color Boxes

:::colorbox-note

  Pick a good implementation of `chat spy` in fabric platform is hard.
  
  In vanilla Minecraft, each chat message has its `message type`.
  
  You can identify the `private chat` from its `message type`.
  
  Though not all other chat mods respect this point.
  
  You can issue `/fuji debug` to enable the `debug mode`.
  
  And see how the `chat.spy` module works.


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

```json showLineNumbers title="config/fuji/modules/chat/spy/config.json"
{
  /* Only accept and spy on `messages` whose `message type` meets the `whitelist`. */
  "message_type": {
    "acceptors": [
      "minecraft:msg_command_incoming"
    ]
  }
  /* Should not spy on `consecutive same text`. */,
  "ignore_consecutive_same_text": true
  /* Should we also log the `console` what is spied? */,
  "log_console": false
}
```
</details>
:::
:::config
- File Name: `data.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/chat/spy/data.json"
{
  /* Saved per-player options. */
  "options": {}
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/chat spy toggle`
- Document:   Enable/disable the chat spy mode for you.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
