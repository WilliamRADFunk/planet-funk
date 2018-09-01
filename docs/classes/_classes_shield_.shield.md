[planet-funk](../README.md) > ["classes/shield"](../modules/_classes_shield_.md) > [Shield](../classes/_classes_shield_.shield.md)

# Class: Shield

## Hierarchy

**Shield**

## Index

### Properties

* [energyLevel](_classes_shield_.shield.md#energylevel)
* [isActive](_classes_shield_.shield.md#isactive)
* [shield](_classes_shield_.shield.md#shield)
* [shieldGeometry](_classes_shield_.shield.md#shieldgeometry)
* [shieldMaterial](_classes_shield_.shield.md#shieldmaterial)

### Methods

* [activate](_classes_shield_.shield.md#activate)
* [addToScene](_classes_shield_.shield.md#addtoscene)
* [deactivate](_classes_shield_.shield.md#deactivate)
* [endCycle](_classes_shield_.shield.md#endcycle)
* [getIsActive](_classes_shield_.shield.md#getisactive)
* [impact](_classes_shield_.shield.md#impact)

---

## Properties

<a id="energylevel"></a>

### `<Private>` energyLevel

**● energyLevel**: *`number`* = 1000

*Defined in [classes/shield.ts:11](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L11)*

Amount of power in the shield.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = false

*Defined in [classes/shield.ts:7](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L7)*

Flag to determine if shield is active or not.

___
<a id="shield"></a>

### `<Private>` shield

**● shield**: *`Mesh`*

*Defined in [classes/shield.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L23)*

Controls the overall rendering of the planet

___
<a id="shieldgeometry"></a>

### `<Private>` shieldGeometry

**● shieldGeometry**: *`SphereGeometry`*

*Defined in [classes/shield.ts:15](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L15)*

Controls size and shape of the planet

___
<a id="shieldmaterial"></a>

### `<Private>` shieldMaterial

**● shieldMaterial**: *`MeshStandardMaterial`*

*Defined in [classes/shield.ts:19](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L19)*

Controls the color of the planet material

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [classes/shield.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L45)*

If shield is down, and player has enough energy, this turns the shield on.

**Returns:** `void`

___
<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in [classes/shield.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L56)*

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

*Defined in [classes/shield.ts:62](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L62)*

If shield is up, this turns the shield off.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(percentRecharge: *`number`*): `void`

*Defined in [classes/shield.ts:74](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L74)*

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

*Defined in [classes/shield.ts:88](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L88)*

Returns activity of shield (keeps the actual flag private)

**Returns:** `boolean`

___
<a id="impact"></a>

###  impact

▸ **impact**(): `void`

*Defined in [classes/shield.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/8546a97/src/classes/shield.ts#L94)*

Called when something collides with shield, which consumes energy.

**Returns:** `void`

___

