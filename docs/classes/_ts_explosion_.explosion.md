[planet-funk](../README.md) > ["ts/explosion"](../modules/_ts_explosion_.md) > [Explosion](../classes/_ts_explosion_.explosion.md)

# Class: Explosion

*__class__*: An expanding explosion of force that dissolves over time, but can cause other things to explode on contanct.

## Hierarchy

**Explosion**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [currentExplosionScale](_ts_explosion_.explosion.md#currentexplosionscale)
* [explosion](_ts_explosion_.explosion.md#explosion)
* [explosionGeometry](_ts_explosion_.explosion.md#explosiongeometry)
* [explosionMaterial](_ts_explosion_.explosion.md#explosionmaterial)
* [isActive](_ts_explosion_.explosion.md#isactive)
* [isExplosionGrowing](_ts_explosion_.explosion.md#isexplosiongrowing)
* [radius](_ts_explosion_.explosion.md#radius)
* [scene](_ts_explosion_.explosion.md#scene)

### Methods

* [endCycle](_ts_explosion_.explosion.md#endcycle)
* [getActive](_ts_explosion_.explosion.md#getactive)
* [getCollisionRadius](_ts_explosion_.explosion.md#getcollisionradius)
* [getCurrentPosition](_ts_explosion_.explosion.md#getcurrentposition)
* [getMesh](_ts_explosion_.explosion.md#getmesh)
* [getName](_ts_explosion_.explosion.md#getname)
* [impact](_ts_explosion_.explosion.md#impact)
* [isPassive](_ts_explosion_.explosion.md#ispassive)

---

## Properties

<a id="currentexplosionscale"></a>

### `<Private>` currentExplosionScale

**● currentExplosionScale**: *`number`* = 1

*Defined in [ts/explosion.ts:16](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L16)*

Keeps track of how big explosions scale is at moment.

___
<a id="explosion"></a>

### `<Private>` explosion

**● explosion**: *`Mesh`*

*Defined in [ts/explosion.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L28)*

Controls the overall rendering of the explosion

___
<a id="explosiongeometry"></a>

### `<Private>` explosionGeometry

**● explosionGeometry**: *`CircleGeometry`*

*Defined in [ts/explosion.ts:20](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L20)*

Controls size and shape of the explosion

___
<a id="explosionmaterial"></a>

### `<Private>` explosionMaterial

**● explosionMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/explosion.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L24)*

Controls the color of the explosion material

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/explosion.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L33)*

Flag to signal if explosion is in its collidable state. True = collidable. False = not collidable.

___
<a id="isexplosiongrowing"></a>

### `<Private>` isExplosionGrowing

**● isExplosionGrowing**: *`boolean`* = true

*Defined in [ts/explosion.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L38)*

Flag to signal if the explosion is expanding/contracting. True is expanding. False is contracting..

___
<a id="radius"></a>

### `<Private>` radius

**● radius**: *`number`*

*Defined in [ts/explosion.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L42)*

Starting size of the explosion. Usually the size of the thing that went boom.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/explosion.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L46)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `boolean`

*Defined in [ts/explosion.ts:76](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L76)*

At the end of each loop iteration, expand or contract the explosion a little.

**Returns:** `boolean`
whether or not the explosion is done, and should be removed from owner (false).

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/explosion.ts:99](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L99)*

Gets the viability of the object.

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/explosion.ts:106](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L106)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/explosion.ts:113](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L113)*

Gets the current position of the collidable object.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getmesh"></a>

###  getMesh

▸ **getMesh**(): `Mesh`

*Defined in [ts/explosion.ts:142](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L142)*

Returns mesh so it can be removed from scene.

**Returns:** `Mesh`
the explosion mesh

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/explosion.ts:120](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L120)*

Gets the name of the explosion.

**Returns:** `string`
the name of the explosion.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `boolean`

*Defined in [ts/explosion.ts:128](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L128)*

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

*Defined in [ts/explosion.ts:135](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/explosion.ts#L135)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___

