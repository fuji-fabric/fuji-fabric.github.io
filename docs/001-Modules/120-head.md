---
title: head
---


# Module: head

## Overview
:::module
  This module allows players to purchase decorative heads from a `head shop`.


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

```json showLineNumbers title="config/fuji/modules/head/config.json"
{
  "economy_type": "ITEM",
  "cost_item_type": "minecraft:emerald_block",
  "cost_item_amount": 1
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/head`
- Document:   See /head gui


- Can be executed by console: `false`
- Required Level Permission: `0`
:::
:::command
- Command Syntax: `/head gui`
- Document:   Open the head shop GUI.


- Can be executed by console: `false`
- Required Level Permission: `0`
:::
:::command
- Command Syntax: `/head sync`
- Document:   Download the head database from the internet. (You need to delete the existing head database file.)


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
