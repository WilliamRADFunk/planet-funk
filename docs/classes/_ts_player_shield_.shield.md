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

*Defined in [ts/player/shield.ts:26](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L26)*

Container for the shield energy meter.

___
<a id="energylevel"></a>

### `<Private>` energyLevel

**● energyLevel**: *`number`* = 1000

*Defined in [ts/player/shield.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L30)*

Amount of power in the shield.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = false

*Defined in [ts/player/shield.ts:22](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L22)*

Flag to determine if shield is active or not.

___
<a id="lastenergybarcolor"></a>

### `<Private>` lastEnergyBarColor

**● lastEnergyBarColor**: *`string`* = "green"

*Defined in [ts/player/shield.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L34)*

Keeps track of previous energy bar color (if same, no need to update material colors).

___
<a id="shield"></a>

### `<Private>` shield

**● shield**: *`Mesh`*

*Defined in [ts/player/shield.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L46)*

Controls the overall rendering of the shield

___
<a id="shieldgeometry"></a>

### `<Private>` shieldGeometry

**● shieldGeometry**: *`SphereGeometry`*

*Defined in [ts/player/shield.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L38)*

Controls size and shape of the shield

___
<a id="shieldmaterial"></a>

### `<Private>` shieldMaterial

**● shieldMaterial**: *`MeshStandardMaterial`*

*Defined in [ts/player/shield.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L42)*

Controls the color of the shield material

___
<a id="startposition"></a>

### `<Private>` startPosition

**● startPosition**: *[`number`, `number`, `number`]* =  [0, -10, 0]

*Defined in [ts/player/shield.ts:50](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L50)*

Starting position.

___
<a id="timegeometry"></a>

### `<Private>` timeGeometry

**● timeGeometry**: *`CylinderGeometry`*

*Defined in [ts/player/shield.ts:54](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L54)*

Controls size and shape of the energy meter

___
<a id="timematerial"></a>

### `<Private>` timeMaterial

**● timeMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/player/shield.ts:58](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L58)*

Controls the color of the energy meter material

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(initial?: *`boolean`*): `void`

*Defined in [ts/player/shield.ts:99](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L99)*

If shield is down, and player has enough energy, this turns the shield on.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` initial | `boolean` |  if first time activating don't play sound. |

**Returns:** `void`

___
<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*): `void`

*Defined in [ts/player/shield.ts:110](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L110)*

Adds shield object to the three.js scene

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___
<a id="deactivate"></a>

###  deactivate

▸ **deactivate**(initial?: *`boolean`*): `void`

*Defined in [ts/player/shield.ts:122](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L122)*

If shield is up, this turns the shield off.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` initial | `boolean` |  if first time deactivating don't play sound. |

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(scene: *`Scene`*): `void`

*Defined in [ts/player/shield.ts:133](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L133)*

Wipe from scene. Used for help screen.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(percentRecharge: *`number`*, isHelpShield?: *`boolean`*): `void`

*Defined in [ts/player/shield.ts:143](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L143)*

At the end of each loop iteration, planet expends energy if the shield is up, and regains it by a percentage depending on how many planet quadrant are intact.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| percentRecharge | `number` |  0, 0.25, 0.5, 0.75, 1 to be multipled against shield energy recharge amount |
| `Optional` isHelpShield | `boolean` |  TRUE --> shield is in help menu | (FALSE | NULL | Undefined) --> normal game shield |

**Returns:** `void`

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/player/shield.ts:167](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L167)*

Returns activity of shield (keeps the actual flag private)

**Returns:** `boolean`
True if not destroyed. False if is destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/player/shield.ts:174](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L174)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/player/shield.ts:181](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L181)*

Gets the current position of the collidable object.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getenergylevel"></a>

###  getEnergyLevel

▸ **getEnergyLevel**(): `number`

*Defined in [ts/player/shield.ts:188](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L188)*

Returns the current energy level for this shield instance.

**Returns:** `number`
remaining energy in a whole number 0 - 1000.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/player/shield.ts:195](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L195)*

Gets the name of the shield.

**Returns:** `string`
the name of the shield.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*, otherThing: *`string`*): `boolean`

*Defined in [ts/player/shield.ts:204](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L204)*

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

*Defined in [ts/player/shield.ts:217](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L217)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="updateenergybars"></a>

### `<Private>` updateEnergyBars

▸ **updateEnergyBars**(): `void`

*Defined in [ts/player/shield.ts:223](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/player/shield.ts#L223)*

Changes the size and color of the energy bar.

**Returns:** `void`

___

