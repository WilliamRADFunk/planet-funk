[planet-funk](../README.md) > ["ts/asteroid-generator"](../modules/_ts_asteroid_generator_.md) > [AsteroidGenerator](../classes/_ts_asteroid_generator_.asteroidgenerator.md)

# Class: AsteroidGenerator

*__class__*: Makes, Moves, and Scores the asteroids and their resulting destruction.

## Hierarchy

**AsteroidGenerator**

## Index

### Properties

* [asteroidPoints](_ts_asteroid_generator_.asteroidgenerator.md#asteroidpoints)
* [asteroids](_ts_asteroid_generator_.asteroidgenerator.md#asteroids)
* [currentLevel](_ts_asteroid_generator_.asteroidgenerator.md#currentlevel)
* [maxAsteroids](_ts_asteroid_generator_.asteroidgenerator.md#maxasteroids)
* [scene](_ts_asteroid_generator_.asteroidgenerator.md#scene)
* [scoreboard](_ts_asteroid_generator_.asteroidgenerator.md#scoreboard)

### Methods

* [endCycle](_ts_asteroid_generator_.asteroidgenerator.md#endcycle)
* [makeAsteroid](_ts_asteroid_generator_.asteroidgenerator.md#makeasteroid)
* [refreshLevel](_ts_asteroid_generator_.asteroidgenerator.md#refreshlevel)

---

## Properties

<a id="asteroidpoints"></a>

### `<Private>` asteroidPoints

**● asteroidPoints**: *`number`* = 25

*Defined in [ts/asteroid-generator.ts:18](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/asteroid-generator.ts#L18)*

Points multiplier per asteroid destroyed.

___
<a id="asteroids"></a>

### `<Private>` asteroids

**● asteroids**: *[Asteroid](_ts_asteroid_.asteroid.md)[]* =  []

*Defined in [ts/asteroid-generator.ts:14](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/asteroid-generator.ts#L14)*

Asteroid array for ease of iteration

___
<a id="currentlevel"></a>

### `<Private>` currentLevel

**● currentLevel**: *`number`* = 1

*Defined in [ts/asteroid-generator.ts:22](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/asteroid-generator.ts#L22)*

Current level player is on, effects max asteroids and points per asteroid destroyed.

___
<a id="maxasteroids"></a>

### `<Private>` maxAsteroids

**● maxAsteroids**: *`number`* = 10

*Defined in [ts/asteroid-generator.ts:26](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/asteroid-generator.ts#L26)*

Maximum number of asteroids that can exist at one time.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/asteroid-generator.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/asteroid-generator.ts#L30)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="scoreboard"></a>

### `<Private>` scoreboard

**● scoreboard**: *[ScoreHandler](_ts_score_handler_.scorehandler.md)*

*Defined in [ts/asteroid-generator.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/asteroid-generator.ts#L34)*

Reference to the scorekeeper for adding points on asteroid destruction.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(isGameActive: *`boolean`*): `boolean`

*Defined in [ts/asteroid-generator.ts:53](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/asteroid-generator.ts#L53)*

At the end of each loop iteration, iterate endCycle through all asteroids.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| isGameActive | `boolean` |  flag to let generator know if game is not lost. If it is, don't continue accruing points. |

**Returns:** `boolean`
TRUE is all asteroids are destroyed | FALSE means asteroids remain.

___
<a id="makeasteroid"></a>

### `<Private>` makeAsteroid

▸ **makeAsteroid**(): [Asteroid](_ts_asteroid_.asteroid.md)

*Defined in [ts/asteroid-generator.ts:71](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/asteroid-generator.ts#L71)*

Asteroid generation in one place to avoid breaking DRY.

**Returns:** [Asteroid](_ts_asteroid_.asteroid.md)
the created asteroid to be added to list at index of choice.

___
<a id="refreshlevel"></a>

###  refreshLevel

▸ **refreshLevel**(level: *`number`*): `void`

*Defined in [ts/asteroid-generator.ts:99](https://github.com/WilliamRADFunk/planet-funk/blob/81086ed/src/ts/asteroid-generator.ts#L99)*

Start of new level means reactivating asteroids, and creating new ones.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| level | `number` |  level number, grabbed from the LevelHandler. |

**Returns:** `void`

___

