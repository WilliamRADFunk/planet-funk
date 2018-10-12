[planet-funk](../README.md) > ["ts/score-handler"](../modules/_ts_score_handler_.md) > [ScoreHandler](../classes/_ts_score_handler_.scorehandler.md)

# Class: ScoreHandler

*__class__*: Keeps track of all things score related.

## Hierarchy

**ScoreHandler**

## Index

### Properties

* [currentColor](_ts_score_handler_.scorehandler.md#currentcolor)
* [currentScore](_ts_score_handler_.scorehandler.md#currentscore)
* [scene](_ts_score_handler_.scorehandler.md#scene)
* [score](_ts_score_handler_.scorehandler.md#score)
* [scoreGeometries](_ts_score_handler_.scorehandler.md#scoregeometries)
* [scoreGeometry](_ts_score_handler_.scorehandler.md#scoregeometry)
* [scoreMaterial](_ts_score_handler_.scorehandler.md#scorematerial)
* [scores](_ts_score_handler_.scorehandler.md#scores)

### Methods

* [addPoints](_ts_score_handler_.scorehandler.md#addpoints)
* [changeScore](_ts_score_handler_.scorehandler.md#changescore)
* [createText](_ts_score_handler_.scorehandler.md#createtext)
* [endCycle](_ts_score_handler_.scorehandler.md#endcycle)
* [nextLevel](_ts_score_handler_.scorehandler.md#nextlevel)
* [removePreviousDigits](_ts_score_handler_.scorehandler.md#removepreviousdigits)

---

## Properties

<a id="currentcolor"></a>

### `<Private>` currentColor

**● currentColor**: *`Color`*

*Defined in [ts/score-handler.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L39)*

Keeps track of level's current color

___
<a id="currentscore"></a>

### `<Private>` currentScore

**● currentScore**: *`number`* = 0

*Defined in [ts/score-handler.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L43)*

Keeps track of player's current score

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/score-handler.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L47)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="score"></a>

### `<Private>` score

**● score**: *`Mesh`*

*Defined in [ts/score-handler.ts:63](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L63)*

Controls the overall rendering of the score

___
<a id="scoregeometries"></a>

### `<Private>` scoreGeometries

**● scoreGeometries**: *[ScoreGeometries](../modules/_ts_score_handler_.md#scoregeometries)[]* =  [[], [], [], [], [], [], [], [], [], []]

*Defined in [ts/score-handler.ts:55](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L55)*

A better way to iterate through the digit geometries.

___
<a id="scoregeometry"></a>

### `<Private>` scoreGeometry

**● scoreGeometry**: *`TextGeometry`*

*Defined in [ts/score-handler.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L51)*

Controls size and shape of the score

___
<a id="scorematerial"></a>

### `<Private>` scoreMaterial

**● scoreMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/score-handler.ts:59](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L59)*

Controls the color of the score material

___
<a id="scores"></a>

### `<Private>` scores

**● scores**: *[ScoreDigits](../modules/_ts_score_handler_.md#scoredigits)[]* =  [[], [], [], [], [], [], [], [], [], []]

*Defined in [ts/score-handler.ts:67](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L67)*

A better way to iterate through the digit meshes.

___

## Methods

<a id="addpoints"></a>

###  addPoints

▸ **addPoints**(points: *`number`*): `void`

*Defined in [ts/score-handler.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L86)*

Adds points when blowing up asteroids, enemy missiles, and ufos.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| points | `number` |  the amount of points to add to current score. |

**Returns:** `void`

___
<a id="changescore"></a>

### `<Private>` changeScore

▸ **changeScore**(): `void`

*Defined in [ts/score-handler.ts:95](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L95)*

Flips only score relevent digits to visible.

**Returns:** `void`

___
<a id="createtext"></a>

### `<Private>` createText

▸ **createText**(): `void`

*Defined in [ts/score-handler.ts:111](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L111)*

Creates the text in one place to obey the DRY rule.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(hide?: *`boolean`*): `void`

*Defined in [ts/score-handler.ts:164](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L164)*

At the end of each loop iteration, score updates with time increase.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` hide | `boolean` |  hide the score if new level, so old color isn't showing. |

**Returns:** `void`

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(color: *`Color`*): `void`

*Defined in [ts/score-handler.ts:183](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L183)*

Only recreate the digits with the new color

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| color | `Color` |  level color, grabbed from the LevelHandler |

**Returns:** `void`

___
<a id="removepreviousdigits"></a>

### `<Private>` removePreviousDigits

▸ **removePreviousDigits**(): `void`

*Defined in [ts/score-handler.ts:193](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L193)*

Removes all previously created score text and digits to change color.

**Returns:** `void`

___

