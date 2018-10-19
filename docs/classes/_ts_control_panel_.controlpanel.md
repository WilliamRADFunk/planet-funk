[planet-funk](../README.md) > ["ts/control-panel"](../modules/_ts_control_panel_.md) > [ControlPanel](../classes/_ts_control_panel_.controlpanel.md)

# Class: ControlPanel

## Hierarchy

**ControlPanel**

## Index

### Properties

* [buttonMaterial](_ts_control_panel_.controlpanel.md#buttonmaterial)
* [difficulty](_ts_control_panel_.controlpanel.md#difficulty)
* [pause](_ts_control_panel_.controlpanel.md#pause)
* [pauseButton](_ts_control_panel_.controlpanel.md#pausebutton)
* [scene](_ts_control_panel_.controlpanel.md#scene)

### Methods

* [isPaused](_ts_control_panel_.controlpanel.md#ispaused)
* [pauseChange](_ts_control_panel_.controlpanel.md#pausechange)

---

## Properties

<a id="buttonmaterial"></a>

### `<Private>` buttonMaterial

**● buttonMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/control-panel.ts:18](https://github.com/WilliamRADFunk/planet-funk/blob/99602fd/src/ts/control-panel.ts#L18)*

Controls the buttons material.

___
<a id="difficulty"></a>

### `<Private>` difficulty

**● difficulty**: *`number`*

*Defined in [ts/control-panel.ts:22](https://github.com/WilliamRADFunk/planet-funk/blob/99602fd/src/ts/control-panel.ts#L22)*

Player chosen difficulty level.

___
<a id="pause"></a>

### `<Private>` pause

**● pause**: *`boolean`* = false

*Defined in [ts/control-panel.ts:26](https://github.com/WilliamRADFunk/planet-funk/blob/99602fd/src/ts/control-panel.ts#L26)*

Tracks state of game pause.

___
<a id="pausebutton"></a>

### `<Private>` pauseButton

**● pauseButton**: *`Mesh`*

*Defined in [ts/control-panel.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/99602fd/src/ts/control-panel.ts#L30)*

Mesh for the pause button.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/control-panel.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/99602fd/src/ts/control-panel.ts#L34)*

Reference to the scene, used to remove asteroid from rendering cycle once destroyed.

___

## Methods

<a id="ispaused"></a>

###  isPaused

▸ **isPaused**(): `boolean`

*Defined in [ts/control-panel.ts:121](https://github.com/WilliamRADFunk/planet-funk/blob/99602fd/src/ts/control-panel.ts#L121)*

Getter for game pause state.

**Returns:** `boolean`
TRUE --> game is paused | FALSE --> game is not paused.

___
<a id="pausechange"></a>

###  pauseChange

▸ **pauseChange**(): `void`

*Defined in [ts/control-panel.ts:130](https://github.com/WilliamRADFunk/planet-funk/blob/99602fd/src/ts/control-panel.ts#L130)*

Alerts control panel that pause button has been clicked by user.

**Returns:** `void`

___

