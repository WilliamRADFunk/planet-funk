import {
    Color,
    Font,
    FontLoader,
    Mesh,
    MeshLambertMaterial,
    Scene,
    TextGeometry} from 'three';
/**
 * Loads the font from a json file.
 */
const loader = new FontLoader();
/**
 * The loaded font, used for the scoreboard.
 */
let scoreFont: Font;
/**
 * Callback function to set the scoreboard font once it is finished loading.
 */
loader.load( 'assets/fonts/optimer_regular.typeface.json', font => {
    scoreFont = font;
});
/**
 * @class
 * Keeps track of all things score related.
 */
export class ScoreHandler {
    /**
     * Keeps track of level's current color
     */
    private currentColor: Color;
    /**
     * Keeps track of player's current score
     */
    private currentScore: number = 0;
    /**
     * Keeps track of whether score has changed since last update.
     */
    private hasChanged: boolean = false;
    /**
     * Reference to the scene, used to remove projectile from rendering cycle once destroyed.
     */
    private scene: Scene;
    /**
     * Controls size and shape of the score
     */
    private scoreGeometry: TextGeometry;
    /**
     * Controls the color of the score material
     */
    private scoreMaterial: MeshLambertMaterial;
    /**
     * Controls the overall rendering of the score
     */
    private score: Mesh;
    /**
     * Constructor for the ScoreHandler class
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param color level color, grabbed from the LevelHandler.
     * @hidden
     */
    constructor(scene: Scene, color: Color) {
        this.currentColor = color;
        this.scene = scene;
        this.scoreMaterial = new MeshLambertMaterial( {color: color || 0x084E70} );
        if (scoreFont) {
            this.createText();
        }
    }
    /**
     * Adds points when blowing up asteroids, enemy missiles, and ufos.
     * @param points the amount of points to add to current score.
     */
    addPoints(points: number): void {
        this.currentScore += points;
        this.hasChanged = true;
    }
    /**
     * Creates the text in one place to obey the DRY rule.
     */
    private createText(): void {
        // Only remove score if it was added before.
        if (this.score) this.scene.remove(this.score);
        // Added before or not, make a new one and add it.
        // Sadly TextGeometries must be removed and added whenever the text content changes.
        this.scoreGeometry = new TextGeometry(`Score: ${this.currentScore.toFixed(0)}`,
            {
                font: scoreFont,
                size: 0.5,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: false,
                bevelThickness: 1,
                bevelSize: 0.5,
                bevelSegments: 3
            });
        this.score = new Mesh( this.scoreGeometry, this.scoreMaterial );
        this.score.position.x = -5.5;
        this.score.position.y = 0.5;
        this.score.position.z = -5.1;
        this.score.rotation.x = -1.3708;
        this.scene.add(this.score);
    }
    /**
     * At the end of each loop iteration, score updates with time increase.
     * @param color level color, grabbed from the LevelHandler
     */
    endCycle(color: Color): void {
        if (color !== this.currentColor) {
            this.currentColor = color || this.currentColor;
            this.scoreMaterial = new MeshLambertMaterial( {color: this.currentColor} );
        }
        this.currentColor = color;
        if (scoreFont && this.hasChanged) {
            this.createText();
            this.hasChanged = false;
        }
    }
}