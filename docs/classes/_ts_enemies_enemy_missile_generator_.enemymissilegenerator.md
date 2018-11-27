[planet-funk](../README.md) > ["ts/enemies/enemy-missile-generator"](../modules/_ts_enemies_enemy_missile_generator_.md) > [EnemyMissileGenerator](../classes/_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md)

# Class: EnemyMissileGenerator

*__class__*: Makes, Moves, and Scores the missiles and their resulting destruction.

## Hierarchy

**EnemyMissileGenerator**

## Index

### Properties

* [currentColor](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#currentcolor)
* [currentLevel](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#currentlevel)
* [difficulty](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#difficulty)
* [isGameActive](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#isgameactive)
* [maxMissiles](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#maxmissiles)
* [missilePoints](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#missilepoints)
* [missiles](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#missiles)
* [scene](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#scene)
* [scoreboard](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#scoreboard)

### Methods

* [endCycle](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#endcycle)
* [makeMissile](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#makemissile)
* [makeMissilesFromLoad](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#makemissilesfromload)
* [refreshLevel](_ts_enemies_enemy_missile_generator_.enemymissilegenerator.md#refreshlevel)

---

## Properties

<a id="currentcolor"></a>

### `<Private>` currentColor

**● currentColor**: *`Color`*

*Defined in [ts/enemies/enemy-missile-generator.ts:15](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L15)*

Keeps track of level's current color

___
<a id="currentlevel"></a>

### `<Private>` currentLevel

**● currentLevel**: *`number`* = 1

*Defined in [ts/enemies/enemy-missile-generator.ts:19](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L19)*

Current level player is on, effects max missiles and points per missile destroyed.

___
<a id="difficulty"></a>

### `<Private>` difficulty

**● difficulty**: *`number`*

*Defined in [ts/enemies/enemy-missile-generator.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L23)*

Player chosen level of difficulty

___
<a id="isgameactive"></a>

### `<Private>` isGameActive

**● isGameActive**: *`boolean`* = true

*Defined in [ts/enemies/enemy-missile-generator.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L27)*

Flag to let generator know if game is not lost.

___
<a id="maxmissiles"></a>

### `<Private>` maxMissiles

**● maxMissiles**: *`number`* = 10

*Defined in [ts/enemies/enemy-missile-generator.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L31)*

Maximum number of missiles that can exist at one time.

___
<a id="missilepoints"></a>

### `<Private>` missilePoints

**● missilePoints**: *`number`* = 10

*Defined in [ts/enemies/enemy-missile-generator.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L35)*

Points multiplier per enemy missile destroyed.

___
<a id="missiles"></a>

### `<Private>` missiles

**● missiles**: *[Projectile](_ts_weapons_projectile_.projectile.md)[]* =  []

*Defined in [ts/enemies/enemy-missile-generator.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L39)*

Keeps track of live missiles, to pass along endCycle signals, and destroy calls.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/enemies/enemy-missile-generator.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L43)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="scoreboard"></a>

### `<Private>` scoreboard

**● scoreboard**: *[ScoreHandler](_ts_displays_score_handler_.scorehandler.md)*

*Defined in [ts/enemies/enemy-missile-generator.ts:47](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L47)*

Reference to the scorekeeper for adding points on enemy missile destruction.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(isGameActive: *`boolean`*): `boolean`

*Defined in [ts/enemies/enemy-missile-generator.ts:71](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L71)*

At the end of each loop iteration, iterate endCycle through all missiless.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| isGameActive | `boolean` |  flag to let generator know if game is not lost. If it is, don't continue accruing points. |

**Returns:** `boolean`
TRUE is all missiles are spent | FALSE means missiles remain.

___
<a id="makemissile"></a>

### `<Private>` makeMissile

▸ **makeMissile**(): `void`

*Defined in [ts/enemies/enemy-missile-generator.ts:96](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L96)*

Missiles generation in one place to avoid breaking DRY.

**Returns:** `void`

___
<a id="makemissilesfromload"></a>

### `<Private>` makeMissilesFromLoad

▸ **makeMissilesFromLoad**(): `void`

*Defined in [ts/enemies/enemy-missile-generator.ts:130](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L130)*

Missiles generation in one place to avoid breaking DRY, with increasing speeds because of load.

**Returns:** `void`

___
<a id="refreshlevel"></a>

###  refreshLevel

▸ **refreshLevel**(level: *`number`*, color: *`Color`*): `void`

*Defined in [ts/enemies/enemy-missile-generator.ts:144](https://github.com/WilliamRADFunk/planet-funk/blob/ec9c023/src/ts/enemies/enemy-missile-generator.ts#L144)*

Start of new level means rebuilding missiles.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| level | `number` |  level number, grabbed from the LevelHandler. |
| color | `Color` |  level color, grabbed from the LevelHandler. |

**Returns:** `void`

___

