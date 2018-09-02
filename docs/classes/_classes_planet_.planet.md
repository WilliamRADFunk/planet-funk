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
* [satellite1](_classes_planet_.planet.md#satellite1)
* [satellite2](_classes_planet_.planet.md#satellite2)
* [satellite3](_classes_planet_.planet.md#satellite3)
* [satellite4](_classes_planet_.planet.md#satellite4)

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

*Defined in [classes/planet.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L29)*

Controls the overall rendering of the planet

___
<a id="funkgeometry"></a>

### `<Private>` funkGeometry

**● funkGeometry**: *`SphereGeometry`*

*Defined in [classes/planet.ts:21](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L21)*

Controls size and shape of the planet

___
<a id="funkmaterial"></a>

### `<Private>` funkMaterial

**● funkMaterial**: *`MeshPhongMaterial`*

*Defined in [classes/planet.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L25)*

Controls the color of the planet material

___
<a id="quadrantblue"></a>

### `<Private>` quadrantBlue

**● quadrantBlue**: *`boolean`* = true

*Defined in [classes/planet.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L33)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantgreen"></a>

### `<Private>` quadrantGreen

**● quadrantGreen**: *`boolean`* = true

*Defined in [classes/planet.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L37)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantpurple"></a>

### `<Private>` quadrantPurple

**● quadrantPurple**: *`boolean`* = true

*Defined in [classes/planet.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L41)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantyellow"></a>

### `<Private>` quadrantYellow

**● quadrantYellow**: *`boolean`* = true

*Defined in [classes/planet.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L45)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="satellite1"></a>

### `<Private>` satellite1

**● satellite1**: *[Satellite](_classes_satellite_.satellite.md)*

*Defined in [classes/planet.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L49)*

Satellite that starts at 12 o'clock

___
<a id="satellite2"></a>

### `<Private>` satellite2

**● satellite2**: *[Satellite](_classes_satellite_.satellite.md)*

*Defined in [classes/planet.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L53)*

Satellite that starts at 3 o'clock

___
<a id="satellite3"></a>

### `<Private>` satellite3

**● satellite3**: *[Satellite](_classes_satellite_.satellite.md)*

*Defined in [classes/planet.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L57)*

Satellite that starts at 6 o'clock

___
<a id="satellite4"></a>

### `<Private>` satellite4

**● satellite4**: *[Satellite](_classes_satellite_.satellite.md)*

*Defined in [classes/planet.ts:61](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L61)*

Satellite that starts at 9 o'clock

___

## Methods

<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in [classes/planet.ts:97](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L97)*

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

*Defined in [classes/planet.ts:104](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L104)*

Getter for recharge of planet shield rate.

**Returns:** `number`
percentage of productivity the remaining quadrants can produce for shields.

___
<a id="getstatus"></a>

###  getStatus

▸ **getStatus**(): [PlanetStatus](../interfaces/_classes_planet_.planetstatus.md)

*Defined in [classes/planet.ts:124](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L124)*

Getter for status of the planet's four populated quadrants. True = Alive | False = Dead.

**Returns:** [PlanetStatus](../interfaces/_classes_planet_.planetstatus.md)
an object with the four color-coded quadrants representing life/death of that area.

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [classes/planet.ts:135](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L135)*

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

*Defined in [classes/planet.ts:141](https://github.com/WilliamRADFunk/planet-funk/blob/7ab3c98/src/classes/planet.ts#L141)*

Spins planet at its set rate.

**Returns:** `void`

___

