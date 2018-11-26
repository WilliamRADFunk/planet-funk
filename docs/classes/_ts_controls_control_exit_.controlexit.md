[planet-funk](../README.md) > ["ts/controls/control-exit"](../modules/_ts_controls_control_exit_.md) > [ControlExit](../classes/_ts_controls_control_exit_.controlexit.md)

# Class: ControlExit

*__class__*: Exit button that draws and maintains click area for exit button.

## Hierarchy

**ControlExit**

## Index

### Properties

* [exitArrowMaterial](_ts_controls_control_exit_.controlexit.md#exitarrowmaterial)
* [exitButton](_ts_controls_control_exit_.controlexit.md#exitbutton)
* [exitButtonBorderMaterial](_ts_controls_control_exit_.controlexit.md#exitbuttonbordermaterial)

### Methods

* [activate](_ts_controls_control_exit_.controlexit.md#activate)
* [changeColor](_ts_controls_control_exit_.controlexit.md#changecolor)
* [changeOpacity](_ts_controls_control_exit_.controlexit.md#changeopacity)
* [deactivate](_ts_controls_control_exit_.controlexit.md#deactivate)
* [hide](_ts_controls_control_exit_.controlexit.md#hide)
* [show](_ts_controls_control_exit_.controlexit.md#show)

---

## Properties

<a id="exitarrowmaterial"></a>

### `<Private>` exitArrowMaterial

**● exitArrowMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/controls/control-exit.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/controls/control-exit.ts#L28)*

Material for the arrow portion of the button.

___
<a id="exitbutton"></a>

### `<Private>` exitButton

**● exitButton**: *`Mesh`*

*Defined in [ts/controls/control-exit.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/controls/control-exit.ts#L24)*

Mesh for the exit button.

___
<a id="exitbuttonbordermaterial"></a>

### `<Private>` exitButtonBorderMaterial

**● exitButtonBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/controls/control-exit.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/controls/control-exit.ts#L32)*

Controls the exit button's border material.

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/controls/control-exit.ts:114](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/controls/control-exit.ts#L114)*

Makes necessary changes to exit button when exit mode is activated.

**Returns:** `void`

___
<a id="changecolor"></a>

###  changeColor

▸ **changeColor**(color: *`Color`*): `void`

*Defined in [ts/controls/control-exit.ts:121](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/controls/control-exit.ts#L121)*

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

*Defined in [ts/controls/control-exit.ts:129](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/controls/control-exit.ts#L129)*

Changes button opacity.

**Parameters:**

| Param | Type |
| ------ | ------ |
| opacity | `number` |

**Returns:** `void`

___
<a id="deactivate"></a>

###  deactivate

▸ **deactivate**(): `void`

*Defined in [ts/controls/control-exit.ts:136](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/controls/control-exit.ts#L136)*

Makes necessary changes to exit button when exit mode is deactivated.

**Returns:** `void`

___
<a id="hide"></a>

###  hide

▸ **hide**(): `void`

*Defined in [ts/controls/control-exit.ts:143](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/controls/control-exit.ts#L143)*

Hide the exit button (state related). Default is to show.

**Returns:** `void`

___
<a id="show"></a>

###  show

▸ **show**(): `void`

*Defined in [ts/controls/control-exit.ts:150](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/controls/control-exit.ts#L150)*

Show the exit button (state related). Default is to show.

**Returns:** `void`

___

