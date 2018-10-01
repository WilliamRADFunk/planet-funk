[planet-funk](../README.md) > ["ts/projectile"](../modules/_ts_projectile_.md) > [Projectile](../classes/_ts_projectile_.projectile.md)

# Class: Projectile

*__class__*: Projectile that represents missile unit in the game. It hits something, it blows up.

## Hierarchy

**Projectile**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [currentExplosionScale](_ts_projectile_.projectile.md#currentexplosionscale)
* [currentPoint](_ts_projectile_.projectile.md#currentpoint)
* [distanceTraveled](_ts_projectile_.projectile.md#distancetraveled)
* [endingPoint](_ts_projectile_.projectile.md#endingpoint)
* [headGeometry](_ts_projectile_.projectile.md#headgeometry)
* [headMaterial](_ts_projectile_.projectile.md#headmaterial)
* [headMesh](_ts_projectile_.projectile.md#headmesh)
* [isActive](_ts_projectile_.projectile.md#isactive)
* [isCollidable](_ts_projectile_.projectile.md#iscollidable)
* [isExploding](_ts_projectile_.projectile.md#isexploding)
* [isExplosionGrowing](_ts_projectile_.projectile.md#isexplosiongrowing)
* [originalStartingPoint](_ts_projectile_.projectile.md#originalstartingpoint)
* [scene](_ts_projectile_.projectile.md#scene)
* [speed](_ts_projectile_.projectile.md#speed)
* [tailGeometry](_ts_projectile_.projectile.md#tailgeometry)
* [tailMaterial](_ts_projectile_.projectile.md#tailmaterial)
* [tailMesh](_ts_projectile_.projectile.md#tailmesh)
* [totalDistance](_ts_projectile_.projectile.md#totaldistance)

### Methods

* [calculateNextPoint](_ts_projectile_.projectile.md#calculatenextpoint)
* [endCycle](_ts_projectile_.projectile.md#endcycle)
* [getActive](_ts_projectile_.projectile.md#getactive)
* [getCollisionRadius](_ts_projectile_.projectile.md#getcollisionradius)
* [getCurrentPosition](_ts_projectile_.projectile.md#getcurrentposition)
* [getName](_ts_projectile_.projectile.md#getname)
* [impact](_ts_projectile_.projectile.md#impact)
* [isPassive](_ts_projectile_.projectile.md#ispassive)

---

## Properties

<a id="currentexplosionscale"></a>

### `<Private>` currentExplosionScale

**● currentExplosionScale**: *`number`* = 1

*Defined in [ts/projectile.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L24)*

Keeps track of how big explosions scale is at moment.

___
<a id="currentpoint"></a>

### `<Private>` currentPoint

**● currentPoint**: *`number`[]*

*Defined in [ts/projectile.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L28)*

Keeps track of the x,z point the missile is at currently.

___
<a id="distancetraveled"></a>

### `<Private>` distanceTraveled

**● distanceTraveled**: *`number`*

*Defined in [ts/projectile.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L32)*

Tracks the distance traveled thus far to update the calculateNextPoint calculation.

___
<a id="endingpoint"></a>

### `<Private>` endingPoint

**● endingPoint**: *`number`[]*

*Defined in [ts/projectile.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L36)*

Keeps track of the x,z point of player's click point.

___
<a id="headgeometry"></a>

### `<Private>` headGeometry

**● headGeometry**: *`CircleGeometry`*

*Defined in [ts/projectile.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L60)*

Controls size and shape of the missile's glowing head.

___
<a id="headmaterial"></a>

### `<Private>` headMaterial

**● headMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/projectile.ts:64](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L64)*

Controls the color of the missile's glowing head material.

___
<a id="headmesh"></a>

### `<Private>` headMesh

**● headMesh**: *`Mesh`*

*Defined in [ts/projectile.ts:68](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L68)*

Controls the overall rendering of the glowing head.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/projectile.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L41)*

Flag to signal if the missile has been destroyed. True is not destroyed. False is destroyed.

___
<a id="iscollidable"></a>

### `<Private>` isCollidable

**● isCollidable**: *`boolean`* = false

*Defined in [ts/projectile.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L46)*

Flag to signal if the missile can be considered for collisions. True is collidable. False is not collidable.

___
<a id="isexploding"></a>

### `<Private>` isExploding

**● isExploding**: *`boolean`* = false

*Defined in [ts/projectile.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L51)*

Flag to signal if the missile is in explosion mode. True is exploding. False is in motion.

___
<a id="isexplosiongrowing"></a>

### `<Private>` isExplosionGrowing

**● isExplosionGrowing**: *`boolean`* = true

*Defined in [ts/projectile.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L56)*

Flag to signal if the missile's explosion is expanding/contracting. True is expanding. False is contracting..

___
<a id="originalstartingpoint"></a>

### `<Private>` originalStartingPoint

**● originalStartingPoint**: *`number`[]*

*Defined in [ts/projectile.ts:72](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L72)*

Keeps track of the x,z point where missile fired from.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/projectile.ts:76](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L76)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="speed"></a>

### `<Private>` speed

**● speed**: *`number`* = 0.03

*Defined in [ts/projectile.ts:80](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L80)*

The speed at which the missile travels.

___
<a id="tailgeometry"></a>

### `<Private>` tailGeometry

**● tailGeometry**: *`Geometry`*

*Defined in [ts/projectile.ts:84](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L84)*

Controls size and shape of the missile's fiery trail.

___
<a id="tailmaterial"></a>

### `<Private>` tailMaterial

**● tailMaterial**: *`LineBasicMaterial`*

*Defined in [ts/projectile.ts:88](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L88)*

Controls the color of the missile's fiery trail material.

___
<a id="tailmesh"></a>

### `<Private>` tailMesh

**● tailMesh**: *`Line`*

*Defined in [ts/projectile.ts:92](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L92)*

Controls the overall rendering of the missile's fiery trail.

___
<a id="totaldistance"></a>

### `<Private>` totalDistance

**● totalDistance**: *`number`*

*Defined in [ts/projectile.ts:96](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L96)*

The total distance from satellite to player's click point.

___

## Methods

<a id="calculatenextpoint"></a>

### `<Private>` calculateNextPoint

▸ **calculateNextPoint**(): `void`

*Defined in [ts/projectile.ts:144](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L144)*

Calculates the next point in the missile's point.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `boolean`

*Defined in [ts/projectile.ts:155](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L155)*

At the end of each loop iteration, move the projectile a little.

**Returns:** `boolean`
whether or not the projectile is done, and should be removed from satellite's list.

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/projectile.ts:194](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L194)*

Gets the viability of the explosive blast head.

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/projectile.ts:201](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L201)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/projectile.ts:208](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L208)*

Gets the current position of the explosive blast head.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/projectile.ts:215](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L215)*

Gets the name of the missile.

**Returns:** `string`
the name of the missile.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `boolean`

*Defined in [ts/projectile.ts:223](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L223)*

Called when something collides with projectile blast radius, which does nothing unless it hasn't exploded yet.

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

*Defined in [ts/projectile.ts:230](https://github.com/WilliamRADFunk/planet-funk/blob/02b6762/src/ts/projectile.ts#L230)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___

