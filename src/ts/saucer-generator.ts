import { Scene } from 'three';

import { Saucer } from './saucer';
import { CollisionatorSingleton } from './collisionator';
import { ScoreHandler } from './score-handler';

const saucerStartingPositions: number[][] = [
    [-10, -3], // Left Upper
    [10, -3], // Right Upper
    [-10, 3], // Left Below
    [10, 3], // Right Below
    [-3, -10], // Up Left
    [-3, 10], // Down Left
    [3, -10], // Up Right
    [3, 10], // Down Right
];
/**
 * @class
 * Makes, Moves, and Scores the saucers and their resulting destruction.
 */
export class SaucerGenerator {
    /**
     * Saucer array for ease of iteration
     */
    private saucers: Saucer[] = [];
    /**
     * Points multiplier per saucer destroyed.
     */
    private saucerPoints: number = 250;
    /**
     * Current level player is on, effects max saucers and points per saucer destroyed.
     */
    private currentLevel: number = 1;
    /**
     * Maximum number of saucers that can exist at one time.
     */
    private maxSaucers: number = 1;
    /**
     * Reference to the scene, used to remove projectile from rendering cycle once destroyed.
     */
    private scene: Scene;
    /**
     * Reference to the scorekeeper for adding points on saucer destruction.
     */
    private scoreboard: ScoreHandler;
    /**
     * Constructor for the SaucerGenerator class
     * @param scene      graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param scoreboard reference to the scorekeeper for adding points on saucer destruction.
     * @hidden
     */
    constructor(scene: Scene, scoreboard: ScoreHandler) {
        this.scene = scene;
        this.scoreboard = scoreboard;
        for (let i = 0; i < this.maxSaucers; i++) {
            this.saucers.push(this.makeSaucer());
        }
    }
    /**
     * At the end of each loop iteration, iterate endCycle through all saucers.
     * @param isGameActive flag to let generator know if game is not lost. If it is, don't continue accruing points.
     * @returns TRUE is all saucers are destroyed | FALSE means saucers remain.
     */
    endCycle(isGameActive: boolean): boolean {
        let saucersRemain = false;
        for (let i = 0; i < this.saucers.length; i++) {
            if (this.saucers[i]) {
                if (!this.saucers[i].endCycle() && isGameActive) {
                    this.scoreboard.addPoints(this.currentLevel * this.saucerPoints);
                }
                if (this.saucers[i].getActive()) {
                    saucersRemain = true;
                }
            }
        }
        return !saucersRemain;
    }
    /**
     * Saucer generation in one place to avoid breaking DRY.
     * @returns the created saucer to be added to list at index of choice.
     */
    private makeSaucer(): Saucer {
        const positionRand = Math.floor((Math.random() * 7) + 0);
        const isXNegative = Math.random() < 0.5 ? -1 : 1;
        const isZNegative = Math.random() < 0.5 ? -1 : 1;
        const altRand = (Math.random() * 2) + 0;
        let saucer;
        const saucerPos = saucerStartingPositions[positionRand];
        let saucerEnd;
        if (positionRand <= 3) {
            saucerPos[1] += isXNegative * altRand;
            saucerEnd = saucerPos.slice();
            saucerEnd[0] = -1 * saucerPos[0];
        } else {
            saucerPos[0] += isZNegative * altRand;
            saucerEnd = saucerPos.slice();
            saucerEnd[1] = -1 * saucerPos[1];
        }
        saucer = new Saucer(this.scene, saucerPos[0], saucerPos[1], saucerEnd[0], saucerEnd[1], 20, this.currentLevel);
        saucer.addToScene();
        CollisionatorSingleton.add(saucer);
        return saucer;
    }
    /**
     * Start of new level means reactivating saucers, and creating new ones.
     * @param level level number, grabbed from the LevelHandler.
     */
    refreshLevel(level: number): void {
        this.currentLevel = level;
        this.maxSaucers += 1;
        for (let i = this.saucers.length; i < this.maxSaucers; i++) {
            this.saucers.push(this.makeSaucer());
        }
        for (let i = 0; i < this.saucers.length; i++) {
            this.saucers[i].activate();
        }
    }
}