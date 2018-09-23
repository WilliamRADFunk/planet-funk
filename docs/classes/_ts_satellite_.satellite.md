[planet-funk](../README.md) > ["ts/satellite"](../modules/_ts_satellite_.md) > [Satellite](../classes/_ts_satellite_.satellite.md)

# Class: Satellite

*__class__*: Planetary defense satellite's that player used to fire at incoming threats.

## Hierarchy

**Satellite**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [currentDistance](_ts_satellite_.satellite.md#currentdistance)
* [currentOrigin](_ts_satellite_.satellite.md#currentorigin)
* [currentRotation](_ts_satellite_.satellite.md#currentrotation)
* [energyLevel](_ts_satellite_.satellite.md#energylevel)
* [energyMax](_ts_satellite_.satellite.md#energymax)
* [index](_ts_satellite_.satellite.md#index)
* [isActive](_ts_satellite_.satellite.md#isactive)
* [missiles](_ts_satellite_.satellite.md#missiles)
* [satelliteBody](_ts_satellite_.satellite.md#satellitebody)
* [satelliteBodyGeometry](_ts_satellite_.satellite.md#satellitebodygeometry)
* [satelliteBodyMaterial](_ts_satellite_.satellite.md#satellitebodymaterial)
* [satelliteContainer](_ts_satellite_.satellite.md#satellitecontainer)
* [satelliteContainerGeometry](_ts_satellite_.satellite.md#satellitecontainergeometry)
* [satelliteContainerMaterial](_ts_satellite_.satellite.md#satellitecontainermaterial)
* [satelliteEnergy](_ts_satellite_.satellite.md#satelliteenergy)
* [satelliteEnergyGeometry](_ts_satellite_.satellite.md#satelliteenergygeometry)
* [satelliteEnergyMaterial](_ts_satellite_.satellite.md#satelliteenergymaterial)
* [satelliteWings](_ts_satellite_.satellite.md#satellitewings)
* [satelliteWingsGeometry](_ts_satellite_.satellite.md#satellitewingsgeometry)
* [satelliteWingsMaterial](_ts_satellite_.satellite.md#satellitewingsmaterial)

### Methods

* [endCycle](_ts_satellite_.satellite.md#endcycle)
* [fire](_ts_satellite_.satellite.md#fire)
* [getActive](_ts_satellite_.satellite.md#getactive)
* [getCollisionRadius](_ts_satellite_.satellite.md#getcollisionradius)
* [getCurrentPosition](_ts_satellite_.satellite.md#getcurrentposition)
* [getDistanceToTarget](_ts_satellite_.satellite.md#getdistancetotarget)
* [getMesh](_ts_satellite_.satellite.md#getmesh)
* [getName](_ts_satellite_.satellite.md#getname)
* [impact](_ts_satellite_.satellite.md#impact)
* [isPassive](_ts_satellite_.satellite.md#ispassive)
* [updateEnergyBar](_ts_satellite_.satellite.md#updateenergybar)

---

## Properties

<a id="currentdistance"></a>

###  currentDistance

**● currentDistance**: *`number`*

*Defined in [ts/satellite.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L37)*

When distance is calculated just before firing, this is updated to be used in fire call.

___
<a id="currentorigin"></a>

###  currentOrigin

**● currentOrigin**: *`number`[]*

*Defined in [ts/satellite.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L41)*

When origin is calculated just before firing, this is updated to be used in fire call.

___
<a id="currentrotation"></a>

###  currentRotation

**● currentRotation**: *`number`*

*Defined in [ts/satellite.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L45)*

Keeps track of planet's rotation to help calc satellite's position.

___
<a id="energylevel"></a>

### `<Private>` energyLevel

**● energyLevel**: *`number`* =  this.energyMax

*Defined in [ts/satellite.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L53)*

Amount of energy at the satellite's disposal.

___
<a id="energymax"></a>

### `<Private>` energyMax

**● energyMax**: *`number`* = 1000

*Defined in [ts/satellite.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L49)*

Max energy amount

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in [ts/satellite.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L57)*

Number in the creation order. Needed later to scale energy bar.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/satellite.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L62)*

Flag to signal if satellite has been destroyed or not. True = not destroyed. False = destroyed.

___
<a id="missiles"></a>

### `<Private>` missiles

**● missiles**: *[Projectile](_ts_projectile_.projectile.md)[]* =  []

*Defined in [ts/satellite.ts:66](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L66)*

Keeps track of live missiles, to pass along endCycle signals, and destroy calls.

___
<a id="satellitebody"></a>

### `<Private>` satelliteBody

**● satelliteBody**: *`Mesh`*

*Defined in [ts/satellite.ts:102](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L102)*

Controls the overall rendering of the satellite body

___
<a id="satellitebodygeometry"></a>

### `<Private>` satelliteBodyGeometry

**● satelliteBodyGeometry**: *`BoxGeometry`*

*Defined in [ts/satellite.ts:70](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L70)*

Controls size and shape of the satellite body

___
<a id="satellitebodymaterial"></a>

### `<Private>` satelliteBodyMaterial

**● satelliteBodyMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/satellite.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L86)*

Controls the color of the satellite body material

___
<a id="satellitecontainer"></a>

### `<Private>` satelliteContainer

**● satelliteContainer**: *`Mesh`*

*Defined in [ts/satellite.ts:106](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L106)*

Controls the overall rendering of the satellite container

___
<a id="satellitecontainergeometry"></a>

### `<Private>` satelliteContainerGeometry

**● satelliteContainerGeometry**: *`BoxGeometry`*

*Defined in [ts/satellite.ts:74](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L74)*

Controls size and shape of the satellite container

___
<a id="satellitecontainermaterial"></a>

### `<Private>` satelliteContainerMaterial

**● satelliteContainerMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/satellite.ts:90](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L90)*

Controls the color of the satellite container material

___
<a id="satelliteenergy"></a>

### `<Private>` satelliteEnergy

**● satelliteEnergy**: *`Mesh`*

*Defined in [ts/satellite.ts:110](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L110)*

Controls the overall rendering of the satellite energy bar

___
<a id="satelliteenergygeometry"></a>

### `<Private>` satelliteEnergyGeometry

**● satelliteEnergyGeometry**: *`BoxGeometry`*

*Defined in [ts/satellite.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L78)*

Controls size and shape of the satellite energy bar

___
<a id="satelliteenergymaterial"></a>

### `<Private>` satelliteEnergyMaterial

**● satelliteEnergyMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/satellite.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L94)*

Controls the color of the satellite energy bar material

___
<a id="satellitewings"></a>

### `<Private>` satelliteWings

**● satelliteWings**: *`Mesh`*

*Defined in [ts/satellite.ts:114](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L114)*

Controls the overall rendering of the satellite wings

___
<a id="satellitewingsgeometry"></a>

### `<Private>` satelliteWingsGeometry

**● satelliteWingsGeometry**: *`BoxGeometry`*

*Defined in [ts/satellite.ts:82](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L82)*

Controls size and shape of the satellite wings

___
<a id="satellitewingsmaterial"></a>

### `<Private>` satelliteWingsMaterial

**● satelliteWingsMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/satellite.ts:98](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L98)*

Controls the color of the satellite wings material

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(rotation: *`number`*): `void`

*Defined in [ts/satellite.ts:155](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L155)*

At the end of each loop iteration, satellite regains a little energy.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rotation | `number` |  of planet to base current position off of. |

**Returns:** `void`

___
<a id="fire"></a>

###  fire

▸ **fire**(scene: *`Scene`*, targetPoint: *`Vector3`*): `void`

*Defined in [ts/satellite.ts:182](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L182)*

If it's determined that this weapon is closest to click point, and it has the power, it will create and launch the projectile, subtract the energy used, and call to update energy bar.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  coordinates of game area that player clicked/touched. |
| targetPoint | `Vector3` |  point with x,z coordinates where player click mouse on game area. |

**Returns:** `void`

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/satellite.ts:207](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L207)*

Gets the viability of the satellite.

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/satellite.ts:214](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L214)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/satellite.ts:221](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L221)*

Gets the current position of the collidable object.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getdistancetotarget"></a>

###  getDistanceToTarget

▸ **getDistanceToTarget**(targetPoint: *`Vector3`*, rotation: *`number`*): `number`

*Defined in [ts/satellite.ts:232](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L232)*

Calculate distance "as the crow flies" from satellite to target.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetPoint | `Vector3` |  coordinates of game area that player clicked/touched. |
| rotation | `number` |  current rotation amount of planetary body. |

**Returns:** `number`
number of pixels from satellite to target.

___
<a id="getmesh"></a>

###  getMesh

▸ **getMesh**(): `Mesh`

*Defined in [ts/satellite.ts:250](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L250)*

Provides the created mesh so it can be added to the mesh of a parent object like the planet.

**Returns:** `Mesh`
the satellite's mesh

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/satellite.ts:257](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L257)*

Gets the name of the satellite.

**Returns:** `string`
the name of the satellite.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `boolean`

*Defined in [ts/satellite.ts:265](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L265)*

Called when something collides with asteroid, which destroys it.

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

*Defined in [ts/satellite.ts:277](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L277)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="updateenergybar"></a>

### `<Private>` updateEnergyBar

▸ **updateEnergyBar**(): `void`

*Defined in [ts/satellite.ts:283](https://github.com/WilliamRADFunk/planet-funk/blob/ab63c66/src/ts/satellite.ts#L283)*

Changes the size and color of the energy bar.

**Returns:** `void`

___

