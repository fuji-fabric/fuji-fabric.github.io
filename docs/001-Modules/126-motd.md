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
**The following JSON content is provided for reference only.**
It must NOT be copied directly into the configuration directory, as it does not represent valid JSON syntax.
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
      /* The `text` used for this `motd` entry. */
      "text": "<gradient:#FFA1F5:#BFBDFB:#6ECBFF>Pure Survival %server:version% / Up %server:uptime% ❤ Discord Group XXX</gradient><newline><gradient:#99CCFF:#BBDFFF>%fuji:server_playtime%🔥 %fuji:server_mined%⛏ %fuji:server_placed%🔳 %fuji:server_killed%🗡 %fuji:server_moved%🌍"
      /* The `icon` used for this `motd` entry.
      
      The `icon` must be 64x64 png image. */,
      "icon": null
    },
    {
      /* The `text` used for this `motd` entry. */
      "text": "Please put your icon in `config/fuji/modules/motd/icon/` dir."
      /* The `icon` used for this `motd` entry.
      
      The `icon` must be 64x64 png image. */,
      "icon": "icon-1.png"
    }
  ]
  /* This section is used to customize the `players info` in the server metadata. */,
  "players_info": {
    /* Increase `the number of max players` by a `random delta number`. */
    "max_players": {
      "delta_min": 0,
      "delta_max": 0
    }
    /* Increase `the number of online players` by a `random delta number`. */,
    "online_players": {
      "delta_min": 0,
      "delta_max": 0
    }
    /* Customize the `hover text` when you `hover` on the `players info` area. */,
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
    "enable": false
    /* The `text` used for this `motd` entry. */,
    "text": "§bJoin to play now."
  }
}
```
</details>
:::
