---
title: world
---


# Module: world

## Overview
:::module
  Provides a unified world management.


:::
## Color Boxes

:::colorbox-note

  ◉ The definition of `world`, ` dimension` and `dimension type`.
  
  In early Minecraft, a `world` only contains `1 dimension` (The overworld dimension).
  
  In modern Minecraft, a `world` can contain `3 or more dimensions`. (The overworld, the end and the nether)
  
  
  
  Each `dimension` has its `dimension type`.
  
  We can create extra dimensions using existed `dimension type`.
  
  
  
  See also: https://minecraft.wiki/w/Dimension_definition
  
  See also: https://minecraft.wiki/w/Dimension_type
  
  
  
  NOTE: You can just think the `dimension` word is identical to `world`.


:::

:::colorbox-note

  ◉ How it works?
  
  In vanilla Minecraft, there is a variable `worlds` in `server`, used to store all `loaded dimensions`.
  
  
  
  The vanilla Minecraft will `load` the 3 `dimensions` on server startup.
  
  They are `minecraft:overworld`, `minecraft:the_nether` and `minecraft:the_end`.
  
  
  
  So, what we should do is to `imitate` the actions.
  
  We make the `dimension` instance at server startup.
  
  And then we put the `dimension` in the `loaded dimensions` list.
  
  So it will be recognised by the server.
  
  
  
  NOTE: The dimensions created by fuji is named `runtime dimension`, because they are `created` and `loaded` at runtime.
  
  
  
  ◉ Does it need to store any special data in the `world` folder?
  
  No, we didn't touch the `world` folder, or put any special data into it.
  
  
  
  What we need is minimal, we need to define `runtime dimension descriptor` in the module folder.
  
  The `runtime dimension descriptor` should provide enough information to define a `Dimension Options`.
  
  
  
  ◉ What is `DimensionOptions`?
  
  A `DimensionOptions` = A `Dimension Type` + A `Chunk Generator`.
  
  The `dimension type` is used to define the `environment` of a `dimension`. (Like, `bed explosion?` or `infinite burning?`)
  
  The `chunk generator` is used to `generate` the `chunks`. (Give the `seed` and `chunk location` to the generator, it will fill blocks for you)
  
  
  
  See also:
  
  1. https://minecraft.wiki/w/Dimension_type
  
  2. https://minecraft.wiki/w/Dimension_definition
  
  3. https://minecraft.wiki/w/Noise_settings


:::

:::colorbox-note

  ◉ How the `world` module generate the dimension?
  
  Actually, the `world` module didn't do the `world generation` itself.
  
  
  
  What we do is simple, the `runtime dimension descriptor` provides enough information to create the `DimensionOptions`.
  
  Note that `Dimension Options = Dimension Type + Chunk Generator`:
  
  1. We use `Dimension Type` to describe the `environment` of a specific `dimension`. (For example, `bed explosion?`, `infinite burning?`...)
  
  2. We use `Chunk Generator` to describe how the `chunks` are generated. (We will give the specified `seed` argument to it)
  
  
  
  ◉ What is a `chunk generator`?
  
  Give a `seed` and `chunk location` to a `chunk generator`.
  
  The `chunk generator` will `fill` blocks for you.
  
  
  
  There are 2 types of `chunk generator`:
  
  1. `Flat Chunk Generator`: It is used for `superflat` world, it fills blocks `layer` by `layer`.
  
  2. `Noise Chunk Generator`: Compared to `Flat Chunk Generator`, it makes some `noise`, so you dimension looks not boring like `superflat dimension`.
  
  
  
  NOTE: The `minecraft:overworld`, `minecraft:the_nether` and `minecraft:the_end` all use `Noise Chunk Generator`, but they have different `Chunk Generator Settings`.
  
  There are 3 `NoiseChunkGenerator` instances with different `Chunk Generator Settings`.
  
  That's why the `minecraft:overworld`, `minecraft:the_nether` and `minecraft:the_end` look different.
  
  
  
  ◉ The logic of `chunk generator`.
  
  If the specified chunk is not `generated`, then the chunk generator will `generate` a new one.
  
  If the specified chunk is `generated`, the chunk generator will just use the `existed chunk data` in storage.


:::

:::colorbox-note

  ◉ Advanced World Management and Per-world rules.
  
  The `world` module provided by fuji is a simple module.
  
  If you want a more powerful tool, you can try use `WorldManager` mod and `WorldGameRules` mod.
  
  
  
  See:
  
  1. https://github.com/DrexHD/WorldManager
  
  2. https://github.com/DrexHD/WorldGameRules


:::

:::colorbox-note

  ◉ Useful concepts about a `dimension`.
  
  - https://minecraft.wiki/w/World_generation
  
  - https://minecraft.wiki/w/World_type
  
  - https://minecraft.wiki/w/World
  
  - https://minecraft.wiki/w/Biome
  
  - https://minecraft.wiki/w/Void
  
  - https://minecraft.wiki/w/Overworld
  
  - https://minecraft.wiki/w/Feature
  
  - https://minecraft.wiki/w/Structure
  
  - https://minecraft.wiki/w/Terrain_features
  
  - https://minecraft.fandom.com/wiki/Java_Edition_level_format
  
  - https://minecraft.wiki/w/Chunk_format
  
  - https://minecraft.wiki/w/Loot_table


:::

:::colorbox-tip

  ◉ Make a resource world that reset automatically every day.
  
  You can use `command_scheduler` module, to execute `/world reset` command automatically.


:::

:::colorbox-tip

  ◉ The logic of `passed ticks` is per-dimension.
  
  Each fuji runtime dimension will save its own `time_of_day` (The equivalent to `DayTime` in `level.dat`).
  
  
  
  ◉ The duration of `one day` in Minecraft.
  
  The `total ticks of one day` is `24000 ticks` or `20 minutes`.
  
  It is `10 minutes of day time` + `10 minutes of night time`.
  
  
  
  ◉ The saved `passed ticks` and `/time` command.
  
  The value of `Time` in `level.dat` = `/time query gametime`.
  
  The value of `DayTime` in `level.dat` = `/time query day` * 24000 + `/time query daytime`.
  
  
  
  NOTE: The `minecraft:overworld`, `minecraft:the_nether` and `minecraft:the_end` shares the same instance of `DayTime`.
  
  NOTE: The `/time set {day/midnight/night/noon}` command directly sets the `DayTime` to the first day.
  
  
  
  ◉ The logic of `/time query ...` command.
  
  For `/time query daytime` command, it returns the `DayTime % 24000` of `the world of the command source`:
  
  1. If the `command source` is `a player`, then the `world` is `the world where the player is`.
  
  2. If the `command source` is `the console`, then the `world` is `minecraft:overworld`.
  
  
  
  ◉ The logic of `/time {set/add} ...` command.
  
  For command `/time {set/add}`, it operates on `all dimensions` in the server.


:::

:::colorbox-tip

  ◉ The `weather system` of the `world`.
  
  There are 3 types of `weather`: `clear`, `rain` and `thunder`.
  
  If `clear`, then both `rain` and `thunder` is false.
  
  If `thunder`, then `rain` is true.
  
  
  
  The `weather system` will be `tick` if:
  
  1. The `dimension options` of the `world` has `skylight`.
  
  2. The `gamerule DO_WEATHER_CYCLE` of the `world` is true.
  
  
  
  ◉ The logic of `/weather` command.
  
  The `/weather` command `only` sets the `weather` of `minecraft:overworld`.
  
  
  
  ◉ Set the weather per-dimension.
  
  You can modify the weather directly in config file, and issue `/fuji reload` to apply it.


:::

:::colorbox-tip

  ◉ Does the `runtime dimension` support `datapack`?
  
  It depends on how the `datapack` interfaces with the `world`.
  
  Most of datapack should work.
  
  Anyway, always backup your world data before install a new datapack.


:::

:::colorbox-tip

  ◉ The logic of `nether portal` and `ender portal`.
  
  In vanilla Minecraft, there are only 3 dimensions.
  
  They are `minecraft:overworld`, `minecraft:the_nether` and `minecraft:the_end`.
  
  They are `hard coded` dimensions.
  
  The linkage of `nether portal` and `ender portal` use the `hard coded` dimensions.
  
  
  
  ◉ Can I create `nether portal` in `runtime dimension`?
  
  No, you can't create any `nether portal` in runtime dimension.
  
  
  
  ◉ Can I create `ender portal` in `runtime dimension`?
  
  Yes, but the destination dimension is hard-coded, it is always the `minecraft:the_end`.
  
  
  
  The logic of `EnderPortalBlockEntity`:
  
  1. If the player is now in `minecraft:the_end`, then destination dimension is `minecraft:overworld`.
  
  2. Else the destination dimension is `minecraft:the_end`.


:::

:::colorbox-example

  ◉ Create an extra `the_nether` dimension
  
  Issue: `/world create my_nether minecraft:the_nether`
  
  
  
  ◉ Delete the extra dimension
  
  Issue: `/world delete fuji:my_nether --confirm true`
  
  
  
  ◉ Reset the extra dimension with random seed.
  
  Issue: `/world reset fuji:my_nether --confirm true`
  
  
  
  ◉ Specify a seed for an extra dimension.
  
  1. `/world create my_nether --seed 1234567890 minecraft:the_nether`
  
  2. `/world reset fuji:my_nether --useTheSameSeed true --confirm true`


:::

:::colorbox-example

  ◉ Create a `flat dimension` with `overworld` dimension type.
  
  Issue: `/world create my_flat_world minecraft:overworld --chunkGeneratorType FLAT`
  
  
  
  ◉ Create a `flat dimension` with `overworld` dimension type and `customized preset`.
  
  Issue: `/world create my_desert_world minecraft:overworld --chunkGeneratorType FLAT --chunkGeneratorParameters "minecraft:bedrock,3*minecraft:stone,116*minecraft:sandstone;minecraft:desert"`
  
  
  
  ◉ Create a `void dimension`.
  
  Issue: `/world create my_void_world minecraft:overworld --chunkGeneratorType FLAT --chunkGeneratorParameters "minecraft:air;minecraft:the_void"`
  
  NOTE: The `secret` is, a `void dimension` is just a `flat dimension` with customized `minecraft:air layers` with the `minecraft:the_void` biome.
  
  
  
  ◉ Generate the `parameters` using a `generator`.
  
  See: https://minecraft.tools/en/flat.php
  
  
  
  ◉ Useful resource
  
  The definition of `world preset`: https://minecraft.fandom.com/wiki/World_preset
  
  The definition of `superflat dimension`: https://minecraft.fandom.com/wiki/Superflat


:::

:::colorbox-example

  ◉ Create a `runtime dimension` using pre-defined `world preset`.
  
  Issue: `/world create example minecraft:overworld --worldPresetType DEBUG_ALL_BLOCK_STATES`
  
  
  
  NOTE: When you are using a pre-defined `world preset`, then the following options will be `ignored`:
  
  1. `dimension type id`
  
  2. `chunk generator type`
  
  3. `chunk generator parameters`.


:::

:::colorbox-example

  ◉ The definition of `import`, `make`, `load`, `unload`.
  
  The `import` means: define a `runtime dimension descriptor` in config file.
  
  So that we know how make the `original chunk generator` used by the dimension.
  
  
  
  The `make` means: We use the `runtime dimension descriptor` to create the `dimension` instance.
  
  We need to make the `DimensionOptions` from the `runtime dimension descriptor`.
  
  A `DimensionOptions` = A `Dimension Type` + A `Chunk Generator`.
  
  
  
  The `load` means: We will put this `dimension` instance into the worlds list of the `server`.
  
  
  
  The `unload` means: We will take this `dimension` instance from the worlds list of the `server`.
  
  
  
  ◉ The definition of `/world create` and `/world delete` command.
  
  The `/world create` command does the `import`, `make` and `load`.
  
  The `/world delete` command does the `unload` and also `delete the chunk files of that dimension`.


:::

:::colorbox-example

  ◉ How to `import` a `dimension dir`?
  
  The `/world import` is similar to `/world create` command.
  
  You need to specify `enough information` to define the `runtime dimension descriptor`.
  
  Note that `to import a dimension dir` is `to define the runtime dimension descriptor in the config file`.
  
  NOTE: If you specify a `wrong seed`, then the `chunk generator` will generate `in-consistent new chunks` compared to your `existing chunks`.
  
  
  
  ◉ Import a `sky block dimension`.
  
  Let's say you have a `sky block dimension` whose directory name is `sky_block`.
  
  You need to put that `directory` in `world/dimensions/fuji/sky_block`.
  
  
  
  And issue: `/world import sky_block minecraft:overworld -seed <seed> --chunkGeneratorType FLAT --chunkGeneratorParameters "minecraft:air;minecraft:the_void"`
  
  This defines a `runtime dimension descriptor` with `flat chunk generator`, and with `void layers`.
  
  The `void layers` means the `flat chunk generator` will fill `minecraft:air` when it is needed to `generate a new chunk`.
  
  
  
  ◉ Import a `overworld dimension`.
  
  Issue: `/world import my_overworld minecraft:overworld --seed <seed>`
  
  You need to specify the `dimension type` to define the `environment of your dimension`.
  
  And also the `seed` to define the `seed of your dimension`.
  
  
  
  ◉ Import a `superflat dimension`.
  
  Issue: `/world import my_superflat minecraft:overworld --seed <seed> --chunkGeneratorType FLAT`


:::

:::colorbox-example

  ◉ Use `command_bundle` module to create a `/tpw` command.
  
  The `/world tp` command is an `admin-level` command.
  
  You can use `command_bundle` module to create a `/tpw resource-world` command, to teleport players to `fuji:overworld`.
  
  
  
  ◉ Use `tppos` module to teleport the players to a specific world.
  
  1. `/tppos --dimension minecraft:overworld --x 0 --y 128 --z 0 --yaw 0 --pitch 0`
  
  2. `/tppos --dimension minecraft:overworld --centerX 0 --centerZ 0 --minRange 0 --maxRange 1000 --maxTryTimes 16`


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

```json showLineNumbers title="config/fuji/modules/world/config.json"
{}
```
</details>
:::
:::config
- File Name: `world.json`
- File Content: 
<details>

<summary>_Click to see the `default` content..._</summary>

```json showLineNumbers title="config/fuji/modules/world/world.json"
{
  "dimension_list": []
}
```
</details>
:::
## Jobs
:::job
- Job Name: `ConfigurationHandlerWriteStorageJob`
- Document:   This `job` is used to `write data` from `memory` into `storage`.
  
  
  
  NOTE: If you modify the `file` in `disk`, then you need to issue `/fuji reload` as soon as possible.
  
  NOTE: The `disk` will be `overridden` when `fire` this job.


:::
## Commands
:::command
- Command Syntax: `/world create <String name> <DimensionType dimensionType> [Long seed] [ChunkGeneratorType chunkGeneratorType] [String chunkGeneratorParameters] [WorldPresetType worldPresetType]`
- Document:   This command does the following things:
  
  1. `Add` a `dimension descriptor` into the `config` file.
  
  2. Use that `dimension descriptor` to `make` the `runtime dimension`.
  
  3. `Load` the runtime dimension into the `server`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world delete <Dimension dimension> [Boolean confirm]`
- Document:   This command does the following things:
  
  1. `Unload` the `loaded runtime dimension` in the server.
  
  2. Delete the chunk files of the dimension.
  
  3. Delete the `runtime dimension descriptor` in config file.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world import <String name> <DimensionType dimensionType> [Long seed] [ChunkGeneratorType chunkGeneratorType] [String chunkGeneratorParameters] [WorldPresetType worldPresetType]`
- Document:   This command will `import` an external `dimension directory` placed in `world/dimensions/fuji/<dimension-name>`.
  
  You need to provide enough information to define the `runtime dimension descriptor`.
  
  
  
  NOTE: This command is almost identical to `/world create` command.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world info <Dimension dimension>`
- Document:   List the debug info of specified dimension.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world list`
- Document:   List `loaded dimensions` and `unloaded dimensions`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world load <UnloadedRuntimeDimensionDescriptor dimension>`
- Document:   This command does the following things:
  
  1. `Make` the `runtime dimension` instance based on the `runtime dimension descriptor`.
  
  2. `Load` the made `runtime dimension` into the `server`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world reset <Dimension dimension> [Boolean useTheSameSeed] [Boolean confirm]`
- Document:   Delete and create the specified world.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world save-configs`
- Document:   Saves all the `dimension descriptors` from `memory` into the `storage`.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world tp <Dimension dimension>`
- Document:   Teleport to the target dimension with the same coordinate.


- Can be executed by console: `false`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world unload <LoadedRuntimeDimensionDescriptor dimension>`
- Document: null
- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world who`
- Document:   List the dimensions each player is in.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world who <Dimension dimension>`
- Document:   List the players in specified dimension.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
:::command
- Command Syntax: `/world who <ServerPlayerEntity player>`
- Document:   Query which dimension the player is in.


- Can be executed by console: `true`
- Required Level Permission: `4`
- Required String Permission: `null`
:::
## Argument Types
:::argument-type
- Argument Type Name: `[chunk-generator-type]`
- Argument Type Class: `[ChunkGeneratorType]`
:::
:::argument-type
- Argument Type Name: `[loaded-runtime-dimension-descriptor]`
- Argument Type Class: `[LoadedRuntimeDimensionDescriptor]`
:::
:::argument-type
- Argument Type Name: `[unloaded-runtime-dimension-descriptor]`
- Argument Type Class: `[UnloadedRuntimeDimensionDescriptor]`
:::
:::argument-type
- Argument Type Name: `[world-preset-type]`
- Argument Type Class: `[WorldPresetType]`
:::
