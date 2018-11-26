[planet-funk](../README.md) > ["ts/displays/score-handler"](../modules/_ts_displays_score_handler_.md) > [ScoreHandler](../classes/_ts_displays_score_handler_.scorehandler.md)

# Class: ScoreHandler

*__class__*: Keeps track of all things score related.

## Hierarchy

**ScoreHandler**

## Index

### Properties

* [currentColor](_ts_displays_score_handler_.scorehandler.md#currentcolor)
* [currentScore](_ts_displays_score_handler_.scorehandler.md#currentscore)
* [scene](_ts_displays_score_handler_.scorehandler.md#scene)
* [score](_ts_displays_score_handler_.scorehandler.md#score)
* [scoreFont](_ts_displays_score_handler_.scorehandler.md#scorefont)
* [scoreGeometries](_ts_displays_score_handler_.scorehandler.md#scoregeometries)
* [scoreGeometry](_ts_displays_score_handler_.scorehandler.md#scoregeometry)
* [scoreMaterial](_ts_displays_score_handler_.scorehandler.md#scorematerial)
* [scores](_ts_displays_score_handler_.scorehandler.md#scores)

### Methods

* [addPoints](_ts_displays_score_handler_.scorehandler.md#addpoints)
* [changeScore](_ts_displays_score_handler_.scorehandler.md#changescore)
* [createText](_ts_displays_score_handler_.scorehandler.md#createtext)
* [endCycle](_ts_displays_score_handler_.scorehandler.md#endcycle)
* [getScore](_ts_displays_score_handler_.scorehandler.md#getscore)
* [nextLevel](_ts_displays_score_handler_.scorehandler.md#nextlevel)
* [removePreviousDigits](_ts_displays_score_handler_.scorehandler.md#removepreviousdigits)

---

## Properties

<a id="currentcolor"></a>

### `<Private>` currentColor

**● currentColor**: *`Color`*

*Defined in [ts/displays/score-handler.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L25)*

Keeps track of level's current color

___
<a id="currentscore"></a>

### `<Private>` currentScore

**● currentScore**: *`number`* = 0

*Defined in [ts/displays/score-handler.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L29)*

Keeps track of player's current score

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/displays/score-handler.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L33)*

Reference to the scene, used to remove text in order to change it.

___
<a id="score"></a>

### `<Private>` score

**● score**: *`Mesh`*

*Defined in [ts/displays/score-handler.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L53)*

Controls the overall rendering of the score

___
<a id="scorefont"></a>

### `<Private>` scoreFont

**● scoreFont**: *`Font`*

*Defined in [ts/displays/score-handler.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L37)*

The loaded font, used for the scoreboard.

___
<a id="scoregeometries"></a>

### `<Private>` scoreGeometries

**● scoreGeometries**: *[ScoreGeometries](../modules/_ts_displays_score_handler_.md#scoregeometries)[]* =  [[], [], [], [], [], [], [], [], [], []]

*Defined in [ts/displays/score-handler.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L45)*

A better way to iterate through the digit geometries.

___
<a id="scoregeometry"></a>

### `<Private>` scoreGeometry

**● scoreGeometry**: *`TextGeometry`*

*Defined in [ts/displays/score-handler.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L41)*

Controls size and shape of the score

___
<a id="scorematerial"></a>

### `<Private>` scoreMaterial

**● scoreMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/score-handler.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L49)*

Controls the color of the score material

___
<a id="scores"></a>

### `<Private>` scores

**● scores**: *[ScoreDigits](../modules/_ts_displays_score_handler_.md#scoredigits)[]* =  [[], [], [], [], [], [], [], [], [], []]

*Defined in [ts/displays/score-handler.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L57)*

A better way to iterate through the digit meshes.

___

## Methods

<a id="addpoints"></a>

###  addPoints

▸ **addPoints**(points: *`number`*): `void`

*Defined in [ts/displays/score-handler.ts:77](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L77)*

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

*Defined in [ts/displays/score-handler.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L86)*

Flips only score relevent digits to visible.

**Returns:** `void`

___
<a id="createtext"></a>

### `<Private>` createText

▸ **createText**(): `void`

*Defined in [ts/displays/score-handler.ts:102](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L102)*

Creates the text in one place to obey the DRY rule.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(hide?: *`boolean`*): `void`

*Defined in [ts/displays/score-handler.ts:155](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L155)*

At the end of each loop iteration, score updates with time increase.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` hide | `boolean` |  hide the score if new level, so old color isn't showing. |

**Returns:** `void`

___
<a id="getscore"></a>

###  getScore

▸ **getScore**(): `number`

*Defined in [ts/displays/score-handler.ts:174](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L174)*

Passes current score value back to caller.

**Returns:** `number`
the current score at time of function call.

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(color: *`Color`*): `void`

*Defined in [ts/displays/score-handler.ts:181](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L181)*

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

*Defined in [ts/displays/score-handler.ts:189](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/displays/score-handler.ts#L189)*

Removes all previously created score text and digits to change color.

**Returns:** `void`

___

