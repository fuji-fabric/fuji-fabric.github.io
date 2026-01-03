---
title: title
---


# Module: title

## Overview
:::module
  This module allows you to define `titles` to display in the chat.
  
  Or display the `active title` in any place that supports placeholders.


:::
## Color Boxes

:::colorbox-example

  ◉ Give the `fisher` title to player Alice.
  
  Issue: `/lp user Alice permission set fuji.title.obtain.fisher true`
  
  
  
  ◉ Give the `fisher` title to player Alice, but it expires in 7 days.
  
  Issue: `/lp user Alice permission settemp fuji.title.obtain.fisher true 7d`
  
  
  
  ◉ To display the `active title`.
  
  Insert the `%fuji:active_title%` in any place that supports placeholders. (Like a chat mod that supports the placeholders).


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

```json showLineNumbers title="config/fuji/modules/title/config.json"
{
  "default_active_title_id": "resident",
  "no_active_title_text": "<grey>[None]",
  "title_descriptors": [
    {
      "id": "resident",
      "item": "minecraft:grass_block",
      "display_name": "<dark_green>[Resident]",
      "lore": [
        "<yellow>The title for a resident."
      ]
    },
    {
      "id": "farmer",
      "item": "minecraft:iron_hoe",
      "display_name": "<green>[Farmer]",
      "lore": [
        "<yellow>The title for a farmer."
      ]
    },
    {
      "id": "fisher",
      "item": "minecraft:fishing_rod",
      "display_name": "<blue>[Fisher]",
      "lore": [
        "<yellow>The title for a fisher."
      ]
    }
  ]
}
```
</details>
:::
:::config
- File Name: `data.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/title/data.json"
{
  "preferences": []
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/title!`
- Document:   Open the `title` GUI.


- Can be executed by console: `false`
- Required Level Permission: `0`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:active_title`
- Document:   Returns the `display name` of `the active title` for the player.


:::
