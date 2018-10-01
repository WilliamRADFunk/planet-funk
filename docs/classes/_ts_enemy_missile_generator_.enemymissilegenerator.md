[planet-funk](../README.md) > ["ts/enemy-missile-generator"](../modules/_ts_enemy_missile_generator_.md) > [EnemyMissileGenerator](../classes/_ts_enemy_missile_generator_.enemymissilegenerator.md)

# Class: EnemyMissileGenerator

*__class__*: Makes, Moves, and Scores the missiles and their resulting destruction.

## Hierarchy

**EnemyMissileGenerator**

## Index

### Properties

* [currentLevel](_ts_enemy_missile_generator_.enemymissilegenerator.md#currentlevel)
* [maxMissiles](_ts_enemy_missile_generator_.enemymissilegenerator.md#maxmissiles)
* [missilePoints](_ts_enemy_missile_generator_.enemymissilegenerator.md#missilepoints)
* [missiles](_ts_enemy_missile_generator_.enemymissilegenerator.md#missiles)
* [scene](_ts_enemy_missile_generator_.enemymissilegenerator.md#scene)
* [scoreboard](_ts_enemy_missile_generator_.enemymissilegenerator.md#scoreboard)

### Methods

* [endCycle](_ts_enemy_missile_generator_.enemymissilegenerator.md#endcycle)
* [makeMissile](_ts_enemy_missile_generator_.enemymissilegenerator.md#makemissile)

---

## Properties

<a id="currentlevel"></a>

### `<Private>` currentLevel

**● currentLevel**: *`number`* = 1

*Defined in [ts/enemy-missile-generator.ts:23](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/enemy-missile-generator.ts#L23)*

Current level player is on, effects max missiles and points per missile destroyed.

___
<a id="maxmissiles"></a>

### `<Private>` maxMissiles

**● maxMissiles**: *`number`* = 20

*Defined in [ts/enemy-missile-generator.ts:27](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/enemy-missile-generator.ts#L27)*

Maximum number of missiles that can exist at one time.

___
<a id="missilepoints"></a>

### `<Private>` missilePoints

**● missilePoints**: *`number`* = 30

*Defined in [ts/enemy-missile-generator.ts:31](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/enemy-missile-generator.ts#L31)*

Points multiplier per enemy missile destroyed.

___
<a id="missiles"></a>

### `<Private>` missiles

**● missiles**: *[Projectile](_ts_projectile_.projectile.md)[]* =  []

*Defined in [ts/enemy-missile-generator.ts:35](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/enemy-missile-generator.ts#L35)*

Keeps track of live missiles, to pass along endCycle signals, and destroy calls.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/enemy-missile-generator.ts:39](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/enemy-missile-generator.ts#L39)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="scoreboard"></a>

### `<Private>` scoreboard

**● scoreboard**: *[Score](_ts_score_.score.md)*

*Defined in [ts/enemy-missile-generator.ts:43](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/enemy-missile-generator.ts#L43)*

Reference to the scorekeeper for adding points on enemy missile destruction.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(isGameActive: *`boolean`*): `void`

*Defined in [ts/enemy-missile-generator.ts:58](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/enemy-missile-generator.ts#L58)*

At the end of each loop iteration, iterate endCycle through all missiless.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| isGameActive | `boolean` |  flag to let generator know if game is not lost. If it is, don't continue accruing points. |

**Returns:** `void`

___
<a id="makemissile"></a>

### `<Private>` makeMissile

▸ **makeMissile**(): `void`

*Defined in [ts/enemy-missile-generator.ts:84](https://github.com/WilliamRADFunk/planet-funk/blob/59b11b0/src/ts/enemy-missile-generator.ts#L84)*

Missiles generation in one place to avoid breaking DRY.

**Returns:** `void`

___

