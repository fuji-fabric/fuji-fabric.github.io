---
title: command_alias
---


# Module: command_alias

## Overview
:::module
  This module allows you to define alias for existing commands.
  
  The defined alies command will redirect to the existing command node.


:::
## Color Boxes

:::colorbox-tip

  The `command_alias` command only has the ability to define `a new command`, as the alias of `an existing command`.
  
  It works by `command redirecting`.
  
  You can't use `command_alias` module to actually define `a new command with arguments`, that's the weakness.
  
  If you want to define `a new command with arguments`, see `command_bundle` module.
  
  
  
  In short:
  
  1. To define `a simple command` with no arguments, use `command_alias` module.
  
  2. To define `a complex command` with arguments, use `command_bundle` module.


:::

:::colorbox-example

  ◉ Define a `new shortcut command` as an alias to `an existing command`.
  
  For example:
  
  1. Define a new `/r` command, as alias to `/reply` command.
  
  2. Define a new `/sudo` command, as alias to `/run as fake-op` command.


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

```json showLineNumbers title="config/fuji/modules/command_alias/config.json"
{
  /* Defined `alias` for `existing commands`. */
  "alias_commands": [
    {
      "enable": true,
      "document": "Create an alias command from `/r` into `/reply` command.",
      "requirement": {
        "level": 0,
        "string": null
      },
      "from": [
        "r"
      ],
      "to": [
        "reply"
      ]
    },
    {
      "enable": true,
      "document": "Create an alias command from `/display` into `/chat display` command.",
      "requirement": {
        "level": 0,
        "string": null
      },
      "from": [
        "display"
      ],
      "to": [
        "chat",
        "display"
      ]
    },
    {
      "enable": true,
      "document": "Create an alias command from `/sudo` into `/run as fake-op` command.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "from": [
        "sudo"
      ],
      "to": [
        "run",
        "as",
        "fake-op"
      ]
    },
    {
      "enable": true,
      "document": "Create an alias command from `/wb` into `/workbench` command.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "from": [
        "wb"
      ],
      "to": [
        "workbench"
      ]
    },
    {
      "enable": true,
      "document": "Create an alias command from `/ec` into `/enderchest` command.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "from": [
        "ec"
      ],
      "to": [
        "enderchest"
      ]
    },
    {
      "enable": true,
      "document": "Create an alias command from `/invsee` into `/view inv` command.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "from": [
        "invsee"
      ],
      "to": [
        "view",
        "inv"
      ]
    },
    {
      "enable": true,
      "document": "Create an alias command from `/endersee` into `/view ender` command.",
      "requirement": {
        "level": 4,
        "string": null
      },
      "from": [
        "endersee"
      ],
      "to": [
        "view",
        "ender"
      ]
    }
  ]
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/command-alias list`
- Document:   List all registered alias-commands in server.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/display`
- Document:   Create an alias command from `/display` into `/chat display` command.


- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/endersee`
- Document:   Create an alias command from `/endersee` into `/view ender` command.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/invsee`
- Document:   Create an alias command from `/invsee` into `/view inv` command.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/r`
- Document:   Create an alias command from `/r` into `/reply` command.


- Can be executed by console: `true`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/sudo`
- Document:   Create an alias command from `/sudo` into `/run as fake-op` command.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
