---
title: sign_editor
---


# Module: sign_editor

## Overview
:::module
  This module provides a sign editor to edit the texts on a sign block.


:::
## Color Boxes

:::colorbox-example

  ◉ Modify the states.
  
  - Toggle the value: `/sign-edit glow`
  
  - Set the value: `/sign-edit glow --glow true`
  
  
  
  ◉ Set the text of the specified line.
  
  - `/sign-edit set-line 1 <blue>Hello World`
  
  
  
  ◉ Set the texts of all lines.
  
  - `/sign-edit set-all First Line\nSecond Line`
  
  
  
  ◉ Mirror the text from one side to another side.
  
  - `/sign-edit mirror`
  
  
  
  ◉ Set the text with a `click event` to execute commands.
  
  - `/sign-edit set-line 1 <click run_command 'say Hello'>Click Me</click>`


:::

## Commands
:::command
- Command Syntax: `/sign-edit glow [Boolean glow] [Boolean frontSide] [Boolean bothSides]`
- Document:   Set the `glow` state of the sign block.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/sign-edit lock [Boolean lock]`
- Document:   Set the `lock` state of the sign block.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/sign-edit mirror`
- Document:   Mirror the looking side to another side.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/sign-edit set-all [Boolean frontSide] [Boolean bothSides] <GreedyString text>`
- Document:   Set the texts of all lines of the sign block.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/sign-edit set-color <DyeColor color> [Boolean frontSide] [Boolean bothSides]`
- Document:   Set the `color` of the sign block.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/sign-edit set-line <SignLine line> [Boolean frontSide] [Boolean bothSides] <GreedyString text>`
- Document:   Set the text of the specified line of the sign block.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[sign-line]`
- Argument Type Class: `[SignLine]`
:::
