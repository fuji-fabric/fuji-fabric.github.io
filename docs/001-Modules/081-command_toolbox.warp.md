---
title: command_toolbox.warp
---


# Module: command_toolbox.warp

## Color Boxes

:::colorbox-example

  ◉ Set a display name for a warp.
  
  Issue: `/warp set-name <warp> <blue>This is the display name`
  
  
  
  ◉ Set a lore for a warp.
  
  Issue: `/warp set-lore <warp> <blue>This is the first line|<red>This is the second line`


:::

## Configurations
<Admonition type="warning" icon="" title="">
**The following JSON content is provided for reference only.**
It must NOT be copied directly into the configuration directory, as it does not represent valid JSON syntax.
</Admonition>
:::config
- File Name: `warp.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/command_toolbox/warp/warp.json"
{
  "warps": {}
}
```
</details>
:::
## Jobs
:::job
- Job Name: `ConfigurationHandlerWriteStorageJob`
- Document:   This `job` is used to `write data` from `memory` into `storage`.
  
  
  
  NOTE: If you modify the `file` in `disk`, then you need to issue `/fuji reload` as soon as possible.
  
  NOTE: The `disk` will be `overridden` when `fire` this job.


:::
## Commands
:::command
- Command Syntax: `/warp`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warp list`
- Document:   List warp points.


- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warp set <String warpName> [Boolean override]`
- Document:   Set current location as new wrap point.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warp set-item <WarpDescriptor warp> <ItemStackWrapper itemStack>`
- Document:   Set the item for a warp.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warp set-lore <WarpDescriptor warp> <GreedyString lore>`
- Document:   Set the lore for a warp.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warp set-name <WarpDescriptor warp> <GreedyString name>`
- Document:   Set the display name for a warp.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warp set-position <WarpDescriptor warp>`
- Document:   Set the position for a warp.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warp tp <WarpDescriptor warpName>`
- Document:   Teleport to the specified warp point.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warp tp others <PlayerCollection others> <WarpDescriptor warpName>`
- Document:   Teleport to the specified warp point.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/warp unset <WarpDescriptor warpName>`
- Document:   Delete a warp point.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[warp-name]`
- Argument Type Class: `[WarpDescriptor]`
:::
