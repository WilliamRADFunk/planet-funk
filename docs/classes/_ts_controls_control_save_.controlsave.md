[planet-funk](../README.md) > ["ts/controls/control-save"](../modules/_ts_controls_control_save_.md) > [ControlSave](../classes/_ts_controls_control_save_.controlsave.md)

# Class: ControlSave

*__class__*: Save button that draws and maintains click area for save button.

## Hierarchy

**ControlSave**

## Index

### Properties

* [saveButton](_ts_controls_control_save_.controlsave.md#savebutton)
* [saveButtonBorderMaterial](_ts_controls_control_save_.controlsave.md#savebuttonbordermaterial)
* [saveDiskMaterial](_ts_controls_control_save_.controlsave.md#savediskmaterial)

### Methods

* [activate](_ts_controls_control_save_.controlsave.md#activate)
* [changeColor](_ts_controls_control_save_.controlsave.md#changecolor)
* [changeOpacity](_ts_controls_control_save_.controlsave.md#changeopacity)
* [deactivate](_ts_controls_control_save_.controlsave.md#deactivate)
* [hide](_ts_controls_control_save_.controlsave.md#hide)
* [show](_ts_controls_control_save_.controlsave.md#show)

---

## Properties

<a id="savebutton"></a>

### `<Private>` saveButton

**● saveButton**: *`Mesh`*

*Defined in [ts/controls/control-save.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/controls/control-save.ts#L24)*

Mesh for the save button.

___
<a id="savebuttonbordermaterial"></a>

### `<Private>` saveButtonBorderMaterial

**● saveButtonBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/controls/control-save.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/controls/control-save.ts#L32)*

Controls the save button's border material.

___
<a id="savediskmaterial"></a>

### `<Private>` saveDiskMaterial

**● saveDiskMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/controls/control-save.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/controls/control-save.ts#L28)*

Material for the disk portion of the button.

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/controls/control-save.ts:115](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/controls/control-save.ts#L115)*

Makes necessary changes to save button when save mode is activated.

**Returns:** `void`

___
<a id="changecolor"></a>

###  changeColor

▸ **changeColor**(color: *`Color`*): `void`

*Defined in [ts/controls/control-save.ts:122](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/controls/control-save.ts#L122)*

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

*Defined in [ts/controls/control-save.ts:130](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/controls/control-save.ts#L130)*

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

*Defined in [ts/controls/control-save.ts:137](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/controls/control-save.ts#L137)*

Makes necessary changes to save button when save mode is deactivated.

**Returns:** `void`

___
<a id="hide"></a>

###  hide

▸ **hide**(): `void`

*Defined in [ts/controls/control-save.ts:144](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/controls/control-save.ts#L144)*

Hide the save button (state related). Default is to show.

**Returns:** `void`

___
<a id="show"></a>

###  show

▸ **show**(): `void`

*Defined in [ts/controls/control-save.ts:151](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/controls/control-save.ts#L151)*

Show the save button (state related). Default is to show.

**Returns:** `void`

___

