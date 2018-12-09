[planet-funk](../README.md) > ["ts/init"](../modules/_ts_init_.md)

# External module: "ts/init"

## Index

### Variables

* [asteroidLoader](_ts_init_.md#asteroidloader)
* [asteroidTexture](_ts_init_.md#asteroidtexture)
* [audioListener](_ts_init_.md#audiolistener)
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
* [soundLoaders](_ts_init_.md#soundloaders)
* [soundPaths](_ts_init_.md#soundpaths)
* [sounds](_ts_init_.md#sounds)
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

*Defined in [ts/init.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L42)*

Loads the graphic for asteroid.

___
<a id="asteroidtexture"></a>

### `<Let>` asteroidTexture

**● asteroidTexture**: *`Texture`*

*Defined in [ts/init.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L46)*

The loaded texture, used for the asteroids.

___
<a id="audiolistener"></a>

### `<Const>` audioListener

**● audioListener**: *`AudioListener`* =  new AudioListener()

*Defined in [ts/init.ts:50](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L50)*

The thing that hears sound.

___
<a id="buildingloaders"></a>

### `<Const>` buildingLoaders

**● buildingLoaders**: *`TextureLoader`[]* =  [
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader()
]

*Defined in [ts/init.ts:54](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L54)*

Loads the graphics for buildings.

___
<a id="buildingtextures"></a>

### `<Const>` buildingTextures

**● buildingTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:63](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L63)*

The loaded textures, used for the buildings.

___
<a id="cameramenu"></a>

### `<Let>` cameraMenu

**● cameraMenu**: *`Camera`*

*Defined in [ts/init.ts:67](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L67)*

The camera for main menu

___
<a id="fontloader"></a>

### `<Const>` fontLoader

**● fontLoader**: *`FontLoader`* =  new FontLoader()

*Defined in [ts/init.ts:71](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L71)*

Loads the font from a json file.

___
<a id="gamefont"></a>

### `<Let>` gameFont

**● gameFont**: *`Font`*

*Defined in [ts/init.ts:75](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L75)*

The loaded font, used for the scoreboard.

___
<a id="ismenumode"></a>

### `<Let>` isMenuMode

**● isMenuMode**: *`boolean`* = true

*Defined in [ts/init.ts:79](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L79)*

Flag to allow menu rendering to continue.

___
<a id="menu"></a>

### `<Let>` menu

**● menu**: *[Menu](../classes/_ts_displays_menu_.menu.md)*

*Defined in [ts/init.ts:83](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L83)*

Instance of Menu for controlling buttons and menu lighting.

___
<a id="planetloaders"></a>

### `<Const>` planetLoaders

**● planetLoaders**: *`TextureLoader`[]* =  [
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader()
]

*Defined in [ts/init.ts:87](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L87)*

Loads the graphics for planet.

___
<a id="planettextures"></a>

### `<Const>` planetTextures

**● planetTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:95](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L95)*

The loaded textures, used for the planet.

___
<a id="renderermenu"></a>

### `<Let>` rendererMenu

**● rendererMenu**: * `WebGLRenderer` &#124; `CanvasRenderer`
*

*Defined in [ts/init.ts:99](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L99)*

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

*Defined in [ts/init.ts:103](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L103)*

Loads the graphics for saucers.

___
<a id="saucertextures"></a>

### `<Const>` saucerTextures

**● saucerTextures**: *`Texture`[]* =  []

*Defined in [ts/init.ts:113](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L113)*

The loaded textures, used for the saucers.

___
<a id="scenemenu"></a>

### `<Let>` sceneMenu

**● sceneMenu**: *`Scene`*

*Defined in [ts/init.ts:117](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L117)*

The scene for main menu.

___
<a id="soundloaders"></a>

### `<Const>` soundLoaders

**● soundLoaders**: *`AudioLoader`[]* =  [
    new AudioLoader(),
    new AudioLoader(),
    new AudioLoader(),
    new AudioLoader(),
    new AudioLoader(),
    new AudioLoader(),
    new AudioLoader(),
    new AudioLoader(),
    new AudioLoader(),
    new AudioLoader()
]

*Defined in [ts/init.ts:196](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L196)*

Loads the audio files.

___
<a id="soundpaths"></a>

### `<Const>` soundPaths

**● soundPaths**: *`string`[]* =  [
    /**
     * Bomb Exploding Sound
     * http://soundbible.com/1986-Bomb-Exploding.html
     * license: Attribution 3.0
     * Recorded by: Sound Explorer
     */
    'assets/audio/boom.mp3',
    /**
     * Click On Sound
     * http://soundbible.com/1280-Click-On.html
     * license: Attribution 3.0
     * Recorded by: Mike Koenig 
     */
    'assets/audio/click.mp3',
    /**
    * Tank Firing Sound
    * http://soundbible.com/1326-Tank-Firing.html
    * license: Attribution 3.0
    * Recorded by: snottyboy 
    */
    'assets/audio/fire.mp3',
    /**
    * Metroid Door Sound
    * http://soundbible.com/1858-Metroid-Door.html
    * license: Attribution 3.0
    * Recorded by: Brandino480
    */
    'assets/audio/shield-down.mp3',
    /**
    * Power Up Ray Sound
    * http://soundbible.com/1636-Power-Up-Ray.html
    * license: Noncommercial 3.0
    * Recorded by: Mike Koenig
    */
    'assets/audio/shield-up.mp3',
    /**
    * Strange Noise Sound
    * http://soundbible.com/1636-Power-Up-Ray.html
    * license: Noncommercial 3.0
    * Recorded by: Mike Koenig
    */
    'assets/audio/saucer.mp3',
    /**
    * Beep Ping Sound
    * http://soundbible.com/1133-Beep-Ping.html
    * license: Attribution 3.0
    * Recorded by: Mike Koenig
    */
    'assets/audio/drone.mp3',
    /**
    * Ta Da Sound
    * http://soundbible.com/1003-Ta-Da.html
    * license: Attribution 3.0
    * Recorded by: Mike Koenig
    */
    'assets/audio/regen.mp3',
    /**
    * Gunfire In Crowd Sound
    * http://soundbible.com/1608-Gunfire-In-Crowd.html
    * license: Public Domain
    * Recorded by: KevanGC
    */
    'assets/audio/base-lost.mp3',
    /**
    * Beam Me Up Scotty Sound
    * http://soundbible.com/256-Beam-Me-Up-Scotty.html
    * license: Personal Use Only
    * Recorded by: N/A
    */
    'assets/audio/game-over.mp3'
]

*Defined in [ts/init.ts:121](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L121)*

Sound file paths

___
<a id="sounds"></a>

### `<Const>` sounds

**● sounds**: *`Audio`[]* =  []

*Defined in [ts/init.ts:211](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L211)*

List of loaded audio files.

___
<a id="specmap"></a>

### `<Let>` specMap

**● specMap**: *`Texture`*

*Defined in [ts/init.ts:219](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L219)*

The loaded font, used for the scoreboard.

___
<a id="specmaploader"></a>

### `<Const>` specMapLoader

**● specMapLoader**: *`TextureLoader`* =  new TextureLoader()

*Defined in [ts/init.ts:215](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L215)*

Loads the graphics for specMap.

___

## Functions

<a id="checkassetsloaded"></a>

### `<Const>` checkAssetsLoaded

▸ **checkAssetsLoaded**(): `void`

*Defined in [ts/init.ts:290](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L290)*

Checks to see if all assets are finished loaded. If so, start rendering the game.

**Returns:** `void`

___
<a id="loadassets"></a>

### `<Const>` loadAssets

▸ **loadAssets**(): `void`

*Defined in [ts/init.ts:224](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L224)*

Passes the callback functions to font and texture loaders, each fitted with their chance to check if all others are done.

**Returns:** `void`

___
<a id="loadgame"></a>

### `<Const>` loadGame

▸ **loadGame**(difficulty: *`number`*, gld?: *[GameLoadData](../interfaces/_ts_models_game_load_data_.gameloaddata.md)*): `void`

*Defined in [ts/init.ts:446](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L446)*

All things game related. Only starts when all assets are finished loading.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| difficulty | `number` |  player's choice in difficulty level. |
| `Optional` gld | [GameLoadData](../interfaces/_ts_models_game_load_data_.gameloaddata.md) |

**Returns:** `void`

___
<a id="loadmenu"></a>

### `<Const>` loadMenu

▸ **loadMenu**(): `void`

*Defined in [ts/init.ts:300](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L300)*

**Returns:** `void`

___
<a id="startmenurendering"></a>

### `<Const>` startMenuRendering

▸ **startMenuRendering**(): `void`

*Defined in [ts/init.ts:427](https://github.com/WilliamRADFunk/planet-funk/blob/4d2f34e/src/ts/init.ts#L427)*

**Returns:** `void`

___

