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

*Defined in [ts/init.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L34)*

Loads the graphic for asteroid.

___
<a id="asteroidtexture"></a>

### `<Let>` asteroidTexture

**● asteroidTexture**: *`Texture`*

*Defined in [ts/init.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L38)*

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

*Defined in [ts/init.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L42)*

Loads the graphics for buildings.

___
<a id="buildingtextures"></a>

### `<Const>` buildingTextures

**● buildingTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L51)*

The loaded textures, used for the buildings.

___
<a id="cameramenu"></a>

### `<Let>` cameraMenu

**● cameraMenu**: *`Camera`*

*Defined in [ts/init.ts:55](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L55)*

The camera for main menu

___
<a id="fontloader"></a>

### `<Const>` fontLoader

**● fontLoader**: *`FontLoader`* =  new FontLoader()

*Defined in [ts/init.ts:59](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L59)*

Loads the font from a json file.

___
<a id="gamefont"></a>

### `<Let>` gameFont

**● gameFont**: *`Font`*

*Defined in [ts/init.ts:63](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L63)*

The loaded font, used for the scoreboard.

___
<a id="ismenumode"></a>

### `<Let>` isMenuMode

**● isMenuMode**: *`boolean`* = true

*Defined in [ts/init.ts:67](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L67)*

Flag to allow menu rendering to continue.

___
<a id="menu"></a>

### `<Let>` menu

**● menu**: *[Menu](../classes/_ts_displays_menu_.menu.md)*

*Defined in [ts/init.ts:71](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L71)*

Instance of Menu for controlling buttons and menu lighting.

___
<a id="planetloaders"></a>

### `<Const>` planetLoaders

**● planetLoaders**: *`TextureLoader`[]* =  [
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader()
]

*Defined in [ts/init.ts:75](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L75)*

Loads the graphics for planet.

___
<a id="planettextures"></a>

### `<Const>` planetTextures

**● planetTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:83](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L83)*

The loaded textures, used for the planet.

___
<a id="renderermenu"></a>

### `<Let>` rendererMenu

**● rendererMenu**: * `WebGLRenderer` &#124; `CanvasRenderer`
*

*Defined in [ts/init.ts:87](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L87)*

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

*Defined in [ts/init.ts:91](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L91)*

Loads the graphics for saucers.

___
<a id="saucertextures"></a>

### `<Const>` saucerTextures

**● saucerTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:101](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L101)*

The loaded textures, used for the saucers.

___
<a id="scenemenu"></a>

### `<Let>` sceneMenu

**● sceneMenu**: *`Scene`*

*Defined in [ts/init.ts:105](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L105)*

The scene for main menu.

___
<a id="specmap"></a>

### `<Let>` specMap

**● specMap**: *`Texture`*

*Defined in [ts/init.ts:113](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L113)*

The loaded font, used for the scoreboard.

___
<a id="specmaploader"></a>

### `<Const>` specMapLoader

**● specMapLoader**: *`TextureLoader`* =  new TextureLoader()

*Defined in [ts/init.ts:109](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L109)*

Loads the graphics for specMap.

___

## Functions

<a id="checkassetsloaded"></a>

### `<Const>` checkAssetsLoaded

▸ **checkAssetsLoaded**(): `void`

*Defined in [ts/init.ts:167](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L167)*

Checks to see if all assets are finished loaded. If so, start rendering the game.

**Returns:** `void`

___
<a id="loadassets"></a>

### `<Const>` loadAssets

▸ **loadAssets**(): `void`

*Defined in [ts/init.ts:118](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L118)*

Passes the callback functions to font and texture loaders, each fitted with their chance to check if all others are done.

**Returns:** `void`

___
<a id="loadgame"></a>

### `<Const>` loadGame

▸ **loadGame**(difficulty: *`number`*): `void`

*Defined in [ts/init.ts:284](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L284)*

All things game related. Only starts when all assets are finished loading.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| difficulty | `number` |  player's choice in difficulty level. |

**Returns:** `void`

___
<a id="loadmenu"></a>

### `<Const>` loadMenu

▸ **loadMenu**(): `void`

*Defined in [ts/init.ts:175](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L175)*

**Returns:** `void`

___
<a id="startmenurendering"></a>

### `<Const>` startMenuRendering

▸ **startMenuRendering**(): `void`

*Defined in [ts/init.ts:265](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/init.ts#L265)*

**Returns:** `void`

___

