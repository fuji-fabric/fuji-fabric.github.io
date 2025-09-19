---
title: chat.style
---


# Module: chat.style

## Overview
:::module
  This module allows you to customize global chat style.
  
  Besides, players can use `/chat style` to set per-player chat style.


:::
## Color Boxes

:::colorbox-warning

  If you are using `Styled Chat` mod, then you can `disable` this module.
  
  Because they provide the same `purpose`.


:::

:::colorbox-note

  ◉ Advanced Chat Style features.
  
  The `chat.style` module provided by `fuji` is simple.
  
  If you want advanced chat features, you can use `Styled Chat` mod.
  
  If you want `/mute`, `/tempmute` commands, you can use `BanHammer` mod.
  
  
  
  TIP: While you are using `Styled Chat` mod, you can still use `chat.*` modules from fuji.
  
  Most of `chat.*` modules are designed to work with other `chat-related mods`, especially the `Styled Chat` mod.


:::

:::colorbox-tip

  ◉ The main features of this module:
  
  1. You can use `style tags` to define complex `format`.
  
  2. You can define the `global format` for all players.
  
  3. A player can set its `personal format` using `/chat style` command.
  
  4. This module is designed to work with other `chat-related` mods.
  
  5. You can control what style tags a player can use, using permissions.


:::

:::colorbox-tip

  ◉ You can use `style tags` to write `complex format`.
  
  
  
  See the language grammar here:
  
  1. https://docs.advntr.dev/minimessage/format.html
  
  2. https://placeholders.pb4.eu/user/quicktext


:::

:::colorbox-tip

  ◉ To set the `prefix` and `suffix` for a player.
  
  
  
  You need to install the `luckperms` mod, to provide the `prefix` and `suffix` feature.
  
  After install it, issue `/lp group default meta setprefix <yellow>[awesome]` to assign a `prefix`.
  
  To use the `prefix`, use the placeholder `%fuji:player_prefix%`.


:::

:::colorbox-tip

  ◉ To set the per-player chat style:
  
  Issue `/chat style set prefix + %message% + suffix`.


:::

:::colorbox-tip

  ◉ To allow players to use `<blue>` tag:
  
  Issue `/lp group default permission set fuji.style.chat.blue`.


:::

:::colorbox-tip

  ◉ To allow players to use `<b>` tag:
  
  Issue `/lp group default permission set fuji.style.chat.b`.


:::

:::colorbox-tip

  ◉ To allow players to use all tags:
  
  All tags also including dangerous tags like `<click>` tag which can run commands on clicked!
  
  Issue `/lp group default permission set fuji.style.chat.*`


:::

:::colorbox-tip

  ◉ Customize the chat format using placeholders.
  
  You may want to enable `placeholder` module, to provide more useful placeholders.


:::

