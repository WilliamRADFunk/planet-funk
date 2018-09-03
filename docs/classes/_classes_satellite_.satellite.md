[planet-funk](../README.md) > ["classes/satellite"](../modules/_classes_satellite_.md) > [Satellite](../classes/_classes_satellite_.satellite.md)

# Class: Satellite

*__class__*: Planetary defense satellite's that player used to fire at incoming threats.

## Hierarchy

**Satellite**

## Index

### Properties

* [energyLevel](_classes_satellite_.satellite.md#energylevel)
* [index](_classes_satellite_.satellite.md#index)
* [isActive](_classes_satellite_.satellite.md#isactive)
* [satelliteBody](_classes_satellite_.satellite.md#satellitebody)
* [satelliteBodyGeometry](_classes_satellite_.satellite.md#satellitebodygeometry)
* [satelliteBodyMaterial](_classes_satellite_.satellite.md#satellitebodymaterial)
* [satelliteContainer](_classes_satellite_.satellite.md#satellitecontainer)
* [satelliteContainerGeometry](_classes_satellite_.satellite.md#satellitecontainergeometry)
* [satelliteContainerMaterial](_classes_satellite_.satellite.md#satellitecontainermaterial)
* [satelliteEnergy](_classes_satellite_.satellite.md#satelliteenergy)
* [satelliteEnergyGeometry](_classes_satellite_.satellite.md#satelliteenergygeometry)
* [satelliteEnergyMaterial](_classes_satellite_.satellite.md#satelliteenergymaterial)
* [satelliteWings](_classes_satellite_.satellite.md#satellitewings)
* [satelliteWingsGeometry](_classes_satellite_.satellite.md#satellitewingsgeometry)
* [satelliteWingsMaterial](_classes_satellite_.satellite.md#satellitewingsmaterial)

### Methods

* [endCycle](_classes_satellite_.satellite.md#endcycle)
* [fire](_classes_satellite_.satellite.md#fire)
* [getDistanceToTarget](_classes_satellite_.satellite.md#getdistancetotarget)
* [getMesh](_classes_satellite_.satellite.md#getmesh)
* [impact](_classes_satellite_.satellite.md#impact)
* [updateEnergyBar](_classes_satellite_.satellite.md#updateenergybar)

---

## Properties

<a id="energylevel"></a>

### `<Private>` energyLevel

**● energyLevel**: *`number`* = 1000

*Defined in [classes/satellite.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L45)*

Amount of energy at the satellite's disposal.

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in [classes/satellite.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L37)*

Number in the creation order. Needed later to scale energy bar.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [classes/satellite.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L41)*

Flag to signal if satellite has been destroyed or not. True = not destroyed. False = destroyed.

___
<a id="satellitebody"></a>

### `<Private>` satelliteBody

**● satelliteBody**: *`Mesh`*

*Defined in [classes/satellite.ts:81](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L81)*

Controls the overall rendering of the satellite body

___
<a id="satellitebodygeometry"></a>

### `<Private>` satelliteBodyGeometry

**● satelliteBodyGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L49)*

Controls size and shape of the satellite body

___
<a id="satellitebodymaterial"></a>

### `<Private>` satelliteBodyMaterial

**● satelliteBodyMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:65](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L65)*

Controls the color of the satellite body material

___
<a id="satellitecontainer"></a>

### `<Private>` satelliteContainer

**● satelliteContainer**: *`Mesh`*

*Defined in [classes/satellite.ts:85](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L85)*

Controls the overall rendering of the satellite container

___
<a id="satellitecontainergeometry"></a>

### `<Private>` satelliteContainerGeometry

**● satelliteContainerGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L53)*

Controls size and shape of the satellite container

___
<a id="satellitecontainermaterial"></a>

### `<Private>` satelliteContainerMaterial

**● satelliteContainerMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L69)*

Controls the color of the satellite container material

___
<a id="satelliteenergy"></a>

### `<Private>` satelliteEnergy

**● satelliteEnergy**: *`Mesh`*

*Defined in [classes/satellite.ts:89](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L89)*

Controls the overall rendering of the satellite energy bar

___
<a id="satelliteenergygeometry"></a>

### `<Private>` satelliteEnergyGeometry

**● satelliteEnergyGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L57)*

Controls size and shape of the satellite energy bar

___
<a id="satelliteenergymaterial"></a>

### `<Private>` satelliteEnergyMaterial

**● satelliteEnergyMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:73](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L73)*

Controls the color of the satellite energy bar material

___
<a id="satellitewings"></a>

### `<Private>` satelliteWings

**● satelliteWings**: *`Mesh`*

*Defined in [classes/satellite.ts:93](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L93)*

Controls the overall rendering of the satellite wings

___
<a id="satellitewingsgeometry"></a>

### `<Private>` satelliteWingsGeometry

**● satelliteWingsGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:61](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L61)*

Controls size and shape of the satellite wings

___
<a id="satellitewingsmaterial"></a>

### `<Private>` satelliteWingsMaterial

**● satelliteWingsMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:77](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L77)*

Controls the color of the satellite wings material

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [classes/satellite.ts:133](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L133)*

At the end of each loop iteration, satellite regains a little energy.

**Returns:** `void`

___
<a id="fire"></a>

###  fire

▸ **fire**(scene: *`Scene`*, point: *`Vector3`*, rotation: *`number`*): `void`

*Defined in [classes/satellite.ts:146](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L146)*

If it's determined that this weapon is closest to click point, and it has the power, it will create and launch the projectile, subtract the energy used, and call to update energy bar.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |
| point | `Vector3` |  point with x,z coordinates where player click mouse on game area. |
| rotation | `number` |

**Returns:** `void`

___
<a id="getdistancetotarget"></a>

###  getDistanceToTarget

▸ **getDistanceToTarget**(targetX: *`number`*, targetZ: *`number`*): `number`

*Defined in [classes/satellite.ts:177](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L177)*

Calculate distance "as the crow flies" from satellite to target.

**Parameters:**

| Param | Type |
| ------ | ------ |
| targetX | `number` |
| targetZ | `number` |

**Returns:** `number`
number of pixelsm from satellite to target.

___
<a id="getmesh"></a>

###  getMesh

▸ **getMesh**(): `Mesh`

*Defined in [classes/satellite.ts:185](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L185)*

Provides the created mesh so it can be added to the mesh of a parent object like the planet.

**Returns:** `Mesh`
the satellite's mesh

___
<a id="impact"></a>

###  impact

▸ **impact**(): `void`

*Defined in [classes/satellite.ts:191](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L191)*

Called when something collides with satellite, which destroys it.

**Returns:** `void`

___
<a id="updateenergybar"></a>

###  updateEnergyBar

▸ **updateEnergyBar**(): `void`

*Defined in [classes/satellite.ts:201](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/satellite.ts#L201)*

Changes the size and color of the energy bar.

**Returns:** `void`

___

