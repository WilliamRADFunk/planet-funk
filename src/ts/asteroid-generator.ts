import { Scene } from "three";

import { Asteroid } from "./asteroid";
import { CollisionatorSingleton } from "./collisionator";
import { Score } from "./score";
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
    private asteroidPoints: number = 50;
    /**
     * Current level player is on, effects mas asteroids and points per asteroid destroyed.
     */
    private currentLavel: number = 1;
    /**
     * Maximum number of asteroids that can exist at one time.
     */
    private maxAsteroids: number = 50;
    /**
     * Reference to the scene, used to remove projectile from rendering cycle once destroyed.
     */
    private scene: Scene;
    /**
     * Reference to the scorekeeper for adding points on asteroid destruction.
     */
    private scoreboard: Score;
    /**
     * Constructor for the AsteroidGenerator class
     * @param scene      graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param scoreboard reference to the scorekeeper for adding points on asteroid destruction.
     * @hidden
     */
    constructor(scene: Scene, scoreboard: Score) {
        this.scene = scene;
        this.scoreboard = scoreboard;
        for (let i = 0; i < this.maxAsteroids; i++) {
            this.asteroids.push(this.makeAsteroid());
        }
    }
    /**
     * At the end of each loop iteration, iterate endCycle through all asteroids.
     * @param isGameActive flag to let generator know if game is not lost. If it is, don't continue accruing points.
     */
    endCycle(isGameActive: boolean): void {
        for (let i = 0; i < this.asteroids.length; i++) {
            if (this.asteroids[i]) {
                if (!this.asteroids[i].endCycle() && isGameActive) {
                    this.scoreboard.addPoints(this.currentLavel * this.asteroidPoints);
                }
            }
        }
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
                isZNegative * ((Math.random() * 12) + 8));
        } else if (altRand > 0.075) {
            asteroid = new Asteroid(
                this.scene, 1 * isXNegative, isZNegative * ((Math.random() * 12) + 8));
        } else {
            asteroid = new Asteroid(
                this.scene, isXNegative * ((Math.random() * 12) + 8), 1 * isZNegative);
        }
        asteroid.addToScene();
        CollisionatorSingleton.add(asteroid);
        return asteroid;
    }
}