[planet-funk](../README.md) > ["ts/collidable"](../modules/_ts_collidable_.md) > [Collidable](../interfaces/_ts_collidable_.collidable.md)

# Interface: Collidable

## Hierarchy

**Collidable**

## Implemented by

* [Asteroid](../classes/_ts_asteroid_.asteroid.md)
* [Base](../classes/_ts_base_.base.md)
* [Explosion](../classes/_ts_explosion_.explosion.md)
* [Planet](../classes/_ts_planet_.planet.md)
* [Projectile](../classes/_ts_projectile_.projectile.md)
* [Satellite](../classes/_ts_satellite_.satellite.md)
* [Shield](../classes/_ts_shield_.shield.md)

## Index

### Properties

* [getActive](_ts_collidable_.collidable.md#getactive)
* [getCollisionRadius](_ts_collidable_.collidable.md#getcollisionradius)
* [getCurrentPosition](_ts_collidable_.collidable.md#getcurrentposition)
* [impact](_ts_collidable_.collidable.md#impact)
* [isPassive](_ts_collidable_.collidable.md#ispassive)
* [removeFromScene](_ts_collidable_.collidable.md#removefromscene)

---

## Properties

<a id="getactive"></a>

###  getActive

**● getActive**: *`function`*

*Defined in [ts/collidable.ts:8](https://github.com/WilliamRADFunk/planet-funk/blob/b718844/src/ts/collidable.ts#L8)*

Gets the viability of the object.
*__returns__*: flag to signal non-destruction. True = not destroyed. False = destroyed.

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="getcollisionradius"></a>

###  getCollisionRadius

**● getCollisionRadius**: *`function`*

*Defined in [ts/collidable.ts:13](https://github.com/WilliamRADFunk/planet-funk/blob/b718844/src/ts/collidable.ts#L13)*

Gets the current radius of the bounding box (circle) of the collidable.
*__returns__*: number to represent pixel distance from object center to edge of bounding box.

#### Type declaration
▸(): `number`

**Returns:** `number`

___
<a id="getcurrentposition"></a>

###  getCurrentPosition

**● getCurrentPosition**: *`function`*

*Defined in [ts/collidable.ts:18](https://github.com/WilliamRADFunk/planet-funk/blob/b718844/src/ts/collidable.ts#L18)*

Gets the current position of the collidable object.
*__returns__*: the array is of length 2 with x coordinate being first, and then z coordinate.

#### Type declaration
▸(): `number`[]

**Returns:** `number`[]

___
<a id="impact"></a>

###  impact

**● impact**: *`function`*

*Defined in [ts/collidable.ts:24](https://github.com/WilliamRADFunk/planet-funk/blob/b718844/src/ts/collidable.ts#L24)*

Call to collidable object that it has been struck.
*__param__*: the thing to remove from collidables...and scene.

*__returns__*: whether or not impact means removing item from the scene.

#### Type declaration
▸(self: *[Collidable](_ts_collidable_.collidable.md)*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [Collidable](_ts_collidable_.collidable.md) |

**Returns:** `boolean`

___
<a id="ispassive"></a>

###  isPassive

**● isPassive**: *`function`*

*Defined in [ts/collidable.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/b718844/src/ts/collidable.ts#L29)*

States it is a passive type or not. Two passive types cannot colllide with each other.
*__returns__*: True is passive | False is not passive

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="removefromscene"></a>

### `<Optional>` removeFromScene

**● removeFromScene**: *`function`*

*Defined in [ts/collidable.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/b718844/src/ts/collidable.ts#L34)*

Removes asteroid object from the three.js scene.
*__param__*: graphic rendering scene object. Used each iteration to redraw things contained in scene.

#### Type declaration
▸(scene: *`Scene`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| scene | `Scene` |

**Returns:** `void`

___
