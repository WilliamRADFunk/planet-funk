[planet-funk](../README.md) > ["ts/shield"](../modules/_ts_shield_.md) > [Shield](../classes/_ts_shield_.shield.md)

# Class: Shield

*__class__*: Transluscent shield that helps protect player's unit (planet)

## Hierarchy

**Shield**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [energyBars](_ts_shield_.shield.md#energybars)
* [energyLevel](_ts_shield_.shield.md#energylevel)
* [isActive](_ts_shield_.shield.md#isactive)
* [lastEnergyBarColor](_ts_shield_.shield.md#lastenergybarcolor)
* [shield](_ts_shield_.shield.md#shield)
* [shieldGeometry](_ts_shield_.shield.md#shieldgeometry)
* [shieldMaterial](_ts_shield_.shield.md#shieldmaterial)
* [timeGeometry](_ts_shield_.shield.md#timegeometry)
* [timeMaterial](_ts_shield_.shield.md#timematerial)

### Methods

* [activate](_ts_shield_.shield.md#activate)
* [addToScene](_ts_shield_.shield.md#addtoscene)
* [deactivate](_ts_shield_.shield.md#deactivate)
* [endCycle](_ts_shield_.shield.md#endcycle)
* [getActive](_ts_shield_.shield.md#getactive)
* [getCollisionRadius](_ts_shield_.shield.md#getcollisionradius)
* [getCurrentPosition](_ts_shield_.shield.md#getcurrentposition)
* [getName](_ts_shield_.shield.md#getname)
* [impact](_ts_shield_.shield.md#impact)
* [isPassive](_ts_shield_.shield.md#ispassive)
* [updateEnergyBars](_ts_shield_.shield.md#updateenergybars)

---

## Properties

<a id="energybars"></a>

### `<Private>` energyBars

**● energyBars**: *`Object3D`*

*Defined in [ts/shield.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L24)*

Container for the shield energy meter.

___
<a id="energylevel"></a>

### `<Private>` energyLevel

**● energyLevel**: *`number`* = 1000

*Defined in [ts/shield.ts:28](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L28)*

Amount of power in the shield.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = false

*Defined in [ts/shield.ts:20](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L20)*

Flag to determine if shield is active or not.

___
<a id="lastenergybarcolor"></a>

### `<Private>` lastEnergyBarColor

**● lastEnergyBarColor**: *`string`* = "green"

*Defined in [ts/shield.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L32)*

Keeps track of previous energy bar color (if same, no need to update material colors).

___
<a id="shield"></a>

### `<Private>` shield

**● shield**: *`Mesh`*

*Defined in [ts/shield.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L44)*

Controls the overall rendering of the shield

___
<a id="shieldgeometry"></a>

### `<Private>` shieldGeometry

**● shieldGeometry**: *`SphereGeometry`*

*Defined in [ts/shield.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L36)*

Controls size and shape of the shield

___
<a id="shieldmaterial"></a>

### `<Private>` shieldMaterial

**● shieldMaterial**: *`MeshStandardMaterial`*

*Defined in [ts/shield.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L40)*

Controls the color of the shield material

___
<a id="timegeometry"></a>

### `<Private>` timeGeometry

**● timeGeometry**: *`CylinderGeometry`*

*Defined in [ts/shield.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L48)*

Controls size and shape of the energy meter

___
<a id="timematerial"></a>

### `<Private>` timeMaterial

**● timeMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/shield.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L52)*

Controls the color of the energy meter material

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/shield.ts:87](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L87)*

If shield is down, and player has enough energy, this turns the shield on.

**Returns:** `void`

___
<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in [ts/shield.ts:97](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L97)*

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

*Defined in [ts/shield.ts:104](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L104)*

If shield is up, this turns the shield off.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(percentRecharge: *`number`*): `void`

*Defined in [ts/shield.ts:115](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L115)*

At the end of each loop iteration, planet expends energy if the shield is up, and regains it by a percentage depending on how many planet quadrant are intact.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| percentRecharge | `number` |  0.25, 0.5, 0.75, 1 to be multipled against shield energy recharge amount |

**Returns:** `void`

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/shield.ts:139](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L139)*

Returns activity of shield (keeps the actual flag private)

**Returns:** `boolean`
True if not destroyed. False if is destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/shield.ts:146](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L146)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/shield.ts:153](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L153)*

Gets the current position of the collidable object.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/shield.ts:160](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L160)*

Gets the name of the shield.

**Returns:** `string`
the name of the shield.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `boolean`

*Defined in [ts/shield.ts:168](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L168)*

Called when something collides with shield, which consumes energy.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| self | [Collidable](../interfaces/_ts_collidable_.collidable.md) |  the thing to remove from collidables...and scene. |

**Returns:** `boolean`
whether or not impact means removing item from the scene.

___
<a id="ispassive"></a>

###  isPassive

▸ **isPassive**(): `boolean`

*Defined in [ts/shield.ts:178](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L178)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="updateenergybars"></a>

### `<Private>` updateEnergyBars

▸ **updateEnergyBars**(): `void`

*Defined in [ts/shield.ts:184](https://github.com/WilliamRADFunk/planet-funk/blob/793a093/src/ts/shield.ts#L184)*

Changes the size and color of the energy bar.

**Returns:** `void`

___

