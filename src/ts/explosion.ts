import { CircleGeometry, Mesh, MeshBasicMaterial, Scene } from "three";

import { Collidable } from "./collidable";

let index: number = 0;

export class Explosion implements Collidable {
    /**
     * Keeps track of how big explosions scale is at moment.
     */
    private currentExplosionScale: number = 1;
    /**
     * Controls size and shape of the explosion
     */
    private explosionGeometry: CircleGeometry;
    /**
     * Controls the color of the explosion material
     */
	private explosionMaterial: MeshBasicMaterial;
    /**
     * Controls the overall rendering of the explosion
     */
    private explosion: Mesh;
    /**
     * Flag to signal if explosion is in its collidable state.
     * True = collidable. False = not collidable.
     */
    private isActive: boolean = true;
    /**
     * Flag to signal if the explosion is expanding/contracting.
     * True is expanding. False is contracting..
     */
    private isExplosionGrowing: boolean = true;
    /**
     * Starting size of the explosion. Usually the size of the thing that went boom.
     */
    private radius: number;
    /**
     * Reference to the scene, used to remove projectile from rendering cycle once destroyed.
     */
    private scene: Scene;
    /**
     * Constructor for the Explosion class
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param x coordinate on x-axis where explosion should instantiate.
     * @param z coordinate on z-axis where explosion should instantiate.
     * @param radius starting size of the explosions, used for collision reference.
     * @param renderedInert if created as result of shield strike, it's not collidable and color is different.
     * @hidden
     */
    constructor(scene: Scene, x:number, z: number, radius: number, renderedInert?: boolean) {
        this.scene = scene;
        this.radius = radius;
        index++;
        this.explosionGeometry = new CircleGeometry(radius, 32);
        this.explosionMaterial = new MeshBasicMaterial({
            color: (!!renderedInert) ? 0x05EDFF : 0xF9A602,
            opacity: 1,
            transparent: true
        });
        this.explosion = new Mesh(this.explosionGeometry, this.explosionMaterial);
        this.explosion.position.set(x, 0.21, z);
        this.explosion.rotation.set(-1.5708, 0, 0);
        this.explosion.name = `explosion-${index}`;
        this.scene.add(this.explosion);
    }
    /**
     * At the end of each loop iteration, expand or contract the explosion a little.
     * @returns whether or not the explosion is done, and should be removed from owner (false).
     */
    endCycle(): boolean {
        if (this.isActive) {
            if (this.isExplosionGrowing) {
                this.currentExplosionScale += 0.02;
                this.explosion.scale.set(this.currentExplosionScale, this.currentExplosionScale, this.currentExplosionScale);
            } else {
                this.currentExplosionScale -= 0.02;
                this.explosionMaterial.opacity = this.currentExplosionScale;
            }
            if (this.isExplosionGrowing && this.currentExplosionScale >= 2) {
                this.currentExplosionScale = 1;
                this.isExplosionGrowing = false;
            } else if (!this.isExplosionGrowing && this.currentExplosionScale <= 0) {
                this.isActive = false;
            }
            return true;
        }
        return false;
    }
    /**
     * Gets the viability of the object.
     * @returns flag to signal non-destruction. True = not destroyed. False = destroyed.
     */
    getActive() {
        return this.isActive;
    }
    /**
     * Gets the current radius of the bounding box (circle) of the collidable.
     * @returns number to represent pixel distance from object center to edge of bounding box.
     */
    getCollisionRadius() {
        return this.explosion.scale.x * this.radius;
    }
    /**
     * Gets the current position of the collidable object.
     * @returns the array is of length 2 with x coordinate being first, and then z coordinate.
     */
    getCurrentPosition() {
        return [this.explosion.position.x, this.explosion.position.z];
    }
    /**
     * Gets the name of the explosion.
     * @returns the name of the explosion.
     */
    getName() {
        return this.explosion.name;
    }
    /**
     * Call to collidable object that it has been struck.
     * @param self the thing to remove from collidables...and scene.
     * @returns whether or not impact means removing item from the scene.
     */
    impact(self: Collidable) {
        return false;
    }
    /**
     * States it is a passive type or not. Two passive types cannot colllide with each other.
     * @returns True is passive | False is not passive
     */
    isPassive() {
        return false;
    }
    /**
     * Returns mesh so it can be removed from scene.
     */
    getMesh(): Mesh {
        return this.explosion;
    }
}