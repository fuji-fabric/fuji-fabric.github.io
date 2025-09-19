---
title: chat.history
---


# Module: chat.history

## Overview
:::module
This module will store chat message as history.
And send them to the player joined the server.
:::
## Color Boxes

:::colorbox-tip

◉ This module works with `Styled Chat` mod.

You can use this module to provide the `chat history` for it.
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

```json showLineNumbers title="config/fuji/modules/chat/history/config.json"
{
  /* Max stored `chat message` in history. */
  "buffer_size": 50
  /* Only accept and save messages with these `message types`. */,
  "message_type_acceptors": [
    "minecraft:chat",
    "minecraft:say_command",
    "minecraft:emote_command",
    "fuji:chat_server",
    "fuji:chat_client",
    "styled_chat:generic_hack"
  ]
  /* Should reject and never save messages that meet the `rejector`. */,
  "message_rejectors": {
    "content_rejector": {
      "matches": []
    },
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
