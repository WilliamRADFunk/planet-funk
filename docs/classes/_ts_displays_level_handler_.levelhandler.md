[planet-funk](../README.md) > ["ts/displays/level-handler"](../modules/_ts_displays_level_handler_.md) > [LevelHandler](../classes/_ts_displays_level_handler_.levelhandler.md)

# Class: LevelHandler

*__class__*: Keeps track of all things level related.

## Hierarchy

**LevelHandler**

## Index

### Properties

* [banner](_ts_displays_level_handler_.levelhandler.md#banner)
* [bannerGeometry](_ts_displays_level_handler_.levelhandler.md#bannergeometry)
* [bannerMaterial](_ts_displays_level_handler_.levelhandler.md#bannermaterial)
* [currentLevel](_ts_displays_level_handler_.levelhandler.md#currentlevel)
* [currentOpacity](_ts_displays_level_handler_.levelhandler.md#currentopacity)
* [diffText](_ts_displays_level_handler_.levelhandler.md#difftext)
* [diffTextGeometry](_ts_displays_level_handler_.levelhandler.md#difftextgeometry)
* [difficultyLevel](_ts_displays_level_handler_.levelhandler.md#difficultylevel)
* [fontLowerTextParams](_ts_displays_level_handler_.levelhandler.md#fontlowertextparams)
* [isBannerExpanding](_ts_displays_level_handler_.levelhandler.md#isbannerexpanding)
* [isLevelAnimating](_ts_displays_level_handler_.levelhandler.md#islevelanimating)
* [level](_ts_displays_level_handler_.levelhandler.md#level)
* [levelColor](_ts_displays_level_handler_.levelhandler.md#levelcolor)
* [levelFont](_ts_displays_level_handler_.levelhandler.md#levelfont)
* [levelGeometry](_ts_displays_level_handler_.levelhandler.md#levelgeometry)
* [levelMaterial](_ts_displays_level_handler_.levelhandler.md#levelmaterial)
* [scene](_ts_displays_level_handler_.levelhandler.md#scene)
* [useLevelBanner](_ts_displays_level_handler_.levelhandler.md#uselevelbanner)

### Methods

* [checkColorBrighness](_ts_displays_level_handler_.levelhandler.md#checkcolorbrighness)
* [createBanner](_ts_displays_level_handler_.levelhandler.md#createbanner)
* [createText](_ts_displays_level_handler_.levelhandler.md#createtext)
* [endCycle](_ts_displays_level_handler_.levelhandler.md#endcycle)
* [endGame](_ts_displays_level_handler_.levelhandler.md#endgame)
* [getColor](_ts_displays_level_handler_.levelhandler.md#getcolor)
* [getLevel](_ts_displays_level_handler_.levelhandler.md#getlevel)
* [isAnimating](_ts_displays_level_handler_.levelhandler.md#isanimating)
* [nextLevel](_ts_displays_level_handler_.levelhandler.md#nextlevel)
* [runAnimationCycle](_ts_displays_level_handler_.levelhandler.md#runanimationcycle)

---

## Properties

<a id="banner"></a>

### `<Private>` banner

**● banner**: *`Mesh`*

*Defined in [ts/displays/level-handler.ts:20](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L20)*

Controls the overall rendering of the banner display

___
<a id="bannergeometry"></a>

### `<Private>` bannerGeometry

**● bannerGeometry**: *`TextGeometry`*

*Defined in [ts/displays/level-handler.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L24)*

Controls size and shape of the banner display

___
<a id="bannermaterial"></a>

### `<Private>` bannerMaterial

**● bannerMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/level-handler.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L28)*

Controls the color of the banner display material

___
<a id="currentlevel"></a>

### `<Private>` currentLevel

**● currentLevel**: *`number`* = 1

*Defined in [ts/displays/level-handler.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L32)*

Keeps track of player's current level

___
<a id="currentopacity"></a>

### `<Private>` currentOpacity

**● currentOpacity**: *`number`* = 0.01

*Defined in [ts/displays/level-handler.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L36)*

Current banner opacity, which creates the illusion of 'animation'.

___
<a id="difftext"></a>

### `<Private>` diffText

**● diffText**: *`Mesh`*

*Defined in [ts/displays/level-handler.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L44)*

Controls the overall rendering of the difficulty display

___
<a id="difftextgeometry"></a>

### `<Private>` diffTextGeometry

**● diffTextGeometry**: *`TextGeometry`*

*Defined in [ts/displays/level-handler.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L48)*

Controls size and shape of the difficulty display

___
<a id="difficultylevel"></a>

### `<Private>` difficultyLevel

**● difficultyLevel**: *`number`*

*Defined in [ts/displays/level-handler.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L40)*

Player chosen level of difficulty.

___
<a id="fontlowertextparams"></a>

### `<Private>` fontLowerTextParams

**● fontLowerTextParams**: *`TextGeometryParameters`*

*Defined in [ts/displays/level-handler.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L52)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="isbannerexpanding"></a>

### `<Private>` isBannerExpanding

**● isBannerExpanding**: *`boolean`* = true

*Defined in [ts/displays/level-handler.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L56)*

Tracks which phase of the animation currently in.

___
<a id="islevelanimating"></a>

### `<Private>` isLevelAnimating

**● isLevelAnimating**: *`boolean`* = true

*Defined in [ts/displays/level-handler.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L60)*

Prevents other things from moving if level display is animating a new level.

___
<a id="level"></a>

### `<Private>` level

**● level**: *`Mesh`*

*Defined in [ts/displays/level-handler.ts:64](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L64)*

Controls the overall rendering of the level display

___
<a id="levelcolor"></a>

### `<Private>` levelColor

**● levelColor**: *`Color`*

*Defined in [ts/displays/level-handler.ts:68](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L68)*

The loaded font, used for the level display.

___
<a id="levelfont"></a>

### `<Private>` levelFont

**● levelFont**: *`Font`*

*Defined in [ts/displays/level-handler.ts:72](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L72)*

The loaded font, used for the level text and banners.

___
<a id="levelgeometry"></a>

### `<Private>` levelGeometry

**● levelGeometry**: *`TextGeometry`*

*Defined in [ts/displays/level-handler.ts:76](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L76)*

Controls size and shape of the level display

___
<a id="levelmaterial"></a>

### `<Private>` levelMaterial

**● levelMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/level-handler.ts:80](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L80)*

Controls the color of the level display material

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/displays/level-handler.ts:84](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L84)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="uselevelbanner"></a>

### `<Private>` useLevelBanner

**● useLevelBanner**: *`boolean`* = true

*Defined in [ts/displays/level-handler.ts:88](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L88)*

Flag to distinguish between level banner and game over banner.

___

## Methods

<a id="checkcolorbrighness"></a>

### `<Private>` checkColorBrighness

▸ **checkColorBrighness**(colorHex: *`string`*): `boolean`

*Defined in [ts/displays/level-handler.ts:126](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L126)*

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

*Defined in [ts/displays/level-handler.ts:156](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L156)*

Creates the text in one place to obey the DRY rule.

**Returns:** `void`

___
<a id="createtext"></a>

### `<Private>` createText

▸ **createText**(): `void`

*Defined in [ts/displays/level-handler.ts:197](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L197)*

Creates the text in one place to obey the DRY rule.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/displays/level-handler.ts:230](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L230)*

At the end of each loop iteration, level updates with time increase.

**Returns:** `void`

___
<a id="endgame"></a>

###  endGame

▸ **endGame**(): `void`

*Defined in [ts/displays/level-handler.ts:238](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L238)*

Lets LevelHandler know the game is over, and to use the Game Over banner.

**Returns:** `void`

___
<a id="getcolor"></a>

###  getColor

▸ **getColor**(): `Color`

*Defined in [ts/displays/level-handler.ts:246](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L246)*

Returns the current level's color'.

**Returns:** `Color`
current color to use for the level dependent objects.

___
<a id="getlevel"></a>

###  getLevel

▸ **getLevel**(): `number`

*Defined in [ts/displays/level-handler.ts:253](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L253)*

Returns the current level player is on.

**Returns:** `number`
the current level player is on.

___
<a id="isanimating"></a>

###  isAnimating

▸ **isAnimating**(): `boolean`

*Defined in [ts/displays/level-handler.ts:260](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L260)*

Returns animating state of level.

**Returns:** `boolean`
TRUE if level banner is still animating | FALSE if not.

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(): `void`

*Defined in [ts/displays/level-handler.ts:266](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L266)*

Increases currentLevel by one, and runs the new level display animation.

**Returns:** `void`

___
<a id="runanimationcycle"></a>

###  runAnimationCycle

▸ **runAnimationCycle**(): `boolean`

*Defined in [ts/displays/level-handler.ts:283](https://github.com/WilliamRADFunk/planet-funk/blob/7de9660/src/ts/displays/level-handler.ts#L283)*

Fades level banner in and out before resuming play.

**Returns:** `boolean`

___

