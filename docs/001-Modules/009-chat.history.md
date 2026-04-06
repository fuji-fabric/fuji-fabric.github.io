---
title: chat.history
---


# Module: chat.history

## Overview
:::module
  This module provides the `history` function for vanilla Minecraft's `chat` system.


:::
## Color Boxes

:::colorbox-note

  ◉ How it works?
  
  
  
  ➜ Store the `chat text` sent by a player.
  
  When a player sends a chat text, store it.
  
  
  
  ➜ Restore the `chat texts` to a new joined player.
  
  When a player joins the server, send all the stored chat texts to the player.


:::

:::colorbox-note

  ◉ What is the `acceptors` and `rejectors`?
  
  A `chat message` = `chat type` + `chat content` + `chat parameter`
  
  In vanilla Minecraft, all `chat messages` are sent in a shared channel.
  
  
  
  The `acceptors` and `rejectors` are used to `select` the interested `chat message`.
  
  They are introduced to improve the compatibility with other chat-related mods.
  
  
  
  A `chat type acceptor` filter a `chat message` by its `chat type`.
  
  A `chat content rejector` filter a `chat message` by its `chat content`.
  
  A `chat parameter rejector` filter a `chat message` by its `chat parameter`.


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

```json showLineNumbers title="config/fuji/modules/chat/history/config.json"
{
  /* Maximum number of chat texts stored in chat history. */
  "max_chat_history_size": 50
  /* A `chat text` sent by a player will be `stored`, if its `message type` is one of the defined types. */,
  "message_type_acceptors": [
    "minecraft:chat",
    "minecraft:say_command",
    "minecraft:emote_command",
    "fuji:chat_server",
    "fuji:chat_client",
    "styled_chat:generic_hack"
  ]
  /* A `chat text` sent by a player will be `ignored`, if it satisfy one of the defined rejectors. */,
  "message_rejectors": {
    /* A `chat text` sent by a player will be `ignored`, if its `content` matches one of the defined rejector. */
    "content_rejector": {
      "matches": []
    }
    /* A `chat text` sent by a player will be `ignored`, if its `parameter` matches one of the defined rejector. */,
    "parameter_rejector": {
      "matches": [
        ".*literal\\{PM\\}.*"
      ]
    }
  }
}
```
</details>
:::
