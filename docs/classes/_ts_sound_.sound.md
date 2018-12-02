[planet-funk](../README.md) > ["ts/sound"](../modules/_ts_sound_.md) > [Sound](../classes/_ts_sound_.sound.md)

# Class: Sound

## Hierarchy

**Sound**

## Index

### Properties

* [isPlaying](_ts_sound_.sound.md#isplaying)
* [sound](_ts_sound_.sound.md#sound)

### Methods

* [getIsPlaying](_ts_sound_.sound.md#getisplaying)
* [play](_ts_sound_.sound.md#play)
* [stop](_ts_sound_.sound.md#stop)

---

## Properties

<a id="isplaying"></a>

### `<Private>` isPlaying

**● isPlaying**: *`boolean`* = false

*Defined in [ts/sound.ts:5](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/sound.ts#L5)*

Tracks whether or not this sound is actively playing.

___
<a id="sound"></a>

### `<Private>` sound

**● sound**: *`any`*

*Defined in [ts/sound.ts:9](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/sound.ts#L9)*

Audio clip belonging to this sound.

___

## Methods

<a id="getisplaying"></a>

###  getIsPlaying

▸ **getIsPlaying**(): `boolean`

*Defined in [ts/sound.ts:19](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/sound.ts#L19)*

Getter for whether sound is actively playing or not.

**Returns:** `boolean`
TRUE --> Clip is actively playing | FALSE --> Clip is not playing.

___
<a id="play"></a>

###  play

▸ **play**(): `void`

*Defined in [ts/sound.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/sound.ts#L25)*

Activate the clip.

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in [ts/sound.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/b15270a/src/ts/sound.ts#L31)*

Stops the clip.

**Returns:** `void`

___

