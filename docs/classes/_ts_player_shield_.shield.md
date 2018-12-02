[planet-funk](../README.md) > ["ts/player/shield"](../modules/_ts_player_shield_.md) > [Shield](../classes/_ts_player_shield_.shield.md)

# Class: Shield

*__class__*: Transluscent shield that helps protect player's unit (planet)

## Hierarchy

**Shield**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [energyBars](_ts_player_shield_.shield.md#energybars)
* [energyLevel](_ts_player_shield_.shield.md#energylevel)
* [isActive](_ts_player_shield_.shield.md#isactive)
* [lastEnergyBarColor](_ts_player_shield_.shield.md#lastenergybarcolor)
* [shield](_ts_player_shield_.shield.md#shield)
* [shieldGeometry](_ts_player_shield_.shield.md#shieldgeometry)
* [shieldMaterial](_ts_player_shield_.shield.md#shieldmaterial)
* [startPosition](_ts_player_shield_.shield.md#startposition)
* [timeGeometry](_ts_player_shield_.shield.md#timegeometry)
* [timeMaterial](_ts_player_shield_.shield.md#timematerial)

### Methods

* [activate](_ts_player_shield_.shield.md#activate)
* [addToScene](_ts_player_shield_.shield.md#addtoscene)
* [deactivate](_ts_player_shield_.shield.md#deactivate)
* [destroy](_ts_player_shield_.shield.md#destroy)
* [endCycle](_ts_player_shield_.shield.md#endcycle)
* [getActive](_ts_player_shield_.shield.md#getactive)
* [getCollisionRadius](_ts_player_shield_.shield.md#getcollisionradius)
* [getCurrentPosition](_ts_player_shield_.shield.md#getcurrentposition)
* [getEnergyLevel](_ts_player_shield_.shield.md#getenergylevel)
* [getName](_ts_player_shield_.shield.md#getname)
* [impact](_ts_player_shield_.shield.md#impact)
* [isPassive](_ts_player_shield_.shield.md#ispassive)
* [updateEnergyBars](_ts_player_shield_.shield.md#updateenergybars)

---

## Properties

<a id="energybars"></a>

### `<Private>` energyBars

**● energyBars**: *`Object3D`*

*Defined in [ts/player/shield.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L25)*

Container for the shield energy meter.

___
<a id="energylevel"></a>

### `<Private>` energyLevel

**● energyLevel**: *`number`* = 1000

*Defined in [ts/player/shield.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L29)*

Amount of power in the shield.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = false

*Defined in [ts/player/shield.ts:21](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L21)*

Flag to determine if shield is active or not.

___
<a id="lastenergybarcolor"></a>

### `<Private>` lastEnergyBarColor

**● lastEnergyBarColor**: *`string`* = "green"

*Defined in [ts/player/shield.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L33)*

Keeps track of previous energy bar color (if same, no need to update material colors).

___
<a id="shield"></a>

### `<Private>` shield

**● shield**: *`Mesh`*

*Defined in [ts/player/shield.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L45)*

Controls the overall rendering of the shield

___
<a id="shieldgeometry"></a>

### `<Private>` shieldGeometry

**● shieldGeometry**: *`SphereGeometry`*

*Defined in [ts/player/shield.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L37)*

Controls size and shape of the shield

___
<a id="shieldmaterial"></a>

### `<Private>` shieldMaterial

**● shieldMaterial**: *`MeshStandardMaterial`*

*Defined in [ts/player/shield.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L41)*

Controls the color of the shield material

___
<a id="startposition"></a>

### `<Private>` startPosition

**● startPosition**: *[`number`, `number`, `number`]* =  [0, -10, 0]

*Defined in [ts/player/shield.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L49)*

Starting position.

___
<a id="timegeometry"></a>

### `<Private>` timeGeometry

**● timeGeometry**: *`CylinderGeometry`*

*Defined in [ts/player/shield.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L53)*

Controls size and shape of the energy meter

___
<a id="timematerial"></a>

### `<Private>` timeMaterial

**● timeMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/player/shield.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L57)*

Controls the color of the energy meter material

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/player/shield.ts:97](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L97)*

If shield is down, and player has enough energy, this turns the shield on.

**Returns:** `void`

___
<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in [ts/player/shield.ts:107](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L107)*

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

*Defined in [ts/player/shield.ts:118](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L118)*

If shield is up, this turns the shield off.

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(scene: *`Scene`*): `void`

*Defined in [ts/player/shield.ts:128](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L128)*

Wipe from scene. Used for help screen.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(percentRecharge: *`number`*): `void`

*Defined in [ts/player/shield.ts:137](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L137)*

At the end of each loop iteration, planet expends energy if the shield is up, and regains it by a percentage depending on how many planet quadrant are intact.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| percentRecharge | `number` |  0, 0.25, 0.5, 0.75, 1 to be multipled against shield energy recharge amount |

**Returns:** `void`

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/player/shield.ts:161](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L161)*

Returns activity of shield (keeps the actual flag private)

**Returns:** `boolean`
True if not destroyed. False if is destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/player/shield.ts:168](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L168)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/player/shield.ts:175](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L175)*

Gets the current position of the collidable object.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getenergylevel"></a>

###  getEnergyLevel

▸ **getEnergyLevel**(): `number`

*Defined in [ts/player/shield.ts:182](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L182)*

Returns the current energy level for this shield instance.

**Returns:** `number`
remaining energy in a whole number 0 - 1000.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/player/shield.ts:189](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L189)*

Gets the name of the shield.

**Returns:** `string`
the name of the shield.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*, otherThing: *`string`*): `boolean`

*Defined in [ts/player/shield.ts:198](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L198)*

Called when something collides with shield, which consumes energy.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| self | [Collidable](../interfaces/_ts_collidable_.collidable.md) |  the thing to remove from collidables...and scene. |
| otherThing | `string` |  the name of the other thing in collision (mainly for explosions -- shouldn't reduce energy). |

**Returns:** `boolean`
whether or not impact means removing item from the scene.

___
<a id="ispassive"></a>

###  isPassive

▸ **isPassive**(): `boolean`

*Defined in [ts/player/shield.ts:211](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L211)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="updateenergybars"></a>

### `<Private>` updateEnergyBars

▸ **updateEnergyBars**(): `void`

*Defined in [ts/player/shield.ts:217](https://github.com/WilliamRADFunk/planet-funk/blob/a2fe6bc/src/ts/player/shield.ts#L217)*

Changes the size and color of the energy bar.

**Returns:** `void`

___

