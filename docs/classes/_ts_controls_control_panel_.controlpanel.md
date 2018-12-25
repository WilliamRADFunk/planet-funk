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
* [controlMute](_ts_controls_control_panel_.controlpanel.md#controlmute)
* [controlPause](_ts_controls_control_panel_.controlpanel.md#controlpause)
* [controlPlay](_ts_controls_control_panel_.controlpanel.md#controlplay)
* [controlSave](_ts_controls_control_panel_.controlpanel.md#controlsave)
* [controlSound](_ts_controls_control_panel_.controlpanel.md#controlsound)
* [currentColor](_ts_controls_control_panel_.controlpanel.md#currentcolor)
* [difficulty](_ts_controls_control_panel_.controlpanel.md#difficulty)
* [disabledTextMaterial](_ts_controls_control_panel_.controlpanel.md#disabledtextmaterial)
* [exit](_ts_controls_control_panel_.controlpanel.md#exit)
* [help](_ts_controls_control_panel_.controlpanel.md#help)
* [mute](_ts_controls_control_panel_.controlpanel.md#mute)
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
* [muteChange](_ts_controls_control_panel_.controlpanel.md#mutechange)
* [nextLevel](_ts_controls_control_panel_.controlpanel.md#nextlevel)
* [pauseChange](_ts_controls_control_panel_.controlpanel.md#pausechange)
* [resume](_ts_controls_control_panel_.controlpanel.md#resume)
* [saveChange](_ts_controls_control_panel_.controlpanel.md#savechange)

---

## Properties

<a id="buttonmaterial"></a>

### `<Private>` buttonMaterial

**● buttonMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/controls/control-panel.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L34)*

Controls the buttons material.

___
<a id="controlexit"></a>

### `<Private>` controlExit

**● controlExit**: *[ControlExit](_ts_controls_control_exit_.controlexit.md)*

*Defined in [ts/controls/control-panel.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L38)*

Controls the exit button.

___
<a id="controlhelp"></a>

### `<Private>` controlHelp

**● controlHelp**: *[ControlHelp](_ts_controls_control_help_.controlhelp.md)*

*Defined in [ts/controls/control-panel.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L42)*

Controls the help button.

___
<a id="controlmute"></a>

### `<Private>` controlMute

**● controlMute**: *[ControlMute](_ts_controls_control_mute_.controlmute.md)*

*Defined in [ts/controls/control-panel.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L46)*

Controls the mute button.

___
<a id="controlpause"></a>

### `<Private>` controlPause

**● controlPause**: *[ControlPause](_ts_controls_control_pause_.controlpause.md)*

*Defined in [ts/controls/control-panel.ts:50](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L50)*

Controls the pause button.

___
<a id="controlplay"></a>

### `<Private>` controlPlay

**● controlPlay**: *[ControlPlay](_ts_controls_control_play_.controlplay.md)*

*Defined in [ts/controls/control-panel.ts:54](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L54)*

Controls the play button.

___
<a id="controlsave"></a>

### `<Private>` controlSave

**● controlSave**: *[ControlSave](_ts_controls_control_save_.controlsave.md)*

*Defined in [ts/controls/control-panel.ts:58](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L58)*

Controls the save button.

___
<a id="controlsound"></a>

### `<Private>` controlSound

**● controlSound**: *[ControlSound](_ts_controls_control_sound_.controlsound.md)*

*Defined in [ts/controls/control-panel.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L62)*

Controls the sound button.

___
<a id="currentcolor"></a>

### `<Private>` currentColor

**● currentColor**: *`Color`*

*Defined in [ts/controls/control-panel.ts:66](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L66)*

Keeps track of level's current color

___
<a id="difficulty"></a>

### `<Private>` difficulty

**● difficulty**: *`number`*

*Defined in [ts/controls/control-panel.ts:70](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L70)*

Player chosen difficulty level.

___
<a id="disabledtextmaterial"></a>

### `<Private>` disabledTextMaterial

**● disabledTextMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/controls/control-panel.ts:74](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L74)*

Material for the disabled button text explanation.

___
<a id="exit"></a>

### `<Private>` exit

**● exit**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L78)*

Tracks state of game exiting.

___
<a id="help"></a>

### `<Private>` help

**● help**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:82](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L82)*

Tracks state of game help menu.

___
<a id="mute"></a>

### `<Private>` mute

**● mute**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L86)*

Tracks state of sound muting.

___
<a id="panelborder"></a>

### `<Private>` panelBorder

**● panelBorder**: *`Line`*

*Defined in [ts/controls/control-panel.ts:90](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L90)*

Line mesh for border of entire panel.

___
<a id="panelbordermaterial"></a>

### `<Private>` panelBorderMaterial

**● panelBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/controls/control-panel.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L94)*

Controls the panel's border material.

___
<a id="pause"></a>

### `<Private>` pause

**● pause**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:98](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L98)*

Tracks state of game pause.

___
<a id="save"></a>

### `<Private>` save

**● save**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:102](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L102)*

Tracks state of game save menu.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/controls/control-panel.ts:106](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L106)*

Reference to the scene, used to remove asteroid from rendering cycle once destroyed.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(hide?: *`boolean`*): `void`

*Defined in [ts/controls/control-panel.ts:257](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L257)*

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

*Defined in [ts/controls/control-panel.ts:274](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L274)*

Turns exit on.

**Returns:** `void`

___
<a id="helpchange"></a>

###  helpChange

▸ **helpChange**(newState: *`boolean`*): `void`

*Defined in [ts/controls/control-panel.ts:285](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L285)*

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

*Defined in [ts/controls/control-panel.ts:313](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L313)*

Getter for game exit state.

**Returns:** `boolean`
TRUE --> game is exiting | FALSE --> game is not exiting.

___
<a id="ishelp"></a>

###  isHelp

▸ **isHelp**(): `boolean`

*Defined in [ts/controls/control-panel.ts:320](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L320)*

Getter for game help state.

**Returns:** `boolean`
TRUE --> game is in help screen | FALSE --> game is not in help screen.

___
<a id="ispaused"></a>

###  isPaused

▸ **isPaused**(): `boolean`

*Defined in [ts/controls/control-panel.ts:330](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L330)*

Getter for game pause state.

**Returns:** `boolean`
TRUE --> game is paused | FALSE --> game is not paused.

___
<a id="issave"></a>

###  isSave

▸ **isSave**(): `boolean`

*Defined in [ts/controls/control-panel.ts:340](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L340)*

Getter for game save state.

**Returns:** `boolean`
TRUE --> game is in save screen | FALSE --> game is not in save screen.

___
<a id="mutechange"></a>

###  muteChange

▸ **muteChange**(): `void`

*Defined in [ts/controls/control-panel.ts:297](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L297)*

Alerts control panel that mute button has been clicked by user.

**Returns:** `void`

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(color: *`Color`*): `void`

*Defined in [ts/controls/control-panel.ts:350](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L350)*

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

*Defined in [ts/controls/control-panel.ts:380](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L380)*

Alerts control panel that pause button has been clicked by user.

**Returns:** `void`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `void`

*Defined in [ts/controls/control-panel.ts:391](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L391)*

**Returns:** `void`

___
<a id="savechange"></a>

###  saveChange

▸ **saveChange**(newState: *`boolean`*): `void`

*Defined in [ts/controls/control-panel.ts:408](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-panel.ts#L408)*

Alerts control panel that save button has been clicked by user.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| newState | `boolean` |  new state for isSave. |

**Returns:** `void`

___

