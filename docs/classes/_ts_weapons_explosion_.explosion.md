[planet-funk](../README.md) > ["ts/weapons/explosion"](../modules/_ts_weapons_explosion_.md) > [Explosion](../classes/_ts_weapons_explosion_.explosion.md)

# Class: Explosion

*__class__*: An expanding explosion of force that dissolves over time, but can cause other things to explode on contanct.

## Hierarchy

**Explosion**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [currentExplosionScale](_ts_weapons_explosion_.explosion.md#currentexplosionscale)
* [explosion](_ts_weapons_explosion_.explosion.md#explosion)
* [explosionGeometry](_ts_weapons_explosion_.explosion.md#explosiongeometry)
* [explosionMaterial](_ts_weapons_explosion_.explosion.md#explosionmaterial)
* [isActive](_ts_weapons_explosion_.explosion.md#isactive)
* [isExplosionGrowing](_ts_weapons_explosion_.explosion.md#isexplosiongrowing)
* [radius](_ts_weapons_explosion_.explosion.md#radius)
* [scene](_ts_weapons_explosion_.explosion.md#scene)

### Methods

* [endCycle](_ts_weapons_explosion_.explosion.md#endcycle)
* [getActive](_ts_weapons_explosion_.explosion.md#getactive)
* [getCollisionRadius](_ts_weapons_explosion_.explosion.md#getcollisionradius)
* [getCurrentPosition](_ts_weapons_explosion_.explosion.md#getcurrentposition)
* [getMesh](_ts_weapons_explosion_.explosion.md#getmesh)
* [getName](_ts_weapons_explosion_.explosion.md#getname)
* [impact](_ts_weapons_explosion_.explosion.md#impact)
* [isPassive](_ts_weapons_explosion_.explosion.md#ispassive)

---

## Properties

<a id="currentexplosionscale"></a>

### `<Private>` currentExplosionScale

**● currentExplosionScale**: *`number`* = 1

*Defined in [ts/weapons/explosion.ts:16](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L16)*

Keeps track of how big explosions scale is at moment.

___
<a id="explosion"></a>

### `<Private>` explosion

**● explosion**: *`Mesh`*

*Defined in [ts/weapons/explosion.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L28)*

Controls the overall rendering of the explosion

___
<a id="explosiongeometry"></a>

### `<Private>` explosionGeometry

**● explosionGeometry**: *`CircleGeometry`*

*Defined in [ts/weapons/explosion.ts:20](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L20)*

Controls size and shape of the explosion

___
<a id="explosionmaterial"></a>

### `<Private>` explosionMaterial

**● explosionMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/weapons/explosion.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L24)*

Controls the color of the explosion material

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/weapons/explosion.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L33)*

Flag to signal if explosion is in its collidable state. True = collidable. False = not collidable.

___
<a id="isexplosiongrowing"></a>

### `<Private>` isExplosionGrowing

**● isExplosionGrowing**: *`boolean`* = true

*Defined in [ts/weapons/explosion.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L38)*

Flag to signal if the explosion is expanding/contracting. True is expanding. False is contracting..

___
<a id="radius"></a>

### `<Private>` radius

**● radius**: *`number`*

*Defined in [ts/weapons/explosion.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L42)*

Starting size of the explosion. Usually the size of the thing that went boom.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/weapons/explosion.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L46)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `boolean`

*Defined in [ts/weapons/explosion.ts:77](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L77)*

At the end of each loop iteration, expand or contract the explosion a little.

**Returns:** `boolean`
whether or not the explosion is done, and should be removed from owner (false).

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/weapons/explosion.ts:100](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L100)*

Gets the viability of the object.

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/weapons/explosion.ts:107](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L107)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/weapons/explosion.ts:114](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L114)*

Gets the current position of the collidable object.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getmesh"></a>

###  getMesh

▸ **getMesh**(): `Mesh`

*Defined in [ts/weapons/explosion.ts:143](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L143)*

Returns mesh so it can be removed from scene.

**Returns:** `Mesh`
the explosion mesh

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/weapons/explosion.ts:121](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L121)*

Gets the name of the explosion.

**Returns:** `string`
the name of the explosion.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `boolean`

*Defined in [ts/weapons/explosion.ts:129](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L129)*

Call to collidable object that it has been struck.

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

*Defined in [ts/weapons/explosion.ts:136](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/weapons/explosion.ts#L136)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___

