[planet-funk](../README.md) > ["classes/base"](../modules/_classes_base_.md) > [Base](../classes/_classes_base_.base.md)

# Class: Base

*__class__*: Planetary base that player must defend.

## Hierarchy

**Base**

## Index

### Properties

* [building](_classes_base_.base.md#building)
* [buildingGeometry](_classes_base_.base.md#buildinggeometry)
* [buildingMaterial](_classes_base_.base.md#buildingmaterial)
* [index](_classes_base_.base.md#index)

### Methods

* [addToScene](_classes_base_.base.md#addtoscene)
* [getMesh](_classes_base_.base.md#getmesh)

---

## Properties

<a id="building"></a>

### `<Private>` building

**● building**: *`Mesh`*

*Defined in classes/base.ts:40*

Controls the overall rendering of the base

___
<a id="buildinggeometry"></a>

### `<Private>` buildingGeometry

**● buildingGeometry**: *`BoxGeometry`*

*Defined in classes/base.ts:32*

Controls size and shape of the base

___
<a id="buildingmaterial"></a>

### `<Private>` buildingMaterial

**● buildingMaterial**: *`MeshPhongMaterial`*

*Defined in classes/base.ts:36*

Controls the color of the base material

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in classes/base.ts:28*

Number in the creation order. Needed later to identify base.

___

## Methods

<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in classes/base.ts:63*

Adds base object to the three.js scene

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___
<a id="getmesh"></a>

###  getMesh

▸ **getMesh**(): `Mesh`

*Defined in classes/base.ts:70*

Provides the created mesh so it can be added to the mesh of a parent object like the planet.

**Returns:** `Mesh`
the base's mesh

___

