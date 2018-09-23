[planet-funk](../README.md) > ["ts/asteroid"](../modules/_ts_asteroid_.md) > [Asteroid](../classes/_ts_asteroid_.asteroid.md)

# Class: Asteroid

*__class__*: Slow moving debris object that is sometimes on the path towards planet.

## Hierarchy

**Asteroid**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [asteroid](_ts_asteroid_.asteroid.md#asteroid)
* [asteroidGeometry](_ts_asteroid_.asteroid.md#asteroidgeometry)
* [asteroidMaterial](_ts_asteroid_.asteroid.md#asteroidmaterial)
* [currentPoint](_ts_asteroid_.asteroid.md#currentpoint)
* [distanceTraveled](_ts_asteroid_.asteroid.md#distancetraveled)
* [endingPoint](_ts_asteroid_.asteroid.md#endingpoint)
* [explosion](_ts_asteroid_.asteroid.md#explosion)
* [isActive](_ts_asteroid_.asteroid.md#isactive)
* [originalStartingPoint](_ts_asteroid_.asteroid.md#originalstartingpoint)
* [scene](_ts_asteroid_.asteroid.md#scene)
* [speed](_ts_asteroid_.asteroid.md#speed)
* [totalDistance](_ts_asteroid_.asteroid.md#totaldistance)

### Methods

* [addToScene](_ts_asteroid_.asteroid.md#addtoscene)
* [calculateNextPoint](_ts_asteroid_.asteroid.md#calculatenextpoint)
* [createExplosion](_ts_asteroid_.asteroid.md#createexplosion)
* [endCycle](_ts_asteroid_.asteroid.md#endcycle)
* [getActive](_ts_asteroid_.asteroid.md#getactive)
* [getCollisionRadius](_ts_asteroid_.asteroid.md#getcollisionradius)
* [getCurrentPosition](_ts_asteroid_.asteroid.md#getcurrentposition)
* [getName](_ts_asteroid_.asteroid.md#getname)
* [impact](_ts_asteroid_.asteroid.md#impact)
* [isPassive](_ts_asteroid_.asteroid.md#ispassive)
* [removeFromScene](_ts_asteroid_.asteroid.md#removefromscene)

---

## Properties

<a id="asteroid"></a>

### `<Private>` asteroid

**● asteroid**: *`Mesh`*

*Defined in [ts/asteroid.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L25)*

Controls the overall rendering of the asteroid

___
<a id="asteroidgeometry"></a>

### `<Private>` asteroidGeometry

**● asteroidGeometry**: *`CircleGeometry`*

*Defined in [ts/asteroid.ts:17](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L17)*

Controls size and shape of the asteroid

___
<a id="asteroidmaterial"></a>

### `<Private>` asteroidMaterial

**● asteroidMaterial**: *`MeshPhongMaterial`*

*Defined in [ts/asteroid.ts:21](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L21)*

Controls the color of the asteroid material

___
<a id="currentpoint"></a>

### `<Private>` currentPoint

**● currentPoint**: *`number`[]*

*Defined in [ts/asteroid.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L29)*

Keeps track of the x,z point the asteroid is at currently.

___
<a id="distancetraveled"></a>

### `<Private>` distanceTraveled

**● distanceTraveled**: *`number`*

*Defined in [ts/asteroid.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L33)*

Tracks the distance traveled thus far to update the calculateNextPoint calculation.

___
<a id="endingpoint"></a>

### `<Private>` endingPoint

**● endingPoint**: *`number`[]*

*Defined in [ts/asteroid.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L37)*

Keeps track of the x,z point of asteroid's destination point.

___
<a id="explosion"></a>

### `<Private>` explosion

**● explosion**: *[Explosion](_ts_explosion_.explosion.md)*

*Defined in [ts/asteroid.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L41)*

Explosion from impacted asteroid

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/asteroid.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L46)*

Flag to signal if asteroid has been destroyed or not. True = not destroyed. False = destroyed.

___
<a id="originalstartingpoint"></a>

### `<Private>` originalStartingPoint

**● originalStartingPoint**: *`number`[]*

*Defined in [ts/asteroid.ts:50](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L50)*

Keeps track of the x,z point where asteroid fired from.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/asteroid.ts:54](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L54)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="speed"></a>

### `<Private>` speed

**● speed**: *`number`* = 0.005

*Defined in [ts/asteroid.ts:58](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L58)*

The speed at which the asteroid travels.

___
<a id="totaldistance"></a>

### `<Private>` totalDistance

**● totalDistance**: *`number`*

*Defined in [ts/asteroid.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L62)*

The total distance from asteroid to planet.

___

## Methods

<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(): `void`

*Defined in [ts/asteroid.ts:95](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L95)*

Adds asteroid object to the three.js scene.

**Returns:** `void`

___
<a id="calculatenextpoint"></a>

### `<Private>` calculateNextPoint

▸ **calculateNextPoint**(): `void`

*Defined in [ts/asteroid.ts:101](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L101)*

Calculates the next point in the missile's point.

**Returns:** `void`

___
<a id="createexplosion"></a>

###  createExplosion

▸ **createExplosion**(isInert: *`boolean`*): `void`

*Defined in [ts/asteroid.ts:112](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L112)*

Creates an explosion during collision and adds it to the collildables list.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| isInert | `boolean` |  flag to let explosion know it isn't a 'real' explosion (hit shield). |

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `boolean`

*Defined in [ts/asteroid.ts:120](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L120)*

At the end of each loop iteration, move the asteroid a little.

**Returns:** `boolean`
whether or not the asteroid is done, and should be removed from list.

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/asteroid.ts:138](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L138)*

Gets the viability of the object.

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/asteroid.ts:145](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L145)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/asteroid.ts:152](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L152)*

Gets the current position of the collidable object.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/asteroid.ts:159](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L159)*

Gets the name of the asteroid.

**Returns:** `string`
the name of the asteroid.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*, otherThing: *`string`*): `boolean`

*Defined in [ts/asteroid.ts:168](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L168)*

Called when something collides with asteroid, which destroys it.

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

*Defined in [ts/asteroid.ts:182](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L182)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [ts/asteroid.ts:189](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/asteroid.ts#L189)*

Removes asteroid object from the three.js scene.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___

