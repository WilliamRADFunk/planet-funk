[planet-funk](../README.md) > ["ts/controls/control-play"](../modules/_ts_controls_control_play_.md) > [ControlPlay](../classes/_ts_controls_control_play_.controlplay.md)

# Class: ControlPlay

*__class__*: Play button that draws and maintains click area for play button.

## Hierarchy

**ControlPlay**

## Index

### Properties

* [playButton](_ts_controls_control_play_.controlplay.md#playbutton)
* [playButtonBorderMaterial](_ts_controls_control_play_.controlplay.md#playbuttonbordermaterial)

### Methods

* [changeColor](_ts_controls_control_play_.controlplay.md#changecolor)
* [changeOpacity](_ts_controls_control_play_.controlplay.md#changeopacity)
* [hide](_ts_controls_control_play_.controlplay.md#hide)
* [show](_ts_controls_control_play_.controlplay.md#show)

---

## Properties

<a id="playbutton"></a>

### `<Private>` playButton

**● playButton**: *`Mesh`*

*Defined in [ts/controls/control-play.ts:21](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/controls/control-play.ts#L21)*

Mesh for the play button.

___
<a id="playbuttonbordermaterial"></a>

### `<Private>` playButtonBorderMaterial

**● playButtonBorderMaterial**: *`LineBasicMaterial`*

*Defined in [ts/controls/control-play.ts:25](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/controls/control-play.ts#L25)*

Controls the play button's border material.

___

## Methods

<a id="changecolor"></a>

###  changeColor

▸ **changeColor**(color: *`Color`*): `void`

*Defined in [ts/controls/control-play.ts:78](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/controls/control-play.ts#L78)*

Changes button material to match new level color.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| color | `Color` |  threeJS color value to use on button |

**Returns:** `void`

___
<a id="changeopacity"></a>

###  changeOpacity

▸ **changeOpacity**(opacity: *`number`*): `void`

*Defined in [ts/controls/control-play.ts:85](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/controls/control-play.ts#L85)*

Changes button opacity.

**Parameters:**

| Param | Type |
| ------ | ------ |
| opacity | `number` |

**Returns:** `void`

___
<a id="hide"></a>

###  hide

▸ **hide**(): `void`

*Defined in [ts/controls/control-play.ts:92](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/controls/control-play.ts#L92)*

Hide the play button (state related). Default is to show.

**Returns:** `void`

___
<a id="show"></a>

###  show

▸ **show**(): `void`

*Defined in [ts/controls/control-play.ts:99](https://github.com/WilliamRADFunk/planet-funk/blob/1ee2f92/src/ts/controls/control-play.ts#L99)*

Show the play button (state related). Default is to show.

**Returns:** `void`

___

