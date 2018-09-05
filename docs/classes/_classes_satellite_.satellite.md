[planet-funk](../README.md) > ["classes/satellite"](../modules/_classes_satellite_.md) > [Satellite](../classes/_classes_satellite_.satellite.md)

# Class: Satellite

*__class__*: Planetary defense satellite's that player used to fire at incoming threats.

## Hierarchy

**Satellite**

## Index

### Properties

* [currentDistance](_classes_satellite_.satellite.md#currentdistance)
* [currentOrigin](_classes_satellite_.satellite.md#currentorigin)
* [energyLevel](_classes_satellite_.satellite.md#energylevel)
* [energyMax](_classes_satellite_.satellite.md#energymax)
* [index](_classes_satellite_.satellite.md#index)
* [isActive](_classes_satellite_.satellite.md#isactive)
* [missiles](_classes_satellite_.satellite.md#missiles)
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

<a id="currentdistance"></a>

###  currentDistance

**● currentDistance**: *`number`*

*Defined in [classes/satellite.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L35)*

When distance is calculated just before firing, this is updated to be used in fire call.

___
<a id="currentorigin"></a>

###  currentOrigin

**● currentOrigin**: *`number`[]*

*Defined in [classes/satellite.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L39)*

When origin is calculated just before firing, this is updated to be used in fire call.

___
<a id="energylevel"></a>

### `<Private>` energyLevel

**● energyLevel**: *`number`* =  this.energyMax

*Defined in [classes/satellite.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L47)*

Amount of energy at the satellite's disposal.

___
<a id="energymax"></a>

### `<Private>` energyMax

**● energyMax**: *`number`* = 1000

*Defined in [classes/satellite.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L43)*

Max energy amount

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in [classes/satellite.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L51)*

Number in the creation order. Needed later to scale energy bar.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [classes/satellite.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L56)*

Flag to signal if satellite has been destroyed or not. True = not destroyed. False = destroyed.

___
<a id="missiles"></a>

### `<Private>` missiles

**● missiles**: *[Projectile](_classes_projectile_.projectile.md)[]* =  []

*Defined in [classes/satellite.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L60)*

Keeps track of live missiles, to pass along endCycle signals, and destroy calls.

___
<a id="satellitebody"></a>

### `<Private>` satelliteBody

**● satelliteBody**: *`Mesh`*

*Defined in [classes/satellite.ts:96](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L96)*

Controls the overall rendering of the satellite body

___
<a id="satellitebodygeometry"></a>

### `<Private>` satelliteBodyGeometry

**● satelliteBodyGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:64](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L64)*

Controls size and shape of the satellite body

___
<a id="satellitebodymaterial"></a>

### `<Private>` satelliteBodyMaterial

**● satelliteBodyMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:80](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L80)*

Controls the color of the satellite body material

___
<a id="satellitecontainer"></a>

### `<Private>` satelliteContainer

**● satelliteContainer**: *`Mesh`*

*Defined in [classes/satellite.ts:100](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L100)*

Controls the overall rendering of the satellite container

___
<a id="satellitecontainergeometry"></a>

### `<Private>` satelliteContainerGeometry

**● satelliteContainerGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:68](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L68)*

Controls size and shape of the satellite container

___
<a id="satellitecontainermaterial"></a>

### `<Private>` satelliteContainerMaterial

**● satelliteContainerMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:84](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L84)*

Controls the color of the satellite container material

___
<a id="satelliteenergy"></a>

### `<Private>` satelliteEnergy

**● satelliteEnergy**: *`Mesh`*

*Defined in [classes/satellite.ts:104](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L104)*

Controls the overall rendering of the satellite energy bar

___
<a id="satelliteenergygeometry"></a>

### `<Private>` satelliteEnergyGeometry

**● satelliteEnergyGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:72](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L72)*

Controls size and shape of the satellite energy bar

___
<a id="satelliteenergymaterial"></a>

### `<Private>` satelliteEnergyMaterial

**● satelliteEnergyMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:88](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L88)*

Controls the color of the satellite energy bar material

___
<a id="satellitewings"></a>

### `<Private>` satelliteWings

**● satelliteWings**: *`Mesh`*

*Defined in [classes/satellite.ts:108](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L108)*

Controls the overall rendering of the satellite wings

___
<a id="satellitewingsgeometry"></a>

### `<Private>` satelliteWingsGeometry

**● satelliteWingsGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:76](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L76)*

Controls size and shape of the satellite wings

___
<a id="satellitewingsmaterial"></a>

### `<Private>` satelliteWingsMaterial

**● satelliteWingsMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:92](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L92)*

Controls the color of the satellite wings material

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [classes/satellite.ts:148](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L148)*

At the end of each loop iteration, satellite regains a little energy.

**Returns:** `void`

___
<a id="fire"></a>

###  fire

▸ **fire**(scene: *`Scene`*, targetPoint: *`Vector3`*): `void`

*Defined in [classes/satellite.ts:173](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L173)*

If it's determined that this weapon is closest to click point, and it has the power, it will create and launch the projectile, subtract the energy used, and call to update energy bar.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  coordinates of game area that player clicked/touched. |
| targetPoint | `Vector3` |  point with x,z coordinates where player click mouse on game area. |

**Returns:** `void`

___
<a id="getdistancetotarget"></a>

###  getDistanceToTarget

▸ **getDistanceToTarget**(targetPoint: *`Vector3`*, rotation: *`number`*): `number`

*Defined in [classes/satellite.ts:199](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L199)*

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

*Defined in [classes/satellite.ts:239](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L239)*

Provides the created mesh so it can be added to the mesh of a parent object like the planet.

**Returns:** `Mesh`
the satellite's mesh

___
<a id="impact"></a>

###  impact

▸ **impact**(): `void`

*Defined in [classes/satellite.ts:245](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L245)*

Called when something collides with satellite, which destroys it.

**Returns:** `void`

___
<a id="updateenergybar"></a>

### `<Private>` updateEnergyBar

▸ **updateEnergyBar**(): `void`

*Defined in [classes/satellite.ts:255](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/satellite.ts#L255)*

Changes the size and color of the energy bar.

**Returns:** `void`

___

