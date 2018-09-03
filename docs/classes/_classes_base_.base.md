[planet-funk](../README.md) > ["classes/base"](../modules/_classes_base_.md) > [Base](../classes/_classes_base_.base.md)

# Class: Base

*__class__*: Planetary base that player must defend.

## Hierarchy

**Base**

## Index

### Properties

* [building](_classes_base_.base.md#building)
* [buildingDead](_classes_base_.base.md#buildingdead)
* [buildingDeadGeometry](_classes_base_.base.md#buildingdeadgeometry)
* [buildingDeadMaterial](_classes_base_.base.md#buildingdeadmaterial)
* [buildingGeometry](_classes_base_.base.md#buildinggeometry)
* [buildingMaterial](_classes_base_.base.md#buildingmaterial)
* [index](_classes_base_.base.md#index)
* [isActive](_classes_base_.base.md#isactive)

### Methods

* [addToScene](_classes_base_.base.md#addtoscene)
* [getMeshes](_classes_base_.base.md#getmeshes)
* [impact](_classes_base_.base.md#impact)

---

## Properties

<a id="building"></a>

### `<Private>` building

**● building**: *`Mesh`*

*Defined in [classes/base.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L52)*

Controls the overall rendering of the base

___
<a id="buildingdead"></a>

### `<Private>` buildingDead

**● buildingDead**: *`Mesh`*

*Defined in [classes/base.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L56)*

Controls the overall rendering of the destroyed base

___
<a id="buildingdeadgeometry"></a>

### `<Private>` buildingDeadGeometry

**● buildingDeadGeometry**: *`BoxGeometry`*

*Defined in [classes/base.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L40)*

Controls size and shape of the destroyed base

___
<a id="buildingdeadmaterial"></a>

### `<Private>` buildingDeadMaterial

**● buildingDeadMaterial**: *`MeshPhongMaterial`*

*Defined in [classes/base.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L48)*

Controls the color of the destroyed base material

___
<a id="buildinggeometry"></a>

### `<Private>` buildingGeometry

**● buildingGeometry**: *`BoxGeometry`*

*Defined in [classes/base.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L36)*

Controls size and shape of the base

___
<a id="buildingmaterial"></a>

### `<Private>` buildingMaterial

**● buildingMaterial**: *`MeshPhongMaterial`*

*Defined in [classes/base.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L44)*

Controls the color of the base material

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in [classes/base.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L28)*

Number in the creation order. Needed later to identify base.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [classes/base.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L32)*

Flag to signal if base has been destroyed or not. True = not destroyed. False = destroyed.

___

## Methods

<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in [classes/base.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L94)*

Adds base object to the three.js scene

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___
<a id="getmeshes"></a>

###  getMeshes

▸ **getMeshes**(): `Mesh`[]

*Defined in [classes/base.ts:102](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L102)*

Provides the created mesh so it can be added to the mesh of a parent object like the planet.

**Returns:** `Mesh`[]
the base's alive and dead meshes

___
<a id="impact"></a>

###  impact

▸ **impact**(): `void`

*Defined in [classes/base.ts:108](https://github.com/WilliamRADFunk/planet-funk/blob/0f96025/src/classes/base.ts#L108)*

Called when something collides with base, which destroys it.

**Returns:** `void`

___

