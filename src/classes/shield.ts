import {
    Mesh,
    MeshStandardMaterial,
    Scene,
    SphereGeometry,
    SphericalReflectionMapping,
    TextureLoader } from 'three';

/**
 * @class
 * Transluscent shield that helps protect player's unit (planet)
 */
export class Shield {
    /**
     * Flag to determine if shield is active or not.
     */
    private isActive: boolean = false;
    /**
     * Amount of power in the shield.
     */
    private energyLevel: number = 1000;
    /**
     * Controls size and shape of the shield
     */
    private shieldGeometry: SphereGeometry;
    /**
     * Controls the color of the shield material
     */
	private shieldMaterial: MeshStandardMaterial;
    /**
     * Controls the overall rendering of the shield
     */
    private shield: Mesh;
    /**
     * Constructor for Shield class
     * @hidden
     */
    constructor() {
        this.shieldGeometry = new SphereGeometry(1, 32, 32);
        const envMap = new TextureLoader().load('assets/images/shiny.png');
        envMap.mapping = SphericalReflectionMapping;
        this.shieldMaterial = new MeshStandardMaterial({
            color: 0x05EDFF,
            envMap: envMap,
            opacity: 0.75,
            roughness: 0,
            transparent: true
        });
        this.shield = new Mesh(this.shieldGeometry, this.shieldMaterial);
        this.shield.name = "Shield";
    }
    /**
     * If shield is down, and player has enough energy, this turns the shield on.
     */
    activate() {
        if (!this.isActive && this.energyLevel > 0) {
            console.log(`Shields up, Captain!`);
            this.isActive = true;
            this.shield.visible = true;
        }
    }
    /**
     * Adds shield object to the three.js scene
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     */
    addToScene(scene: Scene): void {
        scene.add(this.shield);
    }
    /**
     * If shield is up, this turns the shield off.
     */
    deactivate() {
        if (this.isActive) {
            console.log(`Shields down, Captain!`);
            this.isActive = false;
            this.shield.visible = false;
        }
    }
    /**
     * At the end of each loop iteration, planet expends energy if the shield is up,
     * and regains it by a percentage depending on how many planet quadrant are intact.
     * @param percentRecharge 0.25, 0.5, 0.75, 1 to be multipled against shield energy recharge amount
     */
    endCycle(percentRecharge: number) {
        if (!this.isActive) {
            this.energyLevel += percentRecharge;
        } else {
            this.energyLevel -= 1;
        }
        // When energy level drops to nill, lower the shield.
        if (this.energyLevel <= 0) {
            this.deactivate();
        }
    }
    /**
     * Returns activity of shield (keeps the actual flag private)
     */
    getIsActive(): boolean {
        return this.isActive;
    }
    /**
     * Called when something collides with shield, which consumes energy.
     */
    impact() {
        if (this.isActive) {
            this.energyLevel -= 50;
        }
    }
}