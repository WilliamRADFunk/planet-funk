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
* [loadHandler](_ts_displays_menu_.menu.md#loadhandler)
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
* [charEntered](_ts_displays_menu_.menu.md#charentered)
* [createDifficultyButtons](_ts_displays_menu_.menu.md#createdifficultybuttons)
* [deactivateHelpShield](_ts_displays_menu_.menu.md#deactivatehelpshield)
* [endCycle](_ts_displays_menu_.menu.md#endcycle)
* [getDifficulty](_ts_displays_menu_.menu.md#getdifficulty)
* [getGameData](_ts_displays_menu_.menu.md#getgamedata)
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

*Defined in [ts/displays/menu.ts:26](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L26)*

Click surface for the Easy button.

___
<a id="barrierhard"></a>

### `<Private>` barrierHard

**● barrierHard**: *`Mesh`*

*Defined in [ts/displays/menu.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L30)*

Click surface for the Hard button.

___
<a id="barrierhardcore"></a>

### `<Private>` barrierHardcore

**● barrierHardcore**: *`Mesh`*

*Defined in [ts/displays/menu.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L34)*

Click surface for the Hardcore button.

___
<a id="barrierhelp"></a>

### `<Private>` barrierHelp

**● barrierHelp**: *`Mesh`*

*Defined in [ts/displays/menu.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L38)*

Click surface for the Help button.

___
<a id="barrierload"></a>

### `<Private>` barrierLoad

**● barrierLoad**: *`Mesh`*

*Defined in [ts/displays/menu.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L42)*

Click surface for the Load button.

___
<a id="barriernormal"></a>

### `<Private>` barrierNormal

**● barrierNormal**: *`Mesh`*

*Defined in [ts/displays/menu.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L46)*

Click surface for the Normal button.

___
<a id="barrierstart"></a>

### `<Private>` barrierStart

**● barrierStart**: *`Mesh`*

*Defined in [ts/displays/menu.ts:50](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L50)*

Click surface for the Start button.

___
<a id="clickmaterial"></a>

### `<Private>` clickMaterial

**● clickMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/displays/menu.ts:54](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L54)*

Controls the background click surface of buttons.

___
<a id="copyright"></a>

### `<Private>` copyright

**● copyright**: *`Mesh`*

*Defined in [ts/displays/menu.ts:58](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L58)*

Controls the overall rendering of the copyright display

___
<a id="copyrightgeometry"></a>

### `<Private>` copyrightGeometry

**● copyrightGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L62)*

Controls size and shape of the copyright text

___
<a id="difficultylevel"></a>

### `<Private>` difficultyLevel

**● difficultyLevel**: *`number`* = 3

*Defined in [ts/displays/menu.ts:66](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L66)*

Easy, Medium, Hard, Hardcore

___
<a id="easy"></a>

### `<Private>` easy

**● easy**: *`Mesh`*

*Defined in [ts/displays/menu.ts:70](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L70)*

Controls the overall rendering of the easy button display

___
<a id="easygeometry"></a>

### `<Private>` easyGeometry

**● easyGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:74](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L74)*

Controls size and shape of the easy button text

___
<a id="fontdifficultybtnparams"></a>

### `<Private>` fontDifficultyBtnParams

**● fontDifficultyBtnParams**: *`TextGeometryParameters`*

*Defined in [ts/displays/menu.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L78)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="hard"></a>

### `<Private>` hard

**● hard**: *`Mesh`*

*Defined in [ts/displays/menu.ts:82](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L82)*

Controls the overall rendering of the hard button display

___
<a id="hardgeometry"></a>

### `<Private>` hardGeometry

**● hardGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L86)*

Controls size and shape of the hard button text

___
<a id="hardcore"></a>

### `<Private>` hardcore

**● hardcore**: *`Mesh`*

*Defined in [ts/displays/menu.ts:90](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L90)*

Controls the overall rendering of the hardcore button display

___
<a id="hardcoregeometry"></a>

### `<Private>` hardcoreGeometry

**● hardcoreGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L94)*

Controls size and shape of the hardcore button text

___
<a id="help"></a>

### `<Private>` help

**● help**: *`Mesh`*

*Defined in [ts/displays/menu.ts:98](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L98)*

Controls the overall rendering of the help button display

___
<a id="helpgeometry"></a>

### `<Private>` helpGeometry

**● helpGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:102](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L102)*

Controls size and shape of the help button text

___
<a id="helphandler"></a>

### `<Private>` helpHandler

**● helpHandler**: *[HelpHandler](_ts_displays_help_handler_.helphandler.md)*

*Defined in [ts/displays/menu.ts:106](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L106)*

Paints the help screen.

___
<a id="load"></a>

### `<Private>` load

**● load**: *`Mesh`*

*Defined in [ts/displays/menu.ts:110](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L110)*

Controls the overall rendering of the load button display

___
<a id="loadgeometry"></a>

### `<Private>` loadGeometry

**● loadGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:114](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L114)*

Controls size and shape of the load button text

___
<a id="loadhandler"></a>

### `<Private>` loadHandler

**● loadHandler**: *[LoadHandler](_ts_displays_load_handler_.loadhandler.md)*

*Defined in [ts/displays/menu.ts:118](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L118)*

Paints the load screen.

___
<a id="mainbanner"></a>

### `<Private>` mainBanner

**● mainBanner**: *`Mesh`*

*Defined in [ts/displays/menu.ts:122](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L122)*

Controls the overall rendering of the main banner display

___
<a id="mainbannergeometry"></a>

### `<Private>` mainBannerGeometry

**● mainBannerGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:126](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L126)*

Controls size and shape of the main banner text

___
<a id="menufont"></a>

### `<Private>` menuFont

**● menuFont**: *`Font`*

*Defined in [ts/displays/menu.ts:130](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L130)*

Loaded font for menu text.

___
<a id="menumaterial"></a>

### `<Private>` menuMaterial

**● menuMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/menu.ts:134](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L134)*

Controls the color of the untouched button display material

___
<a id="menuselectedmaterial"></a>

### `<Private>` menuSelectedMaterial

**● menuSelectedMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/menu.ts:138](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L138)*

Controls the color of the selected button display material

___
<a id="mode"></a>

### `<Private>` mode

**● mode**: *`number`* = 0

*Defined in [ts/displays/menu.ts:145](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L145)*

Keeps track of menu mode. 0 --> Menu options 1 --> Help screen 2 --> Load screen

___
<a id="normal"></a>

### `<Private>` normal

**● normal**: *`Mesh`*

*Defined in [ts/displays/menu.ts:149](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L149)*

Controls the overall rendering of the normal button display

___
<a id="normalgeometry"></a>

### `<Private>` normalGeometry

**● normalGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:153](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L153)*

Controls size and shape of the normal button text

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/displays/menu.ts:157](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L157)*

Reference to the scene, used to remove and reinstall text geometries.

___
<a id="shimmer"></a>

### `<Private>` shimmer

**● shimmer**: *`PointLight`*

*Defined in [ts/displays/menu.ts:161](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L161)*

Controls the light that give the text its shine.

___
<a id="start"></a>

### `<Private>` start

**● start**: *`Mesh`*

*Defined in [ts/displays/menu.ts:165](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L165)*

Controls the overall rendering of the start button display

___
<a id="startgeometry"></a>

### `<Private>` startGeometry

**● startGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:169](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L169)*

Controls size and shape of the start button text

___

## Methods

<a id="activatehelpshield"></a>

### `<Private>` activateHelpShield

▸ **activateHelpShield**(): `void`

*Defined in [ts/displays/menu.ts:327](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L327)*

Activates the specific shield in the help screen display.

**Returns:** `void`

___
<a id="changedifficulty"></a>

###  changeDifficulty

▸ **changeDifficulty**(diff: *`number`*): `void`

*Defined in [ts/displays/menu.ts:334](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L334)*

Changes difficulty level, and instigates the altering of the button texts associated with that choice.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| diff | `number` |  the selected diffulty choice (0 --> easy, 1 --> normal, 2 --> hard, 3 --> hardcore) |

**Returns:** `void`

___
<a id="charentered"></a>

###  charEntered

▸ **charEntered**(char: *`string`*): `void`

*Defined in [ts/displays/menu.ts:344](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L344)*

Passes load char onto the loadHandler.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| char | `string` |  player clicked on a specific char. This is that char 0-F |

**Returns:** `void`

___
<a id="createdifficultybuttons"></a>

### `<Private>` createDifficultyButtons

▸ **createDifficultyButtons**(buttonIndex: *`number`*, material: *`MeshLambertMaterial`*, removeFirst: *`boolean`*): `void`

*Defined in [ts/displays/menu.ts:353](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L353)*

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

*Defined in [ts/displays/menu.ts:409](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L409)*

Deactivates the specific shield in the help screen display.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/displays/menu.ts:415](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L415)*

Moves the point light from left to right a little every frame.

**Returns:** `void`

___
<a id="getdifficulty"></a>

###  getDifficulty

▸ **getDifficulty**(): `number`

*Defined in [ts/displays/menu.ts:431](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L431)*

Retrieves the currently chosen difficulty level.

**Returns:** `number`
the difficulty level currently selected in the menu.

___
<a id="getgamedata"></a>

###  getGameData

▸ **getGameData**():  [GameLoadData](../interfaces/_ts_models_game_load_data_.gameloaddata.md) &#124; `null`

*Defined in [ts/displays/menu.ts:438](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L438)*

Gets the game load data fom load code. If load code is invalid, it returns null.

**Returns:**  [GameLoadData](../interfaces/_ts_models_game_load_data_.gameloaddata.md) &#124; `null`

game load data from load code or null to start from a default set.

___
<a id="hidemenu"></a>

###  hideMenu

▸ **hideMenu**(): `void`

*Defined in [ts/displays/menu.ts:444](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L444)*

Turns visibility for menu items to be unseen.

**Returns:** `void`

___
<a id="pressedhelp"></a>

###  pressedHelp

▸ **pressedHelp**(): `void`

*Defined in [ts/displays/menu.ts:467](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L467)*

Transitions to help screen. Changes the help menu button text when clicked to signal to user that their click worked.

**Returns:** `void`

___
<a id="pressedload"></a>

###  pressedLoad

▸ **pressedLoad**(): `void`

*Defined in [ts/displays/menu.ts:486](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L486)*

Changes the load menu button text when clicked to signal to user that their click worked (if not hardcore difficulty).

**Returns:** `void`
TRUE --> valid click, move onto load menu | FALSE --> harcore mode means load is inactive.

___
<a id="pressedstart"></a>

###  pressedStart

▸ **pressedStart**(): `number`

*Defined in [ts/displays/menu.ts:504](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L504)*

Changes the start menu button text when clicked to signal to user that their click worked.

**Returns:** `number`
difficulty level chosen before start was pressed (to be used in game difficulty checks)

___
<a id="returntomainmenu"></a>

###  returnToMainMenu

▸ **returnToMainMenu**(): `void`

*Defined in [ts/displays/menu.ts:517](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L517)*

Reactivates main menu options.

**Returns:** `void`

___
<a id="showmenu"></a>

###  showMenu

▸ **showMenu**(): `void`

*Defined in [ts/displays/menu.ts:551](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L551)*

Turns visibility for menu items to be seen.

**Returns:** `void`

___
<a id="togglehelpshield"></a>

###  toggleHelpShield

▸ **toggleHelpShield**(): `void`

*Defined in [ts/displays/menu.ts:573](https://github.com/WilliamRADFunk/planet-funk/blob/4b09769/src/ts/displays/menu.ts#L573)*

Toggles the specific shield in the help screen display.

**Returns:** `void`

___

