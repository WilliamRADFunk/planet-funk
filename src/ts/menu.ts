import {
    DoubleSide,
    Font,
    Mesh,
    MeshBasicMaterial,
    MeshLambertMaterial,
    PlaneGeometry,
    PointLight,
    Scene,
    TextGeometry,
    Object3D, 
    TextGeometryParameters} from 'three';

/**
 * @class
 * Keeps track of all things menu related.
 */
export class Menu {
    /**
     * Controls the background click surface of buttons.
     */
    private clickMaterial: MeshBasicMaterial;
    /**
     * Easy, Medium, Hard, Hardcore
     */
    private difficultyLevel: number = 3; // Hardcore
    /**
     * Controls the overall rendering of the copyright display
     */
    private copyright: Mesh;
    /**
     * Controls size and shape of the copyright text
     */
    private copyrightGeometry: TextGeometry;
    /**
     * Controls the overall rendering of the easy button display
     */
    private easy: Mesh;
    /**
     * Controls size and shape of the easy button text
     */
    private easyGeometry: TextGeometry;
    /**
     * Since most of the text on the menu has same parameters, use one variable.
     */
    private fontDifficultyBtnParams: TextGeometryParameters;
    /**
     * Controls the overall rendering of the hard button display
     */
    private hard: Mesh;
    /**
     * Controls size and shape of the hard button text
     */
    private hardGeometry: TextGeometry;
    /**
     * Controls the overall rendering of the hardcore button display
     */
    private hardcore: Mesh;
    /**
     * Controls size and shape of the hardcore button text
     */
    private hardcoreGeometry: TextGeometry;
    /**
     * Controls the overall rendering of the help button display
     */
    private help: Mesh;
    /**
     * Controls size and shape of the help button text
     */
    private helpGeometry: TextGeometry;
    /**
     * Controls the overall rendering of the load button display
     */
    private load: Mesh;
    /**
     * Controls size and shape of the load button text
     */
    private loadGeometry: TextGeometry;
    /**
     * Controls the color of the load button text material
     */
    private loadMaterial: MeshLambertMaterial;
    /**
     * Controls the overall rendering of the main banner display
     */
    private mainBanner: Mesh;
    /**
     * Controls size and shape of the main banner text
     */
    private mainBannerGeometry: TextGeometry;
    /**
     * Loaded font for menu text.
     */
    private menuFont: Font;
    /**
     * Controls the color of the untouched button display material
     */
    private menuMaterial: MeshLambertMaterial;
    /**
     * Controls the color of the selected button display material
     */
    private menuSelectedMaterial: MeshLambertMaterial;
    /**
     * Controls the overall rendering of the normal button display
     */
    private normal: Mesh;
    /**
     * Controls size and shape of the normal button text
     */
    private normalGeometry: TextGeometry;
    /**
     * Reference to the scene, used to remove and reinstall text geometries.
     */
    private scene: Scene;
    /**
     * Controls the light that give the text its shine.
     */
    private shimmer: PointLight;
    /**
     * Controls the overall rendering of the start button display
     */
    private start: Mesh;
    /**
     * Controls size and shape of the start button text
     */
    private startGeometry: TextGeometry;
    /**
     * Constructor for the Menu class
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param menuFont loaded font to use for menu button text.
     * @hidden
     */
    constructor(scene: Scene, menuFont: Font) {
        this.menuFont = menuFont;
        this.scene = scene;
        this.fontDifficultyBtnParams = {
            font: this.menuFont,
            size: 0.3,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 0.5,
            bevelSegments: 3
        };

        this.shimmer = new PointLight(0x3333FF, 2);
        this.shimmer.position.set(-20, 2, 0);
        this.scene.add(this.shimmer);

        const light = new PointLight(0x3333FF, 1);
        light.position.set(15, 2, 0);
        this.scene.add(light);
        
        this.menuMaterial = new MeshLambertMaterial( {color: 0x00B39F, opacity: 1, transparent: true} );
        this.menuSelectedMaterial = new MeshLambertMaterial( {color: 0xFF3333, opacity: 1, transparent: true} );
        this.loadMaterial = new MeshLambertMaterial( {color: 0x00B39F, opacity: 0.2, transparent: true} );
        this.clickMaterial = new MeshBasicMaterial( {opacity: 0, transparent: true, side: DoubleSide} );
        // Create the start collision layer
        const startBarrierGeometry = new PlaneGeometry( 1.5, 0.8, 0, 0 );
        const startBarrier = new Mesh( startBarrierGeometry, this.clickMaterial );
        startBarrier.name = 'Start';
        startBarrier.position.set(0, 0, -1);
        startBarrier.rotation.set(1.5708, 0, 0);
        this.scene.add(startBarrier);
        // Create the easy collision layer
        const easyBarrierGeometry = new PlaneGeometry( 1.4, 0.8, 0, 0 );
        const easyBarrier = new Mesh( easyBarrierGeometry, this.clickMaterial );
        easyBarrier.name = 'Easy';
        easyBarrier.position.set(-3.2, 0, 0);
        easyBarrier.rotation.set(1.5708, 0, 0);
        this.scene.add(easyBarrier);
        // Create the normal collision layer
        const normalBarrierGeometry = new PlaneGeometry( 1.9, 0.8, 0, 0 );
        const normalBarrier = new Mesh( normalBarrierGeometry, this.clickMaterial );
        normalBarrier.name = 'Normal';
        normalBarrier.position.set(-1.35, 0, 0);
        normalBarrier.rotation.set(1.5708, 0, 0);
        this.scene.add(normalBarrier);
        // Create the hard collision layer
        const hardBarrierGeometry = new PlaneGeometry( 1.4, 0.8, 0, 0 );
        const hardBarrier = new Mesh( hardBarrierGeometry, this.clickMaterial );
        hardBarrier.name = 'Hard';
        hardBarrier.position.set(0.5, 0, 0);
        hardBarrier.rotation.set(1.5708, 0, 0);
        this.scene.add(hardBarrier);
        // Create the hardcore collision layer
        const hardcoreBarrierGeometry = new PlaneGeometry( 2.6, 0.8, 0, 0 );
        const hardcoreBarrier = new Mesh( hardcoreBarrierGeometry, this.clickMaterial );
        hardcoreBarrier.name = 'Hardcore';
        hardcoreBarrier.position.set(2.7, 0, 0);
        hardcoreBarrier.rotation.set(1.5708, 0, 0);
        this.scene.add(hardcoreBarrier);
        // Create the load collision layer
        const loadBarrierGeometry = new PlaneGeometry( 1.5, 0.8, 0, 0 );
        const loadBarrier = new Mesh( loadBarrierGeometry, this.clickMaterial );
        loadBarrier.name = 'Load';
        loadBarrier.position.set(0, 0, 1);
        loadBarrier.rotation.set(1.5708, 0, 0);
        this.scene.add(loadBarrier);
        // Create the help collision layer
        const helpBarrierGeometry = new PlaneGeometry( 1.5, 0.8, 0, 0 );
        const helpBarrier = new Mesh( helpBarrierGeometry, this.clickMaterial );
        helpBarrier.name = 'Help';
        helpBarrier.position.set(0, 0, 2);
        helpBarrier.rotation.set(1.5708, 0, 0);
        this.scene.add(helpBarrier);
        // Main Banner button text
        this.mainBannerGeometry = new TextGeometry(`Planet Funk`,
            {
                font: this.menuFont,
                size: 0.6,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: false,
                bevelThickness: 1,
                bevelSize: 0.5,
                bevelSegments: 3
            });
        this.mainBanner = new Mesh( this.mainBannerGeometry, this.menuSelectedMaterial );
        this.mainBanner.position.set(-3, -0.5, -3);
        this.mainBanner.rotation.x = -1.5708;
        this.scene.add(this.mainBanner);
        // Copyright text
        this.copyrightGeometry = new TextGeometry(`Copyright 2018 Tenacious Teal Games`,
            {
                font: this.menuFont,
                size: 0.2,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: false,
                bevelThickness: 1,
                bevelSize: 0.5,
                bevelSegments: 3
            });
        this.copyright = new Mesh( this.copyrightGeometry, this.menuMaterial );
        this.copyright.position.set(-5.8, -0.5, 5.8);
        this.copyright.rotation.x = -1.5708;
        this.scene.add(this.copyright);
        // Start button text
        this.startGeometry = new TextGeometry(`Start`, this.fontDifficultyBtnParams);
        this.start = new Mesh( this.startGeometry, this.menuMaterial );
        this.start.position.set(-0.7, -0.5, -0.8);
        this.start.rotation.x = -1.5708;
        this.scene.add(this.start);
        // Easy button text
        this.createDifficultyButtons(0, ((this.difficultyLevel === 0) ? this.menuSelectedMaterial : this.menuMaterial), false);
        // Normal button text
        this.createDifficultyButtons(1, ((this.difficultyLevel === 1) ? this.menuSelectedMaterial : this.menuMaterial), false);
        // Hard button text
        this.createDifficultyButtons(2, ((this.difficultyLevel === 2) ? this.menuSelectedMaterial : this.menuMaterial), false);
        // Hardcore button text
        this.createDifficultyButtons(3, ((this.difficultyLevel === 3) ? this.menuSelectedMaterial : this.menuMaterial), false);
        // Load button text
        this.loadGeometry = new TextGeometry(`Load`, this.fontDifficultyBtnParams);
        this.load = new Mesh( this.loadGeometry, this.loadMaterial );
        this.load.position.set(-0.6, -0.5, 1.2);
        this.load.rotation.x = -1.5708;
        this.scene.add(this.load);
        // Help button text
        this.helpGeometry = new TextGeometry(`Help`, this.fontDifficultyBtnParams);
        this.help = new Mesh( this.helpGeometry, this.menuMaterial );
        this.help.position.set(-0.5, -0.5, 2.2);
        this.help.rotation.x = -1.5708;
        this.scene.add(this.help);
    }
    /**
     * Changes difficulty level, and instigates the altering of the button texts associated with that choice.
     * @param diff the selected diffulty choice (0 --> easy, 1 --> normal, 2 --> hard, 3 --> hardcore)
     */
    changeDifficulty(diff: number): void {
        if (diff === this.difficultyLevel) return;
        if (this.difficultyLevel === 3) {
            this.loadMaterial.opacity = 1;
        } else {
            this.loadMaterial.opacity = 0.2;
        }
        this.createDifficultyButtons(this.difficultyLevel, this.menuMaterial, true);
        this.difficultyLevel = diff;
        this.createDifficultyButtons(this.difficultyLevel, this.menuSelectedMaterial, true);
    }
    /**
     * Called to (re)create difficulty menu button text
     * @param buttonIndex   the selected diffulty choice (0 --> easy, 1 --> normal, 2 --> hard, 3 --> hardcore)
     * @param material      the material (color mostly) to use in new text mesh
     * @param removeFirst   to determine if text mesh should first be removed from scene (TRUE --> remove | FALSE --> no remove)
     */
    private createDifficultyButtons(buttonIndex: number, material: MeshLambertMaterial, removeFirst: boolean): void {
        switch(buttonIndex) {
            case 0: {
                if (removeFirst) {
                    this.scene.remove(this.easy);
                }
                // Selected easy button text
                this.easyGeometry = new TextGeometry(`Easy`, this.fontDifficultyBtnParams);
                this.easy = new Mesh( this.easyGeometry, material );
                this.easy.position.set(-3.8, -0.5, 0.20);
                this.easy.rotation.x = -1.5708;
                this.scene.add(this.easy);
                break;
            }
            case 1: {
                if (removeFirst) {
                    this.scene.remove(this.normal);
                }
                // Selected normal button text
                this.normalGeometry = new TextGeometry(`Normal`, this.fontDifficultyBtnParams);
                this.normal = new Mesh( this.normalGeometry, material );
                this.normal.position.set(-2.15, -0.5, 0.20);
                this.normal.rotation.x = -1.5708;
                this.scene.add(this.normal);
                break;
            }
            case 2: {
                if (removeFirst) {
                    this.scene.remove(this.hard);
                }
                // Selected hard button text
                this.hardGeometry = new TextGeometry(`Hard`, this.fontDifficultyBtnParams);
                this.hard = new Mesh( this.hardGeometry, material );
                this.hard.position.set(-0.1, -0.5, 0.20);
                this.hard.rotation.x = -1.5708;
                this.scene.add(this.hard);
                break;
            }
            case 3: {
                if (removeFirst) {
                    this.scene.remove(this.hardcore);
                }
                //  Selected hardcore button text
                this.hardcoreGeometry = new TextGeometry(`Hardcore`, this.fontDifficultyBtnParams);
                this.hardcore = new Mesh( this.hardcoreGeometry, material );
                this.hardcore.position.set(1.55, -0.5, 0.20);
                this.hardcore.rotation.x = -1.5708;
                this.scene.add(this.hardcore);
                break;
            }
            default: {}
        }
    }
    /**
     * Moves the point light from left to right a little every frame.
     */
    endCycle(): void{
        if (this.shimmer.position.x > 20) {
            this.shimmer.position.x = -20
        }
        this.shimmer.position.x += 0.2;
    }
    /**
     * Changes the help menu button text when clicked to signal to user that their click worked.
     */
    pressedHelp(): void {
        this.scene.remove(this.help);
        // Selected help button text
        this.helpGeometry = new TextGeometry(`Help`, this.fontDifficultyBtnParams);
        this.help = new Mesh( this.helpGeometry, this.menuSelectedMaterial );
        this.help.position.set(-0.5, -0.5, 2.2);
        this.help.rotation.x = -1.5708;
        this.scene.add(this.help);
    }
    /**
     * Changes the load menu button text when clicked to signal to user that their click worked (if not hardcore difficulty).
     * @returns TRUE --> valid click, move onto load menu | FALSE --> harcore mode means load is inactive.
     */
    pressedLoad(): boolean {
        if (this.difficultyLevel === 3) {
            return false;
        }
        this.scene.remove(this.load);
        // Selected load button text
        this.loadGeometry = new TextGeometry(`Load`, this.fontDifficultyBtnParams);
        this.load = new Mesh( this.loadGeometry, this.menuSelectedMaterial );
        this.load.position.set(-0.6, -0.5, 1.2);
        this.load.rotation.x = -1.5708;
        this.scene.add(this.load);
        return true;
    }
    /**
     * Changes the start menu button text when clicked to signal to user that their click worked.
     * @returns difficulty level chosen before start was pressed (to be used in game difficulty checks)
     */
    pressedStart(): number {
        this.scene.remove(this.start);
        // Selected start button text
        this.startGeometry = new TextGeometry(`Start`, this.fontDifficultyBtnParams);
        this.start = new Mesh( this.startGeometry, this.menuSelectedMaterial );
        this.start.position.set(-0.7, -0.5, -0.8);
        this.start.rotation.x = -1.5708;
        this.scene.add(this.start);
        return this.difficultyLevel;
    }
    /**
     * Reactivates main menu options.
     * @param returnedFrom helps to distinguish which button had been pressed to leave menu in first place.
     */
    returnToMainMenu(returnedFrom: string): void {
        if (returnedFrom === 'Load') {
            this.scene.remove(this.load);
            // Selected load button text
            this.loadGeometry = new TextGeometry(`Load`, this.fontDifficultyBtnParams);
            this.loadMaterial.opacity = this.difficultyLevel === 3 ? 0.2 : 1;
            this.load = new Mesh( this.loadGeometry, this.loadMaterial );
            this.load.position.set(-0.6, -0.5, 1.2);
            this.load.rotation.x = -1.5708;
            this.scene.add(this.load);
        } else if (returnedFrom === 'Help') {
            this.scene.remove(this.help);
            // Selected help button text
            this.helpGeometry = new TextGeometry(`Help`, this.fontDifficultyBtnParams);
            this.help = new Mesh( this.helpGeometry, this.menuMaterial );
            this.help.position.set(-0.5, -0.5, 2.2);
            this.help.rotation.x = -1.5708;
            this.scene.add(this.help);
        }
        this.createDifficultyButtons(0, this.menuMaterial, true);
        this.createDifficultyButtons(1, this.menuMaterial, true);
        this.createDifficultyButtons(2, this.menuMaterial, true);
        this.createDifficultyButtons(3, this.menuMaterial, true);
        
        this.createDifficultyButtons(this.difficultyLevel, this.menuSelectedMaterial, true);
    }
}