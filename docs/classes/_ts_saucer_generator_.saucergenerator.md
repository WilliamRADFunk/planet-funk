[planet-funk](../README.md) > ["ts/saucer-generator"](../modules/_ts_saucer_generator_.md) > [SaucerGenerator](../classes/_ts_saucer_generator_.saucergenerator.md)

# Class: SaucerGenerator

*__class__*: Makes, Moves, and Scores the saucers and their resulting destruction.

## Hierarchy

**SaucerGenerator**

## Index

### Properties

* [currentLevel](_ts_saucer_generator_.saucergenerator.md#currentlevel)
* [isGameActive](_ts_saucer_generator_.saucergenerator.md#isgameactive)
* [maxSaucers](_ts_saucer_generator_.saucergenerator.md#maxsaucers)
* [saucerPoints](_ts_saucer_generator_.saucergenerator.md#saucerpoints)
* [saucerTextures](_ts_saucer_generator_.saucergenerator.md#saucertextures)
* [saucers](_ts_saucer_generator_.saucergenerator.md#saucers)
* [scene](_ts_saucer_generator_.saucergenerator.md#scene)
* [scoreboard](_ts_saucer_generator_.saucergenerator.md#scoreboard)

### Methods

* [endCycle](_ts_saucer_generator_.saucergenerator.md#endcycle)
* [makeSaucer](_ts_saucer_generator_.saucergenerator.md#makesaucer)
* [refreshLevel](_ts_saucer_generator_.saucergenerator.md#refreshlevel)

---

## Properties

<a id="currentlevel"></a>

### `<Private>` currentLevel

**● currentLevel**: *`number`* = 1

*Defined in [ts/saucer-generator.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L41)*

Current level player is on, effects max saucers and points per saucer destroyed.

___
<a id="isgameactive"></a>

### `<Private>` isGameActive

**● isGameActive**: *`boolean`* = true

*Defined in [ts/saucer-generator.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L25)*

Flag to let generator know if game is not lost..

___
<a id="maxsaucers"></a>

### `<Private>` maxSaucers

**● maxSaucers**: *`number`* = 1

*Defined in [ts/saucer-generator.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L45)*

Maximum number of saucers that can exist at one time.

___
<a id="saucerpoints"></a>

### `<Private>` saucerPoints

**● saucerPoints**: *`number`* = 250

*Defined in [ts/saucer-generator.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L33)*

Points multiplier per saucer destroyed.

___
<a id="saucertextures"></a>

### `<Private>` saucerTextures

**● saucerTextures**: *`Texture`[]*

*Defined in [ts/saucer-generator.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L37)*

The loaded textures, used for the saucers.

___
<a id="saucers"></a>

### `<Private>` saucers

**● saucers**: *[Saucer](_ts_saucer_.saucer.md)[]* =  []

*Defined in [ts/saucer-generator.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L29)*

Saucer array for ease of iteration

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/saucer-generator.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L49)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="scoreboard"></a>

### `<Private>` scoreboard

**● scoreboard**: *[ScoreHandler](_ts_score_handler_.scorehandler.md)*

*Defined in [ts/saucer-generator.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L53)*

Reference to the scorekeeper for adding points on saucer destruction.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(isGameActive: *`boolean`*): `boolean`

*Defined in [ts/saucer-generator.ts:73](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L73)*

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

▸ **makeSaucer**(): [Saucer](_ts_saucer_.saucer.md)

*Defined in [ts/saucer-generator.ts:92](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L92)*

Saucer generation in one place to avoid breaking DRY.

**Returns:** [Saucer](_ts_saucer_.saucer.md)
the created saucer to be added to list at index of choice.

___
<a id="refreshlevel"></a>

###  refreshLevel

▸ **refreshLevel**(level: *`number`*): `void`

*Defined in [ts/saucer-generator.ts:118](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/saucer-generator.ts#L118)*

Start of new level means reactivating saucers, and creating new ones.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| level | `number` |  level number, grabbed from the LevelHandler. |

**Returns:** `void`

___

