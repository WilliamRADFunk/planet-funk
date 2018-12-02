[planet-funk](../README.md) > ["ts/controls/control-panel"](../modules/_ts_controls_control_panel_.md) > [ControlPanel](../classes/_ts_controls_control_panel_.controlpanel.md)

# Class: ControlPanel

*__class__*: Control panel that handles all of the buttons and their states.

## Hierarchy

**ControlPanel**

## Index

### Properties

* [buttonMaterial](_ts_controls_control_panel_.controlpanel.md#buttonmaterial)
* [controlExit](_ts_controls_control_panel_.controlpanel.md#controlexit)
* [controlHelp](_ts_controls_control_panel_.controlpanel.md#controlhelp)
* [controlPause](_ts_controls_control_panel_.controlpanel.md#controlpause)
* [controlPlay](_ts_controls_control_panel_.controlpanel.md#controlplay)
* [controlSave](_ts_controls_control_panel_.controlpanel.md#controlsave)
* [currentColor](_ts_controls_control_panel_.controlpanel.md#currentcolor)
* [difficulty](_ts_controls_control_panel_.controlpanel.md#difficulty)
* [exit](_ts_controls_control_panel_.controlpanel.md#exit)
* [help](_ts_controls_control_panel_.controlpanel.md#help)
* [panelBorder](_ts_controls_control_panel_.controlpanel.md#panelborder)
* [panelBorderMaterial](_ts_controls_control_panel_.controlpanel.md#panelbordermaterial)
* [pause](_ts_controls_control_panel_.controlpanel.md#pause)
* [save](_ts_controls_control_panel_.controlpanel.md#save)
* [scene](_ts_controls_control_panel_.controlpanel.md#scene)

### Methods

* [endCycle](_ts_controls_control_panel_.controlpanel.md#endcycle)
* [exitChange](_ts_controls_control_panel_.controlpanel.md#exitchange)
* [helpChange](_ts_controls_control_panel_.controlpanel.md#helpchange)
* [isExit](_ts_controls_control_panel_.controlpanel.md#isexit)
* [isHelp](_ts_controls_control_panel_.controlpanel.md#ishelp)
* [isPaused](_ts_controls_control_panel_.controlpanel.md#ispaused)
* [isSave](_ts_controls_control_panel_.controlpanel.md#issave)
* [nextLevel](_ts_controls_control_panel_.controlpanel.md#nextlevel)
* [pauseChange](_ts_controls_control_panel_.controlpanel.md#pausechange)
* [resume](_ts_controls_control_panel_.controlpanel.md#resume)
* [saveChange](_ts_controls_control_panel_.controlpanel.md#savechange)

---

## Properties

<a id="buttonmaterial"></a>

### `<Private>` buttonMaterial

**● buttonMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/controls/control-panel.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L28)*

Controls the buttons material.

___
<a id="controlexit"></a>

### `<Private>` controlExit

**● controlExit**: *[ControlExit](_ts_controls_control_exit_.controlexit.md)*

*Defined in [ts/controls/control-panel.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L32)*

Controls the exit button.

___
<a id="controlhelp"></a>

### `<Private>` controlHelp

**● controlHelp**: *[ControlHelp](_ts_controls_control_help_.controlhelp.md)*

*Defined in [ts/controls/control-panel.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L36)*

Controls the help button.

___
<a id="controlpause"></a>

### `<Private>` controlPause

**● controlPause**: *[ControlPause](_ts_controls_control_pause_.controlpause.md)*

*Defined in [ts/controls/control-panel.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L40)*

Controls the pause button.

___
<a id="controlplay"></a>

### `<Private>` controlPlay

**● controlPlay**: *[ControlPlay](_ts_controls_control_play_.controlplay.md)*

*Defined in [ts/controls/control-panel.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L44)*

Controls the play button.

___
<a id="controlsave"></a>

### `<Private>` controlSave

**● controlSave**: *[ControlSave](_ts_controls_control_save_.controlsave.md)*

*Defined in [ts/controls/control-panel.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L48)*

Controls the save button.

___
<a id="currentcolor"></a>

### `<Private>` currentColor

**● currentColor**: *`Color`*

*Defined in [ts/controls/control-panel.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L52)*

Keeps track of level's current color

___
<a id="difficulty"></a>

### `<Private>` difficulty

**● difficulty**: *`number`*

*Defined in [ts/controls/control-panel.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L56)*

Player chosen difficulty level.

___
<a id="exit"></a>

### `<Private>` exit

**● exit**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:64](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L64)*

Tracks state of game exiting.

___
<a id="help"></a>

### `<Private>` help

**● help**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L60)*

Tracks state of game help menu.

___
<a id="panelborder"></a>

### `<Private>` panelBorder

**● panelBorder**: *`Line`*

*Defined in [ts/controls/control-panel.ts:68](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L68)*

Line mesh for border of entire panel.

___
<a id="panelbordermaterial"></a>

### `<Private>` panelBorderMaterial

**● panelBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/controls/control-panel.ts:72](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L72)*

Controls the panel's border material.

___
<a id="pause"></a>

### `<Private>` pause

**● pause**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:76](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L76)*

Tracks state of game pause.

___
<a id="save"></a>

### `<Private>` save

**● save**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:80](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L80)*

Tracks state of game save menu.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/controls/control-panel.ts:84](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L84)*

Reference to the scene, used to remove asteroid from rendering cycle once destroyed.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(hide?: *`boolean`*): `void`

*Defined in [ts/controls/control-panel.ts:187](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L187)*

At the end of each loop iteration, control panel is told to hide or not.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` hide | `boolean` |  hide the control panel if new level, so old color isn't showing. |

**Returns:** `void`

___
<a id="exitchange"></a>

###  exitChange

▸ **exitChange**(): `void`

*Defined in [ts/controls/control-panel.ts:201](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L201)*

Turns exit on.

**Returns:** `void`

___
<a id="helpchange"></a>

###  helpChange

▸ **helpChange**(newState: *`boolean`*): `void`

*Defined in [ts/controls/control-panel.ts:208](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L208)*

Alerts control panel that help button has been clicked by user.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| newState | `boolean` |  new state for isHelp. |

**Returns:** `void`

___
<a id="isexit"></a>

###  isExit

▸ **isExit**(): `boolean`

*Defined in [ts/controls/control-panel.ts:221](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L221)*

Getter for game exit state.

**Returns:** `boolean`
TRUE --> game is exiting | FALSE --> game is not exiting.

___
<a id="ishelp"></a>

###  isHelp

▸ **isHelp**(): `boolean`

*Defined in [ts/controls/control-panel.ts:228](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L228)*

Getter for game help state.

**Returns:** `boolean`
TRUE --> game is in help screen | FALSE --> game is not in help screen.

___
<a id="ispaused"></a>

###  isPaused

▸ **isPaused**(): `boolean`

*Defined in [ts/controls/control-panel.ts:238](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L238)*

Getter for game pause state.

**Returns:** `boolean`
TRUE --> game is paused | FALSE --> game is not paused.

___
<a id="issave"></a>

###  isSave

▸ **isSave**(): `boolean`

*Defined in [ts/controls/control-panel.ts:248](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L248)*

Getter for game save state.

**Returns:** `boolean`
TRUE --> game is in save screen | FALSE --> game is not in save screen.

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(color: *`Color`*): `void`

*Defined in [ts/controls/control-panel.ts:258](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L258)*

Only recreate the digits with the new color

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| color | `Color` |  level color, grabbed from the LevelHandler |

**Returns:** `void`

___
<a id="pausechange"></a>

###  pauseChange

▸ **pauseChange**(): `void`

*Defined in [ts/controls/control-panel.ts:276](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L276)*

Alerts control panel that pause button has been clicked by user.

**Returns:** `void`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `void`

*Defined in [ts/controls/control-panel.ts:286](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L286)*

**Returns:** `void`

___
<a id="savechange"></a>

###  saveChange

▸ **saveChange**(newState: *`boolean`*): `void`

*Defined in [ts/controls/control-panel.ts:302](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/controls/control-panel.ts#L302)*

Alerts control panel that save button has been clicked by user.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| newState | `boolean` |  new state for isSave. |

**Returns:** `void`

___

