[planet-funk](../README.md) > ["ts/init"](../modules/_ts_init_.md)

# External module: "ts/init"

## Index

### Variables

* [asteroidLoader](_ts_init_.md#asteroidloader)
* [asteroidTexture](_ts_init_.md#asteroidtexture)
* [buildingLoaders](_ts_init_.md#buildingloaders)
* [buildingTextures](_ts_init_.md#buildingtextures)
* [fontLoader](_ts_init_.md#fontloader)
* [gameFont](_ts_init_.md#gamefont)
* [planetLoaders](_ts_init_.md#planetloaders)
* [planetTextures](_ts_init_.md#planettextures)
* [saucerLoaders](_ts_init_.md#saucerloaders)
* [saucerTextures](_ts_init_.md#saucertextures)
* [specMap](_ts_init_.md#specmap)
* [specMapLoader](_ts_init_.md#specmaploader)

### Functions

* [checkAssetsLoaded](_ts_init_.md#checkassetsloaded)
* [loadAssets](_ts_init_.md#loadassets)
* [loadGame](_ts_init_.md#loadgame)

---

## Variables

<a id="asteroidloader"></a>

### `<Const>` asteroidLoader

**● asteroidLoader**: *`TextureLoader`* =  new TextureLoader()

*Defined in [ts/init.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L30)*

Loads the graphic for asteroid.

___
<a id="asteroidtexture"></a>

### `<Let>` asteroidTexture

**● asteroidTexture**: *`Texture`*

*Defined in [ts/init.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L34)*

The loaded texture, used for the asteroids.

___
<a id="buildingloaders"></a>

### `<Const>` buildingLoaders

**● buildingLoaders**: *`TextureLoader`[]* =  [
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader()
]

*Defined in [ts/init.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L38)*

Loads the graphics for buildings.

___
<a id="buildingtextures"></a>

### `<Const>` buildingTextures

**● buildingTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L47)*

The loaded textures, used for the buildings.

___
<a id="fontloader"></a>

### `<Const>` fontLoader

**● fontLoader**: *`FontLoader`* =  new FontLoader()

*Defined in [ts/init.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L51)*

Loads the font from a json file.

___
<a id="gamefont"></a>

### `<Let>` gameFont

**● gameFont**: *`Font`*

*Defined in [ts/init.ts:55](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L55)*

The loaded font, used for the scoreboard.

___
<a id="planetloaders"></a>

### `<Const>` planetLoaders

**● planetLoaders**: *`TextureLoader`[]* =  [
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader()
]

*Defined in [ts/init.ts:59](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L59)*

Loads the graphics for planet.

___
<a id="planettextures"></a>

### `<Const>` planetTextures

**● planetTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:67](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L67)*

The loaded textures, used for the planet.

___
<a id="saucerloaders"></a>

### `<Const>` saucerLoaders

**● saucerLoaders**: *`TextureLoader`[]* =  [
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader()
]

*Defined in [ts/init.ts:71](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L71)*

Loads the graphics for saucers.

___
<a id="saucertextures"></a>

### `<Const>` saucerTextures

**● saucerTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:81](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L81)*

The loaded textures, used for the saucers.

___
<a id="specmap"></a>

### `<Let>` specMap

**● specMap**: *`Texture`*

*Defined in [ts/init.ts:89](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L89)*

The loaded font, used for the scoreboard.

___
<a id="specmaploader"></a>

### `<Const>` specMapLoader

**● specMapLoader**: *`TextureLoader`* =  new TextureLoader()

*Defined in [ts/init.ts:85](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L85)*

Loads the graphics for specMap.

___

## Functions

<a id="checkassetsloaded"></a>

### `<Const>` checkAssetsLoaded

▸ **checkAssetsLoaded**(): `void`

*Defined in [ts/init.ts:143](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L143)*

Checks to see if all assets are finished loaded. If so, start rendering the game.

**Returns:** `void`

___
<a id="loadassets"></a>

### `<Const>` loadAssets

▸ **loadAssets**(): `void`

*Defined in [ts/init.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L94)*

Passes the callback functions to font and texture loaders, each fitted with their chance to check if all others are done.

**Returns:** `void`

___
<a id="loadgame"></a>

### `<Const>` loadGame

▸ **loadGame**(): `void`

*Defined in [ts/init.ts:154](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/init.ts#L154)*

All things game related. Only starts when all assets are finished loading.

**Returns:** `void`

___

