[planet-funk](../README.md) > ["ts/control-panel"](../modules/_ts_control_panel_.md) > [ControlPanel](../classes/_ts_control_panel_.controlpanel.md)

# Class: ControlPanel

*__class__*: Control panel that handles all of the buttons and their states.

## Hierarchy

**ControlPanel**

## Index

### Properties

* [buttonMaterial](_ts_control_panel_.controlpanel.md#buttonmaterial)
* [controlPause](_ts_control_panel_.controlpanel.md#controlpause)
* [controlPlay](_ts_control_panel_.controlpanel.md#controlplay)
* [currentColor](_ts_control_panel_.controlpanel.md#currentcolor)
* [difficulty](_ts_control_panel_.controlpanel.md#difficulty)
* [panelBorder](_ts_control_panel_.controlpanel.md#panelborder)
* [panelBorderMaterial](_ts_control_panel_.controlpanel.md#panelbordermaterial)
* [pause](_ts_control_panel_.controlpanel.md#pause)
* [scene](_ts_control_panel_.controlpanel.md#scene)

### Methods

* [endCycle](_ts_control_panel_.controlpanel.md#endcycle)
* [isPaused](_ts_control_panel_.controlpanel.md#ispaused)
* [nextLevel](_ts_control_panel_.controlpanel.md#nextlevel)
* [pauseChange](_ts_control_panel_.controlpanel.md#pausechange)

---

## Properties

<a id="buttonmaterial"></a>

### `<Private>` buttonMaterial

**● buttonMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/control-panel.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L25)*

Controls the buttons material.

___
<a id="controlpause"></a>

### `<Private>` controlPause

**● controlPause**: *[ControlPause](_ts_control_pause_.controlpause.md)*

*Defined in [ts/control-panel.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L29)*

Controls the pause button.

___
<a id="controlplay"></a>

### `<Private>` controlPlay

**● controlPlay**: *[ControlPlay](_ts_control_play_.controlplay.md)*

*Defined in [ts/control-panel.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L33)*

Controls the play button.

___
<a id="currentcolor"></a>

### `<Private>` currentColor

**● currentColor**: *`Color`*

*Defined in [ts/control-panel.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L37)*

Keeps track of level's current color

___
<a id="difficulty"></a>

### `<Private>` difficulty

**● difficulty**: *`number`*

*Defined in [ts/control-panel.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L41)*

Player chosen difficulty level.

___
<a id="panelborder"></a>

### `<Private>` panelBorder

**● panelBorder**: *`Line`*

*Defined in [ts/control-panel.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L45)*

Line mesh for border of entire panel.

___
<a id="panelbordermaterial"></a>

### `<Private>` panelBorderMaterial

**● panelBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/control-panel.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L49)*

Controls the panel's border material.

___
<a id="pause"></a>

### `<Private>` pause

**● pause**: *`boolean`* = false

*Defined in [ts/control-panel.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L53)*

Tracks state of game pause.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/control-panel.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L57)*

Reference to the scene, used to remove asteroid from rendering cycle once destroyed.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(hide?: *`boolean`*): `void`

*Defined in [ts/control-panel.ts:128](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L128)*

At the end of each loop iteration, control panel is told to hide or not.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` hide | `boolean` |  hide the control panel if new level, so old color isn't showing. |

**Returns:** `void`

___
<a id="ispaused"></a>

###  isPaused

▸ **isPaused**(): `boolean`

*Defined in [ts/control-panel.ts:140](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L140)*

Getter for game pause state.

**Returns:** `boolean`
TRUE --> game is paused | FALSE --> game is not paused.

___
<a id="nextlevel"></a>

###  nextLevel

▸ **nextLevel**(color: *`Color`*): `void`

*Defined in [ts/control-panel.ts:150](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L150)*

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

*Defined in [ts/control-panel.ts:163](https://github.com/WilliamRADFunk/planet-funk/blob/2c553a5/src/ts/control-panel.ts#L163)*

Alerts control panel that pause button has been clicked by user.

**Returns:** `void`

___

