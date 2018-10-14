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
* [levelFont](_ts_level_handler_.levelhandler.md#levelfont)
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

*Defined in [ts/level-handler.ts:54](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L54)*

Controls the overall rendering of the banner display

___
<a id="bannergeometry"></a>

### `<Private>` bannerGeometry

**● bannerGeometry**: *`TextGeometry`*

*Defined in [ts/level-handler.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L46)*

Controls size and shape of the banner display

___
<a id="bannermaterial"></a>

### `<Private>` bannerMaterial

**● bannerMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/level-handler.ts:50](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L50)*

Controls the color of the banner display material

___
<a id="currentlevel"></a>

### `<Private>` currentLevel

**● currentLevel**: *`number`* = 1

*Defined in [ts/level-handler.ts:22](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L22)*

Keeps track of player's current level

___
<a id="currentopacity"></a>

### `<Private>` currentOpacity

**● currentOpacity**: *`number`* = 0.01

*Defined in [ts/level-handler.ts:26](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L26)*

Current banner opacity, which creates the illusion of 'animation'.

___
<a id="isbannerexpanding"></a>

### `<Private>` isBannerExpanding

**● isBannerExpanding**: *`boolean`* = true

*Defined in [ts/level-handler.ts:18](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L18)*

Tracks which phase of the animation currently in.

___
<a id="islevelanimating"></a>

### `<Private>` isLevelAnimating

**● isLevelAnimating**: *`boolean`* = true

*Defined in [ts/level-handler.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L30)*

Prevents other things from moving if level display is animating a new level.

___
<a id="level"></a>

### `<Private>` level

**● level**: *`Mesh`*

*Defined in [ts/level-handler.ts:66](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L66)*

Controls the overall rendering of the level display

___
<a id="levelcolor"></a>

### `<Private>` levelColor

**● levelColor**: *`Color`*

*Defined in [ts/level-handler.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L34)*

The loaded font, used for the level display.

___
<a id="levelfont"></a>

### `<Private>` levelFont

**● levelFont**: *`Font`*

*Defined in [ts/level-handler.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L38)*

The loaded font, used for the level text and banners.

___
<a id="levelgeometry"></a>

### `<Private>` levelGeometry

**● levelGeometry**: *`TextGeometry`*

*Defined in [ts/level-handler.ts:58](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L58)*

Controls size and shape of the level display

___
<a id="levelmaterial"></a>

### `<Private>` levelMaterial

**● levelMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/level-handler.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L62)*

Controls the color of the level display material

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/level-handler.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L42)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="uselevelbanner"></a>

### `<Private>` useLevelBanner

**● useLevelBanner**: *`boolean`* = true

*Defined in [ts/level-handler.ts:70](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L70)*

Flag to distinguish between level banner and game over banner.

___

## Methods

<a id="checkcolorbrighness"></a>

### `<Private>` checkColorBrighness

▸ **checkColorBrighness**(colorHex: *`string`*): `boolean`

*Defined in [ts/level-handler.ts:95](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L95)*

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

*Defined in [ts/level-handler.ts:125](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L125)*

Creates the text in one place to obey the DRY rule.

**Returns:** `void`

___
<a id="createtext"></a>

### `<Private>` createText

▸ **createText**(): `void`

*Defined in [ts/level-handler.ts:166](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L166)*

Creates the text in one place to obey the DRY rule.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/level-handler.ts:192](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L192)*

At the end of each loop iteration, level updates with time increase.

**Returns:** `void`

___
<a id="endgame"></a>

###  endGame

▸ **endGame**(): `void`

*Defined in [ts/level-handler.ts:200](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L200)*

Lets LevelHandler know the game is over, and to use the Game Over banner.

**Returns:** `void`

___
<a id="getcolor"></a>

###  getColor

▸ **getColor**(): `Color`

*Defined in [ts/level-handler.ts:208](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L208)*

Returns the current level's color'.

**Returns:** `Color`
current color to use for the level dependent objects.

___
<a id="getlevel"></a>

###  getLevel

▸ **getLevel**(): `number`

*Defined in [ts/level-handler.ts:215](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L215)*

Returns the current level player is on.

**Returns:** `number`
the current level player is on.

___
<a id="isanimating"></a>

###  isAnimating

▸ **isAnimating**(): `boolean`

*Defined in [ts/level-handler.ts:222](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L222)*

Returns animating state of level.

**Returns:** `boolean`
TRUE if level banner is still animating | FALSE if not.

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(): `void`

*Defined in [ts/level-handler.ts:228](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L228)*

Increases currentLevel by one, and runs the new level display animation.

**Returns:** `void`

___
<a id="runanimationcycle"></a>

###  runAnimationCycle

▸ **runAnimationCycle**(): `boolean`

*Defined in [ts/level-handler.ts:244](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/level-handler.ts#L244)*

Fades level banner in and out before resuming play.

**Returns:** `boolean`

___

