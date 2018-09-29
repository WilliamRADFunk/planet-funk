import { Scene } from "three";

import { Asteroid } from "./asteroid";
import { CollisionatorSingleton } from "./collisionator";

export class AsteroidGenerator {
    /**
     * Asteroid array for ease of iteration
     */
    asteroids: Asteroid[] = [];
    /**
     * Maximum number of asteroids that can exist at one time.
     */
    maxAsteroids: number = 50;
    /**
     * Reference to the scene, used to remove projectile from rendering cycle once destroyed.
     */
    private scene: Scene;
    /**
     * Constructor for the AsteroidGenerator class
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @hidden
     */
    constructor(scene: Scene) {
        this.scene = scene;
        for (let i = 0; i < this.maxAsteroids; i++) {
            this.asteroids.push(this.makeAsteroid());
        }
    }
    /**
     * At the end of each loop iteration, iterate endCycle through all asteroids.
     */
    endCycle() {
        for (let i = 0; i < this.asteroids.length; i++) {
            if (this.asteroids[i]) {
                this.asteroids[i].endCycle();
            }
        }
    }
    /**
     * Asteroid generation in one place to avoid breaking DRY.
     * @returns the created asteroid to be added to list at index of choice.
     */
    makeAsteroid() {
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