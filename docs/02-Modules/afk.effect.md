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
<Admonition type="warning" icon="" title="">
**The JSON content is provided for documentation purposes only.**

It should NOT be copied directly into your configuration folder, as the document format is not valid JSON syntax.
</Admonition>
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

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
