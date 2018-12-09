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
* [barrierOff](_ts_displays_menu_.menu.md#barrieroff)
* [barrierOn](_ts_displays_menu_.menu.md#barrieron)
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
* [helpLight](_ts_displays_menu_.menu.md#helplight)
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
* [off](_ts_displays_menu_.menu.md#off)
* [offGeometry](_ts_displays_menu_.menu.md#offgeometry)
* [on](_ts_displays_menu_.menu.md#on)
* [onGeometry](_ts_displays_menu_.menu.md#ongeometry)
* [pointLight](_ts_displays_menu_.menu.md#pointlight)
* [scene](_ts_displays_menu_.menu.md#scene)
* [shimmer](_ts_displays_menu_.menu.md#shimmer)
* [sound](_ts_displays_menu_.menu.md#sound)
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
* [pressedOff](_ts_displays_menu_.menu.md#pressedoff)
* [pressedOn](_ts_displays_menu_.menu.md#pressedon)
* [pressedStart](_ts_displays_menu_.menu.md#pressedstart)
* [returnToMainMenu](_ts_displays_menu_.menu.md#returntomainmenu)
* [showMenu](_ts_displays_menu_.menu.md#showmenu)
* [toggleHelpShield](_ts_displays_menu_.menu.md#togglehelpshield)

---

## Properties

<a id="barriereasy"></a>

### `<Private>` barrierEasy

**● barrierEasy**: *`Mesh`*

*Defined in [ts/displays/menu.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L28)*

Click surface for the Easy button.

___
<a id="barrierhard"></a>

### `<Private>` barrierHard

**● barrierHard**: *`Mesh`*

*Defined in [ts/displays/menu.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L32)*

Click surface for the Hard button.

___
<a id="barrierhardcore"></a>

### `<Private>` barrierHardcore

**● barrierHardcore**: *`Mesh`*

*Defined in [ts/displays/menu.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L36)*

Click surface for the Hardcore button.

___
<a id="barrierhelp"></a>

### `<Private>` barrierHelp

**● barrierHelp**: *`Mesh`*

*Defined in [ts/displays/menu.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L40)*

Click surface for the Help button.

___
<a id="barrierload"></a>

### `<Private>` barrierLoad

**● barrierLoad**: *`Mesh`*

*Defined in [ts/displays/menu.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L44)*

Click surface for the Load button.

___
<a id="barriernormal"></a>

### `<Private>` barrierNormal

**● barrierNormal**: *`Mesh`*

*Defined in [ts/displays/menu.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L48)*

Click surface for the Normal button.

___
<a id="barrieroff"></a>

### `<Private>` barrierOff

**● barrierOff**: *`Mesh`*

*Defined in [ts/displays/menu.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L52)*

Click surface for the Off button.

___
<a id="barrieron"></a>

### `<Private>` barrierOn

**● barrierOn**: *`Mesh`*

*Defined in [ts/displays/menu.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L56)*

Click surface for the On button.

___
<a id="barrierstart"></a>

### `<Private>` barrierStart

**● barrierStart**: *`Mesh`*

*Defined in [ts/displays/menu.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L60)*

Click surface for the Start button.

___
<a id="clickmaterial"></a>

### `<Private>` clickMaterial

**● clickMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/displays/menu.ts:64](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L64)*

Controls the background click surface of buttons.

___
<a id="copyright"></a>

### `<Private>` copyright

**● copyright**: *`Mesh`*

*Defined in [ts/displays/menu.ts:68](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L68)*

Controls the overall rendering of the copyright display

___
<a id="copyrightgeometry"></a>

### `<Private>` copyrightGeometry

**● copyrightGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:72](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L72)*

Controls size and shape of the copyright text

___
<a id="difficultylevel"></a>

### `<Private>` difficultyLevel

**● difficultyLevel**: *`number`* = 3

*Defined in [ts/displays/menu.ts:76](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L76)*

Easy, Medium, Hard, Hardcore

___
<a id="easy"></a>

### `<Private>` easy

**● easy**: *`Mesh`*

*Defined in [ts/displays/menu.ts:80](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L80)*

Controls the overall rendering of the easy button display

___
<a id="easygeometry"></a>

### `<Private>` easyGeometry

**● easyGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:84](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L84)*

Controls size and shape of the easy button text

___
<a id="fontdifficultybtnparams"></a>

### `<Private>` fontDifficultyBtnParams

**● fontDifficultyBtnParams**: *`TextGeometryParameters`*

*Defined in [ts/displays/menu.ts:88](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L88)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="hard"></a>

### `<Private>` hard

**● hard**: *`Mesh`*

*Defined in [ts/displays/menu.ts:92](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L92)*

Controls the overall rendering of the hard button display

___
<a id="hardgeometry"></a>

### `<Private>` hardGeometry

**● hardGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:96](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L96)*

Controls size and shape of the hard button text

___
<a id="hardcore"></a>

### `<Private>` hardcore

**● hardcore**: *`Mesh`*

*Defined in [ts/displays/menu.ts:100](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L100)*

Controls the overall rendering of the hardcore button display

___
<a id="hardcoregeometry"></a>

### `<Private>` hardcoreGeometry

**● hardcoreGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:104](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L104)*

Controls size and shape of the hardcore button text

___
<a id="help"></a>

### `<Private>` help

**● help**: *`Mesh`*

*Defined in [ts/displays/menu.ts:108](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L108)*

Controls the overall rendering of the help button display

___
<a id="helpgeometry"></a>

### `<Private>` helpGeometry

**● helpGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:112](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L112)*

Controls size and shape of the help button text

___
<a id="helphandler"></a>

### `<Private>` helpHandler

**● helpHandler**: *[HelpHandler](_ts_displays_help_handler_.helphandler.md)*

*Defined in [ts/displays/menu.ts:116](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L116)*

Paints the help screen.

___
<a id="helplight"></a>

### `<Private>` helpLight

**● helpLight**: *`AmbientLight`*

*Defined in [ts/displays/menu.ts:120](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L120)*

Standard ambient light to better see the help menu with.

___
<a id="load"></a>

### `<Private>` load

**● load**: *`Mesh`*

*Defined in [ts/displays/menu.ts:124](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L124)*

Controls the overall rendering of the load button display

___
<a id="loadgeometry"></a>

### `<Private>` loadGeometry

**● loadGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:128](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L128)*

Controls size and shape of the load button text

___
<a id="loadhandler"></a>

### `<Private>` loadHandler

**● loadHandler**: *[LoadHandler](_ts_displays_load_handler_.loadhandler.md)*

*Defined in [ts/displays/menu.ts:132](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L132)*

Paints the load screen.

___
<a id="mainbanner"></a>

### `<Private>` mainBanner

**● mainBanner**: *`Mesh`*

*Defined in [ts/displays/menu.ts:136](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L136)*

Controls the overall rendering of the main banner display

___
<a id="mainbannergeometry"></a>

### `<Private>` mainBannerGeometry

**● mainBannerGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:140](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L140)*

Controls size and shape of the main banner text

___
<a id="menufont"></a>

### `<Private>` menuFont

**● menuFont**: *`Font`*

*Defined in [ts/displays/menu.ts:144](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L144)*

Loaded font for menu text.

___
<a id="menumaterial"></a>

### `<Private>` menuMaterial

**● menuMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/menu.ts:148](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L148)*

Controls the color of the untouched button display material

___
<a id="menuselectedmaterial"></a>

### `<Private>` menuSelectedMaterial

**● menuSelectedMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/menu.ts:152](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L152)*

Controls the color of the selected button display material

___
<a id="mode"></a>

### `<Private>` mode

**● mode**: *`number`* = 0

*Defined in [ts/displays/menu.ts:159](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L159)*

Keeps track of menu mode. 0 --> Menu options 1 --> Help screen 2 --> Load screen

___
<a id="normal"></a>

### `<Private>` normal

**● normal**: *`Mesh`*

*Defined in [ts/displays/menu.ts:163](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L163)*

Controls the overall rendering of the normal button display

___
<a id="normalgeometry"></a>

### `<Private>` normalGeometry

**● normalGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:167](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L167)*

Controls size and shape of the normal button text

___
<a id="off"></a>

### `<Private>` off

**● off**: *`Mesh`*

*Defined in [ts/displays/menu.ts:171](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L171)*

Controls the overall rendering of the off button display

___
<a id="offgeometry"></a>

### `<Private>` offGeometry

**● offGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:175](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L175)*

Controls size and shape of the off button text

___
<a id="on"></a>

### `<Private>` on

**● on**: *`Mesh`*

*Defined in [ts/displays/menu.ts:179](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L179)*

Controls the overall rendering of the on button display

___
<a id="ongeometry"></a>

### `<Private>` onGeometry

**● onGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:183](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L183)*

Controls size and shape of the on button text

___
<a id="pointlight"></a>

### `<Private>` pointLight

**● pointLight**: *`PointLight`*

*Defined in [ts/displays/menu.ts:187](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L187)*

The distant dim light that allows the shimmer effect to happen.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/displays/menu.ts:191](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L191)*

Reference to the scene, used to remove and reinstall text geometries.

___
<a id="shimmer"></a>

### `<Private>` shimmer

**● shimmer**: *`PointLight`*

*Defined in [ts/displays/menu.ts:195](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L195)*

Controls the light that give the text its shine.

___
<a id="sound"></a>

### `<Private>` sound

**● sound**: *`Mesh`*

*Defined in [ts/displays/menu.ts:199](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L199)*

Controls the overall rendering of the Sound text display

___
<a id="start"></a>

### `<Private>` start

**● start**: *`Mesh`*

*Defined in [ts/displays/menu.ts:203](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L203)*

Controls the overall rendering of the start button display

___
<a id="startgeometry"></a>

### `<Private>` startGeometry

**● startGeometry**: *`TextGeometry`*

*Defined in [ts/displays/menu.ts:207](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L207)*

Controls size and shape of the start button text

___

## Methods

<a id="activatehelpshield"></a>

### `<Private>` activateHelpShield

▸ **activateHelpShield**(): `void`

*Defined in [ts/displays/menu.ts:402](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L402)*

Activates the specific shield in the help screen display.

**Returns:** `void`

___
<a id="changedifficulty"></a>

###  changeDifficulty

▸ **changeDifficulty**(diff: *`number`*): `void`

*Defined in [ts/displays/menu.ts:409](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L409)*

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

*Defined in [ts/displays/menu.ts:419](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L419)*

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

*Defined in [ts/displays/menu.ts:428](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L428)*

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

*Defined in [ts/displays/menu.ts:484](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L484)*

Deactivates the specific shield in the help screen display.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/displays/menu.ts:490](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L490)*

Moves the point light from left to right a little every frame.

**Returns:** `void`

___
<a id="getdifficulty"></a>

###  getDifficulty

▸ **getDifficulty**(): `number`

*Defined in [ts/displays/menu.ts:516](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L516)*

Retrieves the currently chosen difficulty level.

**Returns:** `number`
the difficulty level currently selected in the menu.

___
<a id="getgamedata"></a>

###  getGameData

▸ **getGameData**():  [GameLoadData](../interfaces/_ts_models_game_load_data_.gameloaddata.md) &#124; `null`

*Defined in [ts/displays/menu.ts:523](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L523)*

Gets the game load data fom load code. If load code is invalid, it returns null.

**Returns:**  [GameLoadData](../interfaces/_ts_models_game_load_data_.gameloaddata.md) &#124; `null`

game load data from load code or null to start from a default set.

___
<a id="hidemenu"></a>

###  hideMenu

▸ **hideMenu**(): `void`

*Defined in [ts/displays/menu.ts:529](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L529)*

Turns visibility for menu items to be unseen.

**Returns:** `void`

___
<a id="pressedhelp"></a>

###  pressedHelp

▸ **pressedHelp**(): `void`

*Defined in [ts/displays/menu.ts:557](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L557)*

Transitions to help screen. Changes the help menu button text when clicked to signal to user that their click worked.

**Returns:** `void`

___
<a id="pressedload"></a>

###  pressedLoad

▸ **pressedLoad**(): `void`

*Defined in [ts/displays/menu.ts:576](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L576)*

Changes the load menu button text when clicked to signal to user that their click worked (if not hardcore difficulty).

**Returns:** `void`
TRUE --> valid click, move onto load menu | FALSE --> harcore mode means load is inactive.

___
<a id="pressedoff"></a>

###  pressedOff

▸ **pressedOff**(): `void`

*Defined in [ts/displays/menu.ts:594](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L594)*

Turns sound off. Changes the off menu button text when clicked to signal to user that their click worked.

**Returns:** `void`

___
<a id="pressedon"></a>

###  pressedOn

▸ **pressedOn**(): `void`

*Defined in [ts/displays/menu.ts:614](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L614)*

Turns sound on. Changes the on menu button text when clicked to signal to user that their click worked.

**Returns:** `void`

___
<a id="pressedstart"></a>

###  pressedStart

▸ **pressedStart**(): `number`

*Defined in [ts/displays/menu.ts:634](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L634)*

Changes the start menu button text when clicked to signal to user that their click worked.

**Returns:** `number`
difficulty level chosen before start was pressed (to be used in game difficulty checks)

___
<a id="returntomainmenu"></a>

###  returnToMainMenu

▸ **returnToMainMenu**(): `void`

*Defined in [ts/displays/menu.ts:647](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L647)*

Reactivates main menu options.

**Returns:** `void`

___
<a id="showmenu"></a>

###  showMenu

▸ **showMenu**(): `void`

*Defined in [ts/displays/menu.ts:681](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L681)*

Turns visibility for menu items to be seen.

**Returns:** `void`

___
<a id="togglehelpshield"></a>

###  toggleHelpShield

▸ **toggleHelpShield**(): `void`

*Defined in [ts/displays/menu.ts:708](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/menu.ts#L708)*

Toggles the specific shield in the help screen display.

**Returns:** `void`

___

