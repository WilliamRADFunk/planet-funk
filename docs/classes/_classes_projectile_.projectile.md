[planet-funk](../README.md) > ["classes/projectile"](../modules/_classes_projectile_.md) > [Projectile](../classes/_classes_projectile_.projectile.md)

# Class: Projectile

*__class__*: Projectile that represents missile unit in the game. It hits something, it blows up.

## Hierarchy

**Projectile**

## Index

### Properties

* [currentPoint](_classes_projectile_.projectile.md#currentpoint)
* [distanceTraveled](_classes_projectile_.projectile.md#distancetraveled)
* [endingPoint](_classes_projectile_.projectile.md#endingpoint)
* [headGeometry](_classes_projectile_.projectile.md#headgeometry)
* [headMaterial](_classes_projectile_.projectile.md#headmaterial)
* [headMesh](_classes_projectile_.projectile.md#headmesh)
* [isActive](_classes_projectile_.projectile.md#isactive)
* [originalStartingPoint](_classes_projectile_.projectile.md#originalstartingpoint)
* [scene](_classes_projectile_.projectile.md#scene)
* [speed](_classes_projectile_.projectile.md#speed)
* [tailGeometry](_classes_projectile_.projectile.md#tailgeometry)
* [tailMaterial](_classes_projectile_.projectile.md#tailmaterial)
* [tailMesh](_classes_projectile_.projectile.md#tailmesh)
* [totalDistance](_classes_projectile_.projectile.md#totaldistance)

### Methods

* [calculateNextPoint](_classes_projectile_.projectile.md#calculatenextpoint)
* [endCycle](_classes_projectile_.projectile.md#endcycle)

---

## Properties

<a id="currentpoint"></a>

### `<Private>` currentPoint

**● currentPoint**: *`number`[]*

*Defined in classes/projectile.ts:19*

Keeps track of the x,z point the missile is at currently.

___
<a id="distancetraveled"></a>

### `<Private>` distanceTraveled

**● distanceTraveled**: *`number`*

*Defined in classes/projectile.ts:23*

Tracks the distance traveled thus far to update the calculateNextPoint calculation.

___
<a id="endingpoint"></a>

### `<Private>` endingPoint

**● endingPoint**: *`number`[]*

*Defined in classes/projectile.ts:27*

Keeps track of the x,z point of player's click point.

___
<a id="headgeometry"></a>

### `<Private>` headGeometry

**● headGeometry**: *`CircleGeometry`*

*Defined in classes/projectile.ts:35*

Controls size and shape of the missile's glowing head.

___
<a id="headmaterial"></a>

### `<Private>` headMaterial

**● headMaterial**: *`MeshBasicMaterial`*

*Defined in classes/projectile.ts:39*

Controls the color of the missile's glowing head material.

___
<a id="headmesh"></a>

### `<Private>` headMesh

**● headMesh**: *`Mesh`*

*Defined in classes/projectile.ts:43*

Controls the overall rendering of the glowing head.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in classes/projectile.ts:31*

Flag to signal if the missile has been destroyed. True is not destroyed. False is destroyed.

___
<a id="originalstartingpoint"></a>

### `<Private>` originalStartingPoint

**● originalStartingPoint**: *`number`[]*

*Defined in classes/projectile.ts:47*

Keeps track of the x,z point where missile fired from.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in classes/projectile.ts:51*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="speed"></a>

### `<Private>` speed

**● speed**: *`number`* = 0.03

*Defined in classes/projectile.ts:55*

The speed at which the missile travels.

___
<a id="tailgeometry"></a>

### `<Private>` tailGeometry

**● tailGeometry**: *`Geometry`*

*Defined in classes/projectile.ts:59*

Controls size and shape of the missile's fiery trail.

___
<a id="tailmaterial"></a>

### `<Private>` tailMaterial

**● tailMaterial**: *`LineBasicMaterial`*

*Defined in classes/projectile.ts:63*

Controls the color of the missile's fiery trail material.

___
<a id="tailmesh"></a>

### `<Private>` tailMesh

**● tailMesh**: *`Line`*

*Defined in classes/projectile.ts:67*

Controls the overall rendering of the missile's fiery trail.

___
<a id="totaldistance"></a>

### `<Private>` totalDistance

**● totalDistance**: *`number`*

*Defined in classes/projectile.ts:71*

The total distance from satellite to player's click point.

___

## Methods

<a id="calculatenextpoint"></a>

### `<Private>` calculateNextPoint

▸ **calculateNextPoint**(): `void`

*Defined in classes/projectile.ts:111*

Calculates the next point in the missile's point.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `boolean`

*Defined in classes/projectile.ts:122*

At the end of each loop iteration, move the projectile a little.

**Returns:** `boolean`
whether or not the projectile is done, and should be removed from satellite's list.

___

