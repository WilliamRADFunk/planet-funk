import { Color, ImageUtils, LinearFilter, Mesh, MeshPhongMaterial, Scene, SphereGeometry } from 'three';

import { Satellite } from './satellite';
import { Base } from './base';
/**
 * Simple type to represent status of all four populated areas. Cumulatively equals player's health.
 */
export interface PlanetStatus {
    quadrantBlue: boolean;
    quadrantGreen: boolean;
    quadrantPurple: boolean;
    quadrantYellow: boolean;
}
/**
 * @class
 * Planet that represents player's unit in the game. It dies, player loses.
 */
export class Planet {
    /**
     * Base that starts at 1/2 o'clock
     */
    private base1: Base;
    /**
     * Base that starts at 4/5 o'clock
     */
    private base2: Base;
    /**
     * Base that starts at 7/8 o'clock
     */
    private base3: Base;
    /**
     * Base that starts at 10/11 o'clock
     */
    private base4: Base;
    /**
     * Controls size and shape of the planet
     */
    private funkGeometry: SphereGeometry;
    /**
     * Controls the color of the planet material
     */
	private funkMaterial: MeshPhongMaterial;
    /**
     * Controls the overall rendering of the planet
     */
    private funk: Mesh;
    /**
     * Populated section of the planet. Once hit, false signifies inactive.
     */
    private quadrantBlue: boolean = true;
    /**
     * Populated section of the planet. Once hit, false signifies inactive.
     */
    private quadrantGreen: boolean = true;
    /**
     * Populated section of the planet. Once hit, false signifies inactive.
     */
    private quadrantPurple: boolean = true;
    /**
     * Populated section of the planet. Once hit, false signifies inactive.
     */
    private quadrantYellow: boolean = true;
    /**
     * Satellite that starts at 12 o'clock
     */
    private satellite1: Satellite;
    /**
     * Satellite that starts at 3 o'clock
     */
    private satellite2: Satellite;
    /**
     * Satellite that starts at 6 o'clock
     */
    private satellite3: Satellite;
    /**
     * Satellite that starts at 9 o'clock
     */
    private satellite4: Satellite;
    /**
     * Constructor for the Planet class
     * @hidden
     */
    constructor() {
        // The Planet: its water, landmasses, and textured elevations.
		this.funkGeometry = new SphereGeometry(0.5, 32, 32);
        this.funkMaterial = new MeshPhongMaterial();
        this.funkMaterial.map = ImageUtils.loadTexture('assets/images/funkmap1k_modified.jpg');
        this.funkMaterial.map.minFilter = LinearFilter;
		this.funkMaterial.bumpMap = ImageUtils.loadTexture('assets/images/funkbump1k.jpg');
		this.funkMaterial.bumpMap.minFilter = LinearFilter;
        this.funkMaterial.bumpScale = 0.02;
        this.funkMaterial.specularMap = ImageUtils.loadTexture('assets/images/funkspec1k.jpg');
		this.funkMaterial.specularMap.minFilter = LinearFilter;
		this.funkMaterial.specular  = new Color(0xFFFFFF);
        this.funkMaterial.shininess = 10;
        this.funk = new Mesh(this.funkGeometry, this.funkMaterial);
        this.funk.position.set(0, 0, 0);
        this.funk.name = "Planet";
        // Build the planet's four defensive satellite weapons, and
        // attach the meshes to make orbit a simple thing.
        this.satellite1 = new Satellite(1);
        this.funk.add(this.satellite1.getMesh());
        this.satellite2 = new Satellite(2);
        this.funk.add(this.satellite2.getMesh());
        this.satellite3 = new Satellite(3);
        this.funk.add(this.satellite3.getMesh());
        this.satellite4 = new Satellite(4);
        this.funk.add(this.satellite4.getMesh());
        // Build the planet's four populated bases, and
        // attach the meshes to make orbit a simple thing.
        this.base1 = new Base(1);
        this.funk.add(this.base1.getMesh());
        this.base2 = new Base(2);
        this.funk.add(this.base2.getMesh());
        this.base3 = new Base(3);
        this.funk.add(this.base3.getMesh());
        this.base4 = new Base(4);
        this.funk.add(this.base4.getMesh());

    }
    /**
     * Adds planet object to the three.js scene.
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     */
    addToScene(scene: Scene): void {
        scene.add(this.funk);
    }
    /**
     * Getter for recharge of planet shield rate.
     * @returns percentage of productivity the remaining quadrants can produce for shields.
     */
    getPowerRegenRate(): number {
        let rate = 0;
        if (this.quadrantBlue) {
            rate += 0.25;
        }
        if (this.quadrantGreen) {
            rate += 0.25;
        }
        if (this.quadrantPurple) {
            rate += 0.25;
        }
        if (this.quadrantYellow) {
            rate += 0.25;
        }
        return rate;
    }
    /**
     * Getter for status of the planet's four populated quadrants. True = Alive | False = Dead.
     * @returns an object with the four color-coded quadrants representing life/death of that area.
     */
    getStatus(): PlanetStatus {
        return {
            quadrantBlue: true,
            quadrantGreen: true,
            quadrantPurple: true,
            quadrantYellow: true,
        };
    }
    /**
     * Removes planet object from the three.js scene.
     */
    removeFromScene(scene: Scene): void {
        scene.remove(this.funk);
    }
    /**
     * Spins planet at its set rate.
     */
    rotate(): void {
        this.funk.rotateY(-0.001);
    }
}