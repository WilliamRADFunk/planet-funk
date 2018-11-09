[planet-funk](../README.md) > ["ts/control-help"](../modules/_ts_control_help_.md) > [ControlHelp](../classes/_ts_control_help_.controlhelp.md)

# Class: ControlHelp

*__class__*: Help button that draws and maintains click area for help button.

## Hierarchy

**ControlHelp**

## Index

### Properties

* [helpButton](_ts_control_help_.controlhelp.md#helpbutton)
* [helpButtonBorderMaterial](_ts_control_help_.controlhelp.md#helpbuttonbordermaterial)
* [questionMarkMaterial](_ts_control_help_.controlhelp.md#questionmarkmaterial)

### Methods

* [activate](_ts_control_help_.controlhelp.md#activate)
* [changeColor](_ts_control_help_.controlhelp.md#changecolor)
* [changeOpacity](_ts_control_help_.controlhelp.md#changeopacity)
* [deactivate](_ts_control_help_.controlhelp.md#deactivate)
* [hide](_ts_control_help_.controlhelp.md#hide)
* [show](_ts_control_help_.controlhelp.md#show)

---

## Properties

<a id="helpbutton"></a>

### `<Private>` helpButton

**● helpButton**: *`Mesh`*

*Defined in [ts/control-help.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/2cfc051/src/ts/control-help.ts#L24)*

Mesh for the help button.

___
<a id="helpbuttonbordermaterial"></a>

### `<Private>` helpButtonBorderMaterial

**● helpButtonBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/control-help.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/2cfc051/src/ts/control-help.ts#L28)*

Controls the help button's border material.

___
<a id="questionmarkmaterial"></a>

###  questionMarkMaterial

**● questionMarkMaterial**: *`any`*

*Defined in [ts/control-help.ts:20](https://github.com/WilliamRADFunk/planet-funk/blob/2cfc051/src/ts/control-help.ts#L20)*

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/control-help.ts:95](https://github.com/WilliamRADFunk/planet-funk/blob/2cfc051/src/ts/control-help.ts#L95)*

**Returns:** `void`

___
<a id="changecolor"></a>

###  changeColor

▸ **changeColor**(color: *`Color`*): `void`

*Defined in [ts/control-help.ts:102](https://github.com/WilliamRADFunk/planet-funk/blob/2cfc051/src/ts/control-help.ts#L102)*

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

*Defined in [ts/control-help.ts:110](https://github.com/WilliamRADFunk/planet-funk/blob/2cfc051/src/ts/control-help.ts#L110)*

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

*Defined in [ts/control-help.ts:114](https://github.com/WilliamRADFunk/planet-funk/blob/2cfc051/src/ts/control-help.ts#L114)*

**Returns:** `void`

___
<a id="hide"></a>

###  hide

▸ **hide**(): `void`

*Defined in [ts/control-help.ts:121](https://github.com/WilliamRADFunk/planet-funk/blob/2cfc051/src/ts/control-help.ts#L121)*

Hide the help button (state related). Default is to show.

**Returns:** `void`

___
<a id="show"></a>

###  show

▸ **show**(): `void`

*Defined in [ts/control-help.ts:128](https://github.com/WilliamRADFunk/planet-funk/blob/2cfc051/src/ts/control-help.ts#L128)*

Show the help button (state related). Default is to show.

**Returns:** `void`

___

