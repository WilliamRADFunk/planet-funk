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

* [activate](_ts_asteroid_.asteroid.md#activate)
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

*Defined in [ts/asteroid.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L31)*

Controls the overall rendering of the asteroid

___
<a id="asteroidgeometry"></a>

### `<Private>` asteroidGeometry

**● asteroidGeometry**: *`CircleGeometry`*

*Defined in [ts/asteroid.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L23)*

Controls size and shape of the asteroid

___
<a id="asteroidmaterial"></a>

### `<Private>` asteroidMaterial

**● asteroidMaterial**: *`MeshPhongMaterial`*

*Defined in [ts/asteroid.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L27)*

Controls the color of the asteroid material

___
<a id="currentpoint"></a>

### `<Private>` currentPoint

**● currentPoint**: *`number`[]*

*Defined in [ts/asteroid.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L35)*

Keeps track of the x,z point the asteroid is at currently.

___
<a id="distancetraveled"></a>

### `<Private>` distanceTraveled

**● distanceTraveled**: *`number`*

*Defined in [ts/asteroid.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L39)*

Tracks the distance traveled thus far to update the calculateNextPoint calculation.

___
<a id="endingpoint"></a>

### `<Private>` endingPoint

**● endingPoint**: *`number`[]*

*Defined in [ts/asteroid.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L43)*

Keeps track of the x,z point of asteroid's destination point.

___
<a id="explosion"></a>

### `<Private>` explosion

**● explosion**: *[Explosion](_ts_explosion_.explosion.md)*

*Defined in [ts/asteroid.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L47)*

Explosion from impacted asteroid

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/asteroid.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L52)*

Flag to signal if asteroid has been destroyed or not. True = not destroyed. False = destroyed.

___
<a id="originalstartingpoint"></a>

### `<Private>` originalStartingPoint

**● originalStartingPoint**: *`number`[]*

*Defined in [ts/asteroid.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L56)*

Keeps track of the x,z point where asteroid fired from.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/asteroid.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L60)*

Reference to the scene, used to remove asteroid from rendering cycle once destroyed.

___
<a id="speed"></a>

### `<Private>` speed

**● speed**: *`number`* = 0.002

*Defined in [ts/asteroid.ts:64](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L64)*

The speed at which the asteroid travels.

___
<a id="totaldistance"></a>

### `<Private>` totalDistance

**● totalDistance**: *`number`*

*Defined in [ts/asteroid.ts:68](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L68)*

The total distance from asteroid to planet.

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/asteroid.ts:103](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L103)*

(Re)activates the asteroid, usually at beginning of new level.

**Returns:** `void`

___
<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(): `void`

*Defined in [ts/asteroid.ts:109](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L109)*

Adds asteroid object to the three.js scene.

**Returns:** `void`

___
<a id="calculatenextpoint"></a>

### `<Private>` calculateNextPoint

▸ **calculateNextPoint**(): `void`

*Defined in [ts/asteroid.ts:115](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L115)*

Calculates the next point in the asteroid's path.

**Returns:** `void`

___
<a id="createexplosion"></a>

### `<Private>` createExplosion

▸ **createExplosion**(isInert: *`boolean`*): `void`

*Defined in [ts/asteroid.ts:126](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L126)*

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

*Defined in [ts/asteroid.ts:134](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L134)*

At the end of each loop iteration, move the asteroid a little.

**Returns:** `boolean`
whether or not the asteroid is done, and its points calculated.

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/asteroid.ts:152](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L152)*

Gets the viability of the object.

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/asteroid.ts:159](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L159)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/asteroid.ts:166](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L166)*

Gets the current position of the collidable object.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/asteroid.ts:173](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L173)*

Gets the name of the asteroid.

**Returns:** `string`
the name of the asteroid.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*, otherThing: *`string`*): `boolean`

*Defined in [ts/asteroid.ts:182](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L182)*

Called when something collides with asteroid, which destroys it.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| self | [Collidable](../interfaces/_ts_collidable_.collidable.md) |  the thing to remove from collidables...and scene. |
| otherThing | `string` |  the name of the other thing in collision (mainly for shield). |

**Returns:** `boolean`
whether or not impact means calling removeFromScene by collisionator.

___
<a id="ispassive"></a>

###  isPassive

▸ **isPassive**(): `boolean`

*Defined in [ts/asteroid.ts:194](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L194)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [ts/asteroid.ts:201](https://github.com/WilliamRADFunk/planet-funk/blob/a234299/src/ts/asteroid.ts#L201)*

Removes asteroid object from the 'visible' scene by sending it back to its starting location.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___

