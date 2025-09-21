---
title: command_meta.shell
---


# Module: command_meta.shell

## Overview
:::module
  Provides `/shell` command.
  
  To execute the `command line` in `host shell`.
  
  
  
  A `powerful` and `dangerous` module.


:::
## Color Boxes

:::colorbox-danger

  ◉ This is a `dangerous` module.
  
  This module is a powerful and dangerous module, not recommended to enable it.


:::

:::colorbox-example

  ◉ Create a file using placeholder.
  
  Issue: `/shell touch %player:name%.dangerous`
  
  
  
  ◉ Execute a program in the host machine.
  
  Issue: `/shell emacs`
  
  
  
  ◉ Call a program in the host machine, to backup your server.
  
  You need to combine `shell` module with `command_scheduler` module.
  
  And setup the `external backup program`.
  
  See more in https://rdiff-backup.net/
  
  
  
  ◉ Download a virus from the Internet, and execute it.
  
  Issue: `/shell ...`


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

```json showLineNumbers title="config/fuji/modules/command_meta/shell/config.json"
{
  "enable_warning": "ENABLE THIS MODULE IS POTENTIAL TO HARM YOUR COMPUTER! YOU NEED TO CHANGE THIS FIELD INTO `CONFIRM` TO ENABLE THIS MODULE"
  /* Security options. */,
  "security": {
    "only_allow_console": true,
    "allowed_player_names": []
  }
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/shell <GreedyString rest>`
- Document:   Execute a shell command in host os.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
