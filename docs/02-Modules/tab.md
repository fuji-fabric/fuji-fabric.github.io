---
title: tab
---


# Module: tab

## Overview
:::module
Customize the TAB list.
:::
## Color Boxes

:::colorbox-note

◉ I want a complex `tab` list.

If you want to design a complex and advanced `tab` list.

I would recommend to use https://github.com/NEZNAMY/TAB



◉ I want to customize the `scoreboard`.

Use the mod mentioned above. It works perfect.
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

```json showLineNumbers title="config/fuji/modules/tab/config.json"
{
  /* The `cron` expression used to `update` the tab list. */
  "update_cron": "* * * ? * *"
  /* Define the style of tab list. */,
  "style": {
    "enable_header": true,
    "enable_footer": true,
    "header": [
      "<rainbow><strikethrough>                              </strikethrough></rainbow><newline><#FFA1F5><b>Server Name</b><newline><grey><b>Online players: %server:online%</b></grey>"
    ],
    "body": [
      "<gradient:#FFA1F5:#BFBDFB:#6ECBFF>%player:displayname_visual%"
    ],
    "footer": [
      "<grey><b>TPS: %server:tps_colored% MSPT: %server:mspt_colored% PING: %player:ping_colored%</b></grey><newline><grey><b>Memory: %server:used_ram%/%server:max_ram% MB</b></grey><newline><#FFA1F5><b>%fuji:rotate Welcome to the server. %<newline><rainbow><strikethrough>                              </strikethrough></rainbow>"
    ]
  }
}
```
</details>
:::
## Jobs
:::job
- Job Name: `RenderHeaderAndFooterJob`
- Document: This `job` is used to `update` the `header` and `footer` in `tab` list.
:::
