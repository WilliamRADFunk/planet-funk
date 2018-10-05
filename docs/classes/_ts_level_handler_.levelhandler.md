[planet-funk](../README.md) > ["ts/level-handler"](../modules/_ts_level_handler_.md) > [LevelHandler](../classes/_ts_level_handler_.levelhandler.md)

# Class: LevelHandler

*__class__*: Keeps track of all things level related.

## Hierarchy

**LevelHandler**

## Index

### Properties

* [currentLevel](_ts_level_handler_.levelhandler.md#currentlevel)
* [isLevelAnimating](_ts_level_handler_.levelhandler.md#islevelanimating)
* [levelColor](_ts_level_handler_.levelhandler.md#levelcolor)
* [scene](_ts_level_handler_.levelhandler.md#scene)
* [score](_ts_level_handler_.levelhandler.md#score)
* [scoreGeometry](_ts_level_handler_.levelhandler.md#scoregeometry)
* [scoreMaterial](_ts_level_handler_.levelhandler.md#scorematerial)

### Methods

* [checkColorBrighness](_ts_level_handler_.levelhandler.md#checkcolorbrighness)
* [createText](_ts_level_handler_.levelhandler.md#createtext)
* [endCycle](_ts_level_handler_.levelhandler.md#endcycle)
* [getColor](_ts_level_handler_.levelhandler.md#getcolor)
* [getLevel](_ts_level_handler_.levelhandler.md#getlevel)
* [nextLevel](_ts_level_handler_.levelhandler.md#nextlevel)

---

## Properties

<a id="currentlevel"></a>

### `<Private>` currentLevel

**● currentLevel**: *`number`* = 1

*Defined in [ts/level-handler.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L33)*

Keeps track of player's current level

___
<a id="islevelanimating"></a>

### `<Private>` isLevelAnimating

**● isLevelAnimating**: *`boolean`* = true

*Defined in [ts/level-handler.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L37)*

Prevents other things from moving if level display is animating a new level.

___
<a id="levelcolor"></a>

### `<Private>` levelColor

**● levelColor**: *`Color`*

*Defined in [ts/level-handler.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L41)*

The loaded font, used for the level display.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/level-handler.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L45)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="score"></a>

### `<Private>` score

**● score**: *`Mesh`*

*Defined in [ts/level-handler.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L57)*

Controls the overall rendering of the level display

___
<a id="scoregeometry"></a>

### `<Private>` scoreGeometry

**● scoreGeometry**: *`TextGeometry`*

*Defined in [ts/level-handler.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L49)*

Controls size and shape of the level display

___
<a id="scorematerial"></a>

### `<Private>` scoreMaterial

**● scoreMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/level-handler.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L53)*

Controls the color of the level display material

___

## Methods

<a id="checkcolorbrighness"></a>

###  checkColorBrighness

▸ **checkColorBrighness**(colorHex: *`string`*): `boolean`

*Defined in [ts/level-handler.ts:83](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L83)*

Makes sure hex is a valid color string.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| colorHex | `string` |  hex value of the color that needs verification. |

**Returns:** `boolean`
TRUE is a color of valid brightness | FALSE is too dark.

___
<a id="createtext"></a>

###  createText

▸ **createText**(): `void`

*Defined in [ts/level-handler.ts:113](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L113)*

Creates the text in one place to obey the DRY rule.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/level-handler.ts:139](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L139)*

At the end of each loop iteration, score updates with time increase.

**Returns:** `void`

___
<a id="getcolor"></a>

###  getColor

▸ **getColor**(): `Color`

*Defined in [ts/level-handler.ts:147](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L147)*

Returns the current level's color'.

**Returns:** `Color`

___
<a id="getlevel"></a>

###  getLevel

▸ **getLevel**(): `number`

*Defined in [ts/level-handler.ts:153](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L153)*

Returns the current level player is on.

**Returns:** `number`

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(): `void`

*Defined in [ts/level-handler.ts:159](https://github.com/WilliamRADFunk/planet-funk/blob/2946feb/src/ts/level-handler.ts#L159)*

Increases currentLevel by one, and runs the new level display animation.

**Returns:** `void`

___

