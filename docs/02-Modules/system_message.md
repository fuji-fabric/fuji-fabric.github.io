---
title: system_message
---


# Module: system_message

## Overview
:::module
  Customize the `translatable text`, like most of `system messages`.
  
  
  
  For example, you can customize the `translatable texts` like:
  
  1. Player joined and left message.
  
  2. Player death message. (Like get killed by a zombie)
  
  3. Player whitelist message. (Used in the GUI)
  
  4. Player advancement message.
  
  5. Player command feedback. (The command feedback for a specified command)
  
  6. Server close message.
  
  7. Player banned screen message.
  
  8. ... (There are many translatable texts in server-side)


:::
## Color Boxes

:::colorbox-warning

  ◉ Don't customize the `translatable text` that is already handled by other mods
  
  For example, if you are using `Styled Chat` mod, then you should not modify the `player join message` and `player leave message`.
  
  Because the `Styled Chat` mod already handles them.


:::

:::colorbox-note

  ◉ What is a `translatable text`.
  
  In client-side, you can change the `language option`, and see different `translatable texts`.
  
  There are `language files for different languages` in your client.
  
  Things are similar in server-side.
  
  There are `language files for different languages` in the `server side`.
  
  
  
  You can see the example `language file` in https://github.com/sakurawald/fuji/blob/dev/.github/files/en_us.json
  
  
  
  ◉ How this module works?
  
  When the `server` tries to sends a `translatable text` to the `client` side.
  
  We will see what `translatable text` is going to be sent, and `replace` it with `user-defined text` if needed.
  
  The client just receive the `user-define text`, and display it to the player.


:::

:::colorbox-example

  ◉ Customize the player join message
  
  Key: `multiplayer.player.joined`
  
  Value: `<rainbow>+ %s`
  
  
  
  ◉ Customize the player leave mssage
  
  Key: `multiplayer.player.left`
  
  Value: `<dark_gray>%s leeeeeeeeft the game`


:::

:::colorbox-example

  ◉ Customize a specific death type message
  
  Key: `death.attack.explosion.player`
  
  Value: `<rainbow>%1$s booooooom because of %2$s`
  
  
  
  ◉ Customize a specific vanilla command feedback message
  
  Key: `commands.seed.success`
  
  Value: `<rainbow> Seeeeeeeeeeed: %s`


:::

:::colorbox-example

  ◉ Customize the text used in screen.
  
  Key: `multiplayer.disconnect.server_shutdown`
  
  Value: `Server closeeeeeeeed`
  
  
  
  Key: `multiplayer.disconnect.not_whitelisted`
  
  Value: `<rainbow>Please apply a whitelist first!`
  
  
  
  Key: `container.chest`
  
  Value: `<rb>I see you opening the chest!`


:::

:::colorbox-example

  ◉ Cancel the sending of a specific message.
  
  Key: `multiplayer.player.left`
  
  Value: `null`
  
  
  
  NOTE: If you leave the `value` to `null`, then it means let's `cancel` the sending of this translatable text.


:::

:::colorbox-example

  ◉ Customize the `text` in a `screen`.
  
  Yes, you can customize the `text` in a `screen`, like the `ban screen`.
  
  Key: `multiplayer.disconnect.banned`
  
  Value: `<red>You are banned from this server`
  
  
  
  Key: `multiplayer.disconnect.banned.reason`
  
  Value: `<red>You are banned from this server<newline><yellow>Reason: %s`


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

```json showLineNumbers title="config/fuji/modules/system_message/config.json"
{
  "rules": [
    {
      "enable": false,
      "document": "Modify the style of player joined text.",
      "is_screen_text": false,
      "translatable_text_key": "multiplayer.player.joined",
      "translatable_text_value": "<green>[+] Player %s joined the server."
    },
    {
      "enable": false,
      "document": "Cancel the sending of player left text.",
      "is_screen_text": false,
      "translatable_text_key": "multiplayer.player.left",
      "translatable_text_value": null
    },
    {
      "enable": false,
      "document": "Modify the player death message.",
      "is_screen_text": false,
      "translatable_text_key": "death.attack.explosion.player",
      "translatable_text_value": "<rainbow>%1$s booooooom because of %2$s"
    },
    {
      "enable": false,
      "document": "Modify the player death message.",
      "is_screen_text": false,
      "translatable_text_key": "death.attack.fall",
      "translatable_text_value": "<rb>%1$s hit the ground too hard"
    },
    {
      "enable": false,
      "document": "Modify the player death message.",
      "is_screen_text": false,
      "translatable_text_key": "death.fell.accident.generic",
      "translatable_text_value": "<rb>%1$s fell from a high place"
    },
    {
      "enable": true,
      "document": "Modify the style of `/seed` command feedback.",
      "is_screen_text": false,
      "translatable_text_key": "commands.seed.success",
      "translatable_text_value": "<rainbow>Seeeeeeeeeeed: %s"
    },
    {
      "enable": false,
      "document": "Modify the text displaying in the whitelist screen.",
      "is_screen_text": true,
      "translatable_text_key": "multiplayer.disconnect.not_whitelisted",
      "translatable_text_value": "<rainbow>Please apply a whitelist first!"
    },
    {
      "enable": false,
      "document": "Modify the text displaying in the ban screen.",
      "is_screen_text": true,
      "translatable_text_key": "multiplayer.disconnect.banned",
      "translatable_text_value": "<red><b><i>You are banned from this server"
    },
    {
      "enable": false,
      "document": "Modify the text displaying in the ban screen.",
      "is_screen_text": true,
      "translatable_text_key": "multiplayer.disconnect.banned.reason",
      "translatable_text_value": "<red><b><i>You are banned from this server<newline><yellow>Reason: %s"
    },
    {
      "enable": false,
      "document": "Modify the text displaying in chest screen.",
      "is_screen_text": true,
      "translatable_text_key": "container.chest",
      "translatable_text_value": "<rb>I see you opening the chest!"
    }
  ]
}
```
</details>
:::
