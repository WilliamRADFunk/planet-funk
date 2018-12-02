[planet-funk](../README.md) > ["ts/soundinator"](../modules/_ts_soundinator_.md) > [Soundinator](../classes/_ts_soundinator_.soundinator.md)

# Class: Soundinator

*__class__*: The sound effects and music system.

## Hierarchy

**Soundinator**

## Index

### Properties

* [boom](_ts_soundinator_.soundinator.md#boom)
* [isMute](_ts_soundinator_.soundinator.md#ismute)
* [queuedSounds](_ts_soundinator_.soundinator.md#queuedsounds)

### Methods

* [playBoom](_ts_soundinator_.soundinator.md#playboom)
* [toggleMute](_ts_soundinator_.soundinator.md#togglemute)

---

## Properties

<a id="boom"></a>

### `<Private>` boom

**● boom**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:11](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/soundinator.ts#L11)*

Contains the boom sound.

___
<a id="ismute"></a>

### `<Private>` isMute

**● isMute**: *`boolean`* = true

*Defined in [ts/soundinator.ts:15](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/soundinator.ts#L15)*

Tracks whether game is in silent mode or not.

___
<a id="queuedsounds"></a>

### `<Private>` queuedSounds

**● queuedSounds**: *[Sound](_ts_sound_.sound.md)[]* =  []

*Defined in [ts/soundinator.ts:19](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/soundinator.ts#L19)*

Registered list of things that can are collidable.

___

## Methods

<a id="playboom"></a>

###  playBoom

▸ **playBoom**(muffled?: *`boolean`*): `void`

*Defined in [ts/soundinator.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/soundinator.ts#L29)*

Plays the explosion sound.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` muffled | `boolean` |  inert explosions should have a shallower sound. |

**Returns:** `void`

___
<a id="togglemute"></a>

###  toggleMute

▸ **toggleMute**(mute: *`boolean`*): `void`

*Defined in [ts/soundinator.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/soundinator.ts#L38)*

Toggles sound for the entire game.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mute | `boolean` |  TRUE --> mute the game | FALSE --> turn sound on |

**Returns:** `void`

___

