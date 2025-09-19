---
title: nametag
---


# Module: nametag

## Overview
:::module
Customize the nametag above the players.
:::
## Color Boxes

:::colorbox-note

◉ How it works?

1. A `nametag entity` is a `text display entity`.

2. A `nametag entity` is a `virtual entity`.

2.a. The `entity` is not actually presented in the `server-side world`

2.b. The `server` simulates the existence of `the nametag entity` on the `client-side world`, allowing the client to perceive it as if it were a real entity.



Read the semantics of each field:

- https://minecraft.wiki/w/Display
:::

:::colorbox-example

◉ Set the background of nametag to blue color.

Set `background` to `-16776961` (The integer representation of blue color)



◉ Set the half transparency for nametag.

Set `text_opacity` to `128`.



◉ Scale the size of text into double.

Set the `x`, `y`, and `z` in `scale` to `2.0`.
:::

:::colorbox-example

◉ Toggle the `nametag entity` for self.

Issue: `/nametag toggle @s`



◉ Turn on the `nametag entity` for online players.

Issue: `/nametag toggle others @a true`



◉ Turn off the `nametag entity` for online players.

Issue: `/nametag toggle others @a false`
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

```json showLineNumbers title="config/fuji/modules/nametag/config.json"
{
  /* The `cron` expression used to `update` nametags. */
  "update_cron": "* * * ? * *"
  /* Define the `style` of nametag. */,
  "style": {
    "text": "<#B1B2FF>%fuji:player_playtime%🔥 %fuji:player_mined%⛏ %fuji:player_placed%🔳 %fuji:player_killed%🗡 %fuji:player_moved%🌍\n<dark_green>%player:displayname_visual%",
    "offset": {
      "x": 0.0,
      "y": 0.2,
      "z": 0.0
    },
    "size": {
      "height": 0.0,
      "width": 0.0
    },
    "scale": {
      "x": 1.0,
      "y": 1.0,
      "z": 1.0
    },
    "brightness": {
      "override_brightness": false,
      "block": 15,
      "sky": 15
    },
    "shadow": {
      "shadow": false,
      "shadow_radius": 0.0,
      "shadow_strength": 1.0
    },
    "color": {
      "background": 1073741824,
      "text_opacity": -1
    }
  }
  /* Define the `render` logic of `nametags`. */,
  "render": {
    "see_through_blocks": false,
    "view_range": 1.0
  }
}
```
</details>
:::
:::config
- File Name: `nametag-data.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/nametag/nametag-data.json"
{
  "preferences": {}
}
```
</details>
:::
## Jobs
:::job
- Job Name: `UpdateNametagJob`
- Document: This `job` is used to `update` the nametag for each player.
:::
## Commands
:::command
- Command Syntax: `/nametag toggle others <PlayerCollection others>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nametag toggle others <PlayerCollection others> <boolean flag>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nametag toggle <ServerPlayerEntity target>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/nametag toggle <ServerPlayerEntity target> <boolean flag>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
