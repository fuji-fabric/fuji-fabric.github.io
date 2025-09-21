---
title: rtp
---


# Module: rtp

## Overview
:::module
  Provides random teleportation.


:::
## Color Boxes

:::colorbox-note

  ◉ Features
  
  - Per-dimension settings
  
  - Real-time searching feedback.
  
  - Full async `chunk loading` and `chunk generation`. (Lag-free)
  
  - Customization of `center x` and `center z`
  
  - Customization of `min range` and `max range`
  
  - Supported `circle` and `rectangle` shape.
  
  - Respect `world border`.
  
  - Skip any `liquid block`.
  
  - Filter the result by `min Y` and `max Y`
  
  - Filter the result by `specified blocks`
  
  - Filter the result by `specified biomes`
  
  - Filter the result by `chunk inhabited time`


:::

:::colorbox-tip

  ◉ Improve the performance of rtp.
  
  It's highly recommended to pre generate the world chunks using `chunky` mod.
  
  If the `target chunk` is not generated, then we have to generate it while doing the random teleport.
  
  To generate a chunk requires about 2 seconds to 10 seconds.
  
  Which will slow down the process of `/rtp`.
  
  If you pre generates the world chunks, then it will be fast.


:::

:::colorbox-tip

  ◉ Limit the usage of `/rtp` command
  
  You can use `command_cooldown` module, to setup a `cooldown` for `/rtp` command.
  
  To prevent abuse.


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

```json showLineNumbers title="config/fuji/modules/rtp/config.json"
{
  /* Define `rtp` setup for each `dimension`. */
  "dimensions": {
    "settings": [
      {
        "enable": true,
        "dimension": "minecraft:overworld",
        "center_x": 0,
        "center_z": 0,
        "circle": false,
        "min_range": 1000,
        "max_range": 5000,
        "min_y": -64,
        "max_y": 320,
        "max_try_times": 16,
        "async_chunk_loading_timeout_ticks": 200,
        "chunk_inhabited_time_lower_than_ticks": 6000,
        "biomes": {
          "skip": [
            "minecraft:deep_cold_ocean",
            "minecraft:cold_ocean",
            "minecraft:frozen_ocean",
            "minecraft:deep_frozen_ocean",
            "minecraft:ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
            "minecraft:deep_lukewarm_ocean"
          ],
          "only_accept_biomes_mode": {
            "enable": false,
            "accept": [
              "minecraft:mushroom_fields",
              "minecraft:plains"
            ]
          }
        },
        "blocks": {
          "skip": [
            "minecraft:magma_block",
            "minecraft:cactus",
            "minecraft:powder_snow",
            "minecraft:void_air",
            "minecraft:sweet_berry_bush",
            "minecraft:campfire",
            "minecraft:fire"
          ]
        }
      },
      {
        "enable": true,
        "dimension": "minecraft:the_nether",
        "center_x": 0,
        "center_z": 0,
        "circle": false,
        "min_range": 1000,
        "max_range": 5000,
        "min_y": 0,
        "max_y": 128,
        "max_try_times": 16,
        "async_chunk_loading_timeout_ticks": 200,
        "chunk_inhabited_time_lower_than_ticks": 6000,
        "biomes": {
          "skip": [
            "minecraft:deep_cold_ocean",
            "minecraft:cold_ocean",
            "minecraft:frozen_ocean",
            "minecraft:deep_frozen_ocean",
            "minecraft:ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
            "minecraft:deep_lukewarm_ocean"
          ],
          "only_accept_biomes_mode": {
            "enable": false,
            "accept": [
              "minecraft:mushroom_fields",
              "minecraft:plains"
            ]
          }
        },
        "blocks": {
          "skip": [
            "minecraft:magma_block",
            "minecraft:cactus",
            "minecraft:powder_snow",
            "minecraft:void_air",
            "minecraft:sweet_berry_bush",
            "minecraft:campfire",
            "minecraft:fire"
          ]
        }
      },
      {
        "enable": true,
        "dimension": "minecraft:the_end",
        "center_x": 0,
        "center_z": 0,
        "circle": false,
        "min_range": 1000,
        "max_range": 5000,
        "min_y": 0,
        "max_y": 256,
        "max_try_times": 16,
        "async_chunk_loading_timeout_ticks": 200,
        "chunk_inhabited_time_lower_than_ticks": 6000,
        "biomes": {
          "skip": [
            "minecraft:deep_cold_ocean",
            "minecraft:cold_ocean",
            "minecraft:frozen_ocean",
            "minecraft:deep_frozen_ocean",
            "minecraft:ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
            "minecraft:deep_lukewarm_ocean"
          ],
          "only_accept_biomes_mode": {
            "enable": false,
            "accept": [
              "minecraft:mushroom_fields",
              "minecraft:plains"
            ]
          }
        },
        "blocks": {
          "skip": [
            "minecraft:magma_block",
            "minecraft:cactus",
            "minecraft:powder_snow",
            "minecraft:void_air",
            "minecraft:sweet_berry_bush",
            "minecraft:campfire",
            "minecraft:fire"
          ]
        }
      },
      {
        "enable": true,
        "dimension": "fuji:overworld",
        "center_x": 0,
        "center_z": 0,
        "circle": false,
        "min_range": 1000,
        "max_range": 5000,
        "min_y": -64,
        "max_y": 320,
        "max_try_times": 16,
        "async_chunk_loading_timeout_ticks": 200,
        "chunk_inhabited_time_lower_than_ticks": 6000,
        "biomes": {
          "skip": [
            "minecraft:deep_cold_ocean",
            "minecraft:cold_ocean",
            "minecraft:frozen_ocean",
            "minecraft:deep_frozen_ocean",
            "minecraft:ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
            "minecraft:deep_lukewarm_ocean"
          ],
          "only_accept_biomes_mode": {
            "enable": false,
            "accept": [
              "minecraft:mushroom_fields",
              "minecraft:plains"
            ]
          }
        },
        "blocks": {
          "skip": [
            "minecraft:magma_block",
            "minecraft:cactus",
            "minecraft:powder_snow",
            "minecraft:void_air",
            "minecraft:sweet_berry_bush",
            "minecraft:campfire",
            "minecraft:fire"
          ]
        }
      },
      {
        "enable": true,
        "dimension": "fuji:the_nether",
        "center_x": 0,
        "center_z": 0,
        "circle": false,
        "min_range": 1000,
        "max_range": 5000,
        "min_y": 0,
        "max_y": 128,
        "max_try_times": 16,
        "async_chunk_loading_timeout_ticks": 200,
        "chunk_inhabited_time_lower_than_ticks": 6000,
        "biomes": {
          "skip": [
            "minecraft:deep_cold_ocean",
            "minecraft:cold_ocean",
            "minecraft:frozen_ocean",
            "minecraft:deep_frozen_ocean",
            "minecraft:ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
            "minecraft:deep_lukewarm_ocean"
          ],
          "only_accept_biomes_mode": {
            "enable": false,
            "accept": [
              "minecraft:mushroom_fields",
              "minecraft:plains"
            ]
          }
        },
        "blocks": {
          "skip": [
            "minecraft:magma_block",
            "minecraft:cactus",
            "minecraft:powder_snow",
            "minecraft:void_air",
            "minecraft:sweet_berry_bush",
            "minecraft:campfire",
            "minecraft:fire"
          ]
        }
      },
      {
        "enable": true,
        "dimension": "fuji:the_end",
        "center_x": 0,
        "center_z": 0,
        "circle": false,
        "min_range": 0,
        "max_range": 48,
        "min_y": 0,
        "max_y": 256,
        "max_try_times": 16,
        "async_chunk_loading_timeout_ticks": 200,
        "chunk_inhabited_time_lower_than_ticks": 6000,
        "biomes": {
          "skip": [
            "minecraft:deep_cold_ocean",
            "minecraft:cold_ocean",
            "minecraft:frozen_ocean",
            "minecraft:deep_frozen_ocean",
            "minecraft:ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
            "minecraft:deep_lukewarm_ocean"
          ],
          "only_accept_biomes_mode": {
            "enable": false,
            "accept": [
              "minecraft:mushroom_fields",
              "minecraft:plains"
            ]
          }
        },
        "blocks": {
          "skip": [
            "minecraft:magma_block",
            "minecraft:cactus",
            "minecraft:powder_snow",
            "minecraft:void_air",
            "minecraft:sweet_berry_bush",
            "minecraft:campfire",
            "minecraft:fire"
          ]
        }
      }
    ]
  }
}
```
</details>
:::
## Commands
:::command
- Command Syntax: `/rtp [Dimension dimension]`
- Document:   Random rtp in specified dimension.


- Can be executed by console: `false`
- Required Level Permission: `0`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/rtp others <PlayerCollection others> [Dimension dimension]`
- Document:   Random rtp in specified dimension.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
