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
* [updateEnergyBar](_classes_satellite_.satellite.md#updateenergybar)

---

## Properties

<a id="energylevel"></a>

### `<Private>` energyLevel

**● energyLevel**: *`number`* = 1000

*Defined in [classes/satellite.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L36)*

Amount of energy at the satellite's disposal.

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in [classes/satellite.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L28)*

Number in the creation order. Needed later to scale energy bar.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [classes/satellite.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L32)*

Flag to signal if satellite has been destroyed or not. True = not destroyed. False = destroyed.

___
<a id="satellitebody"></a>

### `<Private>` satelliteBody

**● satelliteBody**: *`Mesh`*

*Defined in [classes/satellite.ts:72](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L72)*

Controls the overall rendering of the satellite body

___
<a id="satellitebodygeometry"></a>

### `<Private>` satelliteBodyGeometry

**● satelliteBodyGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L40)*

Controls size and shape of the satellite body

___
<a id="satellitebodymaterial"></a>

### `<Private>` satelliteBodyMaterial

**● satelliteBodyMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L56)*

Controls the color of the satellite body material

___
<a id="satellitecontainer"></a>

### `<Private>` satelliteContainer

**● satelliteContainer**: *`Mesh`*

*Defined in [classes/satellite.ts:76](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L76)*

Controls the overall rendering of the satellite container

___
<a id="satellitecontainergeometry"></a>

### `<Private>` satelliteContainerGeometry

**● satelliteContainerGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L44)*

Controls size and shape of the satellite container

___
<a id="satellitecontainermaterial"></a>

### `<Private>` satelliteContainerMaterial

**● satelliteContainerMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L60)*

Controls the color of the satellite container material

___
<a id="satelliteenergy"></a>

### `<Private>` satelliteEnergy

**● satelliteEnergy**: *`Mesh`*

*Defined in [classes/satellite.ts:80](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L80)*

Controls the overall rendering of the satellite energy bar

___
<a id="satelliteenergygeometry"></a>

### `<Private>` satelliteEnergyGeometry

**● satelliteEnergyGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L48)*

Controls size and shape of the satellite energy bar

___
<a id="satelliteenergymaterial"></a>

### `<Private>` satelliteEnergyMaterial

**● satelliteEnergyMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:64](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L64)*

Controls the color of the satellite energy bar material

___
<a id="satellitewings"></a>

### `<Private>` satelliteWings

**● satelliteWings**: *`Mesh`*

*Defined in [classes/satellite.ts:84](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L84)*

Controls the overall rendering of the satellite wings

___
<a id="satellitewingsgeometry"></a>

### `<Private>` satelliteWingsGeometry

**● satelliteWingsGeometry**: *`BoxGeometry`*

*Defined in [classes/satellite.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L52)*

Controls size and shape of the satellite wings

___
<a id="satellitewingsmaterial"></a>

### `<Private>` satelliteWingsMaterial

**● satelliteWingsMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/satellite.ts:68](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L68)*

Controls the color of the satellite wings material

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [classes/satellite.ts:124](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L124)*

At the end of each loop iteration, satellite regains a little energy.

**Returns:** `void`

___
<a id="fire"></a>

###  fire

▸ **fire**(): `void`

*Defined in [classes/satellite.ts:134](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L134)*

If it's determined that this weapon is closest to click point, and it has the power, it will create the and launch the projectile, subtract the energy used, and call to update energy bar.

**Returns:** `void`

___
<a id="getdistancetotarget"></a>

###  getDistanceToTarget

▸ **getDistanceToTarget**(targetX: *`number`*, targetZ: *`number`*): `number`

*Defined in [classes/satellite.ts:145](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L145)*

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

*Defined in [classes/satellite.ts:153](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L153)*

Provides the created mesh so it can be added to the mesh of a parent object like the planet.

**Returns:** `Mesh`
the satellite's mesh

___
<a id="updateenergybar"></a>

###  updateEnergyBar

▸ **updateEnergyBar**(): `void`

*Defined in [classes/satellite.ts:159](https://github.com/WilliamRADFunk/planet-funk/blob/32890e5/src/classes/satellite.ts#L159)*

Changes the size and color of the energy bar.

**Returns:** `void`

___

