[planet-funk](../README.md) > ["classes/shield"](../modules/_classes_shield_.md) > [Shield](../classes/_classes_shield_.shield.md)

# Class: Shield

*__class__*: Transluscent shield that helps protect player's unit (planet)

## Hierarchy

**Shield**

## Index

### Properties

* [energyBars](_classes_shield_.shield.md#energybars)
* [energyLevel](_classes_shield_.shield.md#energylevel)
* [isActive](_classes_shield_.shield.md#isactive)
* [lastEnergyBarColor](_classes_shield_.shield.md#lastenergybarcolor)
* [shield](_classes_shield_.shield.md#shield)
* [shieldGeometry](_classes_shield_.shield.md#shieldgeometry)
* [shieldMaterial](_classes_shield_.shield.md#shieldmaterial)
* [timeGeometry](_classes_shield_.shield.md#timegeometry)
* [timeMaterial](_classes_shield_.shield.md#timematerial)

### Methods

* [activate](_classes_shield_.shield.md#activate)
* [addToScene](_classes_shield_.shield.md#addtoscene)
* [deactivate](_classes_shield_.shield.md#deactivate)
* [endCycle](_classes_shield_.shield.md#endcycle)
* [getIsActive](_classes_shield_.shield.md#getisactive)
* [impact](_classes_shield_.shield.md#impact)
* [updateEnergyBars](_classes_shield_.shield.md#updateenergybars)

---

## Properties

<a id="energybars"></a>

### `<Private>` energyBars

**● energyBars**: *`Object3D`*

*Defined in [classes/shield.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L24)*

Container for the shield energy meter.

___
<a id="energylevel"></a>

### `<Private>` energyLevel

**● energyLevel**: *`number`* = 1000

*Defined in [classes/shield.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L28)*

Amount of power in the shield.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = false

*Defined in [classes/shield.ts:20](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L20)*

Flag to determine if shield is active or not.

___
<a id="lastenergybarcolor"></a>

### `<Private>` lastEnergyBarColor

**● lastEnergyBarColor**: *`string`* = "green"

*Defined in [classes/shield.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L32)*

Keeps track of previous energy bar color (if same, no need to update material colors).

___
<a id="shield"></a>

### `<Private>` shield

**● shield**: *`Mesh`*

*Defined in [classes/shield.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L44)*

Controls the overall rendering of the shield

___
<a id="shieldgeometry"></a>

### `<Private>` shieldGeometry

**● shieldGeometry**: *`SphereGeometry`*

*Defined in [classes/shield.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L36)*

Controls size and shape of the shield

___
<a id="shieldmaterial"></a>

### `<Private>` shieldMaterial

**● shieldMaterial**: *`MeshStandardMaterial`*

*Defined in [classes/shield.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L40)*

Controls the color of the shield material

___
<a id="timegeometry"></a>

### `<Private>` timeGeometry

**● timeGeometry**: *`CylinderGeometry`*

*Defined in [classes/shield.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L48)*

Controls size and shape of the energy meter

___
<a id="timematerial"></a>

### `<Private>` timeMaterial

**● timeMaterial**: *`MeshBasicMaterial`*

*Defined in [classes/shield.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L52)*

Controls the color of the energy meter material

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [classes/shield.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L86)*

If shield is down, and player has enough energy, this turns the shield on.

**Returns:** `void`

___
<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in [classes/shield.ts:97](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L97)*

Adds shield object to the three.js scene

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___
<a id="deactivate"></a>

###  deactivate

▸ **deactivate**(): `void`

*Defined in [classes/shield.ts:104](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L104)*

If shield is up, this turns the shield off.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(percentRecharge: *`number`*): `void`

*Defined in [classes/shield.ts:116](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L116)*

At the end of each loop iteration, planet expends energy if the shield is up, and regains it by a percentage depending on how many planet quadrant are intact.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| percentRecharge | `number` |  0.25, 0.5, 0.75, 1 to be multipled against shield energy recharge amount |

**Returns:** `void`

___
<a id="getisactive"></a>

###  getIsActive

▸ **getIsActive**(): `boolean`

*Defined in [classes/shield.ts:139](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L139)*

Returns activity of shield (keeps the actual flag private)

**Returns:** `boolean`

___
<a id="impact"></a>

###  impact

▸ **impact**(): `void`

*Defined in [classes/shield.ts:145](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L145)*

Called when something collides with shield, which consumes energy.

**Returns:** `void`

___
<a id="updateenergybars"></a>

###  updateEnergyBars

▸ **updateEnergyBars**(): `void`

*Defined in [classes/shield.ts:153](https://github.com/WilliamRADFunk/planet-funk/blob/7d5bd70/src/classes/shield.ts#L153)*

Changes the size and color of the energy bar.

**Returns:** `void`

___

