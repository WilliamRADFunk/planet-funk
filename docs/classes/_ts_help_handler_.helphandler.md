[planet-funk](../README.md) > ["ts/help-handler"](../modules/_ts_help_handler_.md) > [HelpHandler](../classes/_ts_help_handler_.helphandler.md)

# Class: HelpHandler

## Hierarchy

**HelpHandler**

## Index

### Properties

* [asteroid](_ts_help_handler_.helphandler.md#asteroid)
* [barrierReturn](_ts_help_handler_.helphandler.md#barrierreturn)
* [building](_ts_help_handler_.helphandler.md#building)
* [buildingTextures](_ts_help_handler_.helphandler.md#buildingtextures)
* [buildingsAlive](_ts_help_handler_.helphandler.md#buildingsalive)
* [buildingsDead](_ts_help_handler_.helphandler.md#buildingsdead)
* [headMesh](_ts_help_handler_.helphandler.md#headmesh)
* [helpFont](_ts_help_handler_.helphandler.md#helpfont)
* [helpMaterial](_ts_help_handler_.helphandler.md#helpmaterial)
* [missileExample1](_ts_help_handler_.helphandler.md#missileexample1)
* [mouse](_ts_help_handler_.helphandler.md#mouse)
* [planet](_ts_help_handler_.helphandler.md#planet)
* [planetTextures](_ts_help_handler_.helphandler.md#planettextures)
* [return](_ts_help_handler_.helphandler.md#return)
* [returnGeometry](_ts_help_handler_.helphandler.md#returngeometry)
* [satelliteContainer](_ts_help_handler_.helphandler.md#satellitecontainer)
* [satelliteContainer2](_ts_help_handler_.helphandler.md#satellitecontainer2)
* [saucer](_ts_help_handler_.helphandler.md#saucer)
* [scene](_ts_help_handler_.helphandler.md#scene)
* [sectionBackingGeometryMiddle](_ts_help_handler_.helphandler.md#sectionbackinggeometrymiddle)
* [sectionBackingGeometrySides](_ts_help_handler_.helphandler.md#sectionbackinggeometrysides)
* [sectionGlowGeometryMiddle](_ts_help_handler_.helphandler.md#sectionglowgeometrymiddle)
* [sectionGlowGeometrySides](_ts_help_handler_.helphandler.md#sectionglowgeometrysides)
* [sectionMaterial](_ts_help_handler_.helphandler.md#sectionmaterial)
* [sectionMaterialGlow](_ts_help_handler_.helphandler.md#sectionmaterialglow)
* [sections](_ts_help_handler_.helphandler.md#sections)
* [shield](_ts_help_handler_.helphandler.md#shield)
* [specMap](_ts_help_handler_.helphandler.md#specmap)
* [tailMesh](_ts_help_handler_.helphandler.md#tailmesh)
* [textHeaderParams](_ts_help_handler_.helphandler.md#textheaderparams)
* [textpParams](_ts_help_handler_.helphandler.md#textpparams)
* [texts](_ts_help_handler_.helphandler.md#texts)

### Methods

* [activate](_ts_help_handler_.helphandler.md#activate)
* [deactivate](_ts_help_handler_.helphandler.md#deactivate)
* [endCycle](_ts_help_handler_.helphandler.md#endcycle)
* [makeBox1](_ts_help_handler_.helphandler.md#makebox1)
* [makeBox2](_ts_help_handler_.helphandler.md#makebox2)
* [makeBox3](_ts_help_handler_.helphandler.md#makebox3)
* [makeBox4](_ts_help_handler_.helphandler.md#makebox4)
* [makeBox5](_ts_help_handler_.helphandler.md#makebox5)
* [makeBox6](_ts_help_handler_.helphandler.md#makebox6)

---

## Properties

<a id="asteroid"></a>

### `<Private>` asteroid

**● asteroid**: *`Mesh`*

*Defined in [ts/help-handler.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L31)*

Controls the overall rendering of the asteroid

___
<a id="barrierreturn"></a>

### `<Private>` barrierReturn

**● barrierReturn**: *`Mesh`*

*Defined in [ts/help-handler.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L35)*

Click surface for the Return button.

___
<a id="building"></a>

### `<Private>` building

**● building**: *`Mesh`*

*Defined in [ts/help-handler.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L39)*

Controls the overall rendering of the building

___
<a id="buildingtextures"></a>

### `<Private>` buildingTextures

**● buildingTextures**: *`Texture`[]*

*Defined in [ts/help-handler.ts:51](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L51)*

Base texture images

___
<a id="buildingsalive"></a>

### `<Private>` buildingsAlive

**● buildingsAlive**: *`Mesh`[]* =  []

*Defined in [ts/help-handler.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L43)*

Controls the overall rendering of the not destroyed buildings

___
<a id="buildingsdead"></a>

### `<Private>` buildingsDead

**● buildingsDead**: *`Mesh`[]* =  []

*Defined in [ts/help-handler.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L47)*

Controls the overall rendering of the destroyed buildings

___
<a id="headmesh"></a>

### `<Private>` headMesh

**● headMesh**: *`Mesh`*

*Defined in [ts/help-handler.ts:55](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L55)*

Controls the overall rendering of the missile head

___
<a id="helpfont"></a>

### `<Private>` helpFont

**● helpFont**: *`Font`*

*Defined in [ts/help-handler.ts:59](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L59)*

Loaded font for display text.

___
<a id="helpmaterial"></a>

### `<Private>` helpMaterial

**● helpMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/help-handler.ts:63](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L63)*

Controls the color of the text display material

___
<a id="missileexample1"></a>

### `<Private>` missileExample1

**● missileExample1**: *[Projectile](_ts_weapons_projectile_.projectile.md)*

*Defined in [ts/help-handler.ts:67](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L67)*

First example missile

___
<a id="mouse"></a>

### `<Private>` mouse

**● mouse**: *`Mesh`*

*Defined in [ts/help-handler.ts:71](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L71)*

Mouse pointer

___
<a id="planet"></a>

### `<Private>` planet

**● planet**: *[Planet](_ts_player_planet_.planet.md)*

*Defined in [ts/help-handler.ts:75](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L75)*

Planet demonstration

___
<a id="planettextures"></a>

### `<Private>` planetTextures

**● planetTextures**: *`Texture`[]*

*Defined in [ts/help-handler.ts:79](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L79)*

Planet texture images

___
<a id="return"></a>

### `<Private>` return

**● return**: *`Mesh`*

*Defined in [ts/help-handler.ts:83](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L83)*

Controls the overall rendering of the return button display

___
<a id="returngeometry"></a>

### `<Private>` returnGeometry

**● returnGeometry**: *`TextGeometry`*

*Defined in [ts/help-handler.ts:87](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L87)*

Controls size and shape of the return button text

___
<a id="satellitecontainer"></a>

### `<Private>` satelliteContainer

**● satelliteContainer**: *`Mesh`*

*Defined in [ts/help-handler.ts:95](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L95)*

Controls the overall rendering of the satellite

___
<a id="satellitecontainer2"></a>

### `<Private>` satelliteContainer2

**● satelliteContainer2**: *`Mesh`*

*Defined in [ts/help-handler.ts:99](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L99)*

Controls the overall rendering of the second satellite

___
<a id="saucer"></a>

### `<Private>` saucer

**● saucer**: *`Mesh`*

*Defined in [ts/help-handler.ts:91](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L91)*

Controls the overall rendering of the saucer

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/help-handler.ts:103](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L103)*

Reference to the scene, used to remove and reinstall text geometries.

___
<a id="sectionbackinggeometrymiddle"></a>

### `<Private>` sectionBackingGeometryMiddle

**● sectionBackingGeometryMiddle**: *`PlaneGeometry`*

*Defined in [ts/help-handler.ts:111](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L111)*

Geometry for middle help section backings

___
<a id="sectionbackinggeometrysides"></a>

### `<Private>` sectionBackingGeometrySides

**● sectionBackingGeometrySides**: *`PlaneGeometry`*

*Defined in [ts/help-handler.ts:107](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L107)*

Geometry for side help section backings

___
<a id="sectionglowgeometrymiddle"></a>

### `<Private>` sectionGlowGeometryMiddle

**● sectionGlowGeometryMiddle**: *`PlaneGeometry`*

*Defined in [ts/help-handler.ts:119](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L119)*

Geometry for middle help section borders

___
<a id="sectionglowgeometrysides"></a>

### `<Private>` sectionGlowGeometrySides

**● sectionGlowGeometrySides**: *`PlaneGeometry`*

*Defined in [ts/help-handler.ts:115](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L115)*

Geometry for side help section borders

___
<a id="sectionmaterial"></a>

### `<Private>` sectionMaterial

**● sectionMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/help-handler.ts:123](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L123)*

Blackish background material for each help section.

___
<a id="sectionmaterialglow"></a>

### `<Private>` sectionMaterialGlow

**● sectionMaterialGlow**: *`MeshPhongMaterial`*

*Defined in [ts/help-handler.ts:127](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L127)*

Bluish background border material for each help section.

___
<a id="sections"></a>

### `<Private>` sections

**● sections**: *`Mesh`[]* =  []

*Defined in [ts/help-handler.ts:131](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L131)*

All the background sections of the help screen.

___
<a id="shield"></a>

### `<Private>` shield

**● shield**: *[Shield](_ts_player_shield_.shield.md)*

*Defined in [ts/help-handler.ts:135](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L135)*

Shield demonstration

___
<a id="specmap"></a>

### `<Private>` specMap

**● specMap**: *`Texture`*

*Defined in [ts/help-handler.ts:139](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L139)*

Texture image to help give the dead base its glossed over appearance.

___
<a id="tailmesh"></a>

### `<Private>` tailMesh

**● tailMesh**: *`Line`*

*Defined in [ts/help-handler.ts:143](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L143)*

Controls the overall rendering of the missile tail

___
<a id="textheaderparams"></a>

### `<Private>` textHeaderParams

**● textHeaderParams**: *`TextGeometryParameters`*

*Defined in [ts/help-handler.ts:147](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L147)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="textpparams"></a>

### `<Private>` textpParams

**● textpParams**: *`TextGeometryParameters`*

*Defined in [ts/help-handler.ts:151](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L151)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="texts"></a>

### `<Private>` texts

**● texts**: *`Mesh`[]* =  []

*Defined in [ts/help-handler.ts:155](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L155)*

All the texts of the help screen.

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/help-handler.ts:298](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L298)*

**Returns:** `void`

___
<a id="deactivate"></a>

###  deactivate

▸ **deactivate**(): `void`

*Defined in [ts/help-handler.ts:320](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L320)*

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/help-handler.ts:347](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L347)*

Moves the animated help items.

**Returns:** `void`

___
<a id="makebox1"></a>

### `<Private>` makeBox1

▸ **makeBox1**(sTex: *`Texture`[]*, astTex: *`Texture`*): `void`

*Defined in [ts/help-handler.ts:355](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L355)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sTex | `Texture`[] |
| astTex | `Texture` |

**Returns:** `void`

___
<a id="makebox2"></a>

### `<Private>` makeBox2

▸ **makeBox2**(sbg: *`BoxGeometry`*, sbm: *`MeshBasicMaterial`*, swg: *`BoxGeometry`*, swm: *`MeshBasicMaterial`*, seg: *`BoxGeometry`*, sem: *`MeshBasicMaterial`*, scg: *`BoxGeometry`*, scm: *`MeshBasicMaterial`*, mouseMat: *`MeshBasicMaterial`*, mouseGeom: *`ShapeGeometry`*): `void`

*Defined in [ts/help-handler.ts:434](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L434)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sbg | `BoxGeometry` |
| sbm | `MeshBasicMaterial` |
| swg | `BoxGeometry` |
| swm | `MeshBasicMaterial` |
| seg | `BoxGeometry` |
| sem | `MeshBasicMaterial` |
| scg | `BoxGeometry` |
| scm | `MeshBasicMaterial` |
| mouseMat | `MeshBasicMaterial` |
| mouseGeom | `ShapeGeometry` |

**Returns:** `void`

___
<a id="makebox3"></a>

### `<Private>` makeBox3

▸ **makeBox3**(bg: *`BoxGeometry`*): `void`

*Defined in [ts/help-handler.ts:488](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L488)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| bg | `BoxGeometry` |

**Returns:** `void`

___
<a id="makebox4"></a>

### `<Private>` makeBox4

▸ **makeBox4**(sbg: *`BoxGeometry`*, sbm: *`MeshBasicMaterial`*, swg: *`BoxGeometry`*, swm: *`MeshBasicMaterial`*, seg: *`BoxGeometry`*, sem: *`MeshBasicMaterial`*, scg: *`BoxGeometry`*, scm: *`MeshBasicMaterial`*, bg: *`BoxGeometry`*): `void`

*Defined in [ts/help-handler.ts:561](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L561)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sbg | `BoxGeometry` |
| sbm | `MeshBasicMaterial` |
| swg | `BoxGeometry` |
| swm | `MeshBasicMaterial` |
| seg | `BoxGeometry` |
| sem | `MeshBasicMaterial` |
| scg | `BoxGeometry` |
| scm | `MeshBasicMaterial` |
| bg | `BoxGeometry` |

**Returns:** `void`

___
<a id="makebox5"></a>

### `<Private>` makeBox5

▸ **makeBox5**(): `void`

*Defined in [ts/help-handler.ts:626](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L626)*

**Returns:** `void`

___
<a id="makebox6"></a>

### `<Private>` makeBox6

▸ **makeBox6**(bg: *`BoxGeometry`*): `void`

*Defined in [ts/help-handler.ts:646](https://github.com/WilliamRADFunk/planet-funk/blob/9a85fb9/src/ts/help-handler.ts#L646)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| bg | `BoxGeometry` |

**Returns:** `void`

___

