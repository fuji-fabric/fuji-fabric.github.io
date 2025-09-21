---
title: chat.mention
---


# Module: chat.mention

## Overview
:::module
  This module allows players to `mention` other online players in chat:
  
  1. Name Highlighting: the mentioned player's name is visually highlighted.
  
  2. Sound Notification: the mentioned player receives an audible notification.


:::
## Color Boxes

:::colorbox-warning

  ◉ This module work partially with `Styled Chat` mod.
  
  You can use this module with that mod.
  
  It works, but you will not get the `mention player` rendered in chat.
  
  Other things like the `sound notify` will still work.


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

```json showLineNumbers title="config/fuji/modules/chat/mention/config.json"
{
  "mention_player": {
    "sound": "entity.experience_orb.pickup",
    "volume": 100.0,
    "pitch": 1.0,
    "repeat_count": 3,
    "interval_ms": 1000
  }
  /* The format used in `chat message` when a player is `mentioned`. */,
  "mention_format": "<aqua>@%s</aqua>"
}
```
</details>
:::
