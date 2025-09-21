---
title: command_warmup
---


# Module: command_warmup

## Overview
:::module
  This module allows defining a `cooldown` before command execution.


:::
## Color Boxes

:::colorbox-note

  The `command_warmup` module is `before` the command execution.
  
  The `command_cooldown` module is `after` the command execution.
  
  
  
  NOTE: Players with level permission 4 can bypass the command warmup.


:::

:::colorbox-note

  ◉ The `command warmup` will NOT be applied if...
  
  1. The command source is `the console`.
  
  2. The command source is `admin` (level permission >= 4)
  
  3. The command source has the `warmup bypass permission` for that command.


:::

:::colorbox-example

  ◉ Set up the warmup for all commands.
  
  Regex: `.+`
  
  
  
  The `.` character in regex means `match any character`.
  
  The `+` character in regex means `a quantifier, one or more times`.


:::

:::colorbox-example

  ◉ Set up the warmup for all commands, but specify a special setup for `/back` command.
  
  You can just write the `config section` for `/back` command `at the top` of rules.
  
  The `rules` are `matched` from up to down, and `the first matched rule` will be used.
  
  So, you can just write the `special rule` at the top of other rules.


:::

:::colorbox-example

  ◉ Set up the warmup for all command, except the `/back` command.
  
  Regex: `(?!back).+`
  
  
  
  The regex use the `negative lookahead`, to exclude the string that `starts with back`.


:::

:::colorbox-example

  ◉ Share the same warmup setup for multiple commands.
  
  Regex: `(back)|(heal)|(feed)`
  
  
  
  You can use the `alternative character |` in `regex`.


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

```json showLineNumbers title="config/fuji/modules/command_warmup/config.json"
{
  /* Should we send a warning message for no movement? */
  "warn_for_move": true
  /* Defined `warmup` rules. */,
  "rules": [
    {
      "tags": [
        "default-tag-name"
      ],
      "command": {
        "regex": "back",
        "warmup_time_ms": 3000
      },
      "interruptible": {
        "enable": true,
        "interrupt_distance": 3.0,
        "interrupt_on_damaged": true,
        "interrupt_in_combat": true
      }
    },
    {
      "tags": [
        "default-tag-name"
      ],
      "command": {
        "regex": "heal",
        "warmup_time_ms": 1000
      },
      "interruptible": {
        "enable": true,
        "interrupt_distance": 3.0,
        "interrupt_on_damaged": true,
        "interrupt_in_combat": true
      }
    }
  ]
}
```
</details>
:::
