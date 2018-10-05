import {
    Color,
    Font,
    FontLoader,
    Mesh,
    MeshLambertMaterial,
    Scene,
    TextGeometry } from 'three';

const randomColor = require('randomcolor');
/**
 * The loaded font, used for the level display.
 */
let levelFont: Font;
/**
 * Loads the font from a json file.
 */
const loader = new FontLoader();
/**
 * Callback function to set the level display font once it is finished loading.
 */
loader.load( 'assets/fonts/optimer_regular.typeface.json', font => {
    levelFont = font;
});
/**
 * @class
 * Keeps track of all things level related.
 */
export class LevelHandler {
    /**
     * Keeps track of player's current level
     */
    private currentLevel: number = 1;
    /**
     * Prevents other things from moving if level display is animating a new level.
     */
    private isLevelAnimating: boolean = true;
    /**
     * The loaded font, used for the level display.
     */
    private levelColor: Color;
    /**
     * Reference to the scene, used to remove projectile from rendering cycle once destroyed.
     */
    private scene: Scene;
    /**
     * Controls size and shape of the level display
     */
    private scoreGeometry: TextGeometry;
    /**
     * Controls the color of the level display material
     */
    private scoreMaterial: MeshLambertMaterial;
    /**
     * Controls the overall rendering of the level display
     */
    private score: Mesh;
    /**
     * Constructor for the LevelHandler class
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @hidden
     */
    constructor(scene: Scene) {
        do {
            const colorHex = randomColor();
            if (this.checkColorBrighness(colorHex)) {
                this.levelColor = new Color(colorHex);
                break;
            }
        } while(true);
        this.scene = scene;
        this.scoreMaterial = new MeshLambertMaterial( {color: this.levelColor} );
        if (levelFont) {
            this.scoreGeometry = new TextGeometry(`Level: ${this.currentLevel.toFixed(0)}`,
                {
                    font: levelFont,
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
            this.score.position.z = 5;
            this.score.rotation.x = -1.3708;
        }
        scene.add(this.score);
    }
    /**
     * Makes sure hex is a valid color string.
     * @param colorHex hex value of the color that needs verification.
     * @return TRUE is a color of valid brightness | FALSE is too dark.
     */
    checkColorBrighness(colorHex: string): boolean {
        if (!colorHex.match(/#{1}[A-Fa-f0-9]{6}/)) {
            return false;
        }
        const c = colorHex.substring(1);
        const rgb = parseInt(c, 16);
    
        const redBits = 16;
        const greenBits = 8;
        const mask = 0xff;
        const r = (rgb >> redBits) & mask;
        const g = (rgb >> greenBits) & mask;
        const b = (rgb >> 0) & mask;
    
        // per ITU-R BT.709
        const lumaRedMod = 0.2126;
        const lumaGreenMod = 0.7152;
        const lumaBlueMod = 0.0722;
        const luma = lumaRedMod * r + lumaGreenMod * g + lumaBlueMod * b;
    
        const minBrightness = 40;
        if (luma < minBrightness) {
            return false;
        } else {
            return true;
        }
    }
    /**
     * At the end of each loop iteration, score updates with time increase.
     */
    endCycle(): void {
        if (levelFont && !this.score) {
            // Only remove score if it was added before.
            if (this.score) this.scene.remove(this.score);
            // Added before or not, make a new one and add it.
            // Sadly TextGeometries must be removed and added whenever the text content changes.
            this.scoreGeometry = new TextGeometry(`Level: ${this.currentLevel.toFixed(0)}`,
                {
                    font: levelFont,
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
            this.score.position.z = 5;
            this.score.rotation.x = -1.3708;
            this.scene.add(this.score);
        }
    }
    /**
     * Returns the current level's color'.
     */
    getColor() {
        return this.levelColor;
    }
    /**
     * Returns the current level player is on.
     */
    getLevel() {
        return this.currentLevel;
    }
    /**
     * Increases currentLevel by one, and runs the new level display animation.
     */
    nextLevel(): void {
        this.currentLevel++;
        this.isLevelAnimating = true;
        do {
            const colorHex = randomColor();
            if (this.checkColorBrighness(colorHex)) {
                this.levelColor = new Color(colorHex);
                break;
            }
        } while(true);
        // TODO: Run new level animation
        this.isLevelAnimating = false;
    }
}