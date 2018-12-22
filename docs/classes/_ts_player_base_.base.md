[planet-funk](../README.md) > ["ts/player/base"](../modules/_ts_player_base_.md) > [Base](../classes/_ts_player_base_.base.md)

# Class: Base

*__class__*: Planetary base that player must defend.

## Hierarchy

**Base**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [building](_ts_player_base_.base.md#building)
* [buildingDead](_ts_player_base_.base.md#buildingdead)
* [buildingDeadGeometry](_ts_player_base_.base.md#buildingdeadgeometry)
* [buildingDeadMaterial](_ts_player_base_.base.md#buildingdeadmaterial)
* [buildingGeometry](_ts_player_base_.base.md#buildinggeometry)
* [buildingMaterial](_ts_player_base_.base.md#buildingmaterial)
* [isActive](_ts_player_base_.base.md#isactive)

### Methods

* [endCycle](_ts_player_base_.base.md#endcycle)
* [getActive](_ts_player_base_.base.md#getactive)
* [getCollisionRadius](_ts_player_base_.base.md#getcollisionradius)
* [getCurrentPosition](_ts_player_base_.base.md#getcurrentposition)
* [getMeshes](_ts_player_base_.base.md#getmeshes)
* [getName](_ts_player_base_.base.md#getname)
* [impact](_ts_player_base_.base.md#impact)
* [isPassive](_ts_player_base_.base.md#ispassive)
* [regenerate](_ts_player_base_.base.md#regenerate)

---

## Properties

<a id="building"></a>

### `<Private>` building

**● building**: *`Mesh`*

*Defined in [ts/player/base.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L47)*

Controls the overall rendering of the base

___
<a id="buildingdead"></a>

### `<Private>` buildingDead

**● buildingDead**: *`Mesh`*

*Defined in [ts/player/base.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L51)*

Controls the overall rendering of the destroyed base

___
<a id="buildingdeadgeometry"></a>

### `<Private>` buildingDeadGeometry

**● buildingDeadGeometry**: *`BoxGeometry`*

*Defined in [ts/player/base.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L35)*

Controls size and shape of the destroyed base

___
<a id="buildingdeadmaterial"></a>

### `<Private>` buildingDeadMaterial

**● buildingDeadMaterial**: *`MeshPhongMaterial`*

*Defined in [ts/player/base.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L43)*

Controls the color of the destroyed base material

___
<a id="buildinggeometry"></a>

### `<Private>` buildingGeometry

**● buildingGeometry**: *`BoxGeometry`*

*Defined in [ts/player/base.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L31)*

Controls size and shape of the base

___
<a id="buildingmaterial"></a>

### `<Private>` buildingMaterial

**● buildingMaterial**: *`MeshPhongMaterial`*

*Defined in [ts/player/base.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L39)*

Controls the color of the base material

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/player/base.ts:55](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L55)*

Flag to signal if base has been destroyed or not. True = not destroyed. False = destroyed.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/player/base.ts:98](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L98)*

At the end of each loop iteration, base updates planet's known rotation.

**Returns:** `void`

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/player/base.ts:103](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L103)*

Gets the viability of the base.

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/player/base.ts:110](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L110)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/player/base.ts:117](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L117)*

Gets the current position of the base.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getmeshes"></a>

###  getMeshes

▸ **getMeshes**(): `Mesh`[]

*Defined in [ts/player/base.ts:126](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L126)*

Provides the created mesh so it can be added to the mesh of a parent object like the planet.

**Returns:** `Mesh`[]
the base's alive and dead meshes

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/player/base.ts:133](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L133)*

Gets the name of the base.

**Returns:** `string`
the name of the base.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `boolean`

*Defined in [ts/player/base.ts:141](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L141)*

Called when something collides with base, which destroys it.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| self | [Collidable](../interfaces/_ts_collidable_.collidable.md) |  the thing to remove from collidables...and scene. |

**Returns:** `boolean`
whether or not impact means removing item from the scene.

___
<a id="ispassive"></a>

###  isPassive

▸ **isPassive**(): `boolean`

*Defined in [ts/player/base.ts:155](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L155)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="regenerate"></a>

###  regenerate

▸ **regenerate**(): `void`

*Defined in [ts/player/base.ts:161](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/player/base.ts#L161)*

Regenerates a dead base

**Returns:** `void`

___

