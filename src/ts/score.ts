import { Font, FontLoader, Mesh, MeshLambertMaterial, Scene, TextGeometry } from "three";

const loader = new FontLoader();
let scoreFont: Font;
loader.load( 'assets/fonts/optimer_regular.typeface.json', font => {
    scoreFont = font;
});

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
            this.scoreMaterial = new MeshLambertMaterial( {color: 0x084E70} );
            this.score = new Mesh( this.scoreGeometry, this.scoreMaterial );
            this.score.position.x = -1.25;
            this.score.position.y = -0.5;
            this.score.position.z = -3.5;
            this.score.rotation.x = -1.3708;
        }
        scene.add(this.score);
    }
    /**
     * At the end of each loop iteration, score updates with time increase.
     */
    endCycle(): void {
        this.currentScore += 0.01;
        if (scoreFont && this.score) {
            this.scene.remove(this.score);
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
            this.score.position.x = -1.25;
            this.score.position.y = -0.5;
            this.score.position.z = -3.5;
            this.score.rotation.x = -1.3708;
            this.scene.add(this.score);
        }
    }
}