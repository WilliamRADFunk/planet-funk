[planet-funk](../README.md) > ["ts/level-handler"](../modules/_ts_level_handler_.md) > [LevelHandler](../classes/_ts_level_handler_.levelhandler.md)

# Class: LevelHandler

*__class__*: Keeps track of all things level related.

## Hierarchy

**LevelHandler**

## Index

### Properties

* [banner](_ts_level_handler_.levelhandler.md#banner)
* [bannerGeometry](_ts_level_handler_.levelhandler.md#bannergeometry)
* [bannerMaterial](_ts_level_handler_.levelhandler.md#bannermaterial)
* [currentLevel](_ts_level_handler_.levelhandler.md#currentlevel)
* [currentOpacity](_ts_level_handler_.levelhandler.md#currentopacity)
* [isBannerExpanding](_ts_level_handler_.levelhandler.md#isbannerexpanding)
* [isLevelAnimating](_ts_level_handler_.levelhandler.md#islevelanimating)
* [level](_ts_level_handler_.levelhandler.md#level)
* [levelColor](_ts_level_handler_.levelhandler.md#levelcolor)
* [levelGeometry](_ts_level_handler_.levelhandler.md#levelgeometry)
* [levelMaterial](_ts_level_handler_.levelhandler.md#levelmaterial)
* [scene](_ts_level_handler_.levelhandler.md#scene)
* [useLevelBanner](_ts_level_handler_.levelhandler.md#uselevelbanner)

### Methods

* [checkColorBrighness](_ts_level_handler_.levelhandler.md#checkcolorbrighness)
* [createBanner](_ts_level_handler_.levelhandler.md#createbanner)
* [createText](_ts_level_handler_.levelhandler.md#createtext)
* [endCycle](_ts_level_handler_.levelhandler.md#endcycle)
* [endGame](_ts_level_handler_.levelhandler.md#endgame)
* [getColor](_ts_level_handler_.levelhandler.md#getcolor)
* [getLevel](_ts_level_handler_.levelhandler.md#getlevel)
* [isAnimating](_ts_level_handler_.levelhandler.md#isanimating)
* [nextLevel](_ts_level_handler_.levelhandler.md#nextlevel)
* [runAnimationCycle](_ts_level_handler_.levelhandler.md#runanimationcycle)

---

## Properties

<a id="banner"></a>

### `<Private>` banner

**● banner**: *`Mesh`*

*Defined in [ts/level-handler.ts:65](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L65)*

Controls the overall rendering of the banner display

___
<a id="bannergeometry"></a>

### `<Private>` bannerGeometry

**● bannerGeometry**: *`TextGeometry`*

*Defined in [ts/level-handler.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L57)*

Controls size and shape of the banner display

___
<a id="bannermaterial"></a>

### `<Private>` bannerMaterial

**● bannerMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/level-handler.ts:61](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L61)*

Controls the color of the banner display material

___
<a id="currentlevel"></a>

### `<Private>` currentLevel

**● currentLevel**: *`number`* = 1

*Defined in [ts/level-handler.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L37)*

Keeps track of player's current level

___
<a id="currentopacity"></a>

### `<Private>` currentOpacity

**● currentOpacity**: *`number`* = 0.01

*Defined in [ts/level-handler.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L41)*

Current banner opacity, which creates the illusion of 'animation'.

___
<a id="isbannerexpanding"></a>

### `<Private>` isBannerExpanding

**● isBannerExpanding**: *`boolean`* = true

*Defined in [ts/level-handler.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L33)*

Tracks which phase of the animation currently in.

___
<a id="islevelanimating"></a>

### `<Private>` isLevelAnimating

**● isLevelAnimating**: *`boolean`* = true

*Defined in [ts/level-handler.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L45)*

Prevents other things from moving if level display is animating a new level.

___
<a id="level"></a>

### `<Private>` level

**● level**: *`Mesh`*

*Defined in [ts/level-handler.ts:77](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L77)*

Controls the overall rendering of the level display

___
<a id="levelcolor"></a>

### `<Private>` levelColor

**● levelColor**: *`Color`*

*Defined in [ts/level-handler.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L49)*

The loaded font, used for the level display.

___
<a id="levelgeometry"></a>

### `<Private>` levelGeometry

**● levelGeometry**: *`TextGeometry`*

*Defined in [ts/level-handler.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L69)*

Controls size and shape of the level display

___
<a id="levelmaterial"></a>

### `<Private>` levelMaterial

**● levelMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/level-handler.ts:73](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L73)*

Controls the color of the level display material

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/level-handler.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L53)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="uselevelbanner"></a>

### `<Private>` useLevelBanner

**● useLevelBanner**: *`boolean`* = true

*Defined in [ts/level-handler.ts:81](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L81)*

Flag to distinguish between level banner and game over banner.

___

## Methods

<a id="checkcolorbrighness"></a>

### `<Private>` checkColorBrighness

▸ **checkColorBrighness**(colorHex: *`string`*): `boolean`

*Defined in [ts/level-handler.ts:106](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L106)*

Makes sure hex is a valid color string.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| colorHex | `string` |  hex value of the color that needs verification. |

**Returns:** `boolean`
TRUE is a color of valid brightness | FALSE is too dark.

___
<a id="createbanner"></a>

### `<Private>` createBanner

▸ **createBanner**(): `void`

*Defined in [ts/level-handler.ts:136](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L136)*

Creates the text in one place to obey the DRY rule.

**Returns:** `void`

___
<a id="createtext"></a>

### `<Private>` createText

▸ **createText**(): `void`

*Defined in [ts/level-handler.ts:177](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L177)*

Creates the text in one place to obey the DRY rule.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/level-handler.ts:203](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L203)*

At the end of each loop iteration, level updates with time increase.

**Returns:** `void`

___
<a id="endgame"></a>

###  endGame

▸ **endGame**(): `void`

*Defined in [ts/level-handler.ts:211](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L211)*

Lets LevelHandler know the game is over, and to use the Game Over banner.

**Returns:** `void`

___
<a id="getcolor"></a>

###  getColor

▸ **getColor**(): `Color`

*Defined in [ts/level-handler.ts:219](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L219)*

Returns the current level's color'.

**Returns:** `Color`
current color to use for the level dependent objects.

___
<a id="getlevel"></a>

###  getLevel

▸ **getLevel**(): `number`

*Defined in [ts/level-handler.ts:226](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L226)*

Returns the current level player is on.

**Returns:** `number`
the current level player is on.

___
<a id="isanimating"></a>

###  isAnimating

▸ **isAnimating**(): `boolean`

*Defined in [ts/level-handler.ts:233](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L233)*

Returns animating state of level.

**Returns:** `boolean`
TRUE if level banner is still animating | FALSE if not.

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(): `void`

*Defined in [ts/level-handler.ts:239](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L239)*

Increases currentLevel by one, and runs the new level display animation.

**Returns:** `void`

___
<a id="runanimationcycle"></a>

###  runAnimationCycle

▸ **runAnimationCycle**(): `boolean`

*Defined in [ts/level-handler.ts:255](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/level-handler.ts#L255)*

Fades level banner in and out before resuming play.

**Returns:** `boolean`

___

