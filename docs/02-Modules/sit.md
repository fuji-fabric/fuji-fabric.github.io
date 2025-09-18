---
title: sit
---


# Module: sit

## Overview
:::module
Provides a facility to sit on blocks.
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

```json showLineNumbers title="config/fuji/modules/sit/config.json"
{
  "right_click_to_sit": {
    "enable": true,
    "allow_sneaking_to_sit": false,
    "require_empty_hand_to_sit": false,
    "require_no_opaque_block_above_to_sit": true,
    "max_distance_to_sit": -1
  }
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/sit`
- Document: Sit in current position.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/sit others <PlayerCollection others>`
- Document: Sit in current position.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
