[planet-funk](../README.md) > ["ts/controls/control-pause"](../modules/_ts_controls_control_pause_.md) > [ControlPause](../classes/_ts_controls_control_pause_.controlpause.md)

# Class: ControlPause

*__class__*: Pause button that draws and maintains click area for pause button.

## Hierarchy

**ControlPause**

## Index

### Properties

* [pauseButton](_ts_controls_control_pause_.controlpause.md#pausebutton)
* [pauseButtonBorderMaterial](_ts_controls_control_pause_.controlpause.md#pausebuttonbordermaterial)

### Methods

* [changeColor](_ts_controls_control_pause_.controlpause.md#changecolor)
* [changeOpacity](_ts_controls_control_pause_.controlpause.md#changeopacity)
* [hide](_ts_controls_control_pause_.controlpause.md#hide)
* [show](_ts_controls_control_pause_.controlpause.md#show)

---

## Properties

<a id="pausebutton"></a>

### `<Private>` pauseButton

**● pauseButton**: *`Mesh`*

*Defined in [ts/controls/control-pause.ts:20](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-pause.ts#L20)*

Mesh for the pause button.

___
<a id="pausebuttonbordermaterial"></a>

### `<Private>` pauseButtonBorderMaterial

**● pauseButtonBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/controls/control-pause.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-pause.ts#L24)*

Controls the pause button's border material.

___

## Methods

<a id="changecolor"></a>

###  changeColor

▸ **changeColor**(color: *`Color`*): `void`

*Defined in [ts/controls/control-pause.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-pause.ts#L78)*

Changes button material to match new level color.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| color | `Color` |  threeJS color value to use on button |

**Returns:** `void`

___
<a id="changeopacity"></a>

###  changeOpacity

▸ **changeOpacity**(opacity: *`number`*): `void`

*Defined in [ts/controls/control-pause.ts:85](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-pause.ts#L85)*

Changes button opacity.

**Parameters:**

| Param | Type |
| ------ | ------ |
| opacity | `number` |

**Returns:** `void`

___
<a id="hide"></a>

###  hide

▸ **hide**(): `void`

*Defined in [ts/controls/control-pause.ts:92](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-pause.ts#L92)*

Hide the pause button (state related). Default is to show.

**Returns:** `void`

___
<a id="show"></a>

###  show

▸ **show**(): `void`

*Defined in [ts/controls/control-pause.ts:99](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/controls/control-pause.ts#L99)*

Show the pause button (state related). Default is to show.

**Returns:** `void`

___

