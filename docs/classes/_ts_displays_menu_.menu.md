[planet-funk](../README.md) > ["ts/displays/menu"](../modules/_ts_displays_menu_.md) > [Menu](../classes/_ts_displays_menu_.menu.md)

# Class: Menu

*__class__*: Keeps track of all things menu related.

## Hierarchy

**Menu**

## Index

### Properties

* [barrierEasy](_ts_displays_menu_.menu.md#barriereasy)
* [barrierHard](_ts_displays_menu_.menu.md#barrierhard)
* [barrierHardcore](_ts_displays_menu_.menu.md#barrierhardcore)
* [barrierHelp](_ts_displays_menu_.menu.md#barrierhelp)
* [barrierLoad](_ts_displays_menu_.menu.md#barrierload)
* [barrierNormal](_ts_displays_menu_.menu.md#barriernormal)
* [barrierStart](_ts_displays_menu_.menu.md#barrierstart)
* [clickMaterial](_ts_displays_menu_.menu.md#clickmaterial)
* [copyright](_ts_displays_menu_.menu.md#copyright)
* [copyrightGeometry](_ts_displays_menu_.menu.md#copyrightgeometry)
* [difficultyLevel](_ts_displays_menu_.menu.md#difficultylevel)
* [easy](_ts_displays_menu_.menu.md#easy)
* [easyGeometry](_ts_displays_menu_.menu.md#easygeometry)
* [fontDifficultyBtnParams](_ts_displays_menu_.menu.md#fontdifficultybtnparams)
* [hard](_ts_displays_menu_.menu.md#hard)
* [hardGeometry](_ts_displays_menu_.menu.md#hardgeometry)
* [hardcore](_ts_displays_menu_.menu.md#hardcore)
* [hardcoreGeometry](_ts_displays_menu_.menu.md#hardcoregeometry)
* [help](_ts_displays_menu_.menu.md#help)
* [helpGeometry](_ts_displays_menu_.menu.md#helpgeometry)
* [helpHandler](_ts_displays_menu_.menu.md#helphandler)
* [load](_ts_displays_menu_.menu.md#load)
* [loadGeometry](_ts_displays_menu_.menu.md#loadgeometry)
* [loadMaterial](_ts_displays_menu_.menu.md#loadmaterial)
* [mainBanner](_ts_displays_menu_.menu.md#mainbanner)
* [mainBannerGeometry](_ts_displays_menu_.menu.md#mainbannergeometry)
* [menuFont](_ts_displays_menu_.menu.md#menufont)
* [menuMaterial](_ts_displays_menu_.menu.md#menumaterial)
* [menuSelectedMaterial](_ts_displays_menu_.menu.md#menuselectedmaterial)
* [mode](_ts_displays_menu_.menu.md#mode)
* [normal](_ts_displays_menu_.menu.md#normal)
* [normalGeometry](_ts_displays_menu_.menu.md#normalgeometry)
* [scene](_ts_displays_menu_.menu.md#scene)
* [shimmer](_ts_displays_menu_.menu.md#shimmer)
* [start](_ts_displays_menu_.menu.md#start)
* [startGeometry](_ts_displays_menu_.menu.md#startgeometry)

### Methods

* [activateHelpShield](_ts_displays_menu_.menu.md#activatehelpshield)
* [changeDifficulty](_ts_displays_menu_.menu.md#changedifficulty)
* [createDifficultyButtons](_ts_displays_menu_.menu.md#createdifficultybuttons)
* [deactivateHelpShield](_ts_displays_menu_.menu.md#deactivatehelpshield)
* [endCycle](_ts_displays_menu_.menu.md#endcycle)
* [hideMenu](_ts_displays_menu_.menu.md#hidemenu)
* [pressedHelp](_ts_displays_menu_.menu.md#pressedhelp)
* [pressedLoad](_ts_displays_menu_.menu.md#pressedload)
* [pressedStart](_ts_displays_menu_.menu.md#pressedstart)
* [returnToMainMenu](_ts_displays_menu_.menu.md#returntomainmenu)
* [showMenu](_ts_displays_menu_.menu.md#showmenu)
* [toggleHelpShield](_ts_displays_menu_.menu.md#togglehelpshield)

---

## Properties

<a id="barriereasy"></a>

### `<Private>` barrierEasy

**● barrierEasy**: *`Mesh`*

*Defined in [ts/displays/menu.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L23)*

Click surface for the Easy button.

___
<a id="barrierhard"></a>

### `<Private>` barrierHard

**● barrierHard**: *`Mesh`*

*Defined in [ts/displays/menu.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L27)*

Click surface for the Hard button.

___
<a id="barrierhardcore"></a>

### `<Private>` barrierHardcore

**● barrierHardcore**: *`Mesh`*

*Defined in [ts/displays/menu.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L31)*

Click surface for the Hardcore button.

___
<a id="barrierhelp"></a>

### `<Private>` barrierHelp

**● barrierHelp**: *`Mesh`*

*Defined in [ts/displays/menu.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L35)*

Click surface for the Help button.

___
<a id="barrierload"></a>

### `<Private>` barrierLoad

**● barrierLoad**: *`Mesh`*

*Defined in [ts/displays/menu.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L39)*

Click surface for the Load button.

___
<a id="barriernormal"></a>

### `<Private>` barrierNormal

**● barrierNormal**: *`Mesh`*

*Defined in [ts/displays/menu.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L43)*

Click surface for the Normal button.

___
<a id="barrierstart"></a>

### `<Private>` barrierStart

**● barrierStart**: *`Mesh`*

*Defined in [ts/displays/menu.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L47)*

Click surface for the Start button.

___
<a id="clickmaterial"></a>

### `<Private>` clickMaterial

**● clickMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/displays/menu.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L51)*

Controls the background click surface of buttons.

___
<a id="copyright"></a>

### `<Private>` copyright

**● copyright**: *`Mesh`*

*Defined in [ts/displays/menu.ts:55](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L55)*

Controls the overall rendering of the copyright display

___
<a id="copyrightgeometry"></a>

### `<Private>` copyrightGeometry

**● copyrightGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:59](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L59)*

Controls size and shape of the copyright text

___
<a id="difficultylevel"></a>

### `<Private>` difficultyLevel

**● difficultyLevel**: *`number`* = 3

*Defined in [ts/displays/menu.ts:63](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L63)*

Easy, Medium, Hard, Hardcore

___
<a id="easy"></a>

### `<Private>` easy

**● easy**: *`Mesh`*

*Defined in [ts/displays/menu.ts:67](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L67)*

Controls the overall rendering of the easy button display

___
<a id="easygeometry"></a>

### `<Private>` easyGeometry

**● easyGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:71](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L71)*

Controls size and shape of the easy button text

___
<a id="fontdifficultybtnparams"></a>

### `<Private>` fontDifficultyBtnParams

**● fontDifficultyBtnParams**: *`TextGeometryParameters`*

*Defined in [ts/displays/menu.ts:75](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L75)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="hard"></a>

### `<Private>` hard

**● hard**: *`Mesh`*

*Defined in [ts/displays/menu.ts:79](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L79)*

Controls the overall rendering of the hard button display

___
<a id="hardgeometry"></a>

### `<Private>` hardGeometry

**● hardGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:83](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L83)*

Controls size and shape of the hard button text

___
<a id="hardcore"></a>

### `<Private>` hardcore

**● hardcore**: *`Mesh`*

*Defined in [ts/displays/menu.ts:87](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L87)*

Controls the overall rendering of the hardcore button display

___
<a id="hardcoregeometry"></a>

### `<Private>` hardcoreGeometry

**● hardcoreGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:91](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L91)*

Controls size and shape of the hardcore button text

___
<a id="help"></a>

### `<Private>` help

**● help**: *`Mesh`*

*Defined in [ts/displays/menu.ts:95](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L95)*

Controls the overall rendering of the help button display

___
<a id="helpgeometry"></a>

### `<Private>` helpGeometry

**● helpGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:99](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L99)*

Controls size and shape of the help button text

___
<a id="helphandler"></a>

### `<Private>` helpHandler

**● helpHandler**: *[HelpHandler](_ts_help_handler_.helphandler.md)*

*Defined in [ts/displays/menu.ts:103](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L103)*

Paints the help screen.

___
<a id="load"></a>

### `<Private>` load

**● load**: *`Mesh`*

*Defined in [ts/displays/menu.ts:107](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L107)*

Controls the overall rendering of the load button display

___
<a id="loadgeometry"></a>

### `<Private>` loadGeometry

**● loadGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:111](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L111)*

Controls size and shape of the load button text

___
<a id="loadmaterial"></a>

### `<Private>` loadMaterial

**● loadMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/menu.ts:115](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L115)*

Controls the color of the load button text material

___
<a id="mainbanner"></a>

### `<Private>` mainBanner

**● mainBanner**: *`Mesh`*

*Defined in [ts/displays/menu.ts:119](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L119)*

Controls the overall rendering of the main banner display

___
<a id="mainbannergeometry"></a>

### `<Private>` mainBannerGeometry

**● mainBannerGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:123](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L123)*

Controls size and shape of the main banner text

___
<a id="menufont"></a>

### `<Private>` menuFont

**● menuFont**: *`Font`*

*Defined in [ts/displays/menu.ts:127](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L127)*

Loaded font for menu text.

___
<a id="menumaterial"></a>

### `<Private>` menuMaterial

**● menuMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/menu.ts:131](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L131)*

Controls the color of the untouched button display material

___
<a id="menuselectedmaterial"></a>

### `<Private>` menuSelectedMaterial

**● menuSelectedMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/menu.ts:135](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L135)*

Controls the color of the selected button display material

___
<a id="mode"></a>

### `<Private>` mode

**● mode**: *`number`* = 0

*Defined in [ts/displays/menu.ts:142](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L142)*

Keeps track of menu mode. 0 --> Menu options 1 --> Help screen 2 --> Load screen

___
<a id="normal"></a>

### `<Private>` normal

**● normal**: *`Mesh`*

*Defined in [ts/displays/menu.ts:146](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L146)*

Controls the overall rendering of the normal button display

___
<a id="normalgeometry"></a>

### `<Private>` normalGeometry

**● normalGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:150](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L150)*

Controls size and shape of the normal button text

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/displays/menu.ts:154](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L154)*

Reference to the scene, used to remove and reinstall text geometries.

___
<a id="shimmer"></a>

### `<Private>` shimmer

**● shimmer**: *`PointLight`*

*Defined in [ts/displays/menu.ts:158](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L158)*

Controls the light that give the text its shine.

___
<a id="start"></a>

### `<Private>` start

**● start**: *`Mesh`*

*Defined in [ts/displays/menu.ts:162](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L162)*

Controls the overall rendering of the start button display

___
<a id="startgeometry"></a>

### `<Private>` startGeometry

**● startGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:166](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L166)*

Controls size and shape of the start button text

___

## Methods

<a id="activatehelpshield"></a>

### `<Private>` activateHelpShield

▸ **activateHelpShield**(): `void`

*Defined in [ts/displays/menu.ts:317](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L317)*

Activates the specific shield in the help screen display.

**Returns:** `void`

___
<a id="changedifficulty"></a>

###  changeDifficulty

▸ **changeDifficulty**(diff: *`number`*): `void`

*Defined in [ts/displays/menu.ts:324](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L324)*

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

*Defined in [ts/displays/menu.ts:341](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L341)*

Called to (re)create difficulty menu button text

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buttonIndex | `number` |  the selected diffulty choice (0 --> easy, 1 --> normal, 2 --> hard, 3 --> hardcore) |
| material | `MeshLambertMaterial` |  the material (color mostly) to use in new text mesh |
| removeFirst | `boolean` |  to determine if text mesh should first be removed from scene (TRUE --> remove | FALSE --> no remove) |

**Returns:** `void`

___
<a id="deactivatehelpshield"></a>

### `<Private>` deactivateHelpShield

▸ **deactivateHelpShield**(): `void`

*Defined in [ts/displays/menu.ts:397](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L397)*

Deactivates the specific shield in the help screen display.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/displays/menu.ts:403](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L403)*

Moves the point light from left to right a little every frame.

**Returns:** `void`

___
<a id="hidemenu"></a>

###  hideMenu

▸ **hideMenu**(): `void`

*Defined in [ts/displays/menu.ts:417](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L417)*

Turns visibility for menu items to be unseen.

**Returns:** `void`

___
<a id="pressedhelp"></a>

###  pressedHelp

▸ **pressedHelp**(): `void`

*Defined in [ts/displays/menu.ts:441](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L441)*

Transitions to help screen. Changes the help menu button text when clicked to signal to user that their click worked.

**Returns:** `void`

___
<a id="pressedload"></a>

###  pressedLoad

▸ **pressedLoad**(): `boolean`

*Defined in [ts/displays/menu.ts:460](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L460)*

Changes the load menu button text when clicked to signal to user that their click worked (if not hardcore difficulty).

**Returns:** `boolean`
TRUE --> valid click, move onto load menu | FALSE --> harcore mode means load is inactive.

___
<a id="pressedstart"></a>

###  pressedStart

▸ **pressedStart**(): `number`

*Defined in [ts/displays/menu.ts:477](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L477)*

Changes the start menu button text when clicked to signal to user that their click worked.

**Returns:** `number`
difficulty level chosen before start was pressed (to be used in game difficulty checks)

___
<a id="returntomainmenu"></a>

###  returnToMainMenu

▸ **returnToMainMenu**(): `void`

*Defined in [ts/displays/menu.ts:490](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L490)*

Reactivates main menu options.

**Returns:** `void`

___
<a id="showmenu"></a>

###  showMenu

▸ **showMenu**(): `void`

*Defined in [ts/displays/menu.ts:521](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L521)*

**Returns:** `void`

___
<a id="togglehelpshield"></a>

###  toggleHelpShield

▸ **toggleHelpShield**(): `void`

*Defined in [ts/displays/menu.ts:544](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/displays/menu.ts#L544)*

Toggles the specific shield in the help screen display.

**Returns:** `void`

___

