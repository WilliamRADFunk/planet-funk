[planet-funk](../README.md) > ["ts/enemies/saucer-generator"](../modules/_ts_enemies_saucer_generator_.md) > [SaucerGenerator](../classes/_ts_enemies_saucer_generator_.saucergenerator.md)

# Class: SaucerGenerator

*__class__*: Makes, Moves, and Scores the saucers and their resulting destruction.

## Hierarchy

**SaucerGenerator**

## Index

### Properties

* [currentLevel](_ts_enemies_saucer_generator_.saucergenerator.md#currentlevel)
* [difficulty](_ts_enemies_saucer_generator_.saucergenerator.md#difficulty)
* [drones](_ts_enemies_saucer_generator_.saucergenerator.md#drones)
* [isGameActive](_ts_enemies_saucer_generator_.saucergenerator.md#isgameactive)
* [maxDrones](_ts_enemies_saucer_generator_.saucergenerator.md#maxdrones)
* [maxSaucers](_ts_enemies_saucer_generator_.saucergenerator.md#maxsaucers)
* [saucerPoints](_ts_enemies_saucer_generator_.saucergenerator.md#saucerpoints)
* [saucerTextures](_ts_enemies_saucer_generator_.saucergenerator.md#saucertextures)
* [saucers](_ts_enemies_saucer_generator_.saucergenerator.md#saucers)
* [scene](_ts_enemies_saucer_generator_.saucergenerator.md#scene)
* [scoreboard](_ts_enemies_saucer_generator_.saucergenerator.md#scoreboard)

### Methods

* [endCycle](_ts_enemies_saucer_generator_.saucergenerator.md#endcycle)
* [makeSaucer](_ts_enemies_saucer_generator_.saucergenerator.md#makesaucer)
* [makeSaucersFromLoad](_ts_enemies_saucer_generator_.saucergenerator.md#makesaucersfromload)
* [refreshLevel](_ts_enemies_saucer_generator_.saucergenerator.md#refreshlevel)

---

## Properties

<a id="currentlevel"></a>

### `<Private>` currentLevel

**● currentLevel**: *`number`* = 1

*Defined in [ts/enemies/saucer-generator.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L27)*

Current level player is on, effects max saucers and points per saucer destroyed.

___
<a id="difficulty"></a>

### `<Private>` difficulty

**● difficulty**: *`number`*

*Defined in [ts/enemies/saucer-generator.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L31)*

Player chosen level of difficulty

___
<a id="drones"></a>

### `<Private>` drones

**● drones**: *[Drone](_ts_weapons_drone_.drone.md)[]* =  []

*Defined in [ts/enemies/saucer-generator.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L35)*

Drone array for ease of iteration

___
<a id="isgameactive"></a>

### `<Private>` isGameActive

**● isGameActive**: *`boolean`* = true

*Defined in [ts/enemies/saucer-generator.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L39)*

Flag to let generator know if game is not lost..

___
<a id="maxdrones"></a>

### `<Private>` maxDrones

**● maxDrones**: *`number`* = 1

*Defined in [ts/enemies/saucer-generator.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L43)*

Maximum number of drones that can exist at one time.

___
<a id="maxsaucers"></a>

### `<Private>` maxSaucers

**● maxSaucers**: *`number`* = 1

*Defined in [ts/enemies/saucer-generator.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L47)*

Maximum number of saucers that can exist at one time.

___
<a id="saucerpoints"></a>

### `<Private>` saucerPoints

**● saucerPoints**: *`number`* = 50

*Defined in [ts/enemies/saucer-generator.ts:55](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L55)*

Points multiplier per saucer destroyed.

___
<a id="saucertextures"></a>

### `<Private>` saucerTextures

**● saucerTextures**: *`Texture`[]*

*Defined in [ts/enemies/saucer-generator.ts:59](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L59)*

The loaded textures, used for the saucers.

___
<a id="saucers"></a>

### `<Private>` saucers

**● saucers**: *[Saucer](_ts_enemies_saucer_.saucer.md)[]* =  []

*Defined in [ts/enemies/saucer-generator.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L51)*

Saucer array for ease of iteration

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/enemies/saucer-generator.ts:63](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L63)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="scoreboard"></a>

### `<Private>` scoreboard

**● scoreboard**: *[ScoreHandler](_ts_displays_score_handler_.scorehandler.md)*

*Defined in [ts/enemies/saucer-generator.ts:67](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L67)*

Reference to the scorekeeper for adding points on saucer destruction.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(isGameActive: *`boolean`*): `boolean`

*Defined in [ts/enemies/saucer-generator.ts:90](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L90)*

At the end of each loop iteration, iterate endCycle through all saucers.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| isGameActive | `boolean` |  flag to let generator know if game is not lost. If it is, don't continue accruing points. |

**Returns:** `boolean`
TRUE is all saucers are destroyed | FALSE means saucers remain.

___
<a id="makesaucer"></a>

### `<Private>` makeSaucer

▸ **makeSaucer**(): [Saucer](_ts_enemies_saucer_.saucer.md)

*Defined in [ts/enemies/saucer-generator.ts:136](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L136)*

Saucer generation in one place to avoid breaking DRY.

**Returns:** [Saucer](_ts_enemies_saucer_.saucer.md)
the created saucer to be added to list at index of choice.

___
<a id="makesaucersfromload"></a>

### `<Private>` makeSaucersFromLoad

▸ **makeSaucersFromLoad**(): `void`

*Defined in [ts/enemies/saucer-generator.ts:161](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L161)*

Saucer generation in one place to avoid breaking DRY, with increasing speeds because of load.

**Returns:** `void`

___
<a id="refreshlevel"></a>

###  refreshLevel

▸ **refreshLevel**(level: *`number`*): `void`

*Defined in [ts/enemies/saucer-generator.ts:174](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/enemies/saucer-generator.ts#L174)*

Start of new level means reactivating saucers, and creating new ones.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| level | `number` |  level number, grabbed from the LevelHandler. |

**Returns:** `void`

___

