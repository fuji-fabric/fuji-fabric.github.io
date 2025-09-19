---
title: command_scheduler
---


# Module: command_scheduler

## Overview
:::module
  This module allows you to execute commands on a schedule.
  
  
  
  Typical use cases:
  
  1. Send broadcast messages at scheduled times.
  
  2. Execute a specified group of commands at scheduled times.


:::
## Color Boxes

:::colorbox-note

  ◉ How it works?
  
  1. Define a `job` to execute `commands` on a schedule.
  
  1.a. The `schedule` is expressed using the `cron expression` language.
  
  1.b. You can specify multiple `cron expressions` for a `job`.
  
  1.c. A `job` is `triggered` if any of its `cron expressions` match.
  
  2. A `job` is automatically `triggered` according to its `cron expressions`.
  
  3. When a `job` is `triggered`, it will do:
  
  3.a. If the `enable` property is `false`, then do nothing.
  
  3.b. If the `remaining runs` property is `<= 0`, then do nothing.
  
  3.c. Otherwise, it decreases the `remaining runs` property by 1, and pick a random `command group` to execute.
  
  4. You can `trigger` a `job` using `/command-scheduler trigger <job>` manually.


:::

:::colorbox-tip

  ◉ You can use `cron expression` generator, to specify when a `job` should be `triggered`.
  
  See
  
  1. https://www.freeformatter.com/cron-expression-generator-quartz.html
  
  2. https://crontab.cronhub.io/
  
  3. https://odown.com/free-tools/cron-expression-generator/
  
  
  
  ◉ List the `next fire dates` for each defined `job`.
  
  Issue `/fuji inspect jobs` to see the `fire dates` of defined `jobs`.


:::

## Configurations
<Admonition type="warning" icon="" title="">
**The JSON content is provided for documentation purposes only.**

It should NOT be copied directly into your configuration folder, as the document format is not valid JSON syntax.
</Admonition>
:::config
- File Name: `scheduler.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/command_scheduler/scheduler.json"
{
  "jobs": [
    {
      "enable": true,
      "name": "example_job",
      "remaining_runs": 1024,
      "schedules": [
        "0 */3 * ? * *",
        "0 */5 * ? * *"
      ],
      "command_groups": [
        [
          "send-broadcast Group 1 Command 1 -> This is the first group of commands.",
          "send-broadcast Group 1 Command 2 -> When job is fired, a random command group will be picked.",
          "send-broadcast Group 1 Command 3 -> Commands in a group run in order from top to bottom.",
          "send-broadcast Group 1 Command 4 -> You can execute `/command-schedule trigger` to `run` a `job` directly."
        ],
        [
          "send-broadcast Group 2 Command 1 -> This is the second group of commands",
          "send-broadcast Group 2 Command 2 -> You can use `/fuji` command to inspect the `next fire dates` of each job.",
          "send-broadcast Group 2 Command 3 -> The schedule for this job is described using 2 cron expression: one says `every 3 minutes`, another says `every 5 minutes`"
        ]
      ]
    }
  ]
}
```
</details>
:::
## Jobs
:::job
- Job Name: `CommandScheduleJob`
- Document:   This `job` is defined by `command_schedule` module.
  
  And used to `execute specified commands`.


:::
:::job
- Job Name: `CommandScheduleJob`
- Document:   This `job` is defined by `command_schedule` module.
  
  And used to `execute specified commands`.


:::
## Commands
:::command
- Command Syntax: `/command-scheduler list`
- Document:   List all defined jobs.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/command-scheduler trigger <JobName jobName>`
- Document:   Trigger a job manually.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[schedule-job-name, job-name]`
- Argument Type Class: `[JobName]`
:::
