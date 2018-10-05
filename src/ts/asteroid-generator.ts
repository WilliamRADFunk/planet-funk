import { Scene } from 'three';

import { Asteroid } from './asteroid';
import { CollisionatorSingleton } from './collisionator';
import { ScoreHandler } from './score-handler';
/**
 * @class
 * Makes, Moves, and Scores the asteroids and their resulting destruction.
 */
export class AsteroidGenerator {
    /**
     * Asteroid array for ease of iteration
     */
    private asteroids: Asteroid[] = [];
    /**
     * Points multiplier per asteroid destroyed.
     */
    private asteroidPoints: number = 25;
    /**
     * Current level player is on, effects max asteroids and points per asteroid destroyed.
     */
    private currentLevel: number = 1;
    /**
     * Maximum number of asteroids that can exist at one time.
     */
    private maxAsteroids: number = 10;
    /**
     * Reference to the scene, used to remove projectile from rendering cycle once destroyed.
     */
    private scene: Scene;
    /**
     * Reference to the scorekeeper for adding points on asteroid destruction.
     */
    private scoreboard: ScoreHandler;
    /**
     * Constructor for the AsteroidGenerator class
     * @param scene      graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param scoreboard reference to the scorekeeper for adding points on asteroid destruction.
     * @hidden
     */
    constructor(scene: Scene, scoreboard: ScoreHandler) {
        this.scene = scene;
        this.scoreboard = scoreboard;
        for (let i = 0; i < this.maxAsteroids; i++) {
            this.asteroids.push(this.makeAsteroid());
        }
    }
    /**
     * At the end of each loop iteration, iterate endCycle through all asteroids.
     * @param isGameActive flag to let generator know if game is not lost. If it is, don't continue accruing points.
     * @returns TRUE is all asteroids are destroyed | FALSE means asteroids remain.
     */
    endCycle(isGameActive: boolean): boolean {
        let asteroidsRemain = false;
        for (let i = 0; i < this.asteroids.length; i++) {
            if (this.asteroids[i]) {
                if (!this.asteroids[i].endCycle() && isGameActive) {
                    this.scoreboard.addPoints(this.currentLevel * this.asteroidPoints);
                }
                if (this.asteroids[i].getActive()) {
                    asteroidsRemain = true;
                }
            }
        }
        return !asteroidsRemain;
    }
    /**
     * Asteroid generation in one place to avoid breaking DRY.
     * @returns the created asteroid to be added to list at index of choice.
     */
    private makeAsteroid(): Asteroid {
        const altRand = Math.random();
        const isXNegative = Math.random() < 0.5 ? -1 : 1;
        const isZNegative = Math.random() < 0.5 ? -1 : 1;
        let asteroid;
        if (altRand > 0.15) {
            asteroid = new Asteroid(
                this.scene,
                isXNegative * ((Math.random() * 12) + 8),
                isZNegative * ((Math.random() * 12) + 8),
                this.currentLevel);
        } else if (altRand > 0.075) {
            asteroid = new Asteroid(
                this.scene, 1 * isXNegative, isZNegative * ((Math.random() * 12) + 8),
                this.currentLevel);
        } else {
            asteroid = new Asteroid(
                this.scene, isXNegative * ((Math.random() * 12) + 8), 1 * isZNegative,
                this.currentLevel);
        }
        asteroid.addToScene();
        CollisionatorSingleton.add(asteroid);
        return asteroid;
    }
    /**
     * Start of new level means reactivating asteroids, and creating new ones.
     * @param level level number, grabbed from the LevelHandler.
     */
    refreshLevel(level: number): void {
        this.currentLevel = level;
        this.maxAsteroids += 1;
        for (let i = this.asteroids.length; i < this.maxAsteroids; i++) {
            this.asteroids.push(this.makeAsteroid());
        }
        for (let i = 0; i < this.asteroids.length; i++) {
            this.asteroids[i].activate();
        }
    }
}