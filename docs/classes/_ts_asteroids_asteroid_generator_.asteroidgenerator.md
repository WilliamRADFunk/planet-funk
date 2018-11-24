[planet-funk](../README.md) > ["ts/asteroids/asteroid-generator"](../modules/_ts_asteroids_asteroid_generator_.md) > [AsteroidGenerator](../classes/_ts_asteroids_asteroid_generator_.asteroidgenerator.md)

# Class: AsteroidGenerator

*__class__*: Makes, Moves, and Scores the asteroids and their resulting destruction.

## Hierarchy

**AsteroidGenerator**

## Index

### Properties

* [aTexture](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#atexture)
* [asteroidPoints](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#asteroidpoints)
* [asteroids](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#asteroids)
* [currentLevel](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#currentlevel)
* [difficulty](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#difficulty)
* [isGameActive](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#isgameactive)
* [maxAsteroids](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#maxasteroids)
* [scene](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#scene)
* [scoreboard](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#scoreboard)

### Methods

* [endCycle](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#endcycle)
* [makeAsteroid](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#makeasteroid)
* [refreshLevel](_ts_asteroids_asteroid_generator_.asteroidgenerator.md#refreshlevel)

---

## Properties

<a id="atexture"></a>

### `<Private>` aTexture

**● aTexture**: *`Texture`*

*Defined in [ts/asteroids/asteroid-generator.ts:18](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L18)*

The loaded texture, used for the asteroids.

___
<a id="asteroidpoints"></a>

### `<Private>` asteroidPoints

**● asteroidPoints**: *`number`* = 5

*Defined in [ts/asteroids/asteroid-generator.ts:22](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L22)*

Points multiplier per asteroid destroyed.

___
<a id="asteroids"></a>

### `<Private>` asteroids

**● asteroids**: *[Asteroid](_ts_asteroids_asteroid_.asteroid.md)[]* =  []

*Defined in [ts/asteroids/asteroid-generator.ts:14](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L14)*

Asteroid array for ease of iteration

___
<a id="currentlevel"></a>

### `<Private>` currentLevel

**● currentLevel**: *`number`* = 1

*Defined in [ts/asteroids/asteroid-generator.ts:26](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L26)*

Current level player is on, effects max asteroids and points per asteroid destroyed.

___
<a id="difficulty"></a>

### `<Private>` difficulty

**● difficulty**: *`number`*

*Defined in [ts/asteroids/asteroid-generator.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L30)*

Player chosen level of difficulty

___
<a id="isgameactive"></a>

### `<Private>` isGameActive

**● isGameActive**: *`boolean`* = true

*Defined in [ts/asteroids/asteroid-generator.ts:34](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L34)*

Flag to let generator know if game is not lost.

___
<a id="maxasteroids"></a>

### `<Private>` maxAsteroids

**● maxAsteroids**: *`number`* = 10

*Defined in [ts/asteroids/asteroid-generator.ts:38](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L38)*

Maximum number of asteroids that can exist at one time.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in [ts/asteroids/asteroid-generator.ts:42](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L42)*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___
<a id="scoreboard"></a>

### `<Private>` scoreboard

**● scoreboard**: *[ScoreHandler](_ts_displays_score_handler_.scorehandler.md)*

*Defined in [ts/asteroids/asteroid-generator.ts:46](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L46)*

Reference to the scorekeeper for adding points on asteroid destruction.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(isGameActive: *`boolean`*): `boolean`

*Defined in [ts/asteroids/asteroid-generator.ts:69](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L69)*

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

▸ **makeAsteroid**(): [Asteroid](_ts_asteroids_asteroid_.asteroid.md)

*Defined in [ts/asteroids/asteroid-generator.ts:88](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L88)*

Asteroid generation in one place to avoid breaking DRY.

**Returns:** [Asteroid](_ts_asteroids_asteroid_.asteroid.md)
the created asteroid to be added to list at index of choice.

___
<a id="refreshlevel"></a>

###  refreshLevel

▸ **refreshLevel**(level: *`number`*): `void`

*Defined in [ts/asteroids/asteroid-generator.ts:111](https://github.com/WilliamRADFunk/planet-funk/blob/2ca110e/src/ts/asteroids/asteroid-generator.ts#L111)*

Start of new level means reactivating asteroids, and creating new ones.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| level | `number` |  level number, grabbed from the LevelHandler. |

**Returns:** `void`

___

