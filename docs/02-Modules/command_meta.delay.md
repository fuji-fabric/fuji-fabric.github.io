---
title: command_meta.delay
---


# Module: command_meta.delay

## Overview
:::module
  This module provides the `/delay` command.
  
  To allow you `delay` the `execution time` of a specified command.
:::
## Color Boxes

:::colorbox-note

  ◉ Only use `/delay` to perform short-term job.
  
  The `delayed commands` will not be persisted, if the server get a re-start.
:::

:::colorbox-example

  ◉ A basic usage.
  
  Issue: `/delay 3 say three seconds passed`
  
  
  
  ◉ A nested delay.
  
  Issue: `/delay 1 delay 2 delay 3 say 6 seconds passed`
  
  
  
  ◉ A fine-grained delay.
  
  Issue: `/delay 3.1415926 say pi seconds passed`
:::

## Commands
:::command
- Command Syntax: `/delay <double time> <GreedyString rest>`
- Document:   Execute a command in seconds.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
