[planet-funk](../README.md) > ["ts/planet"](../modules/_ts_planet_.md) > [Planet](../classes/_ts_planet_.planet.md)

# Class: Planet

*__class__*: Planet that represents player's unit in the game. It dies, player loses.

## Hierarchy

**Planet**

## Implements

* [Collidable](../interfaces/_ts_collidable_.collidable.md)

## Index

### Properties

* [base1](_ts_planet_.planet.md#base1)
* [base2](_ts_planet_.planet.md#base2)
* [base3](_ts_planet_.planet.md#base3)
* [base4](_ts_planet_.planet.md#base4)
* [bases](_ts_planet_.planet.md#bases)
* [currentRotation](_ts_planet_.planet.md#currentrotation)
* [deadPlanetTexture](_ts_planet_.planet.md#deadplanettexture)
* [funk](_ts_planet_.planet.md#funk)
* [funkGeometry](_ts_planet_.planet.md#funkgeometry)
* [funkMaterial](_ts_planet_.planet.md#funkmaterial)
* [isActive](_ts_planet_.planet.md#isactive)
* [quadrantBlue](_ts_planet_.planet.md#quadrantblue)
* [quadrantGreen](_ts_planet_.planet.md#quadrantgreen)
* [quadrantPurple](_ts_planet_.planet.md#quadrantpurple)
* [quadrantYellow](_ts_planet_.planet.md#quadrantyellow)
* [satellite1](_ts_planet_.planet.md#satellite1)
* [satellite2](_ts_planet_.planet.md#satellite2)
* [satellite3](_ts_planet_.planet.md#satellite3)
* [satellite4](_ts_planet_.planet.md#satellite4)
* [satellites](_ts_planet_.planet.md#satellites)

### Methods

* [addToScene](_ts_planet_.planet.md#addtoscene)
* [constructBases](_ts_planet_.planet.md#constructbases)
* [constructPlanet](_ts_planet_.planet.md#constructplanet)
* [constructSatellites](_ts_planet_.planet.md#constructsatellites)
* [endCycle](_ts_planet_.planet.md#endcycle)
* [fire](_ts_planet_.planet.md#fire)
* [getActive](_ts_planet_.planet.md#getactive)
* [getCollisionRadius](_ts_planet_.planet.md#getcollisionradius)
* [getCurrentPosition](_ts_planet_.planet.md#getcurrentposition)
* [getName](_ts_planet_.planet.md#getname)
* [getPowerRegenRate](_ts_planet_.planet.md#getpowerregenrate)
* [getStatus](_ts_planet_.planet.md#getstatus)
* [impact](_ts_planet_.planet.md#impact)
* [isPassive](_ts_planet_.planet.md#ispassive)
* [removeFromScene](_ts_planet_.planet.md#removefromscene)
* [rotate](_ts_planet_.planet.md#rotate)

---

## Properties

<a id="base1"></a>

### `<Private>` base1

**● base1**: *[Base](_ts_base_.base.md)*

*Defined in [ts/planet.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L32)*

Base that starts at 1/2 o'clock

___
<a id="base2"></a>

### `<Private>` base2

**● base2**: *[Base](_ts_base_.base.md)*

*Defined in [ts/planet.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L36)*

Base that starts at 4/5 o'clock

___
<a id="base3"></a>

### `<Private>` base3

**● base3**: *[Base](_ts_base_.base.md)*

*Defined in [ts/planet.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L40)*

Base that starts at 7/8 o'clock

___
<a id="base4"></a>

### `<Private>` base4

**● base4**: *[Base](_ts_base_.base.md)*

*Defined in [ts/planet.ts:44](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L44)*

Base that starts at 10/11 o'clock

___
<a id="bases"></a>

### `<Private>` bases

**● bases**: *[Base](_ts_base_.base.md)[]*

*Defined in [ts/planet.ts:48](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L48)*

Iterable list of the bases.

___
<a id="currentrotation"></a>

### `<Private>` currentRotation

**● currentRotation**: *`number`* = 0

*Defined in [ts/planet.ts:52](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L52)*

Keeps track of proper rotation amount to avoid the weird quarter rotation reset cycle.

___
<a id="deadplanettexture"></a>

### `<Private>` deadPlanetTexture

**● deadPlanetTexture**: *`Texture`*

*Defined in [ts/planet.ts:56](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L56)*

Holds onto texture for dead planet until game over.

___
<a id="funk"></a>

### `<Private>` funk

**● funk**: *`Mesh`*

*Defined in [ts/planet.ts:68](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L68)*

Controls the overall rendering of the planet

___
<a id="funkgeometry"></a>

### `<Private>` funkGeometry

**● funkGeometry**: *`SphereGeometry`*

*Defined in [ts/planet.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L60)*

Controls size and shape of the planet

___
<a id="funkmaterial"></a>

### `<Private>` funkMaterial

**● funkMaterial**: *`MeshPhongMaterial`*

*Defined in [ts/planet.ts:64](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L64)*

Controls the color of the planet material

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = true

*Defined in [ts/planet.ts:73](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L73)*

Flag to signal if player has been defeated or not. True = not defeated. False = defeated.

___
<a id="quadrantblue"></a>

### `<Private>` quadrantBlue

**● quadrantBlue**: *`boolean`* = true

*Defined in [ts/planet.ts:77](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L77)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantgreen"></a>

### `<Private>` quadrantGreen

**● quadrantGreen**: *`boolean`* = true

*Defined in [ts/planet.ts:81](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L81)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantpurple"></a>

### `<Private>` quadrantPurple

**● quadrantPurple**: *`boolean`* = true

*Defined in [ts/planet.ts:85](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L85)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="quadrantyellow"></a>

### `<Private>` quadrantYellow

**● quadrantYellow**: *`boolean`* = true

*Defined in [ts/planet.ts:89](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L89)*

Populated section of the planet. Once hit, false signifies inactive.

___
<a id="satellite1"></a>

### `<Private>` satellite1

**● satellite1**: *[Satellite](_ts_satellite_.satellite.md)*

*Defined in [ts/planet.ts:93](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L93)*

Satellite that starts at 3 o'clock

___
<a id="satellite2"></a>

### `<Private>` satellite2

**● satellite2**: *[Satellite](_ts_satellite_.satellite.md)*

*Defined in [ts/planet.ts:97](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L97)*

Satellite that starts at 6 o'clock

___
<a id="satellite3"></a>

### `<Private>` satellite3

**● satellite3**: *[Satellite](_ts_satellite_.satellite.md)*

*Defined in [ts/planet.ts:101](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L101)*

Satellite that starts at 9 o'clock

___
<a id="satellite4"></a>

### `<Private>` satellite4

**● satellite4**: *[Satellite](_ts_satellite_.satellite.md)*

*Defined in [ts/planet.ts:105](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L105)*

Satellite that starts at 12 o'clock

___
<a id="satellites"></a>

### `<Private>` satellites

**● satellites**: *[Satellite](_ts_satellite_.satellite.md)[]* =  []

*Defined in [ts/planet.ts:109](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L109)*

Satellite array for ease of selection

___

## Methods

<a id="addtoscene"></a>

###  addToScene

▸ **addToScene**(scene: *`Scene`*, planetTextures: *`Texture`[]*, buildtexture: *`Texture`[]*, specMap: *`Texture`*): `void`

*Defined in [ts/planet.ts:119](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L119)*

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

*Defined in [ts/planet.ts:130](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L130)*

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

*Defined in [ts/planet.ts:160](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L160)*

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

*Defined in [ts/planet.ts:182](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L182)*

Builds the player's four defensive satellites.

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/planet.ts:205](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L205)*

At the end of each loop iteration, satellite regains a little energy.

**Returns:** `void`

___
<a id="fire"></a>

###  fire

▸ **fire**(scene: *`Scene`*, point: *`Vector3`*): `void`

*Defined in [ts/planet.ts:236](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L236)*

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

*Defined in [ts/planet.ts:250](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L250)*

Gets the viability of the planet, which will always be true..

**Returns:** `boolean`
flag to signal non-destruction. True = not destroyed. False = destroyed.

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

▸ **getCollisionRadius**(): `number`

*Defined in [ts/planet.ts:257](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L257)*

Gets the current radius of the bounding box (circle) of the collidable.

**Returns:** `number`
number to represent pixel distance from object center to edge of bounding box.

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

▸ **getCurrentPosition**(): `number`[]

*Defined in [ts/planet.ts:264](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L264)*

Gets the current position of the planet.

**Returns:** `number`[]
the array is of length 2 with x coordinate being first, and then z coordinate.

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [ts/planet.ts:271](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L271)*

Gets the name of the planet.

**Returns:** `string`
the name of the planet.

___
<a id="getpowerregenrate"></a>

###  getPowerRegenRate

▸ **getPowerRegenRate**(): `number`

*Defined in [ts/planet.ts:286](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L286)*

Getter for recharge of planet shield rate.

**Returns:** `number`
percentage of productivity the remaining quadrants can produce for shields.

___
<a id="getstatus"></a>

###  getStatus

▸ **getStatus**(): [PlanetStatus](../interfaces/_ts_planet_.planetstatus.md)

*Defined in [ts/planet.ts:307](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L307)*

Getter for status of the planet's four populated quadrants. True = Alive | False = Dead.

**Returns:** [PlanetStatus](../interfaces/_ts_planet_.planetstatus.md)
an object with the four color-coded quadrants representing life/death of that area.

___
<a id="impact"></a>

###  impact

▸ **impact**(self: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `boolean`

*Defined in [ts/planet.ts:279](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L279)*

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

*Defined in [ts/planet.ts:319](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L319)*

States it is a passive type or not. Two passive types cannot colllide with each other.

**Returns:** `boolean`
True is passive | False is not passive

___
<a id="removefromscene"></a>

###  removeFromScene

▸ **removeFromScene**(scene: *`Scene`*): `void`

*Defined in [ts/planet.ts:325](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L325)*

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

*Defined in [ts/planet.ts:331](https://github.com/WilliamRADFunk/planet-funk/blob/8aaa3ac/src/ts/planet.ts#L331)*

Spins planet at its set rate.

**Returns:** `void`

___

