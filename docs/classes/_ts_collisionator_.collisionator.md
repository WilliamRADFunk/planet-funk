[planet-funk](../README.md) > ["ts/collisionator"](../modules/_ts_collisionator_.md) > [Collisionator](../classes/_ts_collisionator_.collisionator.md)

# Class: Collisionator

*__class__*: The collision detection system.

## Hierarchy

**Collisionator**

## Index

### Properties

* [collisionItems](_ts_collisionator_.collisionator.md#collisionitems)

### Methods

* [add](_ts_collisionator_.collisionator.md#add)
* [checkForCollisions](_ts_collisionator_.collisionator.md#checkforcollisions)
* [remove](_ts_collisionator_.collisionator.md#remove)

---

## Properties

<a id="collisionitems"></a>

### `<Private>` collisionItems

**● collisionItems**: *[Collidable](../interfaces/_ts_collidable_.collidable.md)[]* =  []

*Defined in [ts/collisionator.ts:13](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/collisionator.ts#L13)*

Registered list of things that can are collidable.

___

## Methods

<a id="add"></a>

###  add

▸ **add**(collidable: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `void`

*Defined in [ts/collisionator.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/collisionator.ts#L23)*

Adds a collidable object to the list.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| collidable | [Collidable](../interfaces/_ts_collidable_.collidable.md) |  the object with collidable characteristics to add to the collidables list. |

**Returns:** `void`

___
<a id="checkforcollisions"></a>

###  checkForCollisions

▸ **checkForCollisions**(scene: *`Scene`*): `void`

*Defined in [ts/collisionator.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/collisionator.ts#L30)*

Check for collisions between two or more object, and signal them to impact.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | `Scene` |  graphic rendering scene object. Used each iteration to redraw things contained in scene. |

**Returns:** `void`

___
<a id="remove"></a>

###  remove

▸ **remove**(collidable: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `void`

*Defined in [ts/collisionator.ts:79](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/collisionator.ts#L79)*

Removes a collidable object to the list.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| collidable | [Collidable](../interfaces/_ts_collidable_.collidable.md) |  the object with collidable characteristics to remove to the collidables list. |

**Returns:** `void`

___

