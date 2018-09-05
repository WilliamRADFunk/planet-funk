[planet-funk](../README.md) > ["classes/planet"](../modules/_classes_planet_.md) > [Planet](../classes/_classes_planet_.planet.md)

# Class: Planet

*__class__*: Planet that represents player's unit in the game. It dies, player loses.

## Hierarchy

**Planet**

## Index

### Properties

* [base1](_classes_planet_.planet.md#base1)
* [base2](_classes_planet_.planet.md#base2)
* [base3](_classes_planet_.planet.md#base3)
* [base4](_classes_planet_.planet.md#base4)
* [currentRotation](_classes_planet_.planet.md#currentrotation)
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
* [satellites](_classes_planet_.planet.md#satellites)

### Methods

* [addToScene](_classes_planet_.planet.md#addtoscene)
* [endCycle](_classes_planet_.planet.md#endcycle)
* [fire](_classes_planet_.planet.md#fire)
* [getPowerRegenRate](_classes_planet_.planet.md#getpowerregenrate)
* [getStatus](_classes_planet_.planet.md#getstatus)
* [removeFromScene](_classes_planet_.planet.md#removefromscene)
* [rotate](_classes_planet_.planet.md#rotate)

---

## Properties

<a id="base1"></a>

### `<Private>` base1

**● base1**: *[Base](_classes_base_.base.md)*

*Defined in [classes/planet.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L30)*

Base that starts at 1/2 o'clock

___
<a id="base2"></a>

### `<Private>` base2

**● base2**: *[Base](_classes_base_.base.md)*

*Defined in [classes/planet.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L34)*

Base that starts at 4/5 o'clock

___
<a id="base3"></a>

### `<Private>` base3

**● base3**: *[Base](_classes_base_.base.md)*

*Defined in [classes/planet.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L38)*

Base that starts at 7/8 o'clock

___
<a id="base4"></a>

### `<Private>` base4

**● base4**: *[Base](_classes_base_.base.md)*

*Defined in [classes/planet.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L42)*

Base that starts at 10/11 o'clock

___
<a id="currentrotation"></a>

### `<Private>` currentRotation

**● currentRotation**: *`number`* = 0

*Defined in [classes/planet.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L46)*

Keeps track of proper rotation amount to avoid the weird quarter rotation reset cycle.

___
<a id="funk"></a>

### `<Private>` funk

**● funk**: *`Mesh`*

*Defined in [classes/planet.ts:58](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L58)*

Controls the overall rendering of the planet

___
<a id="funkgeometry"></a>

### `<Private>` funkGeometry

**● funkGeometry**: *`SphereGeometry`*

*Defined in [classes/planet.ts:50](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L50)*

Controls size and shape of the planet

___
<a id="funkmaterial"></a>

### `<Private>` funkMaterial

**● funkMaterial**: *`MeshPhongMaterial`*

*Defined in [classes/planet.ts:54](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L54)*

Controls the color of the planet material

___
<a id="quadrantblue"></a>

### `<Private>` quadrantBlue

**● quadrantBlue**: *`boolean`* = true

*Defined in [classes/planet.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L62)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantgreen"></a>

### `<Private>` quadrantGreen

**● quadrantGreen**: *`boolean`* = true

*Defined in [classes/planet.ts:66](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L66)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantpurple"></a>

### `<Private>` quadrantPurple

**● quadrantPurple**: *`boolean`* = true

*Defined in [classes/planet.ts:70](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L70)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantyellow"></a>

### `<Private>` quadrantYellow

**● quadrantYellow**: *`boolean`* = true

*Defined in [classes/planet.ts:74](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L74)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="satellite1"></a>

### `<Private>` satellite1

**● satellite1**: *[Satellite](_classes_satellite_.satellite.md)*

*Defined in [classes/planet.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L78)*

Satellite that starts at 3 o'clock

___
<a id="satellite2"></a>

### `<Private>` satellite2

**● satellite2**: *[Satellite](_classes_satellite_.satellite.md)*

*Defined in [classes/planet.ts:82](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L82)*

Satellite that starts at 6 o'clock

___
<a id="satellite3"></a>

### `<Private>` satellite3

**● satellite3**: *[Satellite](_classes_satellite_.satellite.md)*

*Defined in [classes/planet.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L86)*

Satellite that starts at 9 o'clock

___
<a id="satellite4"></a>

### `<Private>` satellite4

**● satellite4**: *[Satellite](_classes_satellite_.satellite.md)*

*Defined in [classes/planet.ts:90](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L90)*

Satellite that starts at 12 o'clock

___
<a id="satellites"></a>

### `<Private>` satellites

**● satellites**: *[Satellite](_classes_satellite_.satellite.md)[]* =  []

*Defined in [classes/planet.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L94)*

Satellite array for ease of selection

___

## Methods

<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in [classes/planet.ts:153](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L153)*

Adds planet object to the three.js scene.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [classes/planet.ts:159](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L159)*

At the end of each loop iteration, satellite regains a little energy.

**Returns:** `void`

___
<a id="fire"></a>

###  fire

▸ **fire**(scene: *`Scene`*, point: *`Vector3`*): `void`

*Defined in [classes/planet.ts:171](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L171)*

If it's determined that player wanted to fire a weapon, find closest charged satellite to click point, and instruct it to launch the projectile.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |
| point | `Vector3` |  point with x,z coordinates where player click mouse on game area. |

**Returns:** `void`

___
<a id="getpowerregenrate"></a>

###  getPowerRegenRate

▸ **getPowerRegenRate**(): `number`

*Defined in [classes/planet.ts:183](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L183)*

Getter for recharge of planet shield rate.

**Returns:** `number`
percentage of productivity the remaining quadrants can produce for shields.

___
<a id="getstatus"></a>

###  getStatus

▸ **getStatus**(): [PlanetStatus](../interfaces/_classes_planet_.planetstatus.md)

*Defined in [classes/planet.ts:203](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L203)*

Getter for status of the planet's four populated quadrants. True = Alive | False = Dead.

**Returns:** [PlanetStatus](../interfaces/_classes_planet_.planetstatus.md)
an object with the four color-coded quadrants representing life/death of that area.

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [classes/planet.ts:214](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L214)*

Removes planet object from the three.js scene.

**Parameters:**

| Param | Type |
| ------ | ------ |
| scene | `Scene` |

**Returns:** `void`

___
<a id="rotate"></a>

### `<Private>` rotate

▸ **rotate**(): `void`

*Defined in [classes/planet.ts:220](https://github.com/WilliamRADFunk/planet-funk/blob/c7ccb28/src/classes/planet.ts#L220)*

Spins planet at its set rate.

**Returns:** `void`

___

