---
title: works
---


# Module: works

## Overview
:::module
Provides a `bill-board`, for `players` to post and share their works.
:::
## Color Boxes

:::colorbox-note

◉ The difference between `non-production work` and `production work`.

For a `production work`, we provide the `production sample` to count the `hopper` and `minecart-hopper`.
:::

:::colorbox-tip

◉ What is the `sample` in a `production work`?

It's a counter for `hopper` and `minecart-hopper`.

It will counts the `rate of items transferred` in defined sample duration.

For example, you can use it to count how many `bone`, `string` and `coal` is transferred during the sample duration.



It's something like the `hopper counter` in `carpet` mod.

You can use both of them at the same time.



The `hopper counter` provided by `carpet` mod will destroy the output item.

But the hopper counter provided by this module will not.
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

```json showLineNumbers title="config/fuji/modules/works/config.json"
{
  /* The `duration` used for `sample` for `production work`. */
  "sample_time_ms": 3600000
  /* The `max distance` allowed for `production work`. */,
  "sample_distance_limit": 512
  /* The max types of items to display for `production work`. */,
  "sample_counter_top_n": 20
}
```
</details>
:::
:::config
- File Name: `works.json`
- File Content: 
<details>

<summary>Click to expand...</summary>

```json showLineNumbers title="config/fuji/modules/works/works.json"
{
  /* The created `work` list. */
  "works": []
}
```
</details>
:::
## Jobs
:::job
- Job Name: `ConfigurationHandlerWriteStorageJob`
- Document: This `job` is used to `write data` from `memory` into `storage`.

NOTE: If you modify the `file` in `disk`, then you need to issue `/fuji reload` as soon as possible.
NOTE: The `disk` will be `overridden` when `fire` this job.
:::
:::job
- Job Name: `WorksOnScheduleDispatcherJob`
- Document: This `job` is used to dispatch the `onSchedule` event for each `work`.

For example:
1. To end the sample of a `production work`.
:::
## Commands
:::command
- Command Syntax: `/works`
- Document: Open the works GUI.
- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
