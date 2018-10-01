import { Font, FontLoader, Mesh, MeshLambertMaterial, Scene, TextGeometry } from "three";
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
export class Score {
    /**
     * Keeps track of player's current score
     */
    private currentScore: number = 0;
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
     * Constructor for the Score class
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @hidden
     */
    constructor(scene: Scene) {
        this.scene = scene;
        this.scoreMaterial = new MeshLambertMaterial( {color: 0x084E70} );
        if (scoreFont) {
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
            this.score.position.z = -5;
            this.score.rotation.x = -1.3708;
        }
        scene.add(this.score);
    }
    /**
     * Adds points when blowing up asteroids, enemy missiles, and ufos.
     * @param points the amount of points to add to current score.
     */
    addPoints(points: number): void {
        this.currentScore += points;
    }
    /**
     * At the end of each loop iteration, score updates with time increase.
     */
    endCycle(): void {
        this.currentScore += 0.6;
        if (scoreFont) {
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
            this.score.position.z = -5;
            this.score.rotation.x = -1.3708;
            this.scene.add(this.score);
        }
    }
}