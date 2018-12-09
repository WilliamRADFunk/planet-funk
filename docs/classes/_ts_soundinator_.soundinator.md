[planet-funk](../README.md) > ["ts/soundinator"](../modules/_ts_soundinator_.md) > [Soundinator](../classes/_ts_soundinator_.soundinator.md)

# Class: Soundinator

*__class__*: The sound effects and music system.

## Hierarchy

**Soundinator**

## Index

### Properties

* [audioListener](_ts_soundinator_.soundinator.md#audiolistener)
* [baseLost](_ts_soundinator_.soundinator.md#baselost)
* [boom](_ts_soundinator_.soundinator.md#boom)
* [click](_ts_soundinator_.soundinator.md#click)
* [drone](_ts_soundinator_.soundinator.md#drone)
* [fire](_ts_soundinator_.soundinator.md#fire)
* [gameOver](_ts_soundinator_.soundinator.md#gameover)
* [isMute](_ts_soundinator_.soundinator.md#ismute)
* [regen](_ts_soundinator_.soundinator.md#regen)
* [saucer](_ts_soundinator_.soundinator.md#saucer)
* [shieldDown](_ts_soundinator_.soundinator.md#shielddown)
* [shieldUp](_ts_soundinator_.soundinator.md#shieldup)

### Methods

* [addListener](_ts_soundinator_.soundinator.md#addlistener)
* [addSounds](_ts_soundinator_.soundinator.md#addsounds)
* [getMute](_ts_soundinator_.soundinator.md#getmute)
* [pauseSound](_ts_soundinator_.soundinator.md#pausesound)
* [playBaseLost](_ts_soundinator_.soundinator.md#playbaselost)
* [playBoom](_ts_soundinator_.soundinator.md#playboom)
* [playClick](_ts_soundinator_.soundinator.md#playclick)
* [playDrone](_ts_soundinator_.soundinator.md#playdrone)
* [playFire](_ts_soundinator_.soundinator.md#playfire)
* [playGameOver](_ts_soundinator_.soundinator.md#playgameover)
* [playRegen](_ts_soundinator_.soundinator.md#playregen)
* [playSaucer](_ts_soundinator_.soundinator.md#playsaucer)
* [playShieldDown](_ts_soundinator_.soundinator.md#playshielddown)
* [playShieldUp](_ts_soundinator_.soundinator.md#playshieldup)
* [resumeSound](_ts_soundinator_.soundinator.md#resumesound)
* [stopSaucer](_ts_soundinator_.soundinator.md#stopsaucer)
* [toggleMute](_ts_soundinator_.soundinator.md#togglemute)

---

## Properties

<a id="audiolistener"></a>

### `<Private>` audioListener

**● audioListener**: *`AudioListener`*

*Defined in [ts/soundinator.ts:13](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L13)*

Local reference to the audiolistener made during initialization.

___
<a id="baselost"></a>

### `<Private>` baseLost

**● baseLost**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:17](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L17)*

Contains the base destroyed sound.

___
<a id="boom"></a>

### `<Private>` boom

**● boom**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:21](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L21)*

Contains the boom sound.

___
<a id="click"></a>

### `<Private>` click

**● click**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L25)*

Contains the boom sound.

___
<a id="drone"></a>

### `<Private>` drone

**● drone**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:29](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L29)*

Contains the drone drop sound.

___
<a id="fire"></a>

### `<Private>` fire

**● fire**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L33)*

Contains the weapon's fire sound.

___
<a id="gameover"></a>

### `<Private>` gameOver

**● gameOver**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L37)*

Contains the game over sound.

___
<a id="ismute"></a>

### `<Private>` isMute

**● isMute**: *`boolean`* = true

*Defined in [ts/soundinator.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L41)*

Tracks whether game is in silent mode or not.

___
<a id="regen"></a>

### `<Private>` regen

**● regen**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L45)*

Contains the regenerated satellite or base sound.

___
<a id="saucer"></a>

### `<Private>` saucer

**● saucer**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L49)*

Contains the saucer is coming sound.

___
<a id="shielddown"></a>

### `<Private>` shieldDown

**● shieldDown**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L53)*

Contains the shield deactivation sound.

___
<a id="shieldup"></a>

### `<Private>` shieldUp

**● shieldUp**: *[Sound](_ts_sound_.sound.md)*

*Defined in [ts/soundinator.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L57)*

Contains the shield activation sound.

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(listener: *`AudioListener`*): `void`

*Defined in [ts/soundinator.ts:67](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L67)*

Attached the audiolistner when it's ready.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listener | `AudioListener` |  the singular audiolistener created during initialization of the game. |

**Returns:** `void`

___
<a id="addsounds"></a>

###  addSounds

▸ **addSounds**(sounds: *`Audio`[]*): `void`

*Defined in [ts/soundinator.ts:74](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L74)*

Creates game sounds from the preloaded Audio objects.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sounds | `Audio`[] |  list of preloaded Audio objects. |

**Returns:** `void`

___
<a id="getmute"></a>

###  getMute

▸ **getMute**(): `boolean`

*Defined in [ts/soundinator.ts:90](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L90)*

Getter for the isMute variable (mainly for preselecting the appropriate button in menu).

**Returns:** `boolean`
the current isMute state. TRUE --> no sound | FALSE --> there is sound

___
<a id="pausesound"></a>

###  pauseSound

▸ **pauseSound**(): `void`

*Defined in [ts/soundinator.ts:167](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L167)*

Pauses all the sound clips where they are.

**Returns:** `void`

___
<a id="playbaselost"></a>

###  playBaseLost

▸ **playBaseLost**(): `void`

*Defined in [ts/soundinator.ts:96](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L96)*

Plays the mouse click sound.

**Returns:** `void`

___
<a id="playboom"></a>

###  playBoom

▸ **playBoom**(muffled?: *`boolean`*): `void`

*Defined in [ts/soundinator.ts:104](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L104)*

Plays the explosion sound.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` muffled | `boolean` |  inert explosions should have a shallower sound. |

**Returns:** `void`

___
<a id="playclick"></a>

###  playClick

▸ **playClick**(): `void`

*Defined in [ts/soundinator.ts:111](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L111)*

Plays the mouse click sound.

**Returns:** `void`

___
<a id="playdrone"></a>

###  playDrone

▸ **playDrone**(): `void`

*Defined in [ts/soundinator.ts:118](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L118)*

Plays the drone drop sound.

**Returns:** `void`

___
<a id="playfire"></a>

###  playFire

▸ **playFire**(): `void`

*Defined in [ts/soundinator.ts:125](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L125)*

Plays the weapon firing sound.

**Returns:** `void`

___
<a id="playgameover"></a>

###  playGameOver

▸ **playGameOver**(): `void`

*Defined in [ts/soundinator.ts:132](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L132)*

Plays the weapon firing sound.

**Returns:** `void`

___
<a id="playregen"></a>

###  playRegen

▸ **playRegen**(): `void`

*Defined in [ts/soundinator.ts:139](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L139)*

Plays the regenerated satellite or base sound.

**Returns:** `void`

___
<a id="playsaucer"></a>

###  playSaucer

▸ **playSaucer**(): `void`

*Defined in [ts/soundinator.ts:146](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L146)*

Plays the saucer is coming sound.

**Returns:** `void`

___
<a id="playshielddown"></a>

###  playShieldDown

▸ **playShieldDown**(): `void`

*Defined in [ts/soundinator.ts:153](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L153)*

Plays the shield deactivation sound.

**Returns:** `void`

___
<a id="playshieldup"></a>

###  playShieldUp

▸ **playShieldUp**(): `void`

*Defined in [ts/soundinator.ts:160](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L160)*

Plays the shield activation sound.

**Returns:** `void`

___
<a id="resumesound"></a>

###  resumeSound

▸ **resumeSound**(): `void`

*Defined in [ts/soundinator.ts:184](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L184)*

Resumes all the sound clips that were paused.

**Returns:** `void`

___
<a id="stopsaucer"></a>

###  stopSaucer

▸ **stopSaucer**(): `void`

*Defined in [ts/soundinator.ts:201](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L201)*

Stops the saucer is coming sound.

**Returns:** `void`

___
<a id="togglemute"></a>

###  toggleMute

▸ **toggleMute**(mute: *`boolean`*): `void`

*Defined in [ts/soundinator.ts:209](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/soundinator.ts#L209)*

Toggles sound for the entire game.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mute | `boolean` |  TRUE --> mute the game | FALSE --> turn sound on |

**Returns:** `void`

___

