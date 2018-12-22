[planet-funk](../README.md) > ["ts/displays/help-handler"](../modules/_ts_displays_help_handler_.md) > [HelpHandler](../classes/_ts_displays_help_handler_.helphandler.md)

# Class: HelpHandler

*__class__*: Help screen that handles all of the animated instructions on how to play.

## Hierarchy

**HelpHandler**

## Index

### Properties

* [asteroid1](_ts_displays_help_handler_.helphandler.md#asteroid1)
* [asteroid2](_ts_displays_help_handler_.helphandler.md#asteroid2)
* [asteroid3](_ts_displays_help_handler_.helphandler.md#asteroid3)
* [barrierReturn](_ts_displays_help_handler_.helphandler.md#barrierreturn)
* [building](_ts_displays_help_handler_.helphandler.md#building)
* [buildingTextures](_ts_displays_help_handler_.helphandler.md#buildingtextures)
* [buildingsAlive](_ts_displays_help_handler_.helphandler.md#buildingsalive)
* [buildingsDead](_ts_displays_help_handler_.helphandler.md#buildingsdead)
* [dmz](_ts_displays_help_handler_.helphandler.md#dmz)
* [drone](_ts_displays_help_handler_.helphandler.md#drone)
* [droneExamples](_ts_displays_help_handler_.helphandler.md#droneexamples)
* [headMesh](_ts_displays_help_handler_.helphandler.md#headmesh)
* [helpFont](_ts_displays_help_handler_.helphandler.md#helpfont)
* [helpMaterial](_ts_displays_help_handler_.helphandler.md#helpmaterial)
* [helpShieldBarrier](_ts_displays_help_handler_.helphandler.md#helpshieldbarrier)
* [missileExample1](_ts_displays_help_handler_.helphandler.md#missileexample1)
* [mouse](_ts_displays_help_handler_.helphandler.md#mouse)
* [planet](_ts_displays_help_handler_.helphandler.md#planet)
* [planetTextures](_ts_displays_help_handler_.helphandler.md#planettextures)
* [return](_ts_displays_help_handler_.helphandler.md#return)
* [returnGeometry](_ts_displays_help_handler_.helphandler.md#returngeometry)
* [satelliteContainer](_ts_displays_help_handler_.helphandler.md#satellitecontainer)
* [satelliteContainer2](_ts_displays_help_handler_.helphandler.md#satellitecontainer2)
* [saucer](_ts_displays_help_handler_.helphandler.md#saucer)
* [saucerExample](_ts_displays_help_handler_.helphandler.md#saucerexample)
* [saucerTextures](_ts_displays_help_handler_.helphandler.md#saucertextures)
* [saveControl](_ts_displays_help_handler_.helphandler.md#savecontrol)
* [scene](_ts_displays_help_handler_.helphandler.md#scene)
* [scoreboardPlaceholder](_ts_displays_help_handler_.helphandler.md#scoreboardplaceholder)
* [sectionBackingGeometryMiddle](_ts_displays_help_handler_.helphandler.md#sectionbackinggeometrymiddle)
* [sectionBackingGeometrySides](_ts_displays_help_handler_.helphandler.md#sectionbackinggeometrysides)
* [sectionGlowGeometryMiddle](_ts_displays_help_handler_.helphandler.md#sectionglowgeometrymiddle)
* [sectionGlowGeometrySides](_ts_displays_help_handler_.helphandler.md#sectionglowgeometrysides)
* [sectionMaterial](_ts_displays_help_handler_.helphandler.md#sectionmaterial)
* [sectionMaterialGlow](_ts_displays_help_handler_.helphandler.md#sectionmaterialglow)
* [sections](_ts_displays_help_handler_.helphandler.md#sections)
* [shields](_ts_displays_help_handler_.helphandler.md#shields)
* [specMap](_ts_displays_help_handler_.helphandler.md#specmap)
* [tailMesh](_ts_displays_help_handler_.helphandler.md#tailmesh)
* [textHeaderParams](_ts_displays_help_handler_.helphandler.md#textheaderparams)
* [textpParams](_ts_displays_help_handler_.helphandler.md#textpparams)
* [texts](_ts_displays_help_handler_.helphandler.md#texts)
* [zSpot](_ts_displays_help_handler_.helphandler.md#zspot)

### Methods

* [activate](_ts_displays_help_handler_.helphandler.md#activate)
* [deactivate](_ts_displays_help_handler_.helphandler.md#deactivate)
* [endCycle](_ts_displays_help_handler_.helphandler.md#endcycle)
* [getShield](_ts_displays_help_handler_.helphandler.md#getshield)
* [makeBox0](_ts_displays_help_handler_.helphandler.md#makebox0)
* [makeBox1](_ts_displays_help_handler_.helphandler.md#makebox1)
* [makeBox2](_ts_displays_help_handler_.helphandler.md#makebox2)
* [makeBox3](_ts_displays_help_handler_.helphandler.md#makebox3)
* [makeBox4](_ts_displays_help_handler_.helphandler.md#makebox4)
* [makeBox5](_ts_displays_help_handler_.helphandler.md#makebox5)
* [makeBox6](_ts_displays_help_handler_.helphandler.md#makebox6)
* [makeBox7](_ts_displays_help_handler_.helphandler.md#makebox7)
* [makeBox8](_ts_displays_help_handler_.helphandler.md#makebox8)

---

## Properties

<a id="asteroid1"></a>

### `<Private>` asteroid1

**● asteroid1**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L41)*

Controls the overall rendering of the asteroid

___
<a id="asteroid2"></a>

### `<Private>` asteroid2

**● asteroid2**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L45)*

Controls the overall rendering of the asteroid

___
<a id="asteroid3"></a>

### `<Private>` asteroid3

**● asteroid3**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L49)*

Controls the overall rendering of the asteroid

___
<a id="barrierreturn"></a>

### `<Private>` barrierReturn

**● barrierReturn**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L53)*

Click surface for the Return button.

___
<a id="building"></a>

### `<Private>` building

**● building**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L57)*

Controls the overall rendering of the building

___
<a id="buildingtextures"></a>

### `<Private>` buildingTextures

**● buildingTextures**: *`Texture`[]*

*Defined in [ts/displays/help-handler.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L69)*

Base texture images

___
<a id="buildingsalive"></a>

### `<Private>` buildingsAlive

**● buildingsAlive**: *`Mesh`[]* =  []

*Defined in [ts/displays/help-handler.ts:61](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L61)*

Controls the overall rendering of the not destroyed buildings

___
<a id="buildingsdead"></a>

### `<Private>` buildingsDead

**● buildingsDead**: *`Mesh`[]* =  []

*Defined in [ts/displays/help-handler.ts:65](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L65)*

Controls the overall rendering of the destroyed buildings

___
<a id="dmz"></a>

### `<Private>` dmz

**● dmz**: *`Object3D`*

*Defined in [ts/displays/help-handler.ts:82](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L82)*

Contains a separate build of the planet's DMZ since help screen requires adding it separately.

___
<a id="drone"></a>

### `<Private>` drone

**● drone**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:73](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L73)*

Image of drone for points explanation.

___
<a id="droneexamples"></a>

### `<Private>` droneExamples

**● droneExamples**: *[Drone](_ts_weapons_drone_.drone.md)[]* =  []

*Defined in [ts/displays/help-handler.ts:77](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L77)*

Drone in help menu to create and hide as menu toggles.

___
<a id="headmesh"></a>

### `<Private>` headMesh

**● headMesh**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:90](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L90)*

Controls the overall rendering of the missile head

___
<a id="helpfont"></a>

### `<Private>` helpFont

**● helpFont**: *`Font`*

*Defined in [ts/displays/help-handler.ts:94](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L94)*

Loaded font for display text.

___
<a id="helpmaterial"></a>

### `<Private>` helpMaterial

**● helpMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/displays/help-handler.ts:98](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L98)*

Controls the color of the text display material

___
<a id="helpshieldbarrier"></a>

### `<Private>` helpShieldBarrier

**● helpShieldBarrier**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:102](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L102)*

Click surface for the shield example.

___
<a id="missileexample1"></a>

### `<Private>` missileExample1

**● missileExample1**: *[Projectile](_ts_weapons_projectile_.projectile.md)*

*Defined in [ts/displays/help-handler.ts:106](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L106)*

First example missile

___
<a id="mouse"></a>

### `<Private>` mouse

**● mouse**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:110](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L110)*

Mouse pointer

___
<a id="planet"></a>

### `<Private>` planet

**● planet**: *[Planet](_ts_player_planet_.planet.md)*

*Defined in [ts/displays/help-handler.ts:114](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L114)*

Planet demonstration

___
<a id="planettextures"></a>

### `<Private>` planetTextures

**● planetTextures**: *`Texture`[]*

*Defined in [ts/displays/help-handler.ts:118](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L118)*

Planet texture images

___
<a id="return"></a>

### `<Private>` return

**● return**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:122](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L122)*

Controls the overall rendering of the return button display

___
<a id="returngeometry"></a>

### `<Private>` returnGeometry

**● returnGeometry**: *`TextGeometry`*

*Defined in [ts/displays/help-handler.ts:126](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L126)*

Controls size and shape of the return button text

___
<a id="satellitecontainer"></a>

### `<Private>` satelliteContainer

**● satelliteContainer**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:134](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L134)*

Controls the overall rendering of the satellite

___
<a id="satellitecontainer2"></a>

### `<Private>` satelliteContainer2

**● satelliteContainer2**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:138](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L138)*

Controls the overall rendering of the second satellite

___
<a id="saucer"></a>

### `<Private>` saucer

**● saucer**: *`Mesh`*

*Defined in [ts/displays/help-handler.ts:130](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L130)*

Controls the overall rendering of the saucer

___
<a id="saucerexample"></a>

### `<Private>` saucerExample

**● saucerExample**: *[Saucer](_ts_enemies_saucer_.saucer.md)*

*Defined in [ts/displays/help-handler.ts:86](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L86)*

Saucer in help menu to create and hide as menu toggles.

___
<a id="saucertextures"></a>

### `<Private>` saucerTextures

**● saucerTextures**: *`Texture`[]*

*Defined in [ts/displays/help-handler.ts:142](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L142)*

texture images for the flying saucers.

___
<a id="savecontrol"></a>

### `<Private>` saveControl

**● saveControl**: *[ControlSave](_ts_controls_control_save_.controlsave.md)*

*Defined in [ts/displays/help-handler.ts:146](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L146)*

The save button graphic

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/displays/help-handler.ts:150](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L150)*

Reference to the scene, used to remove and reinstall text geometries.

___
<a id="scoreboardplaceholder"></a>

### `<Private>` scoreboardPlaceholder

**● scoreboardPlaceholder**: *[ScoreHandler](_ts_displays_score_handler_.scorehandler.md)*

*Defined in [ts/displays/help-handler.ts:151](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L151)*

___
<a id="sectionbackinggeometrymiddle"></a>

### `<Private>` sectionBackingGeometryMiddle

**● sectionBackingGeometryMiddle**: *`PlaneGeometry`*

*Defined in [ts/displays/help-handler.ts:159](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L159)*

Geometry for middle help section backings

___
<a id="sectionbackinggeometrysides"></a>

### `<Private>` sectionBackingGeometrySides

**● sectionBackingGeometrySides**: *`PlaneGeometry`*

*Defined in [ts/displays/help-handler.ts:155](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L155)*

Geometry for side help section backings

___
<a id="sectionglowgeometrymiddle"></a>

### `<Private>` sectionGlowGeometryMiddle

**● sectionGlowGeometryMiddle**: *`PlaneGeometry`*

*Defined in [ts/displays/help-handler.ts:167](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L167)*

Geometry for middle help section borders

___
<a id="sectionglowgeometrysides"></a>

### `<Private>` sectionGlowGeometrySides

**● sectionGlowGeometrySides**: *`PlaneGeometry`*

*Defined in [ts/displays/help-handler.ts:163](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L163)*

Geometry for side help section borders

___
<a id="sectionmaterial"></a>

### `<Private>` sectionMaterial

**● sectionMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/displays/help-handler.ts:171](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L171)*

Blackish background material for each help section.

___
<a id="sectionmaterialglow"></a>

### `<Private>` sectionMaterialGlow

**● sectionMaterialGlow**: *`MeshPhongMaterial`*

*Defined in [ts/displays/help-handler.ts:175](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L175)*

Bluish background border material for each help section.

___
<a id="sections"></a>

### `<Private>` sections

**● sections**: *`Mesh`[]* =  []

*Defined in [ts/displays/help-handler.ts:179](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L179)*

All the background sections of the help screen.

___
<a id="shields"></a>

### `<Private>` shields

**● shields**: *[Shield](_ts_player_shield_.shield.md)[]* =  []

*Defined in [ts/displays/help-handler.ts:183](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L183)*

Shield demonstration

___
<a id="specmap"></a>

### `<Private>` specMap

**● specMap**: *`Texture`*

*Defined in [ts/displays/help-handler.ts:187](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L187)*

Texture image to help give the dead base its glossed over appearance.

___
<a id="tailmesh"></a>

### `<Private>` tailMesh

**● tailMesh**: *`Line`*

*Defined in [ts/displays/help-handler.ts:191](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L191)*

Controls the overall rendering of the missile tail

___
<a id="textheaderparams"></a>

### `<Private>` textHeaderParams

**● textHeaderParams**: *`TextGeometryParameters`*

*Defined in [ts/displays/help-handler.ts:195](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L195)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="textpparams"></a>

### `<Private>` textpParams

**● textpParams**: *`TextGeometryParameters`*

*Defined in [ts/displays/help-handler.ts:199](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L199)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="texts"></a>

### `<Private>` texts

**● texts**: *`Mesh`[]* =  []

*Defined in [ts/displays/help-handler.ts:203](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L203)*

All the texts of the help screen.

___
<a id="zspot"></a>

### `<Private>` zSpot

**● zSpot**: *`number`* = 0.1

*Defined in [ts/displays/help-handler.ts:207](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L207)*

Tracks current z baseline coordinate off which all items are based.

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/displays/help-handler.ts:362](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L362)*

Turns on all help screen related graphics

**Returns:** `void`

___
<a id="deactivate"></a>

###  deactivate

▸ **deactivate**(): `void`

*Defined in [ts/displays/help-handler.ts:407](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L407)*

Turns off all help screen related graphics

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/displays/help-handler.ts:446](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L446)*

Moves the animated help items.

**Returns:** `void`

___
<a id="getshield"></a>

###  getShield

▸ **getShield**(): [Shield](_ts_player_shield_.shield.md)

*Defined in [ts/displays/help-handler.ts:500](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L500)*

Returns the center shield to allow menu to toggle/click it.

**Returns:** [Shield](_ts_player_shield_.shield.md)
the centered help screen shield for clicking on and off.

___
<a id="makebox0"></a>

### `<Private>` makeBox0

▸ **makeBox0**(): `void`

*Defined in [ts/displays/help-handler.ts:506](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L506)*

Builds the box and graphics for the long top section.

**Returns:** `void`

___
<a id="makebox1"></a>

### `<Private>` makeBox1

▸ **makeBox1**(astTex: *`Texture`*): `void`

*Defined in [ts/displays/help-handler.ts:551](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L551)*

Builds the box and graphics for the 2nd row left section.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| astTex | `Texture` |  asteroid tectures |

**Returns:** `void`

___
<a id="makebox2"></a>

### `<Private>` makeBox2

▸ **makeBox2**(sbg: *`BoxGeometry`*, sbm: *`MeshBasicMaterial`*, swg: *`BoxGeometry`*, swm: *`MeshBasicMaterial`*, seg: *`BoxGeometry`*, sem: *`MeshBasicMaterial`*, scg: *`BoxGeometry`*, scm: *`MeshBasicMaterial`*, mouseMat: *`MeshBasicMaterial`*, mouseGeom: *`ShapeGeometry`*): `void`

*Defined in [ts/displays/help-handler.ts:694](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L694)*

Builds the box and graphics for the 2nd row middle section.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sbg | `BoxGeometry` |  satellite body geometry |
| sbm | `MeshBasicMaterial` |  satellite body material |
| swg | `BoxGeometry` |  satellite wing geometry |
| swm | `MeshBasicMaterial` |  satellite wing material |
| seg | `BoxGeometry` |  satellite energy bar geometry |
| sem | `MeshBasicMaterial` |  satellite energy bar material |
| scg | `BoxGeometry` |  satellite container geometry |
| scm | `MeshBasicMaterial` |  satellite container material |
| mouseMat | `MeshBasicMaterial` |  mouse cursor material |
| mouseGeom | `ShapeGeometry` |  mouse cursor geometry |

**Returns:** `void`

___
<a id="makebox3"></a>

### `<Private>` makeBox3

▸ **makeBox3**(bg: *`BoxGeometry`*): `void`

*Defined in [ts/displays/help-handler.ts:762](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L762)*

Builds the box and graphics for the 2nd row right section.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bg | `BoxGeometry` |  building geometry |

**Returns:** `void`

___
<a id="makebox4"></a>

### `<Private>` makeBox4

▸ **makeBox4**(sbg: *`BoxGeometry`*, sbm: *`MeshBasicMaterial`*, swg: *`BoxGeometry`*, swm: *`MeshBasicMaterial`*, seg: *`BoxGeometry`*, sem: *`MeshBasicMaterial`*, scg: *`BoxGeometry`*, scm: *`MeshBasicMaterial`*, bg: *`BoxGeometry`*): `void`

*Defined in [ts/displays/help-handler.ts:853](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L853)*

Builds the box and graphics for the 3rd row left section.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sbg | `BoxGeometry` |  satellite body geometry |
| sbm | `MeshBasicMaterial` |  satellite body material |
| swg | `BoxGeometry` |  satellite wing geometry |
| swm | `MeshBasicMaterial` |  satellite wing material |
| seg | `BoxGeometry` |  satellite energy bar geometry |
| sem | `MeshBasicMaterial` |  satellite energy bar material |
| scg | `BoxGeometry` |  satellite container geometry |
| scm | `MeshBasicMaterial` |  satellite container material |
| bg | `BoxGeometry` |  building geometry |

**Returns:** `void`

___
<a id="makebox5"></a>

### `<Private>` makeBox5

▸ **makeBox5**(): `void`

*Defined in [ts/displays/help-handler.ts:926](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L926)*

Builds the box and graphics for the 3rd row middle section.

**Returns:** `void`

___
<a id="makebox6"></a>

### `<Private>` makeBox6

▸ **makeBox6**(bg: *`BoxGeometry`*): `void`

*Defined in [ts/displays/help-handler.ts:977](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L977)*

Builds the box and graphics for the 3rd row right section.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bg | `BoxGeometry` |  building geometry |

**Returns:** `void`

___
<a id="makebox7"></a>

### `<Private>` makeBox7

▸ **makeBox7**(): `void`

*Defined in [ts/displays/help-handler.ts:1069](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L1069)*

Builds the box and graphics for the 4th row left section.

**Returns:** `void`

___
<a id="makebox8"></a>

### `<Private>` makeBox8

▸ **makeBox8**(clkMat: *`MeshBasicMaterial`*): `void`

*Defined in [ts/displays/help-handler.ts:1100](https://github.com/WilliamRADFunk/planet-funk/blob/c8b9539/src/ts/displays/help-handler.ts#L1100)*

Builds the box and graphics for the 4th row right section.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| clkMat | `MeshBasicMaterial` |  Spherical click material for shield interaction. |

**Returns:** `void`

___

