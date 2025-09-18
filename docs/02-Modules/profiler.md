---
title: profiler
---


# Module: profiler

## Overview
:::module
To query the server health status.
Including: os, vm, cpu, disk, ram, tps, mspt and gc.
:::
## Color Boxes

:::colorbox-note

◉ Install the `spark` mod to display the `TPS`, `MSPT` and `CPU` info.

You need to install the `spark` mod, to provide the `placeholders`.

To display `tps`, `mspt` and `cpu` info.
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

```json showLineNumbers title="config/fuji/modules/profiler/config.json"
{
  "file_system": {
    "blacklisted_filesystem": [
      ".*firmware.*",
      ".*systemd.*",
      ".*/proc.*",
      ".*/boot.*",
      ".*/run.*"
    ]
  }
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/profiler`
- Document: Open the server health status GUI.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
