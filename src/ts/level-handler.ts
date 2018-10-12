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
     * Tracks which phase of the animation currently in.
     */
    private isBannerExpanding: boolean = true;
    /**
     * Keeps track of player's current level
     */
    private currentLevel: number = 1;
    /**
     * Current banner opacity, which creates the illusion of 'animation'.
     */
    private currentOpacity: number = 0.01;
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
     * Controls size and shape of the banner display
     */
    private bannerGeometry: TextGeometry;
    /**
     * Controls the color of the banner display material
     */
    private bannerMaterial: MeshLambertMaterial;
    /**
     * Controls the overall rendering of the banner display
     */
    private banner: Mesh;
    /**
     * Controls size and shape of the level display
     */
    private levelGeometry: TextGeometry;
    /**
     * Controls the color of the level display material
     */
    private levelMaterial: MeshLambertMaterial;
    /**
     * Controls the overall rendering of the level display
     */
    private level: Mesh;
    /**
     * Flag to distinguish between level banner and game over banner.
     */
    private useLevelBanner: boolean = true;
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
        this.levelMaterial = new MeshLambertMaterial( {color: this.levelColor} );
        if (levelFont) {
            this.createText();
        }
    }
    /**
     * Makes sure hex is a valid color string.
     * @param colorHex hex value of the color that needs verification.
     * @return TRUE is a color of valid brightness | FALSE is too dark.
     */
    private checkColorBrighness(colorHex: string): boolean {
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
     * Creates the text in one place to obey the DRY rule.
     */
    private createBanner(): void {
        let xPos = -2.2;
        let text = `Level: ${this.currentLevel}`;
        if (!this.useLevelBanner) {
            text = 'Game Over';
            xPos = -3.5;
            this.bannerMaterial = new MeshLambertMaterial({
                color: 0xFF0000,
                opacity: this.currentOpacity,
                transparent: true
            });
        } else {
            this.bannerMaterial = new MeshLambertMaterial({
                color: this.levelColor,
                opacity: this.currentOpacity,
                transparent: true
            });
        }
        // Added before or not, make a new one and add it.
        // Sadly TextGeometries must be removed and added whenever the text content changes.
        this.bannerGeometry = new TextGeometry(text,
            {
                font: levelFont,
                size: 1,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: false,
                bevelThickness: 1,
                bevelSize: 0.5,
                bevelSegments: 3
            });
        this.banner = new Mesh( this.bannerGeometry, this.bannerMaterial );
        this.banner.position.x = xPos;
        this.banner.position.y = 0.5;
        this.banner.position.z = -2;
        this.banner.rotation.x = -1.3708;
        this.scene.add(this.banner);
    }
    /**
     * Creates the text in one place to obey the DRY rule.
     */
    private createText(): void {
        // Only remove level if it was added before.
        if (this.level) this.scene.remove(this.level);
        // Added before or not, make a new one and add it.
        // Sadly TextGeometries must be removed and added whenever the text content changes.
        this.levelGeometry = new TextGeometry(`Level: ${this.currentLevel}`,
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
        this.level = new Mesh( this.levelGeometry, this.levelMaterial );
        this.level.position.x = -5.5;
        this.level.position.y = 0.5;
        this.level.position.z = 5.5;
        this.level.rotation.x = -1.3708;
        this.scene.add(this.level);
    }
    /**
     * At the end of each loop iteration, level updates with time increase.
     */
    endCycle(): void {
        if (levelFont && !this.level) {
            this.createText();
        }
    }
    /**
     * Lets LevelHandler know the game is over, and to use the Game Over banner.
     */
    endGame(): void {
        this.useLevelBanner = false;
        this.isLevelAnimating = true;
    }
    /**
     * Returns the current level's color'.
     * @returns current color to use for the level dependent objects.
     */
    getColor(): Color {
        return this.levelColor;
    }
    /**
     * Returns the current level player is on.
     * @returns the current level player is on.
     */
    getLevel(): number {
        return this.currentLevel;
    }
    /**
     * Returns animating state of level.
     * @returns TRUE if level banner is still animating | FALSE if not.
     */
    isAnimating(): boolean {
        return this.isLevelAnimating;
    }
    /**
     * Increases currentLevel by one, and runs the new level display animation.
     */
    nextLevel(): void {
        this.currentLevel++;
        do {
            const colorHex = randomColor();
            if (this.checkColorBrighness(colorHex)) {
                this.levelColor = new Color(colorHex);
                break;
            }
        } while(true);
        this.levelMaterial = new MeshLambertMaterial( {color: this.levelColor} );
        this.level.visible = false;
        this.isLevelAnimating = true;
    }
    /**
     * Fades level banner in and out before resuming play.
     */
    runAnimationCycle(): boolean {
        // If the font hasn't loaded yet, don't force it to create.
        if (!levelFont) return;
        // Only if loadFont is ready and banner hasn't been already created.
        if (!this.banner) this.createBanner();
        // Normal fade in and fade out movements ofr animation until done (if not infinite loop).
        if (this.isBannerExpanding) {
            if (this.currentOpacity >= 1) {
                this.isBannerExpanding = false;
                this.createText();
                return true;
            } else this.currentOpacity += 0.01;
            this.bannerMaterial.opacity = this.currentOpacity;
        } else {
            if (this.currentOpacity <= 0) {
                this.isBannerExpanding = true;
                // Game Over keeps flashing | New Level doesn't
                if (this.useLevelBanner) {
                    this.isLevelAnimating = false;
                    this.scene.remove(this.banner);
                    this.banner = null;
                }
            } else {
                this.currentOpacity -= 0.01;
                this.bannerMaterial.opacity = this.currentOpacity;
            }
        }
    }
}