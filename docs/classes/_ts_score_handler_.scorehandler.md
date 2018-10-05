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
* [scoreGeometry](_ts_score_handler_.scorehandler.md#scoregeometry)
* [scoreMaterial](_ts_score_handler_.scorehandler.md#scorematerial)

### Methods

* [addPoints](_ts_score_handler_.scorehandler.md#addpoints)
* [endCycle](_ts_score_handler_.scorehandler.md#endcycle)

---

## Properties

<a id="currentcolor"></a>

### `<Private>` currentColor

**● currentColor**: *`Color`*

*Defined in [ts/score-handler.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/c76261c/src/ts/score-handler.ts#L31)*

Keeps track of level's current color

___
<a id="currentscore"></a>

### `<Private>` currentScore

**● currentScore**: *`number`* = 0

*Defined in [ts/score-handler.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/c76261c/src/ts/score-handler.ts#L35)*

Keeps track of player's current score

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/score-handler.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/c76261c/src/ts/score-handler.ts#L39)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="score"></a>

### `<Private>` score

**● score**: *`Mesh`*

*Defined in [ts/score-handler.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/c76261c/src/ts/score-handler.ts#L51)*

Controls the overall rendering of the score

___
<a id="scoregeometry"></a>

### `<Private>` scoreGeometry

**● scoreGeometry**: *`TextGeometry`*

*Defined in [ts/score-handler.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/c76261c/src/ts/score-handler.ts#L43)*

Controls size and shape of the score

___
<a id="scorematerial"></a>

### `<Private>` scoreMaterial

**● scoreMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/score-handler.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/c76261c/src/ts/score-handler.ts#L47)*

Controls the color of the score material

___

## Methods

<a id="addpoints"></a>

###  addPoints

▸ **addPoints**(points: *`number`*): `void`

*Defined in [ts/score-handler.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/c76261c/src/ts/score-handler.ts#L86)*

Adds points when blowing up asteroids, enemy missiles, and ufos.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| points | `number` |  the amount of points to add to current score. |

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(color: *`Color`*): `void`

*Defined in [ts/score-handler.ts:93](https://github.com/WilliamRADFunk/planet-funk/blob/c76261c/src/ts/score-handler.ts#L93)*

At the end of each loop iteration, score updates with time increase.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| color | `Color` |  level color, grabbed from the LevelHandler |

**Returns:** `void`

___

