---
title: rank
---


# Module: rank

## Overview
:::module
  This module provides the rank up system.
  
  You can define a `rank` with `requirements` and `award`.


:::
## Color Boxes

:::colorbox-note

  ◉ How it works?
  
  1. A `rank node` is used to define a `rank`.
  
  1.a. A `rank` has basic information, like `id`, `display name` and `description`.
  
  1.b. A `rank` can have multiple `next ranks`, to construct the `rank paths`.
  
  1.b.i. From `rank A` to `rank E`, you can define a `rank path` as `A -> B -> C -> D -> E`
  
  1.b.ii. From `rank A` to `rank E`, you can define another `rank path` as `A -> F -> G -> E`
  
  1.b.iii. A player can use `/rank up <next-rank>` to choose a `rank path` to `walk`.
  
  2. A `rank` can have `events`:
  
  2.a. The `on_enter_this_rank_node_commands` will be executed when a player `enter` this `rank`.
  
  2.b. The `on_lave_this_rank_node_commands` will be executed when a player `leave` this `rank`.
  
  2.c. The `on_first_enter_this_rank_node_commands` will be executed when a player `the first time enter` this `rank`.
  
  3. A `rank` can have `requirements`.
  
  3.a. A player must meet all the `requirements`, so that the `/rank up <next-rank>` command can be executed successfully.
  
  3.b. The admin can use `/rank set <player> <rank>` command to `force set` a player's rank. (Ignore requirements)
  
  3.c. A player can use `/rank down <rank>` to `rank down` to a previously `earned rank`.
  
  3.d. The admin can use `/rank remove <player>` to set a player's rank to `none`.


:::

:::colorbox-tip

  ◉ Automatic rank up to the only available next rank.
  
  You can use `command_schedule` module to define a job.
  
  To execute the `/rank try-up %player:name%` command for each online player.
  
  So that each player will get auto rank up if there is only one `available next rank` for them.
  
  It can be `/execute as @a run rank try-up @s` or `/foreach rank try-up %player:name%`


:::

:::colorbox-example

  ◉ List rank nodes by type
  
  1. `/rank list all-rank-nodes`
  
  2. `/rank list starting-rank-nodes Steve`
  
  3. `/rank list next-rank-nodes Steve`
  
  4. `/rank list previous-rank-nodes Steve`
  
  5. `/rank list walked-rank-nodes Steve`
  
  
  
  ◉ Query the info of a rank
  
  Issue: `/rank info newbie`
  
  
  
  ◉ Query current rank progress
  
  1. `/rank progress`
  
  2. `/rank progress Steve`
  
  
  
  ◉ Rank up to a specified rank
  
  Issue: `/rank up branch-1 --confirm true`
  
  
  
  ◉ Rank down to a `walked rank`
  
  Issue: `/rank down branch-1 --confirm true`
  
  NOTE: If you `rank down` from this rank node, you must meet its `requirements` again before you can `rank back up` to it.
  
  
  
  ◉ Set a player's rank to none
  
  Issue: `/rank remove Steve --confirm true`.


:::

:::colorbox-example

  ◉ Allow a player to choose an `intermediate rank` as their `starting rank`.
  
  You can define one `starting rank node` as the public `starting rank node` for all players.
  
  However, you can also allow some players to pick other `rank nodes` as their starting rank node, and skip some path.
  
  Issue: `/lp group default permission set fuji.rank.starting_rank_node.branch-1-3`
  
  This will allow players to pick `branch-1-3` as their `starting rank node`.
  
  You can define multiple `starting rank nodes` for different `luckperms groups`.


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

```json showLineNumbers title="config/fuji/modules/rank/config.json"
{
  "starting_rank_node_id": "newbie",
  "no_rank_status_text": "<grey>[No Rank]",
  "graph": [
    {
      "enable": true,
      "id": "newbie",
      "display_name": "<dark_grey>Newbie</dark_grey>",
      "description": "<orange>This is the first line.\n<orange>This is the second line.",
      "next_rank_nodes": [
        "branch-1",
        "branch-2"
      ],
      "requirements": [],
      "events": {
        "on_enter_this_rank_node_commands": [
          "lp user %player:name% permission set group.rank-%fuji:rank_id%",
          "send-broadcast <#FFA1F5>Player %player:name% has been ranked up to %fuji:rank_displayname_raw%"
        ],
        "on_leave_this_rank_node_commands": [
          "lp user %player:name% permission unset group.rank-%fuji:rank_id%"
        ],
        "on_first_enter_this_rank_node_commands": [
          "when-online %player:name% send-message %player:name% <orange>You have received the ranked up bonus!",
          "when-online %player:name% give %player:name% minecraft:apple 1"
        ]
      }
    },
    {
      "enable": true,
      "id": "branch-1",
      "display_name": "<pink>Branch-1</pink>",
      "description": "<orange>This is the first line.\n<orange>This is the second line.",
      "next_rank_nodes": [
        "branch-1-1",
        "branch-1-2",
        "branch-1-3"
      ],
      "requirements": [
        {
          "description": "Have 16 dirt blocks in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:dirt 16"
          ]
        },
        {
          "description": "Have 8 apples in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:apple 8"
          ]
        },
        {
          "description": "Have 4 diamonds in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:diamond 4"
          ]
        },
        {
          "description": "Kill 2 zombies. (Currently %player:statistic_raw minecraft:killed minecraft:zombie%)",
          "commands": [
            "<=? %player:name% 2 %player:statistic_raw minecraft:killed minecraft:zombie%"
          ]
        },
        {
          "description": "Play for 5 seconds.",
          "commands": [
            "<=? %player:name% 100 %player:statistic_raw minecraft:play_time%"
          ]
        }
      ],
      "events": {
        "on_enter_this_rank_node_commands": [
          "lp user %player:name% permission set group.rank-%fuji:rank_id%",
          "send-broadcast <#FFA1F5>Player %player:name% has been ranked up to %fuji:rank_displayname_raw%"
        ],
        "on_leave_this_rank_node_commands": [
          "lp user %player:name% permission unset group.rank-%fuji:rank_id%"
        ],
        "on_first_enter_this_rank_node_commands": [
          "when-online %player:name% send-message %player:name% <orange>You have received the ranked up bonus!",
          "when-online %player:name% give %player:name% minecraft:apple 1"
        ]
      }
    },
    {
      "enable": true,
      "id": "branch-1-1",
      "display_name": "<pink>Branch-1-1</pink>",
      "description": "<orange>This is the first line.\n<orange>This is the second line.",
      "next_rank_nodes": [
        "expert"
      ],
      "requirements": [
        {
          "description": "Have 16 dirt blocks in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:dirt 16"
          ]
        },
        {
          "description": "Have 8 apples in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:apple 8"
          ]
        },
        {
          "description": "Have 4 diamonds in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:diamond 4"
          ]
        },
        {
          "description": "Kill 2 zombies. (Currently %player:statistic_raw minecraft:killed minecraft:zombie%)",
          "commands": [
            "<=? %player:name% 2 %player:statistic_raw minecraft:killed minecraft:zombie%"
          ]
        },
        {
          "description": "Play for 5 seconds.",
          "commands": [
            "<=? %player:name% 100 %player:statistic_raw minecraft:play_time%"
          ]
        }
      ],
      "events": {
        "on_enter_this_rank_node_commands": [
          "lp user %player:name% permission set group.rank-%fuji:rank_id%",
          "send-broadcast <#FFA1F5>Player %player:name% has been ranked up to %fuji:rank_displayname_raw%"
        ],
        "on_leave_this_rank_node_commands": [
          "lp user %player:name% permission unset group.rank-%fuji:rank_id%"
        ],
        "on_first_enter_this_rank_node_commands": [
          "when-online %player:name% send-message %player:name% <orange>You have received the ranked up bonus!",
          "when-online %player:name% give %player:name% minecraft:apple 1"
        ]
      }
    },
    {
      "enable": true,
      "id": "branch-1-2",
      "display_name": "<pink>Branch-1-2</pink>",
      "description": "<orange>This is the first line.\n<orange>This is the second line.",
      "next_rank_nodes": [
        "expert"
      ],
      "requirements": [
        {
          "description": "Have 16 dirt blocks in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:dirt 16"
          ]
        },
        {
          "description": "Have 8 apples in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:apple 8"
          ]
        },
        {
          "description": "Have 4 diamonds in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:diamond 4"
          ]
        },
        {
          "description": "Kill 2 zombies. (Currently %player:statistic_raw minecraft:killed minecraft:zombie%)",
          "commands": [
            "<=? %player:name% 2 %player:statistic_raw minecraft:killed minecraft:zombie%"
          ]
        },
        {
          "description": "Play for 5 seconds.",
          "commands": [
            "<=? %player:name% 100 %player:statistic_raw minecraft:play_time%"
          ]
        }
      ],
      "events": {
        "on_enter_this_rank_node_commands": [
          "lp user %player:name% permission set group.rank-%fuji:rank_id%",
          "send-broadcast <#FFA1F5>Player %player:name% has been ranked up to %fuji:rank_displayname_raw%"
        ],
        "on_leave_this_rank_node_commands": [
          "lp user %player:name% permission unset group.rank-%fuji:rank_id%"
        ],
        "on_first_enter_this_rank_node_commands": [
          "when-online %player:name% send-message %player:name% <orange>You have received the ranked up bonus!",
          "when-online %player:name% give %player:name% minecraft:apple 1"
        ]
      }
    },
    {
      "enable": true,
      "id": "branch-1-3",
      "display_name": "<pink>Branch-1-3</pink>",
      "description": "<orange>This is the first line.\n<orange>This is the second line.",
      "next_rank_nodes": [
        "expert"
      ],
      "requirements": [
        {
          "description": "Have 16 dirt blocks in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:dirt 16"
          ]
        },
        {
          "description": "Have 8 apples in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:apple 8"
          ]
        },
        {
          "description": "Have 4 diamonds in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:diamond 4"
          ]
        },
        {
          "description": "Kill 2 zombies. (Currently %player:statistic_raw minecraft:killed minecraft:zombie%)",
          "commands": [
            "<=? %player:name% 2 %player:statistic_raw minecraft:killed minecraft:zombie%"
          ]
        },
        {
          "description": "Play for 5 seconds.",
          "commands": [
            "<=? %player:name% 100 %player:statistic_raw minecraft:play_time%"
          ]
        }
      ],
      "events": {
        "on_enter_this_rank_node_commands": [
          "lp user %player:name% permission set group.rank-%fuji:rank_id%",
          "send-broadcast <#FFA1F5>Player %player:name% has been ranked up to %fuji:rank_displayname_raw%"
        ],
        "on_leave_this_rank_node_commands": [
          "lp user %player:name% permission unset group.rank-%fuji:rank_id%"
        ],
        "on_first_enter_this_rank_node_commands": [
          "when-online %player:name% send-message %player:name% <orange>You have received the ranked up bonus!",
          "when-online %player:name% give %player:name% minecraft:apple 1"
        ]
      }
    },
    {
      "enable": true,
      "id": "branch-2",
      "display_name": "<aqua>Branch-2</aqua>",
      "description": "<orange>This is the first line.\n<orange>This is the second line.",
      "next_rank_nodes": [
        "branch-2-1",
        "branch-2-2"
      ],
      "requirements": [
        {
          "description": "Have 16 dirt blocks in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:dirt 16"
          ]
        },
        {
          "description": "Have 8 apples in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:apple 8"
          ]
        },
        {
          "description": "Have 4 diamonds in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:diamond 4"
          ]
        },
        {
          "description": "Kill 2 zombies. (Currently %player:statistic_raw minecraft:killed minecraft:zombie%)",
          "commands": [
            "<=? %player:name% 2 %player:statistic_raw minecraft:killed minecraft:zombie%"
          ]
        },
        {
          "description": "Play for 5 seconds.",
          "commands": [
            "<=? %player:name% 100 %player:statistic_raw minecraft:play_time%"
          ]
        }
      ],
      "events": {
        "on_enter_this_rank_node_commands": [
          "lp user %player:name% permission set group.rank-%fuji:rank_id%",
          "send-broadcast <#FFA1F5>Player %player:name% has been ranked up to %fuji:rank_displayname_raw%"
        ],
        "on_leave_this_rank_node_commands": [
          "lp user %player:name% permission unset group.rank-%fuji:rank_id%"
        ],
        "on_first_enter_this_rank_node_commands": [
          "when-online %player:name% send-message %player:name% <orange>You have received the ranked up bonus!",
          "when-online %player:name% give %player:name% minecraft:apple 1"
        ]
      }
    },
    {
      "enable": true,
      "id": "branch-2-1",
      "display_name": "<aqua>Branch-2-1</aqua>",
      "description": "<orange>This is the first line.\n<orange>This is the second line.",
      "next_rank_nodes": [
        "expert"
      ],
      "requirements": [
        {
          "description": "Have 16 dirt blocks in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:dirt 16"
          ]
        },
        {
          "description": "Have 8 apples in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:apple 8"
          ]
        },
        {
          "description": "Have 4 diamonds in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:diamond 4"
          ]
        },
        {
          "description": "Kill 2 zombies. (Currently %player:statistic_raw minecraft:killed minecraft:zombie%)",
          "commands": [
            "<=? %player:name% 2 %player:statistic_raw minecraft:killed minecraft:zombie%"
          ]
        },
        {
          "description": "Play for 5 seconds.",
          "commands": [
            "<=? %player:name% 100 %player:statistic_raw minecraft:play_time%"
          ]
        }
      ],
      "events": {
        "on_enter_this_rank_node_commands": [
          "lp user %player:name% permission set group.rank-%fuji:rank_id%",
          "send-broadcast <#FFA1F5>Player %player:name% has been ranked up to %fuji:rank_displayname_raw%"
        ],
        "on_leave_this_rank_node_commands": [
          "lp user %player:name% permission unset group.rank-%fuji:rank_id%"
        ],
        "on_first_enter_this_rank_node_commands": [
          "when-online %player:name% send-message %player:name% <orange>You have received the ranked up bonus!",
          "when-online %player:name% give %player:name% minecraft:apple 1"
        ]
      }
    },
    {
      "enable": true,
      "id": "branch-2-2",
      "display_name": "<aqua>Branch-2-2</aqua>",
      "description": "<orange>This is the first line.\n<orange>This is the second line.",
      "next_rank_nodes": [
        "expert"
      ],
      "requirements": [
        {
          "description": "Have 16 dirt blocks in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:dirt 16"
          ]
        },
        {
          "description": "Have 8 apples in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:apple 8"
          ]
        },
        {
          "description": "Have 4 diamonds in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:diamond 4"
          ]
        },
        {
          "description": "Kill 2 zombies. (Currently %player:statistic_raw minecraft:killed minecraft:zombie%)",
          "commands": [
            "<=? %player:name% 2 %player:statistic_raw minecraft:killed minecraft:zombie%"
          ]
        },
        {
          "description": "Play for 5 seconds.",
          "commands": [
            "<=? %player:name% 100 %player:statistic_raw minecraft:play_time%"
          ]
        }
      ],
      "events": {
        "on_enter_this_rank_node_commands": [
          "lp user %player:name% permission set group.rank-%fuji:rank_id%",
          "send-broadcast <#FFA1F5>Player %player:name% has been ranked up to %fuji:rank_displayname_raw%"
        ],
        "on_leave_this_rank_node_commands": [
          "lp user %player:name% permission unset group.rank-%fuji:rank_id%"
        ],
        "on_first_enter_this_rank_node_commands": [
          "when-online %player:name% send-message %player:name% <orange>You have received the ranked up bonus!",
          "when-online %player:name% give %player:name% minecraft:apple 1"
        ]
      }
    },
    {
      "enable": true,
      "id": "expert",
      "display_name": "<purple>Expert</purple>",
      "description": "<orange>This is the first line.\n<orange>This is the second line.",
      "next_rank_nodes": [],
      "requirements": [
        {
          "description": "Have 16 dirt blocks in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:dirt 16"
          ]
        },
        {
          "description": "Have 8 apples in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:apple 8"
          ]
        },
        {
          "description": "Have 4 diamonds in your inventory.",
          "commands": [
            "has-item? %player:name% minecraft:diamond 4"
          ]
        },
        {
          "description": "Kill 2 zombies. (Currently %player:statistic_raw minecraft:killed minecraft:zombie%)",
          "commands": [
            "<=? %player:name% 2 %player:statistic_raw minecraft:killed minecraft:zombie%"
          ]
        },
        {
          "description": "Play for 5 seconds.",
          "commands": [
            "<=? %player:name% 100 %player:statistic_raw minecraft:play_time%"
          ]
        }
      ],
      "events": {
        "on_enter_this_rank_node_commands": [
          "lp user %player:name% permission set group.rank-%fuji:rank_id%",
          "send-broadcast <#FFA1F5>Player %player:name% has been ranked up to %fuji:rank_displayname_raw%"
        ],
        "on_leave_this_rank_node_commands": [
          "lp user %player:name% permission unset group.rank-%fuji:rank_id%"
        ],
        "on_first_enter_this_rank_node_commands": [
          "when-online %player:name% send-message %player:name% <orange>You have received the ranked up bonus!",
          "when-online %player:name% give %player:name% minecraft:apple 1"
        ]
      }
    }
  ]
}
```
</details>
:::
:::config
- File Name: `rank-data.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/rank/rank-data.json"
{
  "rank_data_node_map": {}
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/rank down <PreviousAvailableRankNode previousRank> [Boolean confirm]`
- Document:   Rank down to the previous available rank node.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank info <RankNode rankNode>`
- Document:   Query the info of the specified `rank node`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank list all-rank-nodes`
- Document:   List all defined `rank nodes`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank list next-rank-nodes <ServerPlayerEntity target>`
- Document:   List all available `next rank nodes` for the specified player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank list previous-rank-nodes <ServerPlayerEntity target>`
- Document:   List all available `previous rank nodes` for the specified player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank list starting-rank-nodes <ServerPlayerEntity target>`
- Document:   List all available `starting rank nodes` for the specified player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank list walked-rank-nodes <ServerPlayerEntity target>`
- Document:   List all `walked rank nodes` for the specified player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank progress`
- Document:   Query the rank progress.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank progress <ServerPlayerEntity target>`
- Document:   Query the rank progress of the specified player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank remove <ServerPlayerEntity player> [Boolean confirm]`
- Document:   Set the specified player's rank to none.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank set <ServerPlayerEntity target> <RankNode rankNode>`
- Document:   Set the rank for specified player.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank try-up <ServerPlayerEntity target>`
- Document:   If there is only one `next rank node` for the player, then rank up to that node, else do nothing.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rank up <NextAvailableRankNode nextRank> [Boolean confirm]`
- Document:   Rank up to the next available rank node.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
## Placeholders
:::placeholder
- Placeholder Name: `fuji:rank_id`
- Document:   Returns the `rank id` of the player's current rank.


:::
:::placeholder
- Placeholder Name: `fuji:rank_displayname`
- Document:   Returns the `rank display name` of the player's current rank.


:::
:::placeholder
- Placeholder Name: `fuji:rank_displayname_raw`
- Document:   Returns the `rank display name raw string` of the player's current rank.


:::
## Argument Types
:::argument-type
- Argument Type Name: `[next-available-rank-nodes]`
- Argument Type Class: `[NextAvailableRankNode]`
:::
:::argument-type
- Argument Type Name: `[previous-available-rank-nodes]`
- Argument Type Class: `[PreviousAvailableRankNode]`
:::
:::argument-type
- Argument Type Name: `[rank-id]`
- Argument Type Class: `[RankNode]`
:::
