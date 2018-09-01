[planet-funk](../README.md) > ["classes/planet"](../modules/_classes_planet_.md) > [Planet](../classes/_classes_planet_.planet.md)

# Class: Planet

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

*Defined in [classes/planet.ts:20](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L20)*

Controls the overall rendering of the planet

___
<a id="funkgeometry"></a>

### `<Private>` funkGeometry

**● funkGeometry**: *`SphereGeometry`*

*Defined in [classes/planet.ts:12](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L12)*

Controls size and shape of the planet

___
<a id="funkmaterial"></a>

### `<Private>` funkMaterial

**● funkMaterial**: *`MeshPhongMaterial`*

*Defined in [classes/planet.ts:16](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L16)*

Controls the color of the planet material

___
<a id="quadrantblue"></a>

### `<Private>` quadrantBlue

**● quadrantBlue**: *`boolean`* = true

*Defined in [classes/planet.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L24)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantgreen"></a>

### `<Private>` quadrantGreen

**● quadrantGreen**: *`boolean`* = true

*Defined in [classes/planet.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L28)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantpurple"></a>

### `<Private>` quadrantPurple

**● quadrantPurple**: *`boolean`* = true

*Defined in [classes/planet.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L32)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantyellow"></a>

### `<Private>` quadrantYellow

**● quadrantYellow**: *`boolean`* = true

*Defined in [classes/planet.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L36)*

Populated section of the planet. Once hit, false signifies inactive.

___

## Methods

<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in [classes/planet.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L62)*

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

*Defined in [classes/planet.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L69)*

Getter for recharge of planet shield rate.

**Returns:** `number`
percentage of productivity the remaining quadrants can produce for shields.

___
<a id="getstatus"></a>

###  getStatus

▸ **getStatus**(): [PlanetStatus](../interfaces/_classes_planet_.planetstatus.md)

*Defined in [classes/planet.ts:89](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L89)*

Getter for status of the planet's four populated quadrants. True = Alive | False = Dead.

**Returns:** [PlanetStatus](../interfaces/_classes_planet_.planetstatus.md)
an object with the four color-coded quadrants representing life/death of that area.

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [classes/planet.ts:100](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L100)*

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

*Defined in [classes/planet.ts:106](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/planet.ts#L106)*

Spins planet at its set rate.

**Returns:** `void`

___

