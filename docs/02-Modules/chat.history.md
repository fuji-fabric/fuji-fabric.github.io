---
title: chat.history
---


# Module: chat.history

## Overview
:::module
  This module does:
  
  1. Stores chat messages as history.
  
  2. Delivers them to players when they join the server.


:::
## Color Boxes

:::colorbox-tip

  ◉ This module works with `Styled Chat` mod.
  
  You can use this module to provide the `chat history` for it.


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
