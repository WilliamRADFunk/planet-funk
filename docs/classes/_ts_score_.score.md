[planet-funk](../README.md) > ["ts/score"](../modules/_ts_score_.md) > [Score](../classes/_ts_score_.score.md)

# Class: Score

*__class__*: Keeps track of all things score related.

## Hierarchy

**Score**

## Index

### Properties

* [currentScore](_ts_score_.score.md#currentscore)
* [scene](_ts_score_.score.md#scene)
* [score](_ts_score_.score.md#score)
* [scoreGeometry](_ts_score_.score.md#scoregeometry)
* [scoreMaterial](_ts_score_.score.md#scorematerial)

### Methods

* [addPoints](_ts_score_.score.md#addpoints)
* [endCycle](_ts_score_.score.md#endcycle)

---

## Properties

<a id="currentscore"></a>

### `<Private>` currentScore

**● currentScore**: *`number`* = 0

*Defined in [ts/score.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/score.ts#L24)*

Keeps track of player's current score

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/score.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/score.ts#L28)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="score"></a>

### `<Private>` score

**● score**: *`Mesh`*

*Defined in [ts/score.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/score.ts#L40)*

Controls the overall rendering of the score

___
<a id="scoregeometry"></a>

### `<Private>` scoreGeometry

**● scoreGeometry**: *`TextGeometry`*

*Defined in [ts/score.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/score.ts#L32)*

Controls size and shape of the score

___
<a id="scorematerial"></a>

### `<Private>` scoreMaterial

**● scoreMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/score.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/score.ts#L36)*

Controls the color of the score material

___

## Methods

<a id="addpoints"></a>

###  addPoints

▸ **addPoints**(points: *`number`*): `void`

*Defined in [ts/score.ts:73](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/score.ts#L73)*

Adds points when blowing up asteroids, enemy missiles, and ufos.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| points | `number` |  the amount of points to add to current score. |

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/score.ts:79](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/score.ts#L79)*

At the end of each loop iteration, score updates with time increase.

**Returns:** `void`

___

