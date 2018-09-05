[planet-funk](../README.md) > ["classes/projectile"](../modules/_classes_projectile_.md) > [Projectile](../classes/_classes_projectile_.projectile.md)

# Class: Projectile

*__class__*: Projectile that represents missile unit in the game. It hits something, it blows up.

## Hierarchy

**Projectile**

## Index

### Properties

* [currentExplosionScale](_classes_projectile_.projectile.md#currentexplosionscale)
* [currentPoint](_classes_projectile_.projectile.md#currentpoint)
* [distanceTraveled](_classes_projectile_.projectile.md#distancetraveled)
* [endingPoint](_classes_projectile_.projectile.md#endingpoint)
* [headGeometry](_classes_projectile_.projectile.md#headgeometry)
* [headMaterial](_classes_projectile_.projectile.md#headmaterial)
* [headMesh](_classes_projectile_.projectile.md#headmesh)
* [isActive](_classes_projectile_.projectile.md#isactive)
* [isExploding](_classes_projectile_.projectile.md#isexploding)
* [isExplosionGrowing](_classes_projectile_.projectile.md#isexplosiongrowing)
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

<a id="currentexplosionscale"></a>

### `<Private>` currentExplosionScale

**● currentExplosionScale**: *`number`* = 1

*Defined in [classes/projectile.ts:19](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L19)*

Keeps track of how big explosions scale is at moment.

___
<a id="currentpoint"></a>

### `<Private>` currentPoint

**● currentPoint**: *`number`[]*

*Defined in [classes/projectile.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L23)*

Keeps track of the x,z point the missile is at currently.

___
<a id="distancetraveled"></a>

### `<Private>` distanceTraveled

**● distanceTraveled**: *`number`*

*Defined in [classes/projectile.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L27)*

Tracks the distance traveled thus far to update the calculateNextPoint calculation.

___
<a id="endingpoint"></a>

### `<Private>` endingPoint

**● endingPoint**: *`number`[]*

*Defined in [classes/projectile.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L31)*

Keeps track of the x,z point of player's click point.

___
<a id="headgeometry"></a>

### `<Private>` headGeometry

**● headGeometry**: *`CircleGeometry`*

*Defined in [classes/projectile.ts:50](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L50)*

Controls size and shape of the missile's glowing head.

___
<a id="headmaterial"></a>

### `<Private>` headMaterial

**● headMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/projectile.ts:54](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L54)*

Controls the color of the missile's glowing head material.

___
<a id="headmesh"></a>

### `<Private>` headMesh

**● headMesh**: *`Mesh`*

*Defined in [classes/projectile.ts:58](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L58)*

Controls the overall rendering of the glowing head.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [classes/projectile.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L36)*

Flag to signal if the missile has been destroyed. True is not destroyed. False is destroyed.

___
<a id="isexploding"></a>

### `<Private>` isExploding

**● isExploding**: *`boolean`* = false

*Defined in [classes/projectile.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L41)*

Flag to signal if the missile is in explosion mode. True is exploding. False is in motion.

___
<a id="isexplosiongrowing"></a>

### `<Private>` isExplosionGrowing

**● isExplosionGrowing**: *`boolean`* = true

*Defined in [classes/projectile.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L46)*

Flag to signal if the missile's explosion is expanding/contracting. True is expanding. False is contracting..

___
<a id="originalstartingpoint"></a>

### `<Private>` originalStartingPoint

**● originalStartingPoint**: *`number`[]*

*Defined in [classes/projectile.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L62)*

Keeps track of the x,z point where missile fired from.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [classes/projectile.ts:66](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L66)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="speed"></a>

### `<Private>` speed

**● speed**: *`number`* = 0.03

*Defined in [classes/projectile.ts:70](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L70)*

The speed at which the missile travels.

___
<a id="tailgeometry"></a>

### `<Private>` tailGeometry

**● tailGeometry**: *`Geometry`*

*Defined in [classes/projectile.ts:74](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L74)*

Controls size and shape of the missile's fiery trail.

___
<a id="tailmaterial"></a>

### `<Private>` tailMaterial

**● tailMaterial**: *`LineBasicMaterial`*

*Defined in [classes/projectile.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L78)*

Controls the color of the missile's fiery trail material.

___
<a id="tailmesh"></a>

### `<Private>` tailMesh

**● tailMesh**: *`Line`*

*Defined in [classes/projectile.ts:82](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L82)*

Controls the overall rendering of the missile's fiery trail.

___
<a id="totaldistance"></a>

### `<Private>` totalDistance

**● totalDistance**: *`number`*

*Defined in [classes/projectile.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L86)*

The total distance from satellite to player's click point.

___

## Methods

<a id="calculatenextpoint"></a>

### `<Private>` calculateNextPoint

▸ **calculateNextPoint**(): `void`

*Defined in [classes/projectile.ts:130](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L130)*

Calculates the next point in the missile's point.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `boolean`

*Defined in [classes/projectile.ts:141](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/projectile.ts#L141)*

At the end of each loop iteration, move the projectile a little.

**Returns:** `boolean`
whether or not the projectile is done, and should be removed from satellite's list.

___

