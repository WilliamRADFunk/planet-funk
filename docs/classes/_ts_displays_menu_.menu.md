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

*Defined in [ts/displays/menu.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L24)*

Click surface for the Easy button.

___
<a id="barrierhard"></a>

### `<Private>` barrierHard

**● barrierHard**: *`Mesh`*

*Defined in [ts/displays/menu.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L28)*

Click surface for the Hard button.

___
<a id="barrierhardcore"></a>

### `<Private>` barrierHardcore

**● barrierHardcore**: *`Mesh`*

*Defined in [ts/displays/menu.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L32)*

Click surface for the Hardcore button.

___
<a id="barrierhelp"></a>

### `<Private>` barrierHelp

**● barrierHelp**: *`Mesh`*

*Defined in [ts/displays/menu.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L36)*

Click surface for the Help button.

___
<a id="barrierload"></a>

### `<Private>` barrierLoad

**● barrierLoad**: *`Mesh`*

*Defined in [ts/displays/menu.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L40)*

Click surface for the Load button.

___
<a id="barriernormal"></a>

### `<Private>` barrierNormal

**● barrierNormal**: *`Mesh`*

*Defined in [ts/displays/menu.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L44)*

Click surface for the Normal button.

___
<a id="barrierstart"></a>

### `<Private>` barrierStart

**● barrierStart**: *`Mesh`*

*Defined in [ts/displays/menu.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L48)*

Click surface for the Start button.

___
<a id="clickmaterial"></a>

### `<Private>` clickMaterial

**● clickMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/displays/menu.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L52)*

Controls the background click surface of buttons.

___
<a id="copyright"></a>

### `<Private>` copyright

**● copyright**: *`Mesh`*

*Defined in [ts/displays/menu.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L56)*

Controls the overall rendering of the copyright display

___
<a id="copyrightgeometry"></a>

### `<Private>` copyrightGeometry

**● copyrightGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L60)*

Controls size and shape of the copyright text

___
<a id="difficultylevel"></a>

### `<Private>` difficultyLevel

**● difficultyLevel**: *`number`* = 3

*Defined in [ts/displays/menu.ts:64](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L64)*

Easy, Medium, Hard, Hardcore

___
<a id="easy"></a>

### `<Private>` easy

**● easy**: *`Mesh`*

*Defined in [ts/displays/menu.ts:68](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L68)*

Controls the overall rendering of the easy button display

___
<a id="easygeometry"></a>

### `<Private>` easyGeometry

**● easyGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:72](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L72)*

Controls size and shape of the easy button text

___
<a id="fontdifficultybtnparams"></a>

### `<Private>` fontDifficultyBtnParams

**● fontDifficultyBtnParams**: *`TextGeometryParameters`*

*Defined in [ts/displays/menu.ts:76](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L76)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="hard"></a>

### `<Private>` hard

**● hard**: *`Mesh`*

*Defined in [ts/displays/menu.ts:80](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L80)*

Controls the overall rendering of the hard button display

___
<a id="hardgeometry"></a>

### `<Private>` hardGeometry

**● hardGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:84](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L84)*

Controls size and shape of the hard button text

___
<a id="hardcore"></a>

### `<Private>` hardcore

**● hardcore**: *`Mesh`*

*Defined in [ts/displays/menu.ts:88](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L88)*

Controls the overall rendering of the hardcore button display

___
<a id="hardcoregeometry"></a>

### `<Private>` hardcoreGeometry

**● hardcoreGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:92](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L92)*

Controls size and shape of the hardcore button text

___
<a id="help"></a>

### `<Private>` help

**● help**: *`Mesh`*

*Defined in [ts/displays/menu.ts:96](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L96)*

Controls the overall rendering of the help button display

___
<a id="helpgeometry"></a>

### `<Private>` helpGeometry

**● helpGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:100](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L100)*

Controls size and shape of the help button text

___
<a id="helphandler"></a>

### `<Private>` helpHandler

**● helpHandler**: *[HelpHandler](_ts_displays_help_handler_.helphandler.md)*

*Defined in [ts/displays/menu.ts:104](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L104)*

Paints the help screen.

___
<a id="load"></a>

### `<Private>` load

**● load**: *`Mesh`*

*Defined in [ts/displays/menu.ts:108](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L108)*

Controls the overall rendering of the load button display

___
<a id="loadgeometry"></a>

### `<Private>` loadGeometry

**● loadGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:112](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L112)*

Controls size and shape of the load button text

___
<a id="mainbanner"></a>

### `<Private>` mainBanner

**● mainBanner**: *`Mesh`*

*Defined in [ts/displays/menu.ts:116](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L116)*

Controls the overall rendering of the main banner display

___
<a id="mainbannergeometry"></a>

### `<Private>` mainBannerGeometry

**● mainBannerGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:120](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L120)*

Controls size and shape of the main banner text

___
<a id="menufont"></a>

### `<Private>` menuFont

**● menuFont**: *`Font`*

*Defined in [ts/displays/menu.ts:124](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L124)*

Loaded font for menu text.

___
<a id="menumaterial"></a>

### `<Private>` menuMaterial

**● menuMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/menu.ts:128](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L128)*

Controls the color of the untouched button display material

___
<a id="menuselectedmaterial"></a>

### `<Private>` menuSelectedMaterial

**● menuSelectedMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/menu.ts:132](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L132)*

Controls the color of the selected button display material

___
<a id="mode"></a>

### `<Private>` mode

**● mode**: *`number`* = 0

*Defined in [ts/displays/menu.ts:139](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L139)*

Keeps track of menu mode. 0 --> Menu options 1 --> Help screen 2 --> Load screen

___
<a id="normal"></a>

### `<Private>` normal

**● normal**: *`Mesh`*

*Defined in [ts/displays/menu.ts:143](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L143)*

Controls the overall rendering of the normal button display

___
<a id="normalgeometry"></a>

### `<Private>` normalGeometry

**● normalGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:147](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L147)*

Controls size and shape of the normal button text

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/displays/menu.ts:151](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L151)*

Reference to the scene, used to remove and reinstall text geometries.

___
<a id="shimmer"></a>

### `<Private>` shimmer

**● shimmer**: *`PointLight`*

*Defined in [ts/displays/menu.ts:155](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L155)*

Controls the light that give the text its shine.

___
<a id="start"></a>

### `<Private>` start

**● start**: *`Mesh`*

*Defined in [ts/displays/menu.ts:159](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L159)*

Controls the overall rendering of the start button display

___
<a id="startgeometry"></a>

### `<Private>` startGeometry

**● startGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:163](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L163)*

Controls size and shape of the start button text

___

## Methods

<a id="activatehelpshield"></a>

### `<Private>` activateHelpShield

▸ **activateHelpShield**(): `void`

*Defined in [ts/displays/menu.ts:313](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L313)*

Activates the specific shield in the help screen display.

**Returns:** `void`

___
<a id="changedifficulty"></a>

###  changeDifficulty

▸ **changeDifficulty**(diff: *`number`*): `void`

*Defined in [ts/displays/menu.ts:320](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L320)*

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

*Defined in [ts/displays/menu.ts:332](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L332)*

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

*Defined in [ts/displays/menu.ts:388](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L388)*

Deactivates the specific shield in the help screen display.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/displays/menu.ts:394](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L394)*

Moves the point light from left to right a little every frame.

**Returns:** `void`

___
<a id="hidemenu"></a>

###  hideMenu

▸ **hideMenu**(): `void`

*Defined in [ts/displays/menu.ts:408](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L408)*

Turns visibility for menu items to be unseen.

**Returns:** `void`

___
<a id="pressedhelp"></a>

###  pressedHelp

▸ **pressedHelp**(): `void`

*Defined in [ts/displays/menu.ts:432](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L432)*

Transitions to help screen. Changes the help menu button text when clicked to signal to user that their click worked.

**Returns:** `void`

___
<a id="pressedload"></a>

###  pressedLoad

▸ **pressedLoad**(): `void`

*Defined in [ts/displays/menu.ts:451](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L451)*

Changes the load menu button text when clicked to signal to user that their click worked (if not hardcore difficulty).

**Returns:** `void`
TRUE --> valid click, move onto load menu | FALSE --> harcore mode means load is inactive.

___
<a id="pressedstart"></a>

###  pressedStart

▸ **pressedStart**(): `number`

*Defined in [ts/displays/menu.ts:469](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L469)*

Changes the start menu button text when clicked to signal to user that their click worked.

**Returns:** `number`
difficulty level chosen before start was pressed (to be used in game difficulty checks)

___
<a id="returntomainmenu"></a>

###  returnToMainMenu

▸ **returnToMainMenu**(): `void`

*Defined in [ts/displays/menu.ts:482](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L482)*

Reactivates main menu options.

**Returns:** `void`

___
<a id="showmenu"></a>

###  showMenu

▸ **showMenu**(): `void`

*Defined in [ts/displays/menu.ts:512](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L512)*

**Returns:** `void`

___
<a id="togglehelpshield"></a>

###  toggleHelpShield

▸ **toggleHelpShield**(): `void`

*Defined in [ts/displays/menu.ts:535](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/displays/menu.ts#L535)*

Toggles the specific shield in the help screen display.

**Returns:** `void`

___

