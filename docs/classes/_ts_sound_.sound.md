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

### Methods

* [play](_ts_sound_.sound.md#play)
* [stop](_ts_sound_.sound.md#stop)

---

## Properties

<a id="muffledvolume"></a>

### `<Private>` muffledVolume

**● muffledVolume**: *`number`*

*Defined in [ts/sound.ts:7](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/sound.ts#L7)*

The volume to use for the sound when muffled is passed in.

___
<a id="normalvolume"></a>

### `<Private>` normalVolume

**● normalVolume**: *`number`*

*Defined in [ts/sound.ts:11](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/sound.ts#L11)*

The volume to use for the sound when conditions are normal.

___
<a id="offset"></a>

### `<Private>` offset

**● offset**: *`number`*

*Defined in [ts/sound.ts:15](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/sound.ts#L15)*

The offset that best suites the audio clip as many have dead space in the beginning.

___
<a id="sound"></a>

### `<Private>` sound

**● sound**: *`Audio`*

*Defined in [ts/sound.ts:19](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/sound.ts#L19)*

Audio clip belonging to this sound.

___

## Methods

<a id="play"></a>

###  play

▸ **play**(muffled?: *`boolean`*): `void`

*Defined in [ts/sound.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/sound.ts#L37)*

Activate the clip.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` muffled | `boolean` |

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in [ts/sound.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/sound.ts#L46)*

Stops the clip.

**Returns:** `void`

___

