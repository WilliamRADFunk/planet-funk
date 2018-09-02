[planet-funk](../README.md) > ["classes/planet"](../modules/_classes_planet_.md) > [Planet](../classes/_classes_planet_.planet.md)

# Class: Planet

*__class__*: Planet that represents player's unit in the game. It dies, player loses.

## Hierarchy

**Planet**

## Index

### Properties

* [funk](_classes_planet_.planet.md#funk)
* [funkGeometry](_classes_planet_.planet.md#funkgeometry)
* [funkMaterial](_classes_planet_.planet.md#funkmaterial)
* [quadrantBlue](_classes_planet_.planet.md#quadrantblue)
* [quadrantGreen](_classes_planet_.planet.md#quadrantgreen)
* [quadrantPurple](_classes_planet_.planet.md#quadrantpurple)
* [quadrantYellow](_classes_planet_.planet.md#quadrantyellow)

### Methods

* [addToOrbit](_classes_planet_.planet.md#addtoorbit)
* [addToScene](_classes_planet_.planet.md#addtoscene)
* [getPowerRegenRate](_classes_planet_.planet.md#getpowerregenrate)
* [getStatus](_classes_planet_.planet.md#getstatus)
* [removeFromScene](_classes_planet_.planet.md#removefromscene)
* [rotate](_classes_planet_.planet.md#rotate)

---

## Properties

<a id="funk"></a>

### `<Private>` funk

**● funk**: *`Mesh`*

*Defined in [classes/planet.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L29)*

Controls the overall rendering of the planet

___
<a id="funkgeometry"></a>

### `<Private>` funkGeometry

**● funkGeometry**: *`SphereGeometry`*

*Defined in [classes/planet.ts:21](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L21)*

Controls size and shape of the planet

___
<a id="funkmaterial"></a>

### `<Private>` funkMaterial

**● funkMaterial**: *`MeshPhongMaterial`*

*Defined in [classes/planet.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L25)*

Controls the color of the planet material

___
<a id="quadrantblue"></a>

### `<Private>` quadrantBlue

**● quadrantBlue**: *`boolean`* = true

*Defined in [classes/planet.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L33)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantgreen"></a>

### `<Private>` quadrantGreen

**● quadrantGreen**: *`boolean`* = true

*Defined in [classes/planet.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L37)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantpurple"></a>

### `<Private>` quadrantPurple

**● quadrantPurple**: *`boolean`* = true

*Defined in [classes/planet.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L41)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantyellow"></a>

### `<Private>` quadrantYellow

**● quadrantYellow**: *`boolean`* = true

*Defined in [classes/planet.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L45)*

Populated section of the planet. Once hit, false signifies inactive.

___

## Methods

<a id="addtoorbit"></a>

###  addToOrbit

▸ **addToOrbit**(satellite: *[Satellite](_classes_satellite_.satellite.md)*): `void`

*Defined in [classes/planet.ts:71](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L71)*

Adds planet object to the three.js scene.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| satellite | [Satellite](_classes_satellite_.satellite.md) |  satellite to add to planet's orbit. Makes orbit rotation management simpler. |

**Returns:** `void`

___
<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in [classes/planet.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L78)*

Adds planet object to the three.js scene.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___
<a id="getpowerregenrate"></a>

###  getPowerRegenRate

▸ **getPowerRegenRate**(): `number`

*Defined in [classes/planet.ts:85](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L85)*

Getter for recharge of planet shield rate.

**Returns:** `number`
percentage of productivity the remaining quadrants can produce for shields.

___
<a id="getstatus"></a>

###  getStatus

▸ **getStatus**(): [PlanetStatus](../interfaces/_classes_planet_.planetstatus.md)

*Defined in [classes/planet.ts:105](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L105)*

Getter for status of the planet's four populated quadrants. True = Alive | False = Dead.

**Returns:** [PlanetStatus](../interfaces/_classes_planet_.planetstatus.md)
an object with the four color-coded quadrants representing life/death of that area.

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [classes/planet.ts:116](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L116)*

Removes planet object from the three.js scene.

**Parameters:**

| Param | Type |
| ------ | ------ |
| scene | `Scene` |

**Returns:** `void`

___
<a id="rotate"></a>

###  rotate

▸ **rotate**(): `void`

*Defined in [classes/planet.ts:122](https://github.com/WilliamRADFunk/planet-funk/blob/ea78a5a/src/classes/planet.ts#L122)*

Spins planet at its set rate.

**Returns:** `void`

___

