[planet-funk](../README.md) > ["ts/displays/load-handler"](../modules/_ts_displays_load_handler_.md) > [LoadHandler](../classes/_ts_displays_load_handler_.loadhandler.md)

# Class: LoadHandler

*__class__*: Load code screen that handles the shimmer effect and the displaying of entering of load code.

## Hierarchy

**LoadHandler**

## Index

### Properties

* [activeMaterial](_ts_displays_load_handler_.loadhandler.md#activematerial)
* [barrierLoad](_ts_displays_load_handler_.loadhandler.md#barrierload)
* [barrierReturn](_ts_displays_load_handler_.loadhandler.md#barrierreturn)
* [code](_ts_displays_load_handler_.loadhandler.md#code)
* [codeBackings](_ts_displays_load_handler_.loadhandler.md#codebackings)
* [codeMaterials](_ts_displays_load_handler_.loadhandler.md#codematerials)
* [controlTexts](_ts_displays_load_handler_.loadhandler.md#controltexts)
* [controls](_ts_displays_load_handler_.loadhandler.md#controls)
* [currentEnteredCode](_ts_displays_load_handler_.loadhandler.md#currententeredcode)
* [digits](_ts_displays_load_handler_.loadhandler.md#digits)
* [load](_ts_displays_load_handler_.loadhandler.md#load)
* [loadBacking](_ts_displays_load_handler_.loadhandler.md#loadbacking)
* [loadFont](_ts_displays_load_handler_.loadhandler.md#loadfont)
* [loadMaterial](_ts_displays_load_handler_.loadhandler.md#loadmaterial)
* [opacityDirection](_ts_displays_load_handler_.loadhandler.md#opacitydirection)
* [return](_ts_displays_load_handler_.loadhandler.md#return)
* [scene](_ts_displays_load_handler_.loadhandler.md#scene)
* [startPos](_ts_displays_load_handler_.loadhandler.md#startpos)
* [textHeaderParams](_ts_displays_load_handler_.loadhandler.md#textheaderparams)

### Methods

* [activate](_ts_displays_load_handler_.loadhandler.md#activate)
* [charEntered](_ts_displays_load_handler_.loadhandler.md#charentered)
* [deactivate](_ts_displays_load_handler_.loadhandler.md#deactivate)
* [endCycle](_ts_displays_load_handler_.loadhandler.md#endcycle)
* [getGameData](_ts_displays_load_handler_.loadhandler.md#getgamedata)
* [showLoadCode](_ts_displays_load_handler_.loadhandler.md#showloadcode)

---

## Properties

<a id="activematerial"></a>

### `<Private>` activeMaterial

**● activeMaterial**: *`number`* = 0

*Defined in [ts/displays/load-handler.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L27)*

Counter for which digit backing material to change opacity for.

___
<a id="barrierload"></a>

### `<Private>` barrierLoad

**● barrierLoad**: *`Mesh`*

*Defined in [ts/displays/load-handler.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L31)*

Click surface for the Load Code button.

___
<a id="barrierreturn"></a>

### `<Private>` barrierReturn

**● barrierReturn**: *`Mesh`*

*Defined in [ts/displays/load-handler.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L35)*

Click surface for the Return button.

___
<a id="code"></a>

### `<Private>` code

**● code**: *`Mesh`[]* =  []

*Defined in [ts/displays/load-handler.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L39)*

All the digits of the load code from left to right.

___
<a id="codebackings"></a>

### `<Private>` codeBackings

**● codeBackings**: *`Mesh`[]* =  []

*Defined in [ts/displays/load-handler.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L43)*

All the digit backings behind the load code from left to right.

___
<a id="codematerials"></a>

### `<Private>` codeMaterials

**● codeMaterials**: *`MeshLambertMaterial`[]* =  []

*Defined in [ts/displays/load-handler.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L47)*

All the digit backing materials behind the load code from left to right.

___
<a id="controltexts"></a>

### `<Private>` controlTexts

**● controlTexts**: *`Mesh`[]* =  []

*Defined in [ts/displays/load-handler.ts:55](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L55)*

The char controls player uses to enter load code.

___
<a id="controls"></a>

### `<Private>` controls

**● controls**: *`Mesh`[]* =  []

*Defined in [ts/displays/load-handler.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L51)*

The clickable char controls player uses to enter load code.

___
<a id="currententeredcode"></a>

### `<Private>` currentEnteredCode

**● currentEnteredCode**: *`string`[]* =  []

*Defined in [ts/displays/load-handler.ts:59](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L59)*

All the hexidecimal characters the player has entered thus far.

___
<a id="digits"></a>

### `<Private>` digits

**● digits**: *`TextGeometry`[]* =  []

*Defined in [ts/displays/load-handler.ts:63](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L63)*

All the digits of the load code in order (0, 1, 2, 3, ..., C, D, E, F).

___
<a id="load"></a>

### `<Private>` load

**● load**: *`Mesh`*

*Defined in [ts/displays/load-handler.ts:67](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L67)*

Controls the overall rendering of the load button display

___
<a id="loadbacking"></a>

### `<Private>` loadBacking

**● loadBacking**: *`Mesh`*

*Defined in [ts/displays/load-handler.ts:71](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L71)*

The background section of the load screen.

___
<a id="loadfont"></a>

### `<Private>` loadFont

**● loadFont**: *`Font`*

*Defined in [ts/displays/load-handler.ts:75](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L75)*

Loaded font for display text.

___
<a id="loadmaterial"></a>

### `<Private>` loadMaterial

**● loadMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/load-handler.ts:79](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L79)*

Controls the color of the text display material

___
<a id="opacitydirection"></a>

### `<Private>` opacityDirection

**● opacityDirection**: *`number`* = 1

*Defined in [ts/displays/load-handler.ts:83](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L83)*

Multiplier to decrease by current number or increase, using the sign of this variable.

___
<a id="return"></a>

### `<Private>` return

**● return**: *`Mesh`*

*Defined in [ts/displays/load-handler.ts:87](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L87)*

Controls the overall rendering of the return button display

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/displays/load-handler.ts:91](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L91)*

Reference to the scene, used to remove and reinstall text geometries.

___
<a id="startpos"></a>

### `<Private>` startPos

**● startPos**: *[`number`, `number`, `number`]* =  [0, 0, 0]

*Defined in [ts/displays/load-handler.ts:95](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L95)*

Tracks starting coordinates off which all items are based.

___
<a id="textheaderparams"></a>

### `<Private>` textHeaderParams

**● textHeaderParams**: *`TextGeometryParameters`*

*Defined in [ts/displays/load-handler.ts:99](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L99)*

Since most of the text on the menu has same parameters, use one variable.

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/displays/load-handler.ts:229](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L229)*

Turns on all load screen related graphics

**Returns:** `void`

___
<a id="charentered"></a>

###  charEntered

▸ **charEntered**(char: *`string`*): `void`

*Defined in [ts/displays/load-handler.ts:245](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L245)*

Adds player's choice of char to the list of load code chars.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| char | `string` |  player clicked on a specific char. This is that char 0-F |

**Returns:** `void`

___
<a id="deactivate"></a>

###  deactivate

▸ **deactivate**(): `void`

*Defined in [ts/displays/load-handler.ts:259](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L259)*

Turns off all load screen related graphics

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/displays/load-handler.ts:273](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L273)*

Creates the shimmer behind the load code.

**Returns:** `void`

___
<a id="getgamedata"></a>

###  getGameData

▸ **getGameData**():  [GameLoadData](../interfaces/_ts_models_game_load_data_.gameloaddata.md) &#124; `null`

*Defined in [ts/displays/load-handler.ts:289](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L289)*

Deciphers the load code and returns it if valid, or null if not.

**Returns:**  [GameLoadData](../interfaces/_ts_models_game_load_data_.gameloaddata.md) &#124; `null`

valid game load data object from deciphered load code or null.

___
<a id="showloadcode"></a>

###  showLoadCode

▸ **showLoadCode**(): `void`

*Defined in [ts/displays/load-handler.ts:296](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/displays/load-handler.ts#L296)*

Paints the screen with the load code characters.

**Returns:** `void`

___

