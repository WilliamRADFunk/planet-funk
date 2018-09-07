import { CircleGeometry, ImageUtils, LinearFilter, Mesh, MeshPhongMaterial, Scene } from "three";

import { Collidable } from "./collidable";

let index: number = 0;

/**
 * @class
 * Slow moving debris object that is sometimes on the path towards planet.
 */
export class Asteroid implements Collidable {
    /**
     * Flag to signal if asteroid has been destroyed or not.
     * True = not destroyed. False = destroyed.
     */
    private isActive: boolean = true;
    /**
     * Controls size and shape of the asteroid
     */
    private asteroidGeometry: CircleGeometry;
    /**
     * Controls the color of the asteroid material
     */
	private asteroidMaterial: MeshPhongMaterial;
    /**
     * Controls the overall rendering of the asteroid
     */
    private asteroid: Mesh;
    /**
     * Constructor for the Asteroid class
     * @param x coordinate on x-axis where asteroid should instantiate.
     * @param z coordinate on z-axis where asteroid should instantiate.
     * @hidden
     */
    constructor(x:number, z: number) {
        index++;
        // The Planet: its water, landmasses, and textured elevations.
		this.asteroidGeometry = new CircleGeometry(0.2, 16, 16);
        this.asteroidMaterial = new MeshPhongMaterial();
        this.asteroidMaterial.map = ImageUtils.loadTexture('assets/images/asteroid.png');
        this.asteroidMaterial.map.minFilter = LinearFilter;
        this.asteroidMaterial.shininess = 0;
        this.asteroidMaterial.transparent = true;
        this.asteroid = new Mesh(this.asteroidGeometry, this.asteroidMaterial);
        this.asteroid.position.set(x, -1, z);
        this.asteroid.rotation.set(-1.5708, 0, 0);
        this.asteroid.name = `Asteroid-${index}`;
    }
    /**
     * Adds asteroid object to the three.js scene.
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     */
    addToScene(scene: Scene): void {
        scene.add(this.asteroid);
    }
    /**
     * Gets the viability of the object.
     * @returns flag to signal non-destruction. True = not destroyed. False = destroyed.
     */
    getActive(): boolean {
        return this.isActive;
    }
    /**
     * Gets the current position of the collidable object.
     * @returns the array is of length 2 with x coordinate being first, and then z coordinate.
     */
    getCurrentPosition(): number[] {
        return [this.asteroid.position.x, this.asteroid.position.z];
    }
    /**
     * Called when something collides with asteroid, which destroys it.
     */
    impact(): void {
        if (this.isActive) {
            console.log('kaboom!');
            this.isActive = false;
            this.asteroid.visible = false;
        }
    }
}