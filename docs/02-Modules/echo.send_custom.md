---
title: echo.send_custom
---


# Module: echo.send_custom

## Overview
:::module
  This module provides `/send-custom` command.
  
  To define `custom text` and auto-page them.
  
  And then send it `as message` or `as book` to a specified player.


:::
## Color Boxes

:::colorbox-tip

  ◉ Ensure the players are allowed to use `/command-callback` command.
  
  The `/command-callback` command is a fuji command, used for `click event`.
  
  In vanilla Minecraft, if a player has `no permission` to use that command, the client will says `Unknown Command` error.


:::

:::colorbox-example

  ◉ Download the example custom text.
  
  You can download the `example-custom-text.txt` file.
  
  It is in https://github.com/sakurawald/fuji/blob/dev/.github/files/example-custom-text.txt


:::

:::colorbox-example

  ◉ Send a custom text as a book.
  
  Issue: `/send-custom as-book Alice guide --author "alice" --title "<rb>The Guide" --giveBook true --openBook true`
  
  
  
  ◉ Send a custom text as a message.
  
  Issue: `/send-custom as-message Alice guide`


:::

## Commands
:::command
- Command Syntax: `/send-custom as-book <ServerPlayerEntity player> <CustomTextName customTextName> [Boolean openBook] [Boolean giveBook] [String title] [String author]`
- Document:   Send the `custom text` as a `book`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/send-custom as-message <ServerPlayerEntity player> <CustomTextName name>`
- Document:   Send the `custom text` as a `message`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[custom-text-name]`
- Argument Type Class: `[CustomTextName]`
:::
