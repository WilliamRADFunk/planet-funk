[planet-funk](../README.md) > ["ts/asteroid-generator"](../modules/_ts_asteroid_generator_.md) > [AsteroidGenerator](../classes/_ts_asteroid_generator_.asteroidgenerator.md)

# Class: AsteroidGenerator

## Hierarchy

**AsteroidGenerator**

## Index

### Properties

* [asteroids](_ts_asteroid_generator_.asteroidgenerator.md#asteroids)
* [maxAsteroids](_ts_asteroid_generator_.asteroidgenerator.md#maxasteroids)
* [scene](_ts_asteroid_generator_.asteroidgenerator.md#scene)

### Methods

* [endCycle](_ts_asteroid_generator_.asteroidgenerator.md#endcycle)
* [makeAsteroid](_ts_asteroid_generator_.asteroidgenerator.md#makeasteroid)

---

## Properties

<a id="asteroids"></a>

###  asteroids

**● asteroids**: *[Asteroid](_ts_asteroid_.asteroid.md)[]* =  []

*Defined in ts/asteroid-generator.ts:10*

Asteroid array for ease of iteration

___
<a id="maxasteroids"></a>

###  maxAsteroids

**● maxAsteroids**: *`number`* = 10

*Defined in ts/asteroid-generator.ts:14*

Maximum number of asteroids that can exist at one time.

___
<a id="scene"></a>

### `<Private>` scene

**● scene**: *`Scene`*

*Defined in ts/asteroid-generator.ts:18*

Reference to the scene, used to remove projectile from rendering cycle once destroyed.

___

## Methods

<a id="endcycle"></a>

###  endCycle

▸ **endCycle**(): `void`

*Defined in ts/asteroid-generator.ts:46*

At the end of each loop iteration, iterate endCycle through all asteroids.

**Returns:** `void`

___
<a id="makeasteroid"></a>

###  makeAsteroid

▸ **makeAsteroid**(): [Asteroid](_ts_asteroid_.asteroid.md)

*Defined in ts/asteroid-generator.ts:60*

Asteroid generation in one place to avoid breaking DRY.

**Returns:** [Asteroid](_ts_asteroid_.asteroid.md)
the created asteroid to be added to list at index of choice.

___

