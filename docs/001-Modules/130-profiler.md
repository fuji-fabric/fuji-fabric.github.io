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
<Admonition type="warning" icon="" title="">
**The following JSON content is provided for reference only.**
It must NOT be copied directly into the configuration directory, as it does not represent valid JSON syntax.
</Admonition>
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

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
- Document:   Open the server health status GUI.


- Can be executed by console: `false`
- Required Level Permission: `0`
:::
