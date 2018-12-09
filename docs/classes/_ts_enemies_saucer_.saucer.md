[planet-funk](../README.md) > ["ts/enemies/saucer"](../modules/_ts_enemies_saucer_.md) > [Saucer](../classes/_ts_enemies_saucer_.saucer.md)

# Class: Saucer

## Hierarchy

**Saucer**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [currentPoint](_ts_enemies_saucer_.saucer.md#currentpoint)
* [distanceTraveled](_ts_enemies_saucer_.saucer.md#distancetraveled)
* [endingPoint](_ts_enemies_saucer_.saucer.md#endingpoint)
* [explosion](_ts_enemies_saucer_.saucer.md#explosion)
* [isActive](_ts_enemies_saucer_.saucer.md#isactive)
* [isHelpSaucer](_ts_enemies_saucer_.saucer.md#ishelpsaucer)
* [originalStartingPoint](_ts_enemies_saucer_.saucer.md#originalstartingpoint)
* [saucer](_ts_enemies_saucer_.saucer.md#saucer)
* [saucerGeometry](_ts_enemies_saucer_.saucer.md#saucergeometry)
* [saucerMaterial](_ts_enemies_saucer_.saucer.md#saucermaterial)
* [scene](_ts_enemies_saucer_.saucer.md#scene)
* [speed](_ts_enemies_saucer_.saucer.md#speed)
* [totalDistance](_ts_enemies_saucer_.saucer.md#totaldistance)
* [waitToFire](_ts_enemies_saucer_.saucer.md#waittofire)
* [yPos](_ts_enemies_saucer_.saucer.md#ypos)

### Methods

* [activate](_ts_enemies_saucer_.saucer.md#activate)
* [addToScene](_ts_enemies_saucer_.saucer.md#addtoscene)
* [calculateNextPoint](_ts_enemies_saucer_.saucer.md#calculatenextpoint)
* [createExplosion](_ts_enemies_saucer_.saucer.md#createexplosion)
* [destroy](_ts_enemies_saucer_.saucer.md#destroy)
* [endCycle](_ts_enemies_saucer_.saucer.md#endcycle)
* [getActive](_ts_enemies_saucer_.saucer.md#getactive)
* [getCollisionRadius](_ts_enemies_saucer_.saucer.md#getcollisionradius)
* [getCurrentPosition](_ts_enemies_saucer_.saucer.md#getcurrentposition)
* [getName](_ts_enemies_saucer_.saucer.md#getname)
* [impact](_ts_enemies_saucer_.saucer.md#impact)
* [isPassive](_ts_enemies_saucer_.saucer.md#ispassive)
* [removeFromScene](_ts_enemies_saucer_.saucer.md#removefromscene)

---

## Properties

<a id="currentpoint"></a>

### `<Private>` currentPoint

**● currentPoint**: *`number`[]*

*Defined in [ts/enemies/saucer.ts:20](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L20)*

Keeps track of the x,z point the saucer is at currently.

___
<a id="distancetraveled"></a>

### `<Private>` distanceTraveled

**● distanceTraveled**: *`number`*

*Defined in [ts/enemies/saucer.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L24)*

Tracks the distance traveled thus far to update the calculateNextPoint calculation.

___
<a id="endingpoint"></a>

### `<Private>` endingPoint

**● endingPoint**: *`number`[]*

*Defined in [ts/enemies/saucer.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L28)*

Keeps track of the x,z point of saucer's destination point.

___
<a id="explosion"></a>

### `<Private>` explosion

**● explosion**: *[Explosion](_ts_weapons_explosion_.explosion.md)*

*Defined in [ts/enemies/saucer.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L32)*

Explosion from impacted saucer

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/enemies/saucer.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L37)*

Flag to signal if saucer has been destroyed or not. True = not destroyed. False = destroyed.

___
<a id="ishelpsaucer"></a>

### `<Private>` isHelpSaucer

**● isHelpSaucer**: *`boolean`* = false

*Defined in [ts/enemies/saucer.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L41)*

Optional constructor param that determines if saucer is on help screen. If so, don't play sounds.

___
<a id="originalstartingpoint"></a>

### `<Private>` originalStartingPoint

**● originalStartingPoint**: *`number`[]*

*Defined in [ts/enemies/saucer.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L45)*

Keeps track of the x,z point where saucer fired from.

___
<a id="saucer"></a>

### `<Private>` saucer

**● saucer**: *`Mesh`*

*Defined in [ts/enemies/saucer.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L57)*

Controls the overall rendering of the saucer

___
<a id="saucergeometry"></a>

### `<Private>` saucerGeometry

**● saucerGeometry**: *`CircleGeometry`*

*Defined in [ts/enemies/saucer.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L49)*

Controls size and shape of the saucer

___
<a id="saucermaterial"></a>

### `<Private>` saucerMaterial

**● saucerMaterial**: *`MeshPhongMaterial`*

*Defined in [ts/enemies/saucer.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L53)*

Controls the color of the saucer material

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/enemies/saucer.ts:61](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L61)*

Reference to the scene, used to remove saucer from rendering cycle once destroyed.

___
<a id="speed"></a>

### `<Private>` speed

**● speed**: *`number`* = 0.008

*Defined in [ts/enemies/saucer.ts:65](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L65)*

The speed at which the saucer travels.

___
<a id="totaldistance"></a>

### `<Private>` totalDistance

**● totalDistance**: *`number`*

*Defined in [ts/enemies/saucer.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L69)*

The total distance from saucer to final destination.

___
<a id="waittofire"></a>

### `<Private>` waitToFire

**● waitToFire**: *`number`* = 0

*Defined in [ts/enemies/saucer.ts:74](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L74)*

The wait number of iterations before loosing the saucer. Prevents new level creation from saucer immediately.

___
<a id="ypos"></a>

### `<Private>` yPos

**● yPos**: *`number`*

*Defined in [ts/enemies/saucer.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L78)*

The distance to and from the camera that the saucer should exist...its layer.

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/enemies/saucer.ts:133](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L133)*

(Re)activates the saucer, usually at beginning of new level.

**Returns:** `void`

___
<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(): `void`

*Defined in [ts/enemies/saucer.ts:143](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L143)*

Adds saucer object to the three.js scene.

**Returns:** `void`

___
<a id="calculatenextpoint"></a>

### `<Private>` calculateNextPoint

▸ **calculateNextPoint**(): `void`

*Defined in [ts/enemies/saucer.ts:149](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L149)*

Calculates the next point in the saucer's path.

**Returns:** `void`

___
<a id="createexplosion"></a>

### `<Private>` createExplosion

▸ **createExplosion**(isInert: *`boolean`*): `void`

*Defined in [ts/enemies/saucer.ts:166](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L166)*

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

*Defined in [ts/enemies/saucer.ts:179](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L179)*

Call to eliminate regardless of current state. Mainly used for non-game instantiations of this (ie. help screen animations).

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `boolean`

*Defined in [ts/enemies/saucer.ts:192](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L192)*

At the end of each loop iteration, move the saucer a little.

**Returns:** `boolean`
whether or not the saucer is done, and its points calculated.

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/enemies/saucer.ts:218](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L218)*

Gets the viability of the object.

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/enemies/saucer.ts:225](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L225)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/enemies/saucer.ts:232](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L232)*

Gets the current position of the collidable object.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/enemies/saucer.ts:239](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L239)*

Gets the name of the saucer.

**Returns:** `string`
the name of the saucer.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*, otherThing: *`string`*): `boolean`

*Defined in [ts/enemies/saucer.ts:248](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L248)*

Called when something collides with saucer, which destroys it.

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

*Defined in [ts/enemies/saucer.ts:261](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L261)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [ts/enemies/saucer.ts:268](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/enemies/saucer.ts#L268)*

Removes saucer object from the 'visible' scene by sending it back to its starting location.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___

