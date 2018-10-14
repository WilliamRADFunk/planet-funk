[planet-funk](../README.md) > ["ts/init"](../modules/_ts_init_.md)

# External module: "ts/init"

## Index

### Variables

* [asteroidLoader](_ts_init_.md#asteroidloader)
* [asteroidTexture](_ts_init_.md#asteroidtexture)
* [buildingLoaders](_ts_init_.md#buildingloaders)
* [buildingTextures](_ts_init_.md#buildingtextures)
* [cameraMenu](_ts_init_.md#cameramenu)
* [fontLoader](_ts_init_.md#fontloader)
* [gameFont](_ts_init_.md#gamefont)
* [isMenuMode](_ts_init_.md#ismenumode)
* [menu](_ts_init_.md#menu)
* [planetLoaders](_ts_init_.md#planetloaders)
* [planetTextures](_ts_init_.md#planettextures)
* [rendererMenu](_ts_init_.md#renderermenu)
* [saucerLoaders](_ts_init_.md#saucerloaders)
* [saucerTextures](_ts_init_.md#saucertextures)
* [sceneMenu](_ts_init_.md#scenemenu)
* [specMap](_ts_init_.md#specmap)
* [specMapLoader](_ts_init_.md#specmaploader)

### Functions

* [checkAssetsLoaded](_ts_init_.md#checkassetsloaded)
* [loadAssets](_ts_init_.md#loadassets)
* [loadGame](_ts_init_.md#loadgame)
* [loadMenu](_ts_init_.md#loadmenu)
* [startMenuRendering](_ts_init_.md#startmenurendering)

---

## Variables

<a id="asteroidloader"></a>

### `<Const>` asteroidLoader

**● asteroidLoader**: *`TextureLoader`* =  new TextureLoader()

*Defined in [ts/init.ts:32](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L32)*

Loads the graphic for asteroid.

___
<a id="asteroidtexture"></a>

### `<Let>` asteroidTexture

**● asteroidTexture**: *`Texture`*

*Defined in [ts/init.ts:36](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L36)*

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

*Defined in [ts/init.ts:40](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L40)*

Loads the graphics for buildings.

___
<a id="buildingtextures"></a>

### `<Const>` buildingTextures

**● buildingTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L49)*

The loaded textures, used for the buildings.

___
<a id="cameramenu"></a>

### `<Let>` cameraMenu

**● cameraMenu**: *`Camera`*

*Defined in [ts/init.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L53)*

The camera for main menu

___
<a id="fontloader"></a>

### `<Const>` fontLoader

**● fontLoader**: *`FontLoader`* =  new FontLoader()

*Defined in [ts/init.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L57)*

Loads the font from a json file.

___
<a id="gamefont"></a>

### `<Let>` gameFont

**● gameFont**: *`Font`*

*Defined in [ts/init.ts:61](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L61)*

The loaded font, used for the scoreboard.

___
<a id="ismenumode"></a>

### `<Let>` isMenuMode

**● isMenuMode**: *`boolean`* = true

*Defined in [ts/init.ts:65](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L65)*

Flag to allow menu rendering to continue.

___
<a id="menu"></a>

### `<Let>` menu

**● menu**: *[Menu](../classes/_ts_menu_.menu.md)*

*Defined in [ts/init.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L69)*

Instance of Menu for controlling buttons and menu lighting.

___
<a id="planetloaders"></a>

### `<Const>` planetLoaders

**● planetLoaders**: *`TextureLoader`[]* =  [
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader()
]

*Defined in [ts/init.ts:73](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L73)*

Loads the graphics for planet.

___
<a id="planettextures"></a>

### `<Const>` planetTextures

**● planetTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:81](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L81)*

The loaded textures, used for the planet.

___
<a id="renderermenu"></a>

### `<Let>` rendererMenu

**● rendererMenu**: * `WebGLRenderer` &#124; `CanvasRenderer`
*

*Defined in [ts/init.ts:85](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L85)*

The renderer for main menu

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

*Defined in [ts/init.ts:89](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L89)*

Loads the graphics for saucers.

___
<a id="saucertextures"></a>

### `<Const>` saucerTextures

**● saucerTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:99](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L99)*

The loaded textures, used for the saucers.

___
<a id="scenemenu"></a>

### `<Let>` sceneMenu

**● sceneMenu**: *`Scene`*

*Defined in [ts/init.ts:103](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L103)*

The scene for main menu.

___
<a id="specmap"></a>

### `<Let>` specMap

**● specMap**: *`Texture`*

*Defined in [ts/init.ts:111](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L111)*

The loaded font, used for the scoreboard.

___
<a id="specmaploader"></a>

### `<Const>` specMapLoader

**● specMapLoader**: *`TextureLoader`* =  new TextureLoader()

*Defined in [ts/init.ts:107](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L107)*

Loads the graphics for specMap.

___

## Functions

<a id="checkassetsloaded"></a>

### `<Const>` checkAssetsLoaded

▸ **checkAssetsLoaded**(): `void`

*Defined in [ts/init.ts:165](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L165)*

Checks to see if all assets are finished loaded. If so, start rendering the game.

**Returns:** `void`

___
<a id="loadassets"></a>

### `<Const>` loadAssets

▸ **loadAssets**(): `void`

*Defined in [ts/init.ts:116](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L116)*

Passes the callback functions to font and texture loaders, each fitted with their chance to check if all others are done.

**Returns:** `void`

___
<a id="loadgame"></a>

### `<Const>` loadGame

▸ **loadGame**(): `void`

*Defined in [ts/init.ts:269](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L269)*

All things game related. Only starts when all assets are finished loading.

**Returns:** `void`

___
<a id="loadmenu"></a>

### `<Const>` loadMenu

▸ **loadMenu**(): `void`

*Defined in [ts/init.ts:173](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L173)*

**Returns:** `void`

___
<a id="startmenurendering"></a>

### `<Const>` startMenuRendering

▸ **startMenuRendering**(): `void`

*Defined in [ts/init.ts:251](https://github.com/WilliamRADFunk/planet-funk/blob/b46ca69/src/ts/init.ts#L251)*

**Returns:** `void`

___

