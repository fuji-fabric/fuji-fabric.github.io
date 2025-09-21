---
title: chat.replace
---


# Module: chat.replace

## Overview
:::module
  This module allows you to replace `chat string` with a given `chat text`. (Including placeholder parsing)
  
  This module allows replacing `chat strings` with `specified text`, including `placeholder` parsing.


:::
## Color Boxes

:::colorbox-warning

  ◉ This module didn't work with `Styled Chat` mod.
  
  The `chat.replace` module does work with `chat.style` module.
  
  But if you are using the `Styled Chat` mod, then it didn't work.
  
  However, since `Styled Chat` mod allows you to define custom `emotions`.
  
  So you can `disable` this module, if you are using that mod.


:::

:::colorbox-example

  ◉ Define a chat shortcut, to evaluate a placeholder.
  
  Regex: `(?<=^|\\s)uuid(?=\\s|$)`
  
  Replacement: `my uuid is %player:uuid%`


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

```json showLineNumbers title="config/fuji/modules/chat/replace/config.json"
{
  /* Define `regex` expression, to replace `chat string`. */
  "replace": {
    "rules": [
      {
        "regex": "(?<=^|\\s)item(?=\\s|$)",
        "replacement": "%fuji:item%"
      },
      {
        "regex": "(?<=^|\\s)inv(?=\\s|$)",
        "replacement": "%fuji:inv%"
      },
      {
        "regex": "(?<=^|\\s)ender(?=\\s|$)",
        "replacement": "%fuji:ender%"
      },
      {
        "regex": "(?<=^|\\s)pos(?=\\s|$)",
        "replacement": "%fuji:pos%"
      },
      {
        "regex": "(?<=^|\\s)uuid(?=\\s|$)",
        "replacement": "<green>My uuid is %player:uuid%</green>"
      }
    ]
  }
}
```
</details>
:::
