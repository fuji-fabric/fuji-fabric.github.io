---
title: command_meta.attachment
---


# Module: command_meta.attachment

## Overview
:::module
  Provides a unified attachment facility, to attach data to any object.


:::
## Color Boxes

:::colorbox-example

  ◉ Set a attachment.
  
  Issue: `/attachment set news today hello world`
  
  
  
  ◉ Get a attachment.
  
  Issue: `/attachment get news today`


:::

## Commands
:::command
- Command Syntax: `/attachment get <SubjectName subject> <SubjectId uuid>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/attachment set <SubjectName subject> <SubjectId uuid> <GreedyString data>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/attachment unset <SubjectName subject> <SubjectId uuid>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[subject-id]`
- Argument Type Class: `[SubjectId]`
:::
:::argument-type
- Argument Type Name: `[subject-name]`
- Argument Type Class: `[SubjectName]`
:::
