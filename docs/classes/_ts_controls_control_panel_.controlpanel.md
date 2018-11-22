[planet-funk](../README.md) > ["ts/controls/control-panel"](../modules/_ts_controls_control_panel_.md) > [ControlPanel](../classes/_ts_controls_control_panel_.controlpanel.md)

# Class: ControlPanel

*__class__*: Control panel that handles all of the buttons and their states.

## Hierarchy

**ControlPanel**

## Index

### Properties

* [buttonMaterial](_ts_controls_control_panel_.controlpanel.md#buttonmaterial)
* [controlHelp](_ts_controls_control_panel_.controlpanel.md#controlhelp)
* [controlPause](_ts_controls_control_panel_.controlpanel.md#controlpause)
* [controlPlay](_ts_controls_control_panel_.controlpanel.md#controlplay)
* [controlSave](_ts_controls_control_panel_.controlpanel.md#controlsave)
* [currentColor](_ts_controls_control_panel_.controlpanel.md#currentcolor)
* [difficulty](_ts_controls_control_panel_.controlpanel.md#difficulty)
* [help](_ts_controls_control_panel_.controlpanel.md#help)
* [panelBorder](_ts_controls_control_panel_.controlpanel.md#panelborder)
* [panelBorderMaterial](_ts_controls_control_panel_.controlpanel.md#panelbordermaterial)
* [pause](_ts_controls_control_panel_.controlpanel.md#pause)
* [scene](_ts_controls_control_panel_.controlpanel.md#scene)

### Methods

* [endCycle](_ts_controls_control_panel_.controlpanel.md#endcycle)
* [helpChange](_ts_controls_control_panel_.controlpanel.md#helpchange)
* [isHelp](_ts_controls_control_panel_.controlpanel.md#ishelp)
* [isPaused](_ts_controls_control_panel_.controlpanel.md#ispaused)
* [nextLevel](_ts_controls_control_panel_.controlpanel.md#nextlevel)
* [pauseChange](_ts_controls_control_panel_.controlpanel.md#pausechange)
* [save](_ts_controls_control_panel_.controlpanel.md#save)

---

## Properties

<a id="buttonmaterial"></a>

### `<Private>` buttonMaterial

**● buttonMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/controls/control-panel.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L27)*

Controls the buttons material.

___
<a id="controlhelp"></a>

### `<Private>` controlHelp

**● controlHelp**: *[ControlHelp](_ts_controls_control_help_.controlhelp.md)*

*Defined in [ts/controls/control-panel.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L31)*

Controls the help button.

___
<a id="controlpause"></a>

### `<Private>` controlPause

**● controlPause**: *[ControlPause](_ts_controls_control_pause_.controlpause.md)*

*Defined in [ts/controls/control-panel.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L35)*

Controls the pause button.

___
<a id="controlplay"></a>

### `<Private>` controlPlay

**● controlPlay**: *[ControlPlay](_ts_controls_control_play_.controlplay.md)*

*Defined in [ts/controls/control-panel.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L39)*

Controls the play button.

___
<a id="controlsave"></a>

### `<Private>` controlSave

**● controlSave**: *[ControlSave](_ts_controls_control_save_.controlsave.md)*

*Defined in [ts/controls/control-panel.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L43)*

Controls the save button.

___
<a id="currentcolor"></a>

### `<Private>` currentColor

**● currentColor**: *`Color`*

*Defined in [ts/controls/control-panel.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L47)*

Keeps track of level's current color

___
<a id="difficulty"></a>

### `<Private>` difficulty

**● difficulty**: *`number`*

*Defined in [ts/controls/control-panel.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L51)*

Player chosen difficulty level.

___
<a id="help"></a>

### `<Private>` help

**● help**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:55](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L55)*

Tracks state of game help menu.

___
<a id="panelborder"></a>

### `<Private>` panelBorder

**● panelBorder**: *`Line`*

*Defined in [ts/controls/control-panel.ts:59](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L59)*

Line mesh for border of entire panel.

___
<a id="panelbordermaterial"></a>

### `<Private>` panelBorderMaterial

**● panelBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/controls/control-panel.ts:63](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L63)*

Controls the panel's border material.

___
<a id="pause"></a>

### `<Private>` pause

**● pause**: *`boolean`* = false

*Defined in [ts/controls/control-panel.ts:67](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L67)*

Tracks state of game pause.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/controls/control-panel.ts:71](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L71)*

Reference to the scene, used to remove asteroid from rendering cycle once destroyed.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(hide?: *`boolean`*): `void`

*Defined in [ts/controls/control-panel.ts:166](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L166)*

At the end of each loop iteration, control panel is told to hide or not.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` hide | `boolean` |  hide the control panel if new level, so old color isn't showing. |

**Returns:** `void`

___
<a id="helpchange"></a>

###  helpChange

▸ **helpChange**(): `void`

*Defined in [ts/controls/control-panel.ts:179](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L179)*

Alerts control panel that help button has been clicked by user.

**Returns:** `void`

___
<a id="ishelp"></a>

###  isHelp

▸ **isHelp**(): `boolean`

*Defined in [ts/controls/control-panel.ts:198](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L198)*

Getter for game help state.

**Returns:** `boolean`
TRUE --> game is in help screen | FALSE --> game is not in help screen.

___
<a id="ispaused"></a>

###  isPaused

▸ **isPaused**(): `boolean`

*Defined in [ts/controls/control-panel.ts:208](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L208)*

Getter for game pause state.

**Returns:** `boolean`
TRUE --> game is paused | FALSE --> game is not paused.

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(color: *`Color`*): `void`

*Defined in [ts/controls/control-panel.ts:218](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L218)*

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

*Defined in [ts/controls/control-panel.ts:234](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L234)*

Alerts control panel that pause button has been clicked by user.

**Returns:** `void`

___
<a id="save"></a>

###  save

▸ **save**(): `void`

*Defined in [ts/controls/control-panel.ts:246](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/controls/control-panel.ts#L246)*

**Returns:** `void`

___

