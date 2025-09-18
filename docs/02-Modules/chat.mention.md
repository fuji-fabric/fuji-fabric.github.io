---
title: chat.mention
---


# Module: chat.mention

## Overview
:::module
This module allows you to mention another online player in chat:
1. The target player name will be highlighted.
2. The target player will be sound notified.
:::
## Color Boxes

:::colorbox-warning

◉ This module work partially with `Styled Chat` mod.

You can use this module with that mod.

It works, but you will not get the `mention player` rendered in chat.

Other things like the `sound notify` will still work.
:::

## Configurations
:::warning
The JSON content is provided for documentation purposes only.

It should not be copied directly into your configuration folder, as the document format is not valid JSON syntax.
:::
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

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
