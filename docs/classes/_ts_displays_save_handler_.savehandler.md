[planet-funk](../README.md) > ["ts/displays/save-handler"](../modules/_ts_displays_save_handler_.md) > [SaveHandler](../classes/_ts_displays_save_handler_.savehandler.md)

# Class: SaveHandler

*__class__*: Save code screen that handles the shimmer effect and the displaying of save code.

## Hierarchy

**SaveHandler**

## Index

### Properties

* [activeMaterial](_ts_displays_save_handler_.savehandler.md#activematerial)
* [barrierReturn](_ts_displays_save_handler_.savehandler.md#barrierreturn)
* [code](_ts_displays_save_handler_.savehandler.md#code)
* [codeBackings](_ts_displays_save_handler_.savehandler.md#codebackings)
* [codeMaterials](_ts_displays_save_handler_.savehandler.md#codematerials)
* [digits](_ts_displays_save_handler_.savehandler.md#digits)
* [opacityDirection](_ts_displays_save_handler_.savehandler.md#opacitydirection)
* [return](_ts_displays_save_handler_.savehandler.md#return)
* [returnGeometry](_ts_displays_save_handler_.savehandler.md#returngeometry)
* [saveBacking](_ts_displays_save_handler_.savehandler.md#savebacking)
* [saveFont](_ts_displays_save_handler_.savehandler.md#savefont)
* [saveMaterial](_ts_displays_save_handler_.savehandler.md#savematerial)
* [scene](_ts_displays_save_handler_.savehandler.md#scene)
* [startPos](_ts_displays_save_handler_.savehandler.md#startpos)
* [textHeaderParams](_ts_displays_save_handler_.savehandler.md#textheaderparams)

### Methods

* [activate](_ts_displays_save_handler_.savehandler.md#activate)
* [deactivate](_ts_displays_save_handler_.savehandler.md#deactivate)
* [endCycle](_ts_displays_save_handler_.savehandler.md#endcycle)
* [showSaveCode](_ts_displays_save_handler_.savehandler.md#showsavecode)

---

## Properties

<a id="activematerial"></a>

### `<Private>` activeMaterial

**● activeMaterial**: *`number`* = 0

*Defined in [ts/displays/save-handler.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L25)*

Counter for which digit backing material to change opacity for.

___
<a id="barrierreturn"></a>

### `<Private>` barrierReturn

**● barrierReturn**: *`Mesh`*

*Defined in [ts/displays/save-handler.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L29)*

Click surface for the Return button.

___
<a id="code"></a>

### `<Private>` code

**● code**: *`Mesh`[]* =  []

*Defined in [ts/displays/save-handler.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L33)*

All the digits of the save code from left to right.

___
<a id="codebackings"></a>

### `<Private>` codeBackings

**● codeBackings**: *`Mesh`[]* =  []

*Defined in [ts/displays/save-handler.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L37)*

All the digit backings behind the save code from left to right.

___
<a id="codematerials"></a>

### `<Private>` codeMaterials

**● codeMaterials**: *`MeshLambertMaterial`[]* =  []

*Defined in [ts/displays/save-handler.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L41)*

All the digit backing materials behind the save code from left to right.

___
<a id="digits"></a>

### `<Private>` digits

**● digits**: *`TextGeometry`[]* =  []

*Defined in [ts/displays/save-handler.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L45)*

All the digits of the save code in order (0, 1, 2, 3, ..., C, D, E, F).

___
<a id="opacitydirection"></a>

### `<Private>` opacityDirection

**● opacityDirection**: *`number`* =  -1

*Defined in [ts/displays/save-handler.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L49)*

Multiplier to decrease by current number or increase, using the sign of this variable.

___
<a id="return"></a>

### `<Private>` return

**● return**: *`Mesh`*

*Defined in [ts/displays/save-handler.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L53)*

Controls the overall rendering of the return button display

___
<a id="returngeometry"></a>

### `<Private>` returnGeometry

**● returnGeometry**: *`TextGeometry`*

*Defined in [ts/displays/save-handler.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L57)*

Controls size and shape of the return button text

___
<a id="savebacking"></a>

### `<Private>` saveBacking

**● saveBacking**: *`Mesh`*

*Defined in [ts/displays/save-handler.ts:61](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L61)*

The background section of the save screen.

___
<a id="savefont"></a>

### `<Private>` saveFont

**● saveFont**: *`Font`*

*Defined in [ts/displays/save-handler.ts:65](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L65)*

Loaded font for display text.

___
<a id="savematerial"></a>

### `<Private>` saveMaterial

**● saveMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/save-handler.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L69)*

Controls the color of the text display material

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/displays/save-handler.ts:73](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L73)*

Reference to the scene, used to remove and reinstall text geometries.

___
<a id="startpos"></a>

### `<Private>` startPos

**● startPos**: *[`number`, `number`, `number`]* =  [0, 0, 0]

*Defined in [ts/displays/save-handler.ts:77](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L77)*

Tracks starting coordinates off which all items are based.

___
<a id="textheaderparams"></a>

### `<Private>` textHeaderParams

**● textHeaderParams**: *`TextGeometryParameters`*

*Defined in [ts/displays/save-handler.ts:81](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L81)*

Since most of the text on the menu has same parameters, use one variable.

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(code: *`string`[]*): `void`

*Defined in [ts/displays/save-handler.ts:149](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L149)*

Turns on all save screen related graphics

**Parameters:**

| Param | Type |
| ------ | ------ |
| code | `string`[] |

**Returns:** `void`

___
<a id="deactivate"></a>

###  deactivate

▸ **deactivate**(): `void`

*Defined in [ts/displays/save-handler.ts:160](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L160)*

Turns off all save screen related graphics

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/displays/save-handler.ts:170](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L170)*

Creates the shimmer behind the save code.

**Returns:** `void`

___
<a id="showsavecode"></a>

###  showSaveCode

▸ **showSaveCode**(code: *`string`[]*): `void`

*Defined in [ts/displays/save-handler.ts:194](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/displays/save-handler.ts#L194)*

Paints the screen with the save code characters.

**Parameters:**

| Param | Type |
| ------ | ------ |
| code | `string`[] |

**Returns:** `void`

___

