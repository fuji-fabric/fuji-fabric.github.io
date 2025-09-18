---
title: fuji
---


# Module: fuji

## Overview
:::module
Provides `/fuji` command.
To reload the configs of fuji.
To inspect states of fuji.
To discover things of fuji.
:::
## Commands
:::command
- Command Syntax: `/fuji`
- Document: Alias to `/fuji inspect modules`.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji about`
- Document: Open the about GUI.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji debug`
- Document: Toggle the debug mode of fuji.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji gui`
- Document: Alias to `/fuji inspect modules`.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect argument-types`
- Document: Inspect all argument types registered by fuji.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect configurations`
- Document: Inspect all loaded configurations files used by fuji.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect events`
- Document: Inspect registered events by fuji.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect fuji-commands`
- Document: Inspect all commands registered by fuji.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect jobs`
- Document: Inspect jobs registered by fuji.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect languages`
- Document: Inspect loaded language files by fuji.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect mixins`
- Document: Inspect applied mixins by fuji.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect modules`
- Document: Inspect all enabled/disabled modules of fuji.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect permissions-and-metas`
- Document: Inspect permissions and metas used by fuji.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect placeholders`
- Document: Inspect placeholders registered by fuji.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect registry`
- Document: Inspect all registries in server.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji inspect server-commands`
- Document: Inspect all commands registered in server.
- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji reload`
- Document: Reload all the configuration files in `/fuji inspect configurations`.
Reload all the `enabled` modules in `/fuji inspect modules`.

NOTE: You have to `re-start` the server, after you enable/disable a module.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/fuji user-guide`
- Document: Print the user guide of fuji.
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
