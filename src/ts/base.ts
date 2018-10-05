import {
    BoxGeometry,
    Color,
    ImageUtils,
    LinearFilter,
    Mesh,
    MeshPhongMaterial,
    Scene,
    Vector3 } from 'three';

import { Collidable } from './collidable';
import { CollisionatorSingleton } from './collisionator';
/**
 * Makes instatiateing the base's texture by index easier and cleaner to read.
 */
const textureArray: string[] = [
    'assets/images/building1.png',
    'assets/images/building2.png',
    'assets/images/building3.png',
    'assets/images/building4.png'
];
/**
 * Makes instatiateing the base's position by index easier and cleaner to read.
 */
const positionArray: {ry: number; xb: number; zb: number;}[] = [
    {xb: 0.49, zb: -0.49, ry: -0.785398},
    {xb: 0.49, zb: 0.49, ry: -2.35619},
    {xb: -0.49, zb: 0.49, ry: 2.35619},
    {xb: -0.49, zb: -0.49, ry: 0.785398}
];
/**
 * @class
 * Planetary base that player must defend.
 */
export class Base implements Collidable{
    /**
     * Controls size and shape of the base
     */
    private buildingGeometry: BoxGeometry;
    /**
     * Controls size and shape of the destroyed base
     */
    private buildingDeadGeometry: BoxGeometry;
    /**
     * Controls the color of the base material
     */
    private buildingMaterial: MeshPhongMaterial;
    /**
     * Controls the color of the destroyed base material
     */
    private buildingDeadMaterial: MeshPhongMaterial;
    /**
     * Controls the overall rendering of the base
     */
    private building: Mesh;
    /**
     * Controls the overall rendering of the destroyed base
     */
    private buildingDead: Mesh;
    /**
     * Keeps track of planet's rotation to help calc satellite's position.
     */
    private currentRotation: number;
    /**
     * Number in the creation order. Needed later to scale energy bar.
     */
    private index: number;
    /**
     * Flag to signal if base has been destroyed or not. True = not destroyed. False = destroyed.
     */
    private isActive: boolean = true;
    /**
     * Constructor for the Base class
     * @param index order of creation, used for position 1/2 o'clock and clockwise, and appearance.
     * @hidden
     */
    constructor(index: number) {
        this.index = index;
        // Creates the bright, still alive, portion of the populated area.
        this.buildingGeometry = new BoxGeometry(0.5, 0.0001, 0.5);
        this.buildingMaterial = new MeshPhongMaterial();
        this.buildingMaterial.map = ImageUtils.loadTexture(textureArray[index-1]);
        this.buildingMaterial.map.minFilter = LinearFilter;
        this.buildingMaterial.shininess = 0;
        this.buildingMaterial.transparent = true;
        this.building = new Mesh(this.buildingGeometry, this.buildingMaterial);
        this.building.rotation.set(0, positionArray[index-1].ry, 0);
        this.building.position.set(positionArray[index-1].xb, 0.0001, positionArray[index-1].zb);
        this.building.name = `Base-${index}`;
        // Creates the dull, dead portion of the populated area. Initially not visible.
        this.buildingDeadGeometry = new BoxGeometry(0.5, 0.0001, 0.5);
        this.buildingDeadMaterial = new MeshPhongMaterial();
        this.buildingDeadMaterial.map = ImageUtils.loadTexture(textureArray[index-1]);
        this.buildingDeadMaterial.map.minFilter = LinearFilter;
        this.buildingDeadMaterial.specularMap = ImageUtils.loadTexture('assets/images/funkspec1k.jpg');
		this.buildingDeadMaterial.specularMap.minFilter = LinearFilter;
        this.buildingDeadMaterial.specular  = new Color(0x333333);
        this.buildingDeadMaterial.shininess = 0;
        this.buildingDeadMaterial.transparent = true;
        this.buildingDeadMaterial.opacity = 0.2;
        this.buildingDead = new Mesh(this.buildingDeadGeometry, this.buildingDeadMaterial);
        this.buildingDead.rotation.set(0, positionArray[index-1].ry, 0);
        this.buildingDead.position.set(positionArray[index-1].xb, 0.0001, positionArray[index-1].zb);
        this.buildingDead.visible = false;
    }
    /**
     * Adds base object to the three.js scene
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     */
    addToScene(scene: Scene): void {
        scene.add(this.building);
        scene.add(this.buildingDead);
    }
    /**
     * At the end of each loop iteration, base updates planet's known rotation.
     * @param rotation of planet to base current position off of.
     */
    endCycle(rotation: number): void {
        this.currentRotation = rotation;
    }
    /**
     * Gets the viability of the base.
     * @returns flag to signal non-destruction. True = not destroyed. False = destroyed.
     */
    getActive(): boolean {
        return this.isActive;
    }
    /**
     * Gets the current radius of the bounding box (circle) of the collidable.
     * @returns number to represent pixel distance from object center to edge of bounding box.
     */
    getCollisionRadius(): number {
        return 0.20;
    }
    /**
     * Gets the current position of the base.
     * @returns the array is of length 2 with x coordinate being first, and then z coordinate.
     */
    getCurrentPosition(): number[] {
        const position = new Vector3();
        position.setFromMatrixPosition( this.building.matrixWorld );
        return [position.x, position.z];
    }
    /**
     * Provides the created mesh so it can be added to the mesh of a parent object like the planet.
     * @returns the base's alive and dead meshes
     */
    getMeshes(): Mesh[] {
        return [this.building, this.buildingDead];
    }
    /**
     * Gets the name of the base.
     * @returns the name of the base.
     */
    getName(): string {
        return this.building.name;
    }
    /**
     * Called when something collides with base, which destroys it.
     * @param self the thing to remove from collidables...and scene.
     * @returns whether or not impact means removing item from the scene.
     */
    impact(self: Collidable): boolean {
        if (this.isActive) {
            this.isActive = false;
            this.building.visible = false;
            this.buildingDead.visible = true;
            CollisionatorSingleton.remove(self);
        }
        return false;
    }
    /**
     * States it is a passive type or not. Two passive types cannot colllide with each other.
     * @returns True is passive | False is not passive
     */
    isPassive(): boolean {
        return true;
    }
}