---
title: economy
---


# Module: economy

## Overview
:::module
  This module enables the `economy gameplay`.
  
  It allows defining `custom currency types`.
  
  
  
  A `player` can have multiple `accounts`.
  
  Each `account` holds one type of `currency`.


:::
## Color Boxes

:::colorbox-tip

  ◉ Make the `Admin Shops` and `Player Shops`.
  
  You can use this module with `Universal Shops` mod.
  
  This mod provides the `Admin Shops` and `Player Shops`.
  
  It brings the similar gameplay into `fabric` like `QuickShop` plugin in `bukkit`.


:::

:::colorbox-example

  ◉ Create a `/balance` command for players to use.
  
  You can use `command_bundle` module.
  
  To create a `/balance` command, to wrap the `/economy account %player:name% fuji:gold` command.
  
  So the players can query the balance conveniently.
  
  
  
  ◉ Query the `balance` of all `currencies` for self.
  
  Issue: `/economy balance`
  
  
  
  ◉ Query the `balance` of all `currencies` for a target player.
  
  Issue: `/economy accounts Steve`
  
  
  
  ◉ Query the `balance` of the specified `currency` for a target player.
  
  Issue: `/economy account Steve fuji:gold`
  
  
  
  ◉ `Give`, `take`, `set` or `clear` the `balance` of specified `currency` for a player.
  
  1. `/economy give Steve fuji:gold 100`
  
  2. `/economy take Steve fuji:gold 100`
  
  3. `/economy set Steve fuji:gold 100`
  
  4. `/economy clear Steve fuji:gold --confirm true`
  
  
  
  ◉ Transfer the specified `balance` of specified `currency` from self to another player.
  
  Issue: `/economy pay Bob fuji:gold 100`


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

```json showLineNumbers title="config/fuji/modules/economy/config.json"
{
  "provider_icon": "minecraft:cherry_sapling",
  "balance_top_page_size": 10
  /* Define your `custom economy currency` types. */,
  "currencies": [
    {
      /* The `custom currency` identifier. The `namespace` must be `fuji`. */
      "currency_id": "fuji:gold"
      /* The `display name` of this currency. */,
      "currency_name": "<gold>Fuji Gold"
      /* The `display item` of this currency. */,
      "currency_icon_item": "minecraft:gold_ingot"
      /* The default balance for this currency. (In raw value format) */,
      "default_face_balance": 100.0
      /* The `formatted string` of this currency. */,
      "format_value_string": "%.2f"
      /* The `formatted text` of this currency. */,
      "format_value_text": "<yellow>$%.2f"
    },
    {
      /* The `custom currency` identifier. The `namespace` must be `fuji`. */
      "currency_id": "fuji:diamond"
      /* The `display name` of this currency. */,
      "currency_name": "<aqua>Fuji Diamond"
      /* The `display item` of this currency. */,
      "currency_icon_item": "minecraft:diamond"
      /* The default balance for this currency. (In raw value format) */,
      "default_face_balance": 0.0
      /* The `formatted string` of this currency. */,
      "format_value_string": "%.2f"
      /* The `formatted text` of this currency. */,
      "format_value_text": "<aqua>$%.2f"
    }
  ]
}
```
</details>
:::
:::config
- File Name: `economy-data.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/economy/economy-data.json"
{
  /* Saved `accounts` for each `currency`. */
  "currencies": []
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/economy account <OfflineGameProfile player> <CurrencyId currencyId>`
- Document:   Get the `player`'s `account` for `currency ID`.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/economy accounts <OfflineGameProfile player>`
- Document:   List all `accounts` owned by the `player`.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/economy balance`
- Document:   Query your economy `accounts`.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/economy balance-top <CurrencyId currencyId>`
- Document:   List the top players of specified currency using message.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/economy balance-top gui <CurrencyId currencyId>`
- Document:   List the top players of specified currency using GUI.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/economy clear <OfflineGameProfile player> <CurrencyId currencyId> [Boolean confirm]`
- Document:   Clear the `amount` of the player's `account` for `specified currency`.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/economy give <OfflineGameProfile player> <CurrencyId currencyId> <double amount>`
- Document:   Give `amount` to the player's `account` for `specified currency`.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/economy pay <OfflineGameProfile player> <CurrencyId currencyId> <double amount>`
- Document:   Pay specified `amount` of `currency` to another player's account.


- Can be executed by console: `false`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/economy providers`
- Document:   List all installed `economy providers`, and what `economy currencies` they provided.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/economy set <OfflineGameProfile player> <CurrencyId currencyId> <double amount>`
- Document:   Set the `amount` of the player's `account` for `specified currency`.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/economy take <OfflineGameProfile player> <CurrencyId currencyId> <double amount>`
- Document:   Take `amount` from the player's `account` for `specified currency`.


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
:::command
- Command Syntax: `/has-currency? <OfflineGameProfile player> <CurrencyId currencyId> <double amount>`
- Document:   Has the specified amount of currency?


- Can be executed by console: `true`
- Required Level Permission: `4`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:balance`
- Document:   Returns the `balance` of the specified `currency` for the player.
  
  
  
  The syntax is `%fuji:balance <currency-id>%`
  
  For example, the `%fuji:balance fuji:gold%` will return the `balance` of the `fuji:gold` currency.
  
  
  
  ◉ Escape the placeholder properly.
  
  1. `/send-message %player:name% Your balance is %fuji:balance fuji:gold%`
  
  2. `/run as console send-message %player:name% Your balance is %fuji:balance fuji:gold%`
  
  
  
  To prevent the placeholder being parsed by the `/run` command.
  
  You need to insert a `backslash` character in case `2.` before the placeholder.


:::
## Argument Types
:::argument-type
- Argument Type Name: `[currency_id]`
- Argument Type Class: `[CurrencyId]`
:::
