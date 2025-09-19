---
title: command_toolbox.rules
---


# Module: command_toolbox.rules

## Color Boxes

:::colorbox-tip

◉ Ensure the players are allowed to use `/command-callback` command.

The `/command-callback` command is a fuji command, used for `click event`.

In vanilla Minecraft, if a player has `no permission` to use that command, the client will says `Unknown Command` error.
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

```json showLineNumbers title="config/fuji/modules/command_toolbox/rules/config.json"
{
  "rules": "<blue>===== custom text =====\nHello <orange>%player:name%</orange>, you are in <orange>%world:name%</orange> now.\n<hover:show_text:'you see me!'>Hover me</hover>\n<click:run_command:'/back'>click me to run `/back` command</click>\n<newpage><blue>This is the second page!\n<click:suggest_command:'/back'>click me to suggest /back command (This doesn't work inside a book)</click>\n<insert:'hello'>shift + click me to insert \"hello\" (This doesn't work inside a book)</insert>\n<click:open_url:'https://placeholders.pb4.eu/user/text-format/'>click me to open the url</click>\n<newpage>This is the third page!\n<bold><click:change_page:'1'>click me to the first page</click></bold>\n<orange>You can press `<keybind:'key.jump'>` key to jump!</orange>\n<gradient:red:green:blue>This is gradient text.</gradient>\n<rb>The rainbow text</rb>\n<newpage>The end.\n"
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/rules`
- Document: Query the server rules.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rules others <PlayerCollection others>`
- Document: Query the server rules.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
