[planet-funk](../README.md) > ["ts/player/planet"](../modules/_ts_player_planet_.md) > [Planet](../classes/_ts_player_planet_.planet.md)

# Class: Planet

*__class__*: Planet that represents player's unit in the game. It dies, player loses.

## Hierarchy

**Planet**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [base1](_ts_player_planet_.planet.md#base1)
* [base2](_ts_player_planet_.planet.md#base2)
* [base3](_ts_player_planet_.planet.md#base3)
* [base4](_ts_player_planet_.planet.md#base4)
* [bases](_ts_player_planet_.planet.md#bases)
* [currentRotation](_ts_player_planet_.planet.md#currentrotation)
* [deadPlanetTexture](_ts_player_planet_.planet.md#deadplanettexture)
* [funk](_ts_player_planet_.planet.md#funk)
* [funkGeometry](_ts_player_planet_.planet.md#funkgeometry)
* [funkMaterial](_ts_player_planet_.planet.md#funkmaterial)
* [gameLoadData](_ts_player_planet_.planet.md#gameloaddata)
* [isActive](_ts_player_planet_.planet.md#isactive)
* [quadrantBlue](_ts_player_planet_.planet.md#quadrantblue)
* [quadrantGreen](_ts_player_planet_.planet.md#quadrantgreen)
* [quadrantPurple](_ts_player_planet_.planet.md#quadrantpurple)
* [quadrantYellow](_ts_player_planet_.planet.md#quadrantyellow)
* [satellite1](_ts_player_planet_.planet.md#satellite1)
* [satellite2](_ts_player_planet_.planet.md#satellite2)
* [satellite3](_ts_player_planet_.planet.md#satellite3)
* [satellite4](_ts_player_planet_.planet.md#satellite4)
* [satellites](_ts_player_planet_.planet.md#satellites)
* [startPosition](_ts_player_planet_.planet.md#startposition)

### Methods

* [addToScene](_ts_player_planet_.planet.md#addtoscene)
* [constructBases](_ts_player_planet_.planet.md#constructbases)
* [constructPlanet](_ts_player_planet_.planet.md#constructplanet)
* [constructSatellites](_ts_player_planet_.planet.md#constructsatellites)
* [endCycle](_ts_player_planet_.planet.md#endcycle)
* [fire](_ts_player_planet_.planet.md#fire)
* [getActive](_ts_player_planet_.planet.md#getactive)
* [getCollisionRadius](_ts_player_planet_.planet.md#getcollisionradius)
* [getCurrentPosition](_ts_player_planet_.planet.md#getcurrentposition)
* [getName](_ts_player_planet_.planet.md#getname)
* [getPowerRegenRate](_ts_player_planet_.planet.md#getpowerregenrate)
* [getStatus](_ts_player_planet_.planet.md#getstatus)
* [impact](_ts_player_planet_.planet.md#impact)
* [isPassive](_ts_player_planet_.planet.md#ispassive)
* [removeFromScene](_ts_player_planet_.planet.md#removefromscene)
* [rotate](_ts_player_planet_.planet.md#rotate)

---

## Properties

<a id="base1"></a>

### `<Private>` base1

**● base1**: *[Base](_ts_player_base_.base.md)*

*Defined in [ts/player/planet.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L33)*

Base that starts at 1/2 o'clock

___
<a id="base2"></a>

### `<Private>` base2

**● base2**: *[Base](_ts_player_base_.base.md)*

*Defined in [ts/player/planet.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L37)*

Base that starts at 4/5 o'clock

___
<a id="base3"></a>

### `<Private>` base3

**● base3**: *[Base](_ts_player_base_.base.md)*

*Defined in [ts/player/planet.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L41)*

Base that starts at 7/8 o'clock

___
<a id="base4"></a>

### `<Private>` base4

**● base4**: *[Base](_ts_player_base_.base.md)*

*Defined in [ts/player/planet.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L45)*

Base that starts at 10/11 o'clock

___
<a id="bases"></a>

### `<Private>` bases

**● bases**: *[Base](_ts_player_base_.base.md)[]*

*Defined in [ts/player/planet.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L49)*

Iterable list of the bases.

___
<a id="currentrotation"></a>

### `<Private>` currentRotation

**● currentRotation**: *`number`* = 0

*Defined in [ts/player/planet.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L53)*

Keeps track of proper rotation amount to avoid the weird quarter rotation reset cycle.

___
<a id="deadplanettexture"></a>

### `<Private>` deadPlanetTexture

**● deadPlanetTexture**: *`Texture`*

*Defined in [ts/player/planet.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L57)*

Holds onto texture for dead planet until game over.

___
<a id="funk"></a>

### `<Private>` funk

**● funk**: *`Mesh`*

*Defined in [ts/player/planet.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L69)*

Controls the overall rendering of the planet

___
<a id="funkgeometry"></a>

### `<Private>` funkGeometry

**● funkGeometry**: *`SphereGeometry`*

*Defined in [ts/player/planet.ts:61](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L61)*

Controls size and shape of the planet

___
<a id="funkmaterial"></a>

### `<Private>` funkMaterial

**● funkMaterial**: *`MeshPhongMaterial`*

*Defined in [ts/player/planet.ts:65](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L65)*

Controls the color of the planet material

___
<a id="gameloaddata"></a>

### `<Private>` gameLoadData

**● gameLoadData**: *[GameLoadData](../interfaces/_ts_models_game_load_data_.gameloaddata.md)*

*Defined in [ts/player/planet.ts:73](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L73)*

Load data to determine which satellites and buildings should start destroyed.

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/player/planet.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L78)*

Flag to signal if player has been defeated or not. True = not defeated. False = defeated.

___
<a id="quadrantblue"></a>

### `<Private>` quadrantBlue

**● quadrantBlue**: *`boolean`* = true

*Defined in [ts/player/planet.ts:82](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L82)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantgreen"></a>

### `<Private>` quadrantGreen

**● quadrantGreen**: *`boolean`* = true

*Defined in [ts/player/planet.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L86)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantpurple"></a>

### `<Private>` quadrantPurple

**● quadrantPurple**: *`boolean`* = true

*Defined in [ts/player/planet.ts:90](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L90)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantyellow"></a>

### `<Private>` quadrantYellow

**● quadrantYellow**: *`boolean`* = true

*Defined in [ts/player/planet.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L94)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="satellite1"></a>

### `<Private>` satellite1

**● satellite1**: *[Satellite](_ts_player_satellite_.satellite.md)*

*Defined in [ts/player/planet.ts:98](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L98)*

Satellite that starts at 3 o'clock

___
<a id="satellite2"></a>

### `<Private>` satellite2

**● satellite2**: *[Satellite](_ts_player_satellite_.satellite.md)*

*Defined in [ts/player/planet.ts:102](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L102)*

Satellite that starts at 6 o'clock

___
<a id="satellite3"></a>

### `<Private>` satellite3

**● satellite3**: *[Satellite](_ts_player_satellite_.satellite.md)*

*Defined in [ts/player/planet.ts:106](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L106)*

Satellite that starts at 9 o'clock

___
<a id="satellite4"></a>

### `<Private>` satellite4

**● satellite4**: *[Satellite](_ts_player_satellite_.satellite.md)*

*Defined in [ts/player/planet.ts:110](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L110)*

Satellite that starts at 12 o'clock

___
<a id="satellites"></a>

### `<Private>` satellites

**● satellites**: *[Satellite](_ts_player_satellite_.satellite.md)[]* =  []

*Defined in [ts/player/planet.ts:114](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L114)*

Satellite array for ease of selection

___
<a id="startposition"></a>

### `<Private>` startPosition

**● startPosition**: *[`number`, `number`, `number`]* =  [0, 0, 0]

*Defined in [ts/player/planet.ts:118](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L118)*

Starting position.

___

## Methods

<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*, planetTextures: *`Texture`[]*, buildtexture: *`Texture`[]*, specMap: *`Texture`*): `void`

*Defined in [ts/player/planet.ts:135](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L135)*

Adds planet object to the three.js scene.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |
| planetTextures | `Texture`[] |
| buildtexture | `Texture`[] |
| specMap | `Texture` |

**Returns:** `void`

___
<a id="constructbases"></a>

###  constructBases

▸ **constructBases**(buildtexture: *`Texture`[]*, specMap: *`Texture`*): `void`

*Defined in [ts/player/planet.ts:146](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L146)*

Builds the four bases player must protect.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buildtexture | `Texture`[] |  textures for the buildings |
| specMap | `Texture` |  textures for the dead buildings |

**Returns:** `void`

___
<a id="constructplanet"></a>

###  constructPlanet

▸ **constructPlanet**(planetTextures: *`Texture`[]*, specMap: *`Texture`*): `void`

*Defined in [ts/player/planet.ts:176](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L176)*

Builds the player's planet.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| planetTextures | `Texture`[] |  textures for the planet |
| specMap | `Texture` |  textures for the dead planet |

**Returns:** `void`

___
<a id="constructsatellites"></a>

###  constructSatellites

▸ **constructSatellites**(): `void`

*Defined in [ts/player/planet.ts:198](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L198)*

Builds the player's four defensive satellites.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/player/planet.ts:221](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L221)*

At the end of each loop iteration, satellite regains a little energy.

**Returns:** `void`

___
<a id="fire"></a>

###  fire

▸ **fire**(scene: *`Scene`*, point: *`Vector3`*): `void`

*Defined in [ts/player/planet.ts:252](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L252)*

If it's determined that player wanted to fire a weapon, find closest charged satellite to click point, and instruct it to launch the projectile.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |
| point | `Vector3` |  point with x,z coordinates where player click mouse on game area. |

**Returns:** `void`

___
<a id="getactive"></a>

###  getActive

▸ **getActive**(): `boolean`

*Defined in [ts/player/planet.ts:266](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L266)*

Gets the viability of the planet, which will always be true..

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/player/planet.ts:273](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L273)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/player/planet.ts:280](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L280)*

Gets the current position of the planet.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/player/planet.ts:287](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L287)*

Gets the name of the planet.

**Returns:** `string`
the name of the planet.

___
<a id="getpowerregenrate"></a>

###  getPowerRegenRate

▸ **getPowerRegenRate**(): `number`

*Defined in [ts/player/planet.ts:302](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L302)*

Getter for recharge of planet shield rate.

**Returns:** `number`
percentage of productivity the remaining quadrants can produce for shields.

___
<a id="getstatus"></a>

###  getStatus

▸ **getStatus**(): [PlanetStatus](../interfaces/_ts_player_planet_.planetstatus.md)

*Defined in [ts/player/planet.ts:323](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L323)*

Getter for status of the planet's four populated quadrants. True = Alive | False = Dead.

**Returns:** [PlanetStatus](../interfaces/_ts_player_planet_.planetstatus.md)
an object with the four color-coded quadrants representing life/death of that area.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `boolean`

*Defined in [ts/player/planet.ts:295](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L295)*

Called when something collides with asteroid, which destroys it.

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

*Defined in [ts/player/planet.ts:335](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L335)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [ts/player/planet.ts:341](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L341)*

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

*Defined in [ts/player/planet.ts:347](https://github.com/WilliamRADFunk/planet-funk/blob/e9ae4fe/src/ts/player/planet.ts#L347)*

Spins planet at its set rate.

**Returns:** `void`

___

