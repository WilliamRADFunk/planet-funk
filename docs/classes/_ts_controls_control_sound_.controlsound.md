[planet-funk](../README.md) > ["ts/controls/control-sound"](../modules/_ts_controls_control_sound_.md) > [ControlSound](../classes/_ts_controls_control_sound_.controlsound.md)

# Class: ControlSound

*__class__*: Sound button that draws and maintains click area for sound button.

## Hierarchy

**ControlSound**

## Index

### Properties

* [btnMat](_ts_controls_control_sound_.controlsound.md#btnmat)
* [soundButton](_ts_controls_control_sound_.controlsound.md#soundbutton)
* [soundButtonBorderMaterial](_ts_controls_control_sound_.controlsound.md#soundbuttonbordermaterial)

### Methods

* [changeColor](_ts_controls_control_sound_.controlsound.md#changecolor)
* [changeOpacity](_ts_controls_control_sound_.controlsound.md#changeopacity)
* [hide](_ts_controls_control_sound_.controlsound.md#hide)
* [show](_ts_controls_control_sound_.controlsound.md#show)

---

## Properties

<a id="btnmat"></a>

### `<Private>` btnMat

**● btnMat**: *`MeshBasicMaterial`*

*Defined in [ts/controls/control-sound.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-sound.ts#L23)*

Material for the speaker and lines portion of the button.

___
<a id="soundbutton"></a>

### `<Private>` soundButton

**● soundButton**: *`Mesh`*

*Defined in [ts/controls/control-sound.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-sound.ts#L27)*

Mesh for the sound button.

___
<a id="soundbuttonbordermaterial"></a>

### `<Private>` soundButtonBorderMaterial

**● soundButtonBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/controls/control-sound.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-sound.ts#L31)*

Controls the sound button's border material.

___

## Methods

<a id="changecolor"></a>

###  changeColor

▸ **changeColor**(color: *`Color`*): `void`

*Defined in [ts/controls/control-sound.ts:146](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-sound.ts#L146)*

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

*Defined in [ts/controls/control-sound.ts:154](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-sound.ts#L154)*

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

*Defined in [ts/controls/control-sound.ts:162](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-sound.ts#L162)*

Hide the sound button (state related). Default is to show.

**Returns:** `void`

___
<a id="show"></a>

###  show

▸ **show**(): `void`

*Defined in [ts/controls/control-sound.ts:169](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-sound.ts#L169)*

Show the sound button (state related). Default is to show.

**Returns:** `void`

___

