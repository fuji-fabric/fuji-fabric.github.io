---
title: motd
---


# Module: motd

## Overview
:::module
  Customize the MOTD of the server.


:::
## Color Boxes

:::colorbox-tip

  ◉ Use an `editor` to help you design the MOTD.
  
  Online MOTD editor: https://colorize.fun/en/minecraft


:::

:::colorbox-tip

  ◉ Customize the MOTD using `Formating Codes`.
  
  The `Formating Codes` is a vanilla Minecraft feature.
  
  See: https://minecraft.fandom.com/wiki/Formatting_codes


:::

:::colorbox-example

  ◉ Configure server icons.
  
  You can put `64x64 pixels .png image file` into the directory `config/fuji/modules/motd/icon` dir.
  
  The module will pick up a random image as the icon of the server.
  
  To respond the server status request.


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

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/motd/config.json"
{
  /* Defined `motd` entry. */
  "messages": [
    {
      "text": "<gradient:#FFA1F5:#BFBDFB:#6ECBFF>Pure Survival %server:version% / Up %server:uptime% ❤ Discord Group XXX</gradient><newline><gradient:#99CCFF:#BBDFFF>%fuji:server_playtime%🔥 %fuji:server_mined%⛏ %fuji:server_placed%🔳 %fuji:server_killed%🗡 %fuji:server_moved%🌍",
      "icon": null
    },
    {
      "text": "Please put your icon in `config/fuji/modules/motd/icon/` dir.",
      "icon": "icon-1.png"
    }
  ]
  /* This section is used to customize the `players info` in the server metadata. */,
  "players_info": {
    "max_players": {
      "delta_min": 0,
      "delta_max": 0
    },
    "online_players": {
      "delta_min": 0,
      "delta_max": 0
    },
    "hover_text": {
      "enable": true,
      "lines": [
        "§aWelcome to the server!",
        "§aServer version: %server:version%",
        "§b§o§lJoin to play now."
      ]
    }
  }
  /* Customize the `version text`.
  
  <red>NOTE: Once you enable this feature, the `ping result` will not be displayed on the client. */,
  "version_text": {
    "enable": false,
    "text": "§bJoin to play now."
  }
}
```
</details>
:::
