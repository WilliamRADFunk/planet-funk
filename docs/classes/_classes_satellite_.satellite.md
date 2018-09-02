[planet-funk](../README.md) > ["classes/satellite"](../modules/_classes_satellite_.md) > [Satellite](../classes/_classes_satellite_.satellite.md)

# Class: Satellite

*__class__*: Planetary defense satellite's that player used to fire at incoming threats.

## Hierarchy

**Satellite**

## Index

### Properties

* [satelliteBody](_classes_satellite_.satellite.md#satellitebody)
* [satelliteBodyGeometry](_classes_satellite_.satellite.md#satellitebodygeometry)
* [satelliteBodyMaterial](_classes_satellite_.satellite.md#satellitebodymaterial)
* [satelliteContainer](_classes_satellite_.satellite.md#satellitecontainer)
* [satelliteContainerGeometry](_classes_satellite_.satellite.md#satellitecontainergeometry)
* [satelliteContainerMaterial](_classes_satellite_.satellite.md#satellitecontainermaterial)
* [satelliteWings](_classes_satellite_.satellite.md#satellitewings)
* [satelliteWingsGeometry](_classes_satellite_.satellite.md#satellitewingsgeometry)
* [satelliteWingsMaterial](_classes_satellite_.satellite.md#satellitewingsmaterial)

### Methods

* [getMesh](_classes_satellite_.satellite.md#getmesh)

---

## Properties

<a id="satellitebody"></a>

### `<Private>` satelliteBody

**● satelliteBody**: *`Mesh`*

*Defined in classes/satellite.ts:52*

Controls the overall rendering of the satellite body

___
<a id="satellitebodygeometry"></a>

### `<Private>` satelliteBodyGeometry

**● satelliteBodyGeometry**: *`BoxGeometry`*

*Defined in classes/satellite.ts:28*

Controls size and shape of the satellite body

___
<a id="satellitebodymaterial"></a>

### `<Private>` satelliteBodyMaterial

**● satelliteBodyMaterial**: *`MeshBasicMaterial`*

*Defined in classes/satellite.ts:40*

Controls the color of the satellite body material

___
<a id="satellitecontainer"></a>

### `<Private>` satelliteContainer

**● satelliteContainer**: *`Mesh`*

*Defined in classes/satellite.ts:56*

Controls the overall rendering of the satellite container

___
<a id="satellitecontainergeometry"></a>

### `<Private>` satelliteContainerGeometry

**● satelliteContainerGeometry**: *`BoxGeometry`*

*Defined in classes/satellite.ts:32*

Controls size and shape of the satellite container

___
<a id="satellitecontainermaterial"></a>

### `<Private>` satelliteContainerMaterial

**● satelliteContainerMaterial**: *`MeshBasicMaterial`*

*Defined in classes/satellite.ts:44*

Controls the color of the satellite container material

___
<a id="satellitewings"></a>

### `<Private>` satelliteWings

**● satelliteWings**: *`Mesh`*

*Defined in classes/satellite.ts:60*

Controls the overall rendering of the satellite wings

___
<a id="satellitewingsgeometry"></a>

### `<Private>` satelliteWingsGeometry

**● satelliteWingsGeometry**: *`BoxGeometry`*

*Defined in classes/satellite.ts:36*

Controls size and shape of the satellite wings

___
<a id="satellitewingsmaterial"></a>

### `<Private>` satelliteWingsMaterial

**● satelliteWingsMaterial**: *`MeshBasicMaterial`*

*Defined in classes/satellite.ts:48*

Controls the color of the satellite wings material

___

## Methods

<a id="getmesh"></a>

###  getMesh

▸ **getMesh**(): `Mesh`

*Defined in classes/satellite.ts:94*

Provides the created mesh so it can be added to the mesh of a parent object like the planet.

**Returns:** `Mesh`
the satellite's mesh

___

