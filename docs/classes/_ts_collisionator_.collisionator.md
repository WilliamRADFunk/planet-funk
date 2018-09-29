[planet-funk](../README.md) > ["ts/collisionator"](../modules/_ts_collisionator_.md) > [Collisionator](../classes/_ts_collisionator_.collisionator.md)

# Class: Collisionator

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

###  collisionItems

**● collisionItems**: *[Collidable](../interfaces/_ts_collidable_.collidable.md)[]* =  []

*Defined in [ts/collisionator.ts:8](https://github.com/WilliamRADFunk/planet-funk/blob/ca1cee5/src/ts/collisionator.ts#L8)*

Registered list of things that can are collidable.

___

## Methods

<a id="add"></a>

###  add

▸ **add**(collidable: *[Collidable](../interfaces/_ts_collidable_.collidable.md)*): `void`

*Defined in [ts/collisionator.ts:18](https://github.com/WilliamRADFunk/planet-funk/blob/ca1cee5/src/ts/collisionator.ts#L18)*

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

*Defined in [ts/collisionator.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/ca1cee5/src/ts/collisionator.ts#L25)*

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

*Defined in [ts/collisionator.ts:63](https://github.com/WilliamRADFunk/planet-funk/blob/ca1cee5/src/ts/collisionator.ts#L63)*

Removes a collidable object to the list.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| collidable | [Collidable](../interfaces/_ts_collidable_.collidable.md) |  the object with collidable characteristics to remove to the collidables list. |

**Returns:** `void`

___

