---
title: command_meta.json
---


# Module: command_meta.json

## Overview
:::module
  Provides `/json` command.
  
  A powerful and unified tool to edit json file.


:::
## Color Boxes

:::colorbox-tip

  Read the detailed document for `Json Path`:
  
  See https://goessner.net/articles/JsonPath/


:::

:::colorbox-example

  ◉ Read a json key.
  
  Issue: `/json read "config/fuji/config.json" "$.core.debug"`
  
  
  
  ◉ List json keys.
  
  Issue: `/json read "config/fuji/config.json" "$.modules.keys()"`
  
  
  
  ◉ Set the value of a json key.
  
  Issue: `/json write "config/fuji/config.json" "$.core.debug.log_debug_messages" BOOLEAN true`


:::

## Commands
:::command
- Command Syntax: `/json delete <String filePath> <String jsonPath>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/json put <String filePath> <String jsonPath> <String jsonKey> <JsonValueType valueType> <GreedyString value>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/json read <String filePath> <String jsonPath>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/json renameKey <String filePath> <String jsonPath> <String oldJsonKey> <String newJsonKey>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/json write <String filePath> <String jsonPath> <JsonValueType valueType> <GreedyString value>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[json-value-type]`
- Argument Type Class: `[JsonValueType]`
:::
