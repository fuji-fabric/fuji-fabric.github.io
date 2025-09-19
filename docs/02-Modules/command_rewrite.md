---
title: command_rewrite
---


# Module: command_rewrite

## Overview
:::module
This module allows you to define `regex` to rewrite the command line a player issued.
:::
## Color Boxes

:::colorbox-note

◉ How it works?

1. Intercept the `issued command string` packets.

2. Apply the defined rewrite rules to `the command string` in top-down order.



NOTE: The `command_rewrite` occurs at the very beginning of the command lifecycle.

You will not receive `command suggestions` or `command exceptions` at this stage.

The rewrite rules are applied directly to the raw command string.



◉ Command Lifecycle

1. **Issuing** – The command is sent as `a raw string`. At this stage, no command suggestions or exceptions are available.

2. **Parsing** – The command string is parsed into `a command node`. At this point, command suggestions and exceptions can be provided.

3. **Execution** – The `actions` associated with the command node are `executed`, producing the intended `effects` of the command.
:::

:::colorbox-note

◉ The different compared to `command_alias` module and `command_bundle` module.

1. The `command alias` module allows you to define `new command`, and redirects it into `an existing command`.

2. The `command bundle` module allows you to define `new command`, and define the argument and body of the new command.

3. The `command rewrite` module didn't define any new command. It just works in `network packet` level, and modifies the `issued command string` from the command source player.
:::

:::colorbox-tip

◉ You can use this module to shorten the command string.

Like, rewrite the command string `/home` into `/home tp default`.

And provide a shortcut, for `/home tp default` command.
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

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/command_rewrite/config.json"
{
  /* Defined `rewrite` entries. */
  "rules": [
    {
      "regex": "home",
      "replacement": "home tp default"
    }
  ]
}
```
</details>
:::
