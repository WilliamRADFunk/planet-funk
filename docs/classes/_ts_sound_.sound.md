[planet-funk](../README.md) > ["ts/sound"](../modules/_ts_sound_.md) > [Sound](../classes/_ts_sound_.sound.md)

# Class: Sound

## Hierarchy

**Sound**

## Index

### Properties

* [muffledVolume](_ts_sound_.sound.md#muffledvolume)
* [normalVolume](_ts_sound_.sound.md#normalvolume)
* [offset](_ts_sound_.sound.md#offset)
* [sound](_ts_sound_.sound.md#sound)
* [wasPlaying](_ts_sound_.sound.md#wasplaying)

### Methods

* [pause](_ts_sound_.sound.md#pause)
* [play](_ts_sound_.sound.md#play)
* [resume](_ts_sound_.sound.md#resume)
* [stop](_ts_sound_.sound.md#stop)

---

## Properties

<a id="muffledvolume"></a>

### `<Private>` muffledVolume

**● muffledVolume**: *`number`*

*Defined in [ts/sound.ts:7](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/sound.ts#L7)*

The volume to use for the sound when muffled is passed in.

___
<a id="normalvolume"></a>

### `<Private>` normalVolume

**● normalVolume**: *`number`*

*Defined in [ts/sound.ts:11](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/sound.ts#L11)*

The volume to use for the sound when conditions are normal.

___
<a id="offset"></a>

### `<Private>` offset

**● offset**: *`number`*

*Defined in [ts/sound.ts:15](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/sound.ts#L15)*

The offset that best suites the audio clip as many have dead space in the beginning.

___
<a id="sound"></a>

### `<Private>` sound

**● sound**: *`Audio`*

*Defined in [ts/sound.ts:19](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/sound.ts#L19)*

Audio clip belonging to this sound.

___
<a id="wasplaying"></a>

### `<Private>` wasPlaying

**● wasPlaying**: *`boolean`* = false

*Defined in [ts/sound.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/sound.ts#L23)*

Flag to track if this sound had been paused.

___

## Methods

<a id="pause"></a>

###  pause

▸ **pause**(): `void`

*Defined in [ts/sound.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/sound.ts#L51)*

Pauses clip if currently playing.

**Returns:** `void`

___
<a id="play"></a>

###  play

▸ **play**(muffled?: *`boolean`*): `void`

*Defined in [ts/sound.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/sound.ts#L41)*

Activate the clip.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` muffled | `boolean` |

**Returns:** `void`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `void`

*Defined in [ts/sound.ts:60](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/sound.ts#L60)*

Pauses clip if currently playing.

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in [ts/sound.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/0842c14/src/ts/sound.ts#L69)*

Stops the clip.

**Returns:** `void`

___

