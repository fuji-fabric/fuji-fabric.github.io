---
title: chat.trigger
---


# Module: chat.trigger

## Overview
:::module
This module allows you to define magic spells in chat, to execute commands.
:::
## Color Boxes

:::colorbox-tip

◉ Use `chat.trigger` to create `chat commands`.

The `regex` in `chat.replace` is used to `find` the target pattern in `the given string`.

The `regex` in `chat.trigger` is used to `match` the target pattern against `the given string`.



You can define a `chat command` like `!report` or `!noclip` in other games.
:::

:::colorbox-example

◉ To define a simple magic spell in chat string.

Regex: `magic`

Commands: `say magic!`
:::

:::colorbox-example

◉ To define a complex magic spell with arguments in chat string.

Regex: `i am (.+)`

Commands:

1. `say You just said: $0`

2. `say Hello $1`
:::

:::colorbox-example

◉ To define a shortcut for chat display module with Styled Chat mod.

Regex: `(?\<=^|\\s)item(?=\\s|$)`

Commands: `run as fake-op %player:name% chat display item`
:::

## Configurations
:::warning
The JSON content is provided for documentation purposes only.

It should not be copied directly into your configuration folder, as the document format is not valid JSON syntax.
:::
:::config
- File Name: `config.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/chat/trigger/config.json"
{
  /* Use `regex` expression to define `triggers`. */
  "triggers": [
    {
      "regex": "magic",
      "commands": [
        "say magic!"
      ]
    },
    {
      "regex": "i am (.+)",
      "commands": [
        "say You just said: $0",
        "say Hello $1"
      ]
    },
    {
      "regex": "(?<=^|\\s)item(?=\\s|$)",
      "commands": [
        "run as fake-op %player:name% chat display item"
      ]
    },
    {
      "regex": "(?<=^|\\s)inv(?=\\s|$)",
      "commands": [
        "run as fake-op %player:name% chat display inv"
      ]
    },
    {
      "regex": "(?<=^|\\s)ender(?=\\s|$)",
      "commands": [
        "run as fake-op %player:name% chat display ender"
      ]
    }
  ]
}
```
</details>
:::
