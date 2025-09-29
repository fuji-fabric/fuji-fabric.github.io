---
title: maintenance
---


# Module: maintenance

## Overview
:::module
  This module provides a `maintenance mode`, to prevent players joining the server during maintenance.


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

```json showLineNumbers title="config/fuji/modules/maintenance/config.json"
{
  "maintenance_mode_status": false,
  "maintenance_messages": [
    "<gold>Maintenance in progress, please wait...",
    "<blue>Currently under maintenance, check back soon!",
    "<aqua>We’ll be back shortly after maintenance.",
    "<light_purple>Maintenance ongoing, thanks for your patience!",
    "<green>Server is in maintenance mode, hang tight!"
  ],
  "events": {
    "on_enter_maintenance_mode_commands": [
      "send-broadcast <yellow><bold>Maintenance mode is now on."
    ],
    "on_leave_maintenance_mode_commands": [
      "send-broadcast <green><bold>Maintenance mode is now off."
    ]
  }
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/maintenance kick-all`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/maintenance off`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/maintenance on`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
