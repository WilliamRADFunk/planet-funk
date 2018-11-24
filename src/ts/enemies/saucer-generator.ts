import { Scene, Texture } from 'three';

import { Saucer } from './saucer';
import { CollisionatorSingleton } from '../collisionator';
import { ScoreHandler } from '../displays/score-handler';
import { GameLoadData } from '../models/game-load-data';

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
     * Current level player is on, effects max saucers and points per saucer destroyed.
     */
    private currentLevel: number = 1;
    /**
     * Player chosen level of difficulty
     */
    private difficulty: number;
    /**
     * Flag to let generator know if game is not lost..
     */
    private isGameActive: boolean = true;
    /**
     * Maximum number of saucers that can exist at one time.
     */
    private maxSaucers: number = 1;
    /**
     * Saucer array for ease of iteration
     */
    private saucers: Saucer[] = [];
    /**
     * Points multiplier per saucer destroyed.
     */
    private saucerPoints: number = 50;
    /**
     * The loaded textures, used for the saucers.
     */
    private saucerTextures: Texture[];
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
     * @param scene          graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param scoreboard     reference to the scorekeeper for adding points on saucer destruction.
     * @param saucerTextures textures for the four saucers.
     * @param gld            contains level of difficulty and level chosen by player.
     * @hidden
     */
    constructor(scene: Scene, scoreboard: ScoreHandler, saucerTextures: Texture[], gld: GameLoadData) {
        this.difficulty = gld.difficulty;
        this.currentLevel = gld.level;
        this.saucerPoints = (this.difficulty + 1) * this.saucerPoints;
        this.saucerTextures = saucerTextures;
        this.scene = scene;
        this.scoreboard = scoreboard;
        this.makeSaucersFromLoad();
    }
    /**
     * At the end of each loop iteration, iterate endCycle through all saucers.
     * @param isGameActive flag to let generator know if game is not lost. If it is, don't continue accruing points.
     * @returns TRUE is all saucers are destroyed | FALSE means saucers remain.
     */
    endCycle(isGameActive: boolean): boolean {
        this.isGameActive = isGameActive;
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
        const altRand = (Math.random() * 1.8) + 0;
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
        saucer = new Saucer(this.scene, this.saucerTextures, saucerPos[0], saucerPos[1], saucerEnd[0], saucerEnd[1], 20, (this.currentLevel + this.difficulty) / 2);
        saucer.addToScene();
        CollisionatorSingleton.add(saucer);
        return saucer;
    }
    /**
     * Saucer generation in one place to avoid breaking DRY, with increasing speeds because of load.
     */
    private makeSaucersFromLoad() {
        for (let i = 0; i < this.maxSaucers; i++) {
            this.saucers.push(this.makeSaucer());
        }
        for (let j = 1; j < this.currentLevel; j++) {
            this.maxSaucers += Math.floor(((this.difficulty + 1) + j) / 4);
            this.saucers.push(this.makeSaucer());
        }
    }
    /**
     * Start of new level means reactivating saucers, and creating new ones.
     * @param level level number, grabbed from the LevelHandler.
     */
    refreshLevel(level: number): void {
        this.currentLevel = level;
        // Only increment new saucers if game is still going.
        if (this.isGameActive) {
            this.maxSaucers += Math.floor(((this.difficulty + 1) + level) / 4);
        }
        // Instantiates new saucers for new level
        for (let i = this.saucers.length; i < this.maxSaucers; i++) {
            this.saucers.push(this.makeSaucer());
        }
        // Reactivate the old, dead saucers
        for (let i = 0; i < this.saucers.length; i++) {
            this.saucers[i].activate();
        }
    }
}