[planet-funk](../README.md) > ["ts/control-panel"](../modules/_ts_control_panel_.md) > [ControlPanel](../classes/_ts_control_panel_.controlpanel.md)

# Class: ControlPanel

*__class__*: Control panel that handles all of the buttons and their states.

## Hierarchy

**ControlPanel**

## Index

### Properties

* [buttonMaterial](_ts_control_panel_.controlpanel.md#buttonmaterial)
* [controlHelp](_ts_control_panel_.controlpanel.md#controlhelp)
* [controlPause](_ts_control_panel_.controlpanel.md#controlpause)
* [controlPlay](_ts_control_panel_.controlpanel.md#controlplay)
* [currentColor](_ts_control_panel_.controlpanel.md#currentcolor)
* [difficulty](_ts_control_panel_.controlpanel.md#difficulty)
* [help](_ts_control_panel_.controlpanel.md#help)
* [panelBorder](_ts_control_panel_.controlpanel.md#panelborder)
* [panelBorderMaterial](_ts_control_panel_.controlpanel.md#panelbordermaterial)
* [pause](_ts_control_panel_.controlpanel.md#pause)
* [scene](_ts_control_panel_.controlpanel.md#scene)

### Methods

* [endCycle](_ts_control_panel_.controlpanel.md#endcycle)
* [helpChange](_ts_control_panel_.controlpanel.md#helpchange)
* [isPaused](_ts_control_panel_.controlpanel.md#ispaused)
* [nextLevel](_ts_control_panel_.controlpanel.md#nextlevel)
* [pauseChange](_ts_control_panel_.controlpanel.md#pausechange)

---

## Properties

<a id="buttonmaterial"></a>

### `<Private>` buttonMaterial

**● buttonMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/control-panel.ts:26](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L26)*

Controls the buttons material.

___
<a id="controlhelp"></a>

### `<Private>` controlHelp

**● controlHelp**: *[ControlHelp](_ts_control_help_.controlhelp.md)*

*Defined in [ts/control-panel.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L30)*

Controls the help button.

___
<a id="controlpause"></a>

### `<Private>` controlPause

**● controlPause**: *[ControlPause](_ts_control_pause_.controlpause.md)*

*Defined in [ts/control-panel.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L34)*

Controls the pause button.

___
<a id="controlplay"></a>

### `<Private>` controlPlay

**● controlPlay**: *[ControlPlay](_ts_control_play_.controlplay.md)*

*Defined in [ts/control-panel.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L38)*

Controls the play button.

___
<a id="currentcolor"></a>

### `<Private>` currentColor

**● currentColor**: *`Color`*

*Defined in [ts/control-panel.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L42)*

Keeps track of level's current color

___
<a id="difficulty"></a>

### `<Private>` difficulty

**● difficulty**: *`number`*

*Defined in [ts/control-panel.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L46)*

Player chosen difficulty level.

___
<a id="help"></a>

### `<Private>` help

**● help**: *`boolean`* = false

*Defined in [ts/control-panel.ts:50](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L50)*

Tracks state of game help menu.

___
<a id="panelborder"></a>

### `<Private>` panelBorder

**● panelBorder**: *`Line`*

*Defined in [ts/control-panel.ts:54](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L54)*

Line mesh for border of entire panel.

___
<a id="panelbordermaterial"></a>

### `<Private>` panelBorderMaterial

**● panelBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/control-panel.ts:58](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L58)*

Controls the panel's border material.

___
<a id="pause"></a>

### `<Private>` pause

**● pause**: *`boolean`* = false

*Defined in [ts/control-panel.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L62)*

Tracks state of game pause.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/control-panel.ts:66](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L66)*

Reference to the scene, used to remove asteroid from rendering cycle once destroyed.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(hide?: *`boolean`*): `void`

*Defined in [ts/control-panel.ts:150](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L150)*

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

*Defined in [ts/control-panel.ts:162](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L162)*

Alerts control panel that help button has been clicked by user.

**Returns:** `void`

___
<a id="ispaused"></a>

###  isPaused

▸ **isPaused**(): `boolean`

*Defined in [ts/control-panel.ts:180](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L180)*

Getter for game pause state.

**Returns:** `boolean`
TRUE --> game is paused | FALSE --> game is not paused.

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(color: *`Color`*): `void`

*Defined in [ts/control-panel.ts:190](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L190)*

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

*Defined in [ts/control-panel.ts:204](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/control-panel.ts#L204)*

Alerts control panel that pause button has been clicked by user.

**Returns:** `void`

___

