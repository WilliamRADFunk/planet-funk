[planet-funk](../README.md) > ["ts/score"](../modules/_ts_score_.md) > [Score](../classes/_ts_score_.score.md)

# Class: Score

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

* [endCycle](_ts_score_.score.md#endcycle)

---

## Properties

<a id="currentscore"></a>

### `<Private>` currentScore

**● currentScore**: *`number`* = 0

*Defined in [ts/score.ts:13](https://github.com/WilliamRADFunk/planet-funk/blob/ca1cee5/src/ts/score.ts#L13)*

Keeps track of player's current score

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/score.ts:17](https://github.com/WilliamRADFunk/planet-funk/blob/ca1cee5/src/ts/score.ts#L17)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="score"></a>

### `<Private>` score

**● score**: *`Mesh`*

*Defined in [ts/score.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/ca1cee5/src/ts/score.ts#L29)*

Controls the overall rendering of the score

___
<a id="scoregeometry"></a>

### `<Private>` scoreGeometry

**● scoreGeometry**: *`TextGeometry`*

*Defined in [ts/score.ts:21](https://github.com/WilliamRADFunk/planet-funk/blob/ca1cee5/src/ts/score.ts#L21)*

Controls size and shape of the score

___
<a id="scorematerial"></a>

### `<Private>` scoreMaterial

**● scoreMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/score.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/ca1cee5/src/ts/score.ts#L25)*

Controls the color of the score material

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/score.ts:61](https://github.com/WilliamRADFunk/planet-funk/blob/ca1cee5/src/ts/score.ts#L61)*

At the end of each loop iteration, score updates with time increase.

**Returns:** `void`

___

