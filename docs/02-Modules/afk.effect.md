---
title: afk.effect
---


# Module: afk.effect

## Overview
:::module
This module provides special effects for afk player:
1. Invulnerable: the afk player is immune to all damage.
2. Targetable: the afk player can not be targeted by a hostile entity.
3. Moveable: the afk player can not be moved.
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

```json showLineNumbers title="config/fuji/modules/afk/effect/config.json"
{
  /* Should the `afk player` be invulnerable? */
  "invulnerable": true
  /* Should the `afk player` be targeted by `hostile entity`? */,
  "targetable": false
  /* Should the `afk player` be moveable? (Like `pushed by piston` or `gravity`) */,
  "moveable": false
}
```
</details>
:::
