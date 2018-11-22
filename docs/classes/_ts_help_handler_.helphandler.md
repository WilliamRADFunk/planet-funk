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
* [helpShieldBarrier](_ts_help_handler_.helphandler.md#helpshieldbarrier)
* [missileExample1](_ts_help_handler_.helphandler.md#missileexample1)
* [mouse](_ts_help_handler_.helphandler.md#mouse)
* [planet](_ts_help_handler_.helphandler.md#planet)
* [planetTextures](_ts_help_handler_.helphandler.md#planettextures)
* [return](_ts_help_handler_.helphandler.md#return)
* [returnGeometry](_ts_help_handler_.helphandler.md#returngeometry)
* [satelliteContainer](_ts_help_handler_.helphandler.md#satellitecontainer)
* [satelliteContainer2](_ts_help_handler_.helphandler.md#satellitecontainer2)
* [saucer](_ts_help_handler_.helphandler.md#saucer)
* [saveControl](_ts_help_handler_.helphandler.md#savecontrol)
* [scene](_ts_help_handler_.helphandler.md#scene)
* [sectionBackingGeometryMiddle](_ts_help_handler_.helphandler.md#sectionbackinggeometrymiddle)
* [sectionBackingGeometrySides](_ts_help_handler_.helphandler.md#sectionbackinggeometrysides)
* [sectionGlowGeometryMiddle](_ts_help_handler_.helphandler.md#sectionglowgeometrymiddle)
* [sectionGlowGeometrySides](_ts_help_handler_.helphandler.md#sectionglowgeometrysides)
* [sectionMaterial](_ts_help_handler_.helphandler.md#sectionmaterial)
* [sectionMaterialGlow](_ts_help_handler_.helphandler.md#sectionmaterialglow)
* [sections](_ts_help_handler_.helphandler.md#sections)
* [shields](_ts_help_handler_.helphandler.md#shields)
* [specMap](_ts_help_handler_.helphandler.md#specmap)
* [tailMesh](_ts_help_handler_.helphandler.md#tailmesh)
* [textHeaderParams](_ts_help_handler_.helphandler.md#textheaderparams)
* [textpParams](_ts_help_handler_.helphandler.md#textpparams)
* [texts](_ts_help_handler_.helphandler.md#texts)

### Methods

* [activate](_ts_help_handler_.helphandler.md#activate)
* [deactivate](_ts_help_handler_.helphandler.md#deactivate)
* [endCycle](_ts_help_handler_.helphandler.md#endcycle)
* [getShield](_ts_help_handler_.helphandler.md#getshield)
* [makeBox1](_ts_help_handler_.helphandler.md#makebox1)
* [makeBox2](_ts_help_handler_.helphandler.md#makebox2)
* [makeBox3](_ts_help_handler_.helphandler.md#makebox3)
* [makeBox4](_ts_help_handler_.helphandler.md#makebox4)
* [makeBox5](_ts_help_handler_.helphandler.md#makebox5)
* [makeBox6](_ts_help_handler_.helphandler.md#makebox6)
* [makeBox7](_ts_help_handler_.helphandler.md#makebox7)
* [makeBox8](_ts_help_handler_.helphandler.md#makebox8)

---

## Properties

<a id="asteroid"></a>

### `<Private>` asteroid

**● asteroid**: *`Mesh`*

*Defined in [ts/help-handler.ts:33](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L33)*

Controls the overall rendering of the asteroid

___
<a id="barrierreturn"></a>

### `<Private>` barrierReturn

**● barrierReturn**: *`Mesh`*

*Defined in [ts/help-handler.ts:37](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L37)*

Click surface for the Return button.

___
<a id="building"></a>

### `<Private>` building

**● building**: *`Mesh`*

*Defined in [ts/help-handler.ts:41](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L41)*

Controls the overall rendering of the building

___
<a id="buildingtextures"></a>

### `<Private>` buildingTextures

**● buildingTextures**: *`Texture`[]*

*Defined in [ts/help-handler.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L53)*

Base texture images

___
<a id="buildingsalive"></a>

### `<Private>` buildingsAlive

**● buildingsAlive**: *`Mesh`[]* =  []

*Defined in [ts/help-handler.ts:45](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L45)*

Controls the overall rendering of the not destroyed buildings

___
<a id="buildingsdead"></a>

### `<Private>` buildingsDead

**● buildingsDead**: *`Mesh`[]* =  []

*Defined in [ts/help-handler.ts:49](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L49)*

Controls the overall rendering of the destroyed buildings

___
<a id="headmesh"></a>

### `<Private>` headMesh

**● headMesh**: *`Mesh`*

*Defined in [ts/help-handler.ts:57](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L57)*

Controls the overall rendering of the missile head

___
<a id="helpfont"></a>

### `<Private>` helpFont

**● helpFont**: *`Font`*

*Defined in [ts/help-handler.ts:61](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L61)*

Loaded font for display text.

___
<a id="helpmaterial"></a>

### `<Private>` helpMaterial

**● helpMaterial**: *`MeshLambertMaterial`*

*Defined in [ts/help-handler.ts:65](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L65)*

Controls the color of the text display material

___
<a id="helpshieldbarrier"></a>

### `<Private>` helpShieldBarrier

**● helpShieldBarrier**: *`Mesh`*

*Defined in [ts/help-handler.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L69)*

Click surface for the shield example.

___
<a id="missileexample1"></a>

### `<Private>` missileExample1

**● missileExample1**: *[Projectile](_ts_weapons_projectile_.projectile.md)*

*Defined in [ts/help-handler.ts:73](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L73)*

First example missile

___
<a id="mouse"></a>

### `<Private>` mouse

**● mouse**: *`Mesh`*

*Defined in [ts/help-handler.ts:77](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L77)*

Mouse pointer

___
<a id="planet"></a>

### `<Private>` planet

**● planet**: *[Planet](_ts_player_planet_.planet.md)*

*Defined in [ts/help-handler.ts:81](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L81)*

Planet demonstration

___
<a id="planettextures"></a>

### `<Private>` planetTextures

**● planetTextures**: *`Texture`[]*

*Defined in [ts/help-handler.ts:85](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L85)*

Planet texture images

___
<a id="return"></a>

### `<Private>` return

**● return**: *`Mesh`*

*Defined in [ts/help-handler.ts:89](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L89)*

Controls the overall rendering of the return button display

___
<a id="returngeometry"></a>

### `<Private>` returnGeometry

**● returnGeometry**: *`TextGeometry`*

*Defined in [ts/help-handler.ts:93](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L93)*

Controls size and shape of the return button text

___
<a id="satellitecontainer"></a>

### `<Private>` satelliteContainer

**● satelliteContainer**: *`Mesh`*

*Defined in [ts/help-handler.ts:101](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L101)*

Controls the overall rendering of the satellite

___
<a id="satellitecontainer2"></a>

### `<Private>` satelliteContainer2

**● satelliteContainer2**: *`Mesh`*

*Defined in [ts/help-handler.ts:105](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L105)*

Controls the overall rendering of the second satellite

___
<a id="saucer"></a>

### `<Private>` saucer

**● saucer**: *`Mesh`*

*Defined in [ts/help-handler.ts:97](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L97)*

Controls the overall rendering of the saucer

___
<a id="savecontrol"></a>

### `<Private>` saveControl

**● saveControl**: *[ControlSave](_ts_controls_control_save_.controlsave.md)*

*Defined in [ts/help-handler.ts:109](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L109)*

The save button graphic

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/help-handler.ts:113](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L113)*

Reference to the scene, used to remove and reinstall text geometries.

___
<a id="sectionbackinggeometrymiddle"></a>

### `<Private>` sectionBackingGeometryMiddle

**● sectionBackingGeometryMiddle**: *`PlaneGeometry`*

*Defined in [ts/help-handler.ts:121](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L121)*

Geometry for middle help section backings

___
<a id="sectionbackinggeometrysides"></a>

### `<Private>` sectionBackingGeometrySides

**● sectionBackingGeometrySides**: *`PlaneGeometry`*

*Defined in [ts/help-handler.ts:117](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L117)*

Geometry for side help section backings

___
<a id="sectionglowgeometrymiddle"></a>

### `<Private>` sectionGlowGeometryMiddle

**● sectionGlowGeometryMiddle**: *`PlaneGeometry`*

*Defined in [ts/help-handler.ts:129](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L129)*

Geometry for middle help section borders

___
<a id="sectionglowgeometrysides"></a>

### `<Private>` sectionGlowGeometrySides

**● sectionGlowGeometrySides**: *`PlaneGeometry`*

*Defined in [ts/help-handler.ts:125](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L125)*

Geometry for side help section borders

___
<a id="sectionmaterial"></a>

### `<Private>` sectionMaterial

**● sectionMaterial**: *`MeshBasicMaterial`*

*Defined in [ts/help-handler.ts:133](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L133)*

Blackish background material for each help section.

___
<a id="sectionmaterialglow"></a>

### `<Private>` sectionMaterialGlow

**● sectionMaterialGlow**: *`MeshPhongMaterial`*

*Defined in [ts/help-handler.ts:137](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L137)*

Bluish background border material for each help section.

___
<a id="sections"></a>

### `<Private>` sections

**● sections**: *`Mesh`[]* =  []

*Defined in [ts/help-handler.ts:141](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L141)*

All the background sections of the help screen.

___
<a id="shields"></a>

### `<Private>` shields

**● shields**: *[Shield](_ts_player_shield_.shield.md)[]* =  []

*Defined in [ts/help-handler.ts:145](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L145)*

Shield demonstration

___
<a id="specmap"></a>

### `<Private>` specMap

**● specMap**: *`Texture`*

*Defined in [ts/help-handler.ts:149](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L149)*

Texture image to help give the dead base its glossed over appearance.

___
<a id="tailmesh"></a>

### `<Private>` tailMesh

**● tailMesh**: *`Line`*

*Defined in [ts/help-handler.ts:153](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L153)*

Controls the overall rendering of the missile tail

___
<a id="textheaderparams"></a>

### `<Private>` textHeaderParams

**● textHeaderParams**: *`TextGeometryParameters`*

*Defined in [ts/help-handler.ts:157](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L157)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="textpparams"></a>

### `<Private>` textpParams

**● textpParams**: *`TextGeometryParameters`*

*Defined in [ts/help-handler.ts:161](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L161)*

Since most of the text on the menu has same parameters, use one variable.

___
<a id="texts"></a>

### `<Private>` texts

**● texts**: *`Mesh`[]* =  []

*Defined in [ts/help-handler.ts:165](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L165)*

All the texts of the help screen.

___

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(): `void`

*Defined in [ts/help-handler.ts:312](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L312)*

**Returns:** `void`

___
<a id="deactivate"></a>

###  deactivate

▸ **deactivate**(): `void`

*Defined in [ts/help-handler.ts:341](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L341)*

**Returns:** `void`

___
<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in [ts/help-handler.ts:371](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L371)*

Moves the animated help items.

**Returns:** `void`

___
<a id="getshield"></a>

###  getShield

▸ **getShield**(): [Shield](_ts_player_shield_.shield.md)

*Defined in [ts/help-handler.ts:382](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L382)*

**Returns:** [Shield](_ts_player_shield_.shield.md)

___
<a id="makebox1"></a>

### `<Private>` makeBox1

▸ **makeBox1**(sTex: *`Texture`[]*, astTex: *`Texture`*): `void`

*Defined in [ts/help-handler.ts:385](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L385)*

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

*Defined in [ts/help-handler.ts:464](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L464)*

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

*Defined in [ts/help-handler.ts:518](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L518)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| bg | `BoxGeometry` |

**Returns:** `void`

___
<a id="makebox4"></a>

### `<Private>` makeBox4

▸ **makeBox4**(sbg: *`BoxGeometry`*, sbm: *`MeshBasicMaterial`*, swg: *`BoxGeometry`*, swm: *`MeshBasicMaterial`*, seg: *`BoxGeometry`*, sem: *`MeshBasicMaterial`*, scg: *`BoxGeometry`*, scm: *`MeshBasicMaterial`*, bg: *`BoxGeometry`*): `void`

*Defined in [ts/help-handler.ts:591](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L591)*

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

*Defined in [ts/help-handler.ts:656](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L656)*

**Returns:** `void`

___
<a id="makebox6"></a>

### `<Private>` makeBox6

▸ **makeBox6**(bg: *`BoxGeometry`*): `void`

*Defined in [ts/help-handler.ts:686](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L686)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| bg | `BoxGeometry` |

**Returns:** `void`

___
<a id="makebox7"></a>

### `<Private>` makeBox7

▸ **makeBox7**(): `void`

*Defined in [ts/help-handler.ts:772](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L772)*

**Returns:** `void`

___
<a id="makebox8"></a>

### `<Private>` makeBox8

▸ **makeBox8**(clkMat: *`MeshBasicMaterial`*): `void`

*Defined in [ts/help-handler.ts:797](https://github.com/WilliamRADFunk/planet-funk/blob/7d8bccd/src/ts/help-handler.ts#L797)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| clkMat | `MeshBasicMaterial` |

**Returns:** `void`

___

