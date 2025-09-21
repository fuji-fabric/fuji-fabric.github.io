---
title: afk.effect
---


# Module: afk.effect

## Overview
:::module
  This module provides special `effects` for `afk player`:
  
  1. `Invulnerable`: the afk player is immune to all damage.
  
  2. `Targetable`: the afk player cannot be selected as a target by hostile entities.
  
  3. `Moveable`: the position of afk player can not be moved by `external cause`. (Piston, gravity...)


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
