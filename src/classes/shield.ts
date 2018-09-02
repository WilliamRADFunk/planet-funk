import {
    Color,
    CylinderGeometry,
    Mesh,
    MeshBasicMaterial,
    MeshStandardMaterial,
    Object3D,
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
     * Container for the shield energy meter.
     */
    private energyBars: Object3D;
    /**
     * Amount of power in the shield.
     */
    private energyLevel: number = 1000;
    /**
     * Keeps track of previous energy bar color (if same, no need to update material colors).
     */
    private lastEnergyBarColor: string = 'green';
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
     * Controls size and shape of the energy meter
     */
    private timeGeometry: CylinderGeometry;
    /**
     * Controls the color of the energy meter material
     */
    private timeMaterial: MeshBasicMaterial;
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
            opacity: 0.65,
            roughness: 0,
            transparent: true
        });
        this.shield = new Mesh(this.shieldGeometry, this.shieldMaterial);
        this.shield.name = "Shield";

        this.energyBars = new Object3D();
		this.timeGeometry = new CylinderGeometry(0.03, 0.03, 0.001, 10, 10, false);
		this.timeMaterial = new MeshBasicMaterial({color: 0x32BD15});
		for(var i = 0; i < 60; i++)
		{
			const minuteTick = new Mesh(this.timeGeometry, this.timeMaterial.clone());
			const x_coord = 1 * Math.cos( i * (Math.PI / 30) );
			const z_coord = 1 * Math.sin( i * (Math.PI / 30) );
			minuteTick.position.set(x_coord, 0, z_coord);
			this.energyBars.add(minuteTick);
        }
    }
    /**
     * If shield is down, and player has enough energy, this turns the shield on.
     */
    activate() {
        if (!this.isActive && this.energyLevel > 500) {
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
        scene.add(this.energyBars);
        scene.add(this.shield);
    }
    /**
     * If shield is up, this turns the shield off.
     */
    deactivate() {
        if (this.isActive) {
            console.log(`Shields down, Captain!`);
            this.shield.visible = false;
        }
        this.isActive = false;
    }
    /**
     * At the end of each loop iteration, planet expends energy if the shield is up,
     * and regains it by a percentage depending on how many planet quadrant are intact.
     * @param percentRecharge 0.25, 0.5, 0.75, 1 to be multipled against shield energy recharge amount
     */
    endCycle(percentRecharge: number) {
        // Add or substrat energy depending on state of shield.
        if (!this.isActive) {
            this.energyLevel += percentRecharge;
        } else {
            this.energyLevel -= 1.5;
        }
        // Ensure energy level doesn't creep below min, or above max.
        if (this.energyLevel > 1000) {
            this.energyLevel = 1000;
        } else if (this.energyLevel < 0) {
            this.energyLevel = 0;
        }
        // Update graphics of the energy bar.
        this.updateEnergyBars();
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
            this.energyLevel -= 250;
        }
    }
    /**
     * Changes the size and color of the energy bar.
     */
    updateEnergyBars() {
        const percentOfFull: number = this.energyLevel / 1000;
        const pelletsToShow: number = Math.floor(percentOfFull * 60);
        let color: number;
        if (percentOfFull >= 0.5) {
            if (this.lastEnergyBarColor !== 'green') {
                color = 0x32BD15;
                this.lastEnergyBarColor = 'green';
            }
        } else if (percentOfFull >= 0.2) {
            if (this.lastEnergyBarColor !== 'yellow') {
                color = 0xF6C123;
                this.lastEnergyBarColor = 'yellow';
            }
        } else {
            if (this.lastEnergyBarColor !== 'red') {
                color = 0xDF3156;
                this.lastEnergyBarColor = 'red';
            }
        }
        for (let i = 0; i < this.energyBars.children.length; i++) {
            if (i <= pelletsToShow) {
                (this.energyBars.children[i] as any).material.visible = true;
            } else {
                (this.energyBars.children[i] as any).material.visible = false;
                continue;
            }
            if (color) {
                (this.energyBars.children[i] as any).material.color.setHex(color);
            }
        }
    }
}