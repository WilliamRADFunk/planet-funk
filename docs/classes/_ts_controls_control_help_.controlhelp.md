[planet-funk](../README.md) > ["ts/controls/control-help"](../modules/_ts_controls_control_help_.md) > [ControlHelp](../classes/_ts_controls_control_help_.controlhelp.md)

# Class: ControlHelp

*__class__*: Help button that draws and maintains click area for help button.

## Hierarchy

**ControlHelp**

## Index

### Properties

* [helpButton](_ts_controls_control_help_.controlhelp.md#helpbutton)
* [helpButtonBorderMaterial](_ts_controls_control_help_.controlhelp.md#helpbuttonbordermaterial)
* [questionMarkMaterial](_ts_controls_control_help_.controlhelp.md#questionmarkmaterial)

### Methods

* [activate](_ts_controls_control_help_.controlhelp.md#activate)
* [changeColor](_ts_controls_control_help_.controlhelp.md#changecolor)
* [changeOpacity](_ts_controls_control_help_.controlhelp.md#changeopacity)
* [deactivate](_ts_controls_control_help_.controlhelp.md#deactivate)
* [hide](_ts_controls_control_help_.controlhelp.md#hide)
* [show](_ts_controls_control_help_.controlhelp.md#show)

---

## Properties

<a id="helpbutton"></a>

### `<Private>` helpButton

**● helpButton**: *`Mesh`*

*Defined in [ts/controls/control-help.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-help.ts#L23)*

Mesh for the help button.

___
<a id="helpbuttonbordermaterial"></a>

### `<Private>` helpButtonBorderMaterial

**● helpButtonBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/controls/control-help.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-help.ts#L27)*

Controls the help button's border material.

___
<a id="questionmarkmaterial"></a>

### `<Private>` questionMarkMaterial

**● questionMarkMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/controls/control-help.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-help.ts#L31)*

Controls the help button's question mark material.

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/controls/control-help.ts:101](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-help.ts#L101)*

Makes necessary changes to help button when help mode is activated.

**Returns:** `void`

___
<a id="changecolor"></a>

###  changeColor

▸ **changeColor**(color: *`Color`*): `void`

*Defined in [ts/controls/control-help.ts:108](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-help.ts#L108)*

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

*Defined in [ts/controls/control-help.ts:116](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-help.ts#L116)*

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

*Defined in [ts/controls/control-help.ts:123](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-help.ts#L123)*

Makes necessary changes to help button when help mode is deactivated.

**Returns:** `void`

___
<a id="hide"></a>

###  hide

▸ **hide**(): `void`

*Defined in [ts/controls/control-help.ts:130](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-help.ts#L130)*

Hide the help button (state related). Default is to show.

**Returns:** `void`

___
<a id="show"></a>

###  show

▸ **show**(): `void`

*Defined in [ts/controls/control-help.ts:137](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/controls/control-help.ts#L137)*

Show the help button (state related). Default is to show.

**Returns:** `void`

___

