[planet-funk](../README.md) > ["ts/weapons/drone"](../modules/_ts_weapons_drone_.md) > [Drone](../classes/_ts_weapons_drone_.drone.md)

# Class: Drone

## Hierarchy

**Drone**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [currentPoint](_ts_weapons_drone_.drone.md#currentpoint)
* [currentTheta](_ts_weapons_drone_.drone.md#currenttheta)
* [drone](_ts_weapons_drone_.drone.md#drone)
* [droneGeometry](_ts_weapons_drone_.drone.md#dronegeometry)
* [droneMaterial](_ts_weapons_drone_.drone.md#dronematerial)
* [explosion](_ts_weapons_drone_.drone.md#explosion)
* [isActive](_ts_weapons_drone_.drone.md#isactive)
* [lastFired](_ts_weapons_drone_.drone.md#lastfired)
* [missiles](_ts_weapons_drone_.drone.md#missiles)
* [orbitRadius](_ts_weapons_drone_.drone.md#orbitradius)
* [points](_ts_weapons_drone_.drone.md#points)
* [scene](_ts_weapons_drone_.drone.md#scene)
* [scoreboard](_ts_weapons_drone_.drone.md#scoreboard)
* [speed](_ts_weapons_drone_.drone.md#speed)

### Methods

* [addToScene](_ts_weapons_drone_.drone.md#addtoscene)
* [calculateNextPoint](_ts_weapons_drone_.drone.md#calculatenextpoint)
* [createExplosion](_ts_weapons_drone_.drone.md#createexplosion)
* [destroy](_ts_weapons_drone_.drone.md#destroy)
* [endCycle](_ts_weapons_drone_.drone.md#endcycle)
* [getActive](_ts_weapons_drone_.drone.md#getactive)
* [getCollisionRadius](_ts_weapons_drone_.drone.md#getcollisionradius)
* [getCurrentPosition](_ts_weapons_drone_.drone.md#getcurrentposition)
* [getDistanceToTarget](_ts_weapons_drone_.drone.md#getdistancetotarget)
* [getName](_ts_weapons_drone_.drone.md#getname)
* [impact](_ts_weapons_drone_.drone.md#impact)
* [isPassive](_ts_weapons_drone_.drone.md#ispassive)
* [removeFromScene](_ts_weapons_drone_.drone.md#removefromscene)

---

## Properties

<a id="currentpoint"></a>

### `<Private>` currentPoint

**● currentPoint**: *`number`[]*

*Defined in [ts/weapons/drone.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L31)*

Keeps track of the x,z point the drone is at currently.

___
<a id="currenttheta"></a>

### `<Private>` currentTheta

**● currentTheta**: *`number`*

*Defined in [ts/weapons/drone.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L35)*

Keeps track of the theta angle of the drone to be used in movement mechanics.

___
<a id="drone"></a>

### `<Private>` drone

**● drone**: *`Mesh`*

*Defined in [ts/weapons/drone.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L27)*

Controls the overall rendering of the drone

___
<a id="dronegeometry"></a>

### `<Private>` droneGeometry

**● droneGeometry**: *`SphereGeometry`*

*Defined in [ts/weapons/drone.ts:19](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L19)*

Controls size and shape of the drone

___
<a id="dronematerial"></a>

### `<Private>` droneMaterial

**● droneMaterial**: *`MeshPhongMaterial`*

*Defined in [ts/weapons/drone.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L23)*

Controls the color of the drone material

___
<a id="explosion"></a>

### `<Private>` explosion

**● explosion**: *[Explosion](_ts_weapons_explosion_.explosion.md)*

*Defined in [ts/weapons/drone.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L39)*

Explosion from impacted drone

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/weapons/drone.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L44)*

Flag to signal if drone has been destroyed or not. True = not destroyed. False = destroyed.

___
<a id="lastfired"></a>

### `<Private>` lastFired

**● lastFired**: *`number`* = 1000

*Defined in [ts/weapons/drone.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L48)*

Controls how often drone can fire a new missile.

___
<a id="missiles"></a>

### `<Private>` missiles

**● missiles**: *[Projectile](_ts_weapons_projectile_.projectile.md)[]* =  []

*Defined in [ts/weapons/drone.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L52)*

Keeps track of live missiles, to pass along endCycle signals, and destroy calls.

___
<a id="orbitradius"></a>

### `<Private>` orbitRadius

**● orbitRadius**: *`number`*

*Defined in [ts/weapons/drone.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L56)*

Distance from drone to center of planet (0, 0);

___
<a id="points"></a>

### `<Private>` points

**● points**: *`number`*

*Defined in [ts/weapons/drone.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L60)*

Amount of points for a destroyed drone missile.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/weapons/drone.ts:64](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L64)*

Reference to the scene, used to remove drone from rendering cycle once destroyed.

___
<a id="scoreboard"></a>

### `<Private>` scoreboard

**● scoreboard**: *[ScoreHandler](_ts_displays_score_handler_.scorehandler.md)*

*Defined in [ts/weapons/drone.ts:68](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L68)*

Reference to the scorekeeper for adding points on enemy missile destruction.

___
<a id="speed"></a>

### `<Private>` speed

**● speed**: *`number`* = 0.002

*Defined in [ts/weapons/drone.ts:72](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L72)*

The speed at which the drone travels.

___

## Methods

<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(): `void`

*Defined in [ts/weapons/drone.ts:103](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L103)*

Adds drone object to the three.js scene.

**Returns:** `void`

___
<a id="calculatenextpoint"></a>

### `<Private>` calculateNextPoint

▸ **calculateNextPoint**(): `void`

*Defined in [ts/weapons/drone.ts:109](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L109)*

Calculates the next point in the drone's path.

**Returns:** `void`

___
<a id="createexplosion"></a>

### `<Private>` createExplosion

▸ **createExplosion**(isInert: *`boolean`*): `void`

*Defined in [ts/weapons/drone.ts:119](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L119)*

Creates an explosion during collision and adds it to the collildables list.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| isInert | `boolean` |  flag to let explosion know it isn't a 'real' explosion (hit shield). |

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Defined in [ts/weapons/drone.ts:127](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L127)*

Call to eliminate regardless of current state. Mainly used for non-game instantiations of this (ie. help screen animations).

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(isGameActive: *`boolean`*): `boolean`

*Defined in [ts/weapons/drone.ts:141](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L141)*

At the end of each loop iteration, drone moves, decides to fire, and handles missiles.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| isGameActive | `boolean` |  flag to let generator know if game is not lost. If it is, don't continue accruing points. |

**Returns:** `boolean`
TRUE --> should keep going (don't remove) | FALSE --> No longer useful, remove it.

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/weapons/drone.ts:200](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L200)*

Gets the viability of the drone.

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/weapons/drone.ts:207](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L207)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/weapons/drone.ts:214](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L214)*

Gets the current position of the collidable object.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getdistancetotarget"></a>

###  getDistanceToTarget

▸ **getDistanceToTarget**(): `number`

*Defined in [ts/weapons/drone.ts:221](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L221)*

Calculate distance 'as the crow flies' from drone to target.

**Returns:** `number`
number of pixels from drone to target.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/weapons/drone.ts:233](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L233)*

Gets the name of the drone.

**Returns:** `string`
the name of the drone.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*, otherThing: *`string`*): `boolean`

*Defined in [ts/weapons/drone.ts:242](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L242)*

Called when something collides with drone, which destroys it.

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

*Defined in [ts/weapons/drone.ts:256](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L256)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [ts/weapons/drone.ts:263](https://github.com/WilliamRADFunk/planet-funk/blob/0e68866/src/ts/weapons/drone.ts#L263)*

Removes missile object from the 'visible' scene by removing non-explosion parts from scene.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___

