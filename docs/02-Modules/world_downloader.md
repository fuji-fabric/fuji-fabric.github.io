---
title: world_downloader
---


# Module: world_downloader

## Overview
:::module
Allows a player to download nearest `region` file.

It's useful for players to save and debug a `redstone structure`.
It simply downloads the `identical` region file used by the server.
Simple, no surprises.
It's also useful for players to download other's buildings, or their own buildings.
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

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/world_downloader/config.json"
{
  /* The url format used to broadcast. */
  "url_format": "http://localhost:%port%%path%"
  /* The port used for downloader http-service. */,
  "port": 22222
  /* Max download speed for each connection. */,
  "bytes_per_second_limit": 128000
  /* Max download request saved in the memory. */,
  "max_simultaneous_download_count": 5
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/download`
- Document: Download the region file around you.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
