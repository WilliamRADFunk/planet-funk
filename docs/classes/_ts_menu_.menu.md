[planet-funk](../README.md) > ["ts/menu"](../modules/_ts_menu_.md) > [Menu](../classes/_ts_menu_.menu.md)

# Class: Menu

*__class__*: Keeps track of all things menu related.

## Hierarchy

**Menu**

## Index

### Properties

* [clickMaterial](_ts_menu_.menu.md#clickmaterial)
* [copyright](_ts_menu_.menu.md#copyright)
* [copyrightGeometry](_ts_menu_.menu.md#copyrightgeometry)
* [difficultyLevel](_ts_menu_.menu.md#difficultylevel)
* [easy](_ts_menu_.menu.md#easy)
* [easyGeometry](_ts_menu_.menu.md#easygeometry)
* [fontDifficultyBtnParams](_ts_menu_.menu.md#fontdifficultybtnparams)
* [hard](_ts_menu_.menu.md#hard)
* [hardGeometry](_ts_menu_.menu.md#hardgeometry)
* [hardcore](_ts_menu_.menu.md#hardcore)
* [hardcoreGeometry](_ts_menu_.menu.md#hardcoregeometry)
* [help](_ts_menu_.menu.md#help)
* [helpGeometry](_ts_menu_.menu.md#helpgeometry)
* [load](_ts_menu_.menu.md#load)
* [loadGeometry](_ts_menu_.menu.md#loadgeometry)
* [loadMaterial](_ts_menu_.menu.md#loadmaterial)
* [mainBanner](_ts_menu_.menu.md#mainbanner)
* [mainBannerGeometry](_ts_menu_.menu.md#mainbannergeometry)
* [menuFont](_ts_menu_.menu.md#menufont)
* [menuMaterial](_ts_menu_.menu.md#menumaterial)
* [menuSelectedMaterial](_ts_menu_.menu.md#menuselectedmaterial)
* [normal](_ts_menu_.menu.md#normal)
* [normalGeometry](_ts_menu_.menu.md#normalgeometry)
* [scene](_ts_menu_.menu.md#scene)
* [shimmer](_ts_menu_.menu.md#shimmer)
* [start](_ts_menu_.menu.md#start)
* [startGeometry](_ts_menu_.menu.md#startgeometry)

### Methods

* [changeDifficulty](_ts_menu_.menu.md#changedifficulty)
* [createDifficultyButtons](_ts_menu_.menu.md#createdifficultybuttons)
* [endCycle](_ts_menu_.menu.md#endcycle)
* [pressedHelp](_ts_menu_.menu.md#pressedhelp)
* [pressedLoad](_ts_menu_.menu.md#pressedload)
* [pressedStart](_ts_menu_.menu.md#pressedstart)
* [returnToMainMenu](_ts_menu_.menu.md#returntomainmenu)

---

## Properties

<a id="clickmaterial"></a>

### `<Private>` clickMaterial

**● clickMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/menu.ts:22](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L22)*

Controls the background click surface of buttons.

___
<a id="copyright"></a>

### `<Private>` copyright

**● copyright**: *`Mesh`*

*Defined in [ts/menu.ts:26](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L26)*

Controls the overall rendering of the copyright display

___
<a id="copyrightgeometry"></a>

### `<Private>` copyrightGeometry

**● copyrightGeometry**: *`TextGeometry`*

*Defined in [ts/menu.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L30)*

Controls size and shape of the copyright text

___
<a id="difficultylevel"></a>

### `<Private>` difficultyLevel

**● difficultyLevel**: *`number`* = 3

*Defined in [ts/menu.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L34)*

Easy, Medium, Hard, Hardcore

___
<a id="easy"></a>

### `<Private>` easy

**● easy**: *`Mesh`*

*Defined in [ts/menu.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L38)*

Controls the overall rendering of the easy button display

___
<a id="easygeometry"></a>

### `<Private>` easyGeometry

**● easyGeometry**: *`TextGeometry`*

*Defined in [ts/menu.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L42)*

Controls size and shape of the easy button text

___
<a id="fontdifficultybtnparams"></a>

### `<Private>` fontDifficultyBtnParams

**● fontDifficultyBtnParams**: *`TextGeometryParameters`*

*Defined in [ts/menu.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L46)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="hard"></a>

### `<Private>` hard

**● hard**: *`Mesh`*

*Defined in [ts/menu.ts:50](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L50)*

Controls the overall rendering of the hard button display

___
<a id="hardgeometry"></a>

### `<Private>` hardGeometry

**● hardGeometry**: *`TextGeometry`*

*Defined in [ts/menu.ts:54](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L54)*

Controls size and shape of the hard button text

___
<a id="hardcore"></a>

### `<Private>` hardcore

**● hardcore**: *`Mesh`*

*Defined in [ts/menu.ts:58](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L58)*

Controls the overall rendering of the hardcore button display

___
<a id="hardcoregeometry"></a>

### `<Private>` hardcoreGeometry

**● hardcoreGeometry**: *`TextGeometry`*

*Defined in [ts/menu.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L62)*

Controls size and shape of the hardcore button text

___
<a id="help"></a>

### `<Private>` help

**● help**: *`Mesh`*

*Defined in [ts/menu.ts:66](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L66)*

Controls the overall rendering of the help button display

___
<a id="helpgeometry"></a>

### `<Private>` helpGeometry

**● helpGeometry**: *`TextGeometry`*

*Defined in [ts/menu.ts:70](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L70)*

Controls size and shape of the help button text

___
<a id="load"></a>

### `<Private>` load

**● load**: *`Mesh`*

*Defined in [ts/menu.ts:74](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L74)*

Controls the overall rendering of the load button display

___
<a id="loadgeometry"></a>

### `<Private>` loadGeometry

**● loadGeometry**: *`TextGeometry`*

*Defined in [ts/menu.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L78)*

Controls size and shape of the load button text

___
<a id="loadmaterial"></a>

### `<Private>` loadMaterial

**● loadMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/menu.ts:82](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L82)*

Controls the color of the load button text material

___
<a id="mainbanner"></a>

### `<Private>` mainBanner

**● mainBanner**: *`Mesh`*

*Defined in [ts/menu.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L86)*

Controls the overall rendering of the main banner display

___
<a id="mainbannergeometry"></a>

### `<Private>` mainBannerGeometry

**● mainBannerGeometry**: *`TextGeometry`*

*Defined in [ts/menu.ts:90](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L90)*

Controls size and shape of the main banner text

___
<a id="menufont"></a>

### `<Private>` menuFont

**● menuFont**: *`Font`*

*Defined in [ts/menu.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L94)*

Loaded font for menu text.

___
<a id="menumaterial"></a>

### `<Private>` menuMaterial

**● menuMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/menu.ts:98](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L98)*

Controls the color of the untouched button display material

___
<a id="menuselectedmaterial"></a>

### `<Private>` menuSelectedMaterial

**● menuSelectedMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/menu.ts:102](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L102)*

Controls the color of the selected button display material

___
<a id="normal"></a>

### `<Private>` normal

**● normal**: *`Mesh`*

*Defined in [ts/menu.ts:106](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L106)*

Controls the overall rendering of the normal button display

___
<a id="normalgeometry"></a>

### `<Private>` normalGeometry

**● normalGeometry**: *`TextGeometry`*

*Defined in [ts/menu.ts:110](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L110)*

Controls size and shape of the normal button text

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/menu.ts:114](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L114)*

Reference to the scene, used to remove and reinstall text geometries.

___
<a id="shimmer"></a>

### `<Private>` shimmer

**● shimmer**: *`PointLight`*

*Defined in [ts/menu.ts:118](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L118)*

Controls the light that give the text its shine.

___
<a id="start"></a>

### `<Private>` start

**● start**: *`Mesh`*

*Defined in [ts/menu.ts:122](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L122)*

Controls the overall rendering of the start button display

___
<a id="startgeometry"></a>

### `<Private>` startGeometry

**● startGeometry**: *`TextGeometry`*

*Defined in [ts/menu.ts:126](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L126)*

Controls size and shape of the start button text

___

## Methods

<a id="changedifficulty"></a>

###  changeDifficulty

▸ **changeDifficulty**(diff: *`number`*): `void`

*Defined in [ts/menu.ts:271](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L271)*

Changes difficulty level, and instigates the altering of the button texts associated with that choice.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| diff | `number` |  the selected diffulty choice (0 --> easy, 1 --> normal, 2 --> hard, 3 --> hardcore) |

**Returns:** `void`

___
<a id="createdifficultybuttons"></a>

### `<Private>` createDifficultyButtons

▸ **createDifficultyButtons**(buttonIndex: *`number`*, material: *`MeshLambertMaterial`*, removeFirst: *`boolean`*): `void`

*Defined in [ts/menu.ts:288](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L288)*

Called to (re)create difficulty menu button text

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buttonIndex | `number` |  the selected diffulty choice (0 --> easy, 1 --> normal, 2 --> hard, 3 --> hardcore) |
| material | `MeshLambertMaterial` |  the material (color mostly) to use in new text mesh |
| removeFirst | `boolean` |  to determine if text mesh should first be removed from scene (TRUE --> remove | FALSE --> no remove) |

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/menu.ts:344](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L344)*

Moves the point light from left to right a little every frame.

**Returns:** `void`

___
<a id="pressedhelp"></a>

###  pressedHelp

▸ **pressedHelp**(): `void`

*Defined in [ts/menu.ts:353](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L353)*

Changes the help menu button text when clicked to signal to user that their click worked.

**Returns:** `void`

___
<a id="pressedload"></a>

###  pressedLoad

▸ **pressedLoad**(): `boolean`

*Defined in [ts/menu.ts:366](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L366)*

Changes the load menu button text when clicked to signal to user that their click worked (if not hardcore difficulty).

**Returns:** `boolean`
TRUE --> valid click, move onto load menu | FALSE --> harcore mode means load is inactive.

___
<a id="pressedstart"></a>

###  pressedStart

▸ **pressedStart**(): `number`

*Defined in [ts/menu.ts:383](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L383)*

Changes the start menu button text when clicked to signal to user that their click worked.

**Returns:** `number`
difficulty level chosen before start was pressed (to be used in game difficulty checks)

___
<a id="returntomainmenu"></a>

###  returnToMainMenu

▸ **returnToMainMenu**(returnedFrom: *`string`*): `void`

*Defined in [ts/menu.ts:397](https://github.com/WilliamRADFunk/planet-funk/blob/db602a2/src/ts/menu.ts#L397)*

Reactivates main menu options.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| returnedFrom | `string` |  helps to distinguish which button had been pressed to leave menu in first place. |

**Returns:** `void`

___

