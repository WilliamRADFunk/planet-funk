[planet-funk](../README.md) > ["ts/weapons/projectile"](../modules/_ts_weapons_projectile_.md) > [Projectile](../classes/_ts_weapons_projectile_.projectile.md)

# Class: Projectile

*__class__*: Projectile that represents missile unit in the game. It hits something, it blows up.

## Hierarchy

**Projectile**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [color](_ts_weapons_projectile_.projectile.md#color)
* [currentPoint](_ts_weapons_projectile_.projectile.md#currentpoint)
* [distanceTraveled](_ts_weapons_projectile_.projectile.md#distancetraveled)
* [endingPoint](_ts_weapons_projectile_.projectile.md#endingpoint)
* [explosion](_ts_weapons_projectile_.projectile.md#explosion)
* [headGeometry](_ts_weapons_projectile_.projectile.md#headgeometry)
* [headMaterial](_ts_weapons_projectile_.projectile.md#headmaterial)
* [headMesh](_ts_weapons_projectile_.projectile.md#headmesh)
* [headY](_ts_weapons_projectile_.projectile.md#heady)
* [isActive](_ts_weapons_projectile_.projectile.md#isactive)
* [isCollidable](_ts_weapons_projectile_.projectile.md#iscollidable)
* [isEnemyMissile](_ts_weapons_projectile_.projectile.md#isenemymissile)
* [originalStartingPoint](_ts_weapons_projectile_.projectile.md#originalstartingpoint)
* [scene](_ts_weapons_projectile_.projectile.md#scene)
* [speed](_ts_weapons_projectile_.projectile.md#speed)
* [tailGeometry](_ts_weapons_projectile_.projectile.md#tailgeometry)
* [tailMaterial](_ts_weapons_projectile_.projectile.md#tailmaterial)
* [tailMesh](_ts_weapons_projectile_.projectile.md#tailmesh)
* [tailY](_ts_weapons_projectile_.projectile.md#taily)
* [totalDistance](_ts_weapons_projectile_.projectile.md#totaldistance)
* [waitToFire](_ts_weapons_projectile_.projectile.md#waittofire)

### Methods

* [calculateNextPoint](_ts_weapons_projectile_.projectile.md#calculatenextpoint)
* [createExplosion](_ts_weapons_projectile_.projectile.md#createexplosion)
* [destroy](_ts_weapons_projectile_.projectile.md#destroy)
* [endCycle](_ts_weapons_projectile_.projectile.md#endcycle)
* [getActive](_ts_weapons_projectile_.projectile.md#getactive)
* [getCollisionRadius](_ts_weapons_projectile_.projectile.md#getcollisionradius)
* [getCurrentPosition](_ts_weapons_projectile_.projectile.md#getcurrentposition)
* [getName](_ts_weapons_projectile_.projectile.md#getname)
* [impact](_ts_weapons_projectile_.projectile.md#impact)
* [isPassive](_ts_weapons_projectile_.projectile.md#ispassive)
* [removeFromScene](_ts_weapons_projectile_.projectile.md#removefromscene)

---

## Properties

<a id="color"></a>

### `<Private>` color

**● color**: *`Color`*

*Defined in [ts/weapons/projectile.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L28)*

Holds tail color.

___
<a id="currentpoint"></a>

### `<Private>` currentPoint

**● currentPoint**: *`number`[]*

*Defined in [ts/weapons/projectile.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L32)*

Keeps track of the x,z point the missile is at currently.

___
<a id="distancetraveled"></a>

### `<Private>` distanceTraveled

**● distanceTraveled**: *`number`*

*Defined in [ts/weapons/projectile.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L36)*

Tracks the distance traveled thus far to update the calculateNextPoint calculation.

___
<a id="endingpoint"></a>

### `<Private>` endingPoint

**● endingPoint**: *`number`[]*

*Defined in [ts/weapons/projectile.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L40)*

Keeps track of the x,z point of player's click point.

___
<a id="explosion"></a>

### `<Private>` explosion

**● explosion**: *[Explosion](_ts_weapons_explosion_.explosion.md)*

*Defined in [ts/weapons/projectile.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L44)*

Explosion from impacted missile

___
<a id="headgeometry"></a>

### `<Private>` headGeometry

**● headGeometry**: *`CircleGeometry`*

*Defined in [ts/weapons/projectile.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L48)*

Controls size and shape of the missile's glowing head.

___
<a id="headmaterial"></a>

### `<Private>` headMaterial

**● headMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/weapons/projectile.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L52)*

Controls the color of the missile's glowing head material.

___
<a id="headmesh"></a>

### `<Private>` headMesh

**● headMesh**: *`Mesh`*

*Defined in [ts/weapons/projectile.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L56)*

Controls the overall rendering of the glowing head.

___
<a id="heady"></a>

### `<Private>` headY

**● headY**: *`number`*

*Defined in [ts/weapons/projectile.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L60)*

Allows for a variable y value in head of missile

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/weapons/projectile.ts:65](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L65)*

Flag to signal if the missile has been destroyed. True is not destroyed. False is destroyed.

___
<a id="iscollidable"></a>

### `<Private>` isCollidable

**● isCollidable**: *`boolean`* = false

*Defined in [ts/weapons/projectile.ts:70](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L70)*

Flag to signal if the missile can be considered for collisions. True is collidable. False is not collidable.

___
<a id="isenemymissile"></a>

### `<Private>` isEnemyMissile

**● isEnemyMissile**: *`boolean`*

*Defined in [ts/weapons/projectile.ts:74](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L74)*

Flag to determine enemy allegiance of missile.

___
<a id="originalstartingpoint"></a>

### `<Private>` originalStartingPoint

**● originalStartingPoint**: *`number`[]*

*Defined in [ts/weapons/projectile.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L78)*

Keeps track of the x,z point where missile fired from.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/weapons/projectile.ts:82](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L82)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="speed"></a>

### `<Private>` speed

**● speed**: *`number`* = 0.03

*Defined in [ts/weapons/projectile.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L86)*

The speed at which the missile travels.

___
<a id="tailgeometry"></a>

### `<Private>` tailGeometry

**● tailGeometry**: *`Geometry`*

*Defined in [ts/weapons/projectile.ts:90](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L90)*

Controls size and shape of the missile's fiery trail.

___
<a id="tailmaterial"></a>

### `<Private>` tailMaterial

**● tailMaterial**: *`LineBasicMaterial`*

*Defined in [ts/weapons/projectile.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L94)*

Controls the color of the missile's fiery trail material.

___
<a id="tailmesh"></a>

### `<Private>` tailMesh

**● tailMesh**: *`Line`*

*Defined in [ts/weapons/projectile.ts:98](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L98)*

Controls the overall rendering of the missile's fiery trail.

___
<a id="taily"></a>

### `<Private>` tailY

**● tailY**: *`number`*

*Defined in [ts/weapons/projectile.ts:102](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L102)*

Allows for a variable y value in tail of missile

___
<a id="totaldistance"></a>

### `<Private>` totalDistance

**● totalDistance**: *`number`*

*Defined in [ts/weapons/projectile.ts:106](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L106)*

The total distance from satellite to player's click point.

___
<a id="waittofire"></a>

### `<Private>` waitToFire

**● waitToFire**: *`number`* = 0

*Defined in [ts/weapons/projectile.ts:111](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L111)*

The wait number of iterations before loosing the enemy missile. Prevents new level creation from throwing all missiles at once.

___

## Methods

<a id="calculatenextpoint"></a>

### `<Private>` calculateNextPoint

▸ **calculateNextPoint**(): `void`

*Defined in [ts/weapons/projectile.ts:174](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L174)*

Calculates the next point in the missile's path.

**Returns:** `void`

___
<a id="createexplosion"></a>

### `<Private>` createExplosion

▸ **createExplosion**(isInert: *`boolean`*): `void`

*Defined in [ts/weapons/projectile.ts:185](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L185)*

Creates an explosion during collision and adds it to the collidables list.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| isInert | `boolean` |  flag to let explosion know it isn't a 'real' explosion (hit shield). |

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Defined in [ts/weapons/projectile.ts:194](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L194)*

Call to eliminate regardless of current state. Mainly used for non-game instantiations of this (ie. help screen animations).

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `boolean`

*Defined in [ts/weapons/projectile.ts:206](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L206)*

At the end of each loop iteration, move the projectile a little.

**Returns:** `boolean`
whether or not the projectile is done, and should be removed from satellite's list.

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/weapons/projectile.ts:250](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L250)*

Gets the viability of the explosive blast head.

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/weapons/projectile.ts:257](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L257)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/weapons/projectile.ts:264](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L264)*

Gets the current position of the explosive blast head.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/weapons/projectile.ts:271](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L271)*

Gets the name of the missile.

**Returns:** `string`
the name of the missile.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*, otherThing: *`string`*): `boolean`

*Defined in [ts/weapons/projectile.ts:280](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L280)*

Called when something collides with projectile blast radius, which does nothing unless it hasn't exploded yet.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| self | [Collidable](../interfaces/_ts_collidable_.collidable.md) |  the thing to remove from collidables...and scene. |
| otherThing | `string` |  the name of the other thing in collision (mainly for shield). |

**Returns:** `boolean`
whether or not impact means removing item from the scene.

___
<a id="ispassive"></a>

###  isPassive

▸ **isPassive**(): `boolean`

*Defined in [ts/weapons/projectile.ts:294](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L294)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [ts/weapons/projectile.ts:301](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/weapons/projectile.ts#L301)*

Removes missile object from the 'visible' scene by removing non-explosion parts from scene.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___

