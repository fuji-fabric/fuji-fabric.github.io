---
title: home
---


# Module: home

## Overview
:::module
Allows players to define their homes.
:::
## Configurations
<Admonition type="warning" icon="" title="">
**The JSON content is provided for documentation purposes only.**

It should NOT be copied directly into your configuration folder, as the document format is not valid JSON syntax.
</Admonition>
:::config
- File Name: `home.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/home/home.json"
{
  "name2home": {}
}
```
</details>
:::
## Jobs
:::job
- Job Name: `ConfigurationHandlerWriteStorageJob`
- Document: This `job` is used to `write data` from `memory` into `storage`.

NOTE: If you modify the `file` in `disk`, then you need to issue `/fuji reload` as soon as possible.
NOTE: The `disk` will be `overridden` when `fire` this job.
:::
## Commands
:::command
- Command Syntax: `/home gui`
- Document: null
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/home gui <OfflinePlayerName target>`
- Document: null
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/home list`
- Document: null
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/home rename <HomeName oldName> <String newName>`
- Document: null
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/home set <HomeName home> [Boolean override]`
- Document: null
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/home tp <HomeName home>`
- Document: null
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/home unset <HomeName home>`
- Document: null
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[home-name]`
- Argument Type Class: `[HomeName]`
:::
