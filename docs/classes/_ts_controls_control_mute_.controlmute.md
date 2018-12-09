[planet-funk](../README.md) > ["ts/controls/control-mute"](../modules/_ts_controls_control_mute_.md) > [ControlMute](../classes/_ts_controls_control_mute_.controlmute.md)

# Class: ControlMute

*__class__*: Mute button that draws and maintains click area for mute button.

## Hierarchy

**ControlMute**

## Index

### Properties

* [btnMat](_ts_controls_control_mute_.controlmute.md#btnmat)
* [muteButton](_ts_controls_control_mute_.controlmute.md#mutebutton)
* [muteButtonBorderMaterial](_ts_controls_control_mute_.controlmute.md#mutebuttonbordermaterial)

### Methods

* [changeColor](_ts_controls_control_mute_.controlmute.md#changecolor)
* [changeOpacity](_ts_controls_control_mute_.controlmute.md#changeopacity)
* [hide](_ts_controls_control_mute_.controlmute.md#hide)
* [show](_ts_controls_control_mute_.controlmute.md#show)

---

## Properties

<a id="btnmat"></a>

### `<Private>` btnMat

**● btnMat**: *`MeshBasicMaterial`*

*Defined in [ts/controls/control-mute.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-mute.ts#L23)*

Material for the speaker and x portion of the button.

___
<a id="mutebutton"></a>

### `<Private>` muteButton

**● muteButton**: *`Mesh`*

*Defined in [ts/controls/control-mute.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-mute.ts#L27)*

Mesh for the mute button.

___
<a id="mutebuttonbordermaterial"></a>

### `<Private>` muteButtonBorderMaterial

**● muteButtonBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/controls/control-mute.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-mute.ts#L31)*

Controls the mute button's border material.

___

## Methods

<a id="changecolor"></a>

###  changeColor

▸ **changeColor**(color: *`Color`*): `void`

*Defined in [ts/controls/control-mute.ts:140](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-mute.ts#L140)*

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

*Defined in [ts/controls/control-mute.ts:148](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-mute.ts#L148)*

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

*Defined in [ts/controls/control-mute.ts:156](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-mute.ts#L156)*

Hide the mute button (state related). Default is to show.

**Returns:** `void`

___
<a id="show"></a>

###  show

▸ **show**(): `void`

*Defined in [ts/controls/control-mute.ts:163](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-mute.ts#L163)*

Show the mute button (state related). Default is to show.

**Returns:** `void`

___

