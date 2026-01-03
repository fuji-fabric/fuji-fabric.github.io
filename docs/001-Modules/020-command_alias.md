---
title: command_alias
---


# Module: command_alias

## Overview
:::module
  This module allows defining `aliases` for `an existing target command`.
  
  The defined `alias command` redirects to the corresponding existing command node.


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
**The following JSON content is provided for reference only.**
It must NOT be copied directly into the configuration directory, as it does not represent valid JSON syntax.
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
      }
      /* The `path` of `source command`. */,
      "from": [
        "r"
      ]
      /* The `path` of `destination command`. */,
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
      }
      /* The `path` of `source command`. */,
      "from": [
        "display"
      ]
      /* The `path` of `destination command`. */,
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
      }
      /* The `path` of `source command`. */,
      "from": [
        "sudo"
      ]
      /* The `path` of `destination command`. */,
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
      }
      /* The `path` of `source command`. */,
      "from": [
        "wb"
      ]
      /* The `path` of `destination command`. */,
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
      }
      /* The `path` of `source command`. */,
      "from": [
        "ec"
      ]
      /* The `path` of `destination command`. */,
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
      }
      /* The `path` of `source command`. */,
      "from": [
        "invsee"
      ]
      /* The `path` of `destination command`. */,
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
      }
      /* The `path` of `source command`. */,
      "from": [
        "endersee"
      ]
      /* The `path` of `destination command`. */,
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
:::
:::command
- Command Syntax: `/display`
- Document:   Create an alias command from `/display` into `/chat display` command.


- Can be executed by console: `true`
- Required Level Permission: `0`
:::
:::command
- Command Syntax: `/ec`
- Document:   Create an alias command from `/ec` into `/enderchest` command.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/endersee`
- Document:   Create an alias command from `/endersee` into `/view ender` command.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/invsee`
- Document:   Create an alias command from `/invsee` into `/view inv` command.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/r`
- Document:   Create an alias command from `/r` into `/reply` command.


- Can be executed by console: `true`
- Required Level Permission: `0`
:::
:::command
- Command Syntax: `/sudo`
- Document:   Create an alias command from `/sudo` into `/run as fake-op` command.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/wb`
- Document:   Create an alias command from `/wb` into `/workbench` command.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
