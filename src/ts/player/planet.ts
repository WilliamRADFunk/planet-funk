import {
    Color,
    LinearFilter,
    Mesh,
    MeshPhongMaterial,
    Scene,
    SphereGeometry,
    Texture,
    Vector3 } from 'three';

import { Satellite } from './satellite';
import { Base } from './base';
import { Collidable } from '../collidable';
import { CollisionatorSingleton } from '../collisionator';
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
export class Planet implements Collidable {
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
     * Iterable list of the bases.
     */
    private bases: Base[];
    /**
     * Keeps track of proper rotation amount to avoid the weird quarter rotation reset cycle.
     */
    private currentRotation: number = 0;
    /**
     * Holds onto texture for dead planet until game over.
     */
    private deadPlanetTexture: Texture;
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
     * Flag to signal if player has been defeated or not.
     * True = not defeated. False = defeated.
     */
    private isActive: boolean = true;
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
     * Satellite that starts at 3 o'clock
     */
    private satellite1: Satellite;
    /**
     * Satellite that starts at 6 o'clock
     */
    private satellite2: Satellite;
    /**
     * Satellite that starts at 9 o'clock
     */
    private satellite3: Satellite;
    /**
     * Satellite that starts at 12 o'clock
     */
    private satellite4: Satellite;
    /**
     * Satellite array for ease of selection
     */
    private satellites: Satellite[] = [];
    /**
     * Starting position.
     */
    private startPosition: [number, number, number] = [0, 0, 0];
    /**
     * Constructor for the Planet class
     * @param startPosition allows creation of planet in a variable location (help screen mostly)
     * @hidden
     */
    constructor(startPosition?: [number, number, number]) {
        if (startPosition) {
            this.startPosition = startPosition;
        }
    }
    /**
     * Adds planet object to the three.js scene.
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     */
    addToScene(scene: Scene, planetTextures: Texture[], buildtexture: Texture[], specMap: Texture): void {
        this.constructPlanet(planetTextures, specMap);
        this.constructSatellites();
        this.constructBases(buildtexture, specMap);
        scene.add(this.funk);
    }
    /**
     * Builds the four bases player must protect.
     * @param buildtexture textures for the buildings
     * @param specMap textures for the dead buildings
     */
    constructBases(buildtexture: Texture[], specMap: Texture) {
        // Build the planet's four populated bases, and
        // attach the alive and dead meshes to make orbit a simple thing.
        this.base1 = new Base(1, buildtexture[0], specMap);
        let meshes = this.base1.getMeshes();
        this.funk.add(meshes[0]);
        this.funk.add(meshes[1]);
        CollisionatorSingleton.add(this.base1);
        this.base2 = new Base(2, buildtexture[1], specMap);
        meshes = this.base2.getMeshes();
        this.funk.add(meshes[0]);
        this.funk.add(meshes[1]);
        CollisionatorSingleton.add(this.base2);
        this.base3 = new Base(3, buildtexture[2], specMap);
        meshes = this.base3.getMeshes();
        this.funk.add(meshes[0]);
        this.funk.add(meshes[1]);
        CollisionatorSingleton.add(this.base3);
        this.base4 = new Base(4, buildtexture[3], specMap);
        meshes = this.base4.getMeshes();
        this.funk.add(meshes[0]);
        this.funk.add(meshes[1]);
        CollisionatorSingleton.add(this.base4);
        this.bases = [this.base1, this.base2, this.base3, this.base4];
    }
    /**
     * Builds the player's planet.
     * @param planetTextures textures for the planet
     * @param specMap textures for the dead planet
     */
    constructPlanet(planetTextures: Texture[], specMap: Texture) {
        // The Planet: its water, landmasses, and textured elevations.
		this.funkGeometry = new SphereGeometry(0.5, 32, 32);
        this.funkMaterial = new MeshPhongMaterial();
        this.funkMaterial.map = planetTextures[0];
        this.funkMaterial.map.minFilter = LinearFilter;
		this.funkMaterial.bumpMap = planetTextures[1];
		this.funkMaterial.bumpMap.minFilter = LinearFilter;
        this.funkMaterial.bumpScale = 0.02;
        this.funkMaterial.specularMap = specMap;
		this.funkMaterial.specularMap.minFilter = LinearFilter;
		this.funkMaterial.specular  = new Color(0xFFFFFF);
        this.funkMaterial.shininess = 10;
        this.funk = new Mesh(this.funkGeometry, this.funkMaterial);
        this.funk.position.set(this.startPosition[0], this.startPosition[1], this.startPosition[2]);
        this.funk.rotation.set(0, -1.57079644, 0);
        this.funk.name = 'Planet';
        this.deadPlanetTexture = planetTextures[2];
    }
    /**
     * Builds the player's four defensive satellites.
     */
    constructSatellites() {
        // Build the planet's four defensive satellite weapons, and
        // attach the meshes to make orbit a simple thing.
        this.satellite1 = new Satellite(1);
        this.satellites.push(this.satellite1);
        this.funk.add(this.satellite1.getMesh());
        CollisionatorSingleton.add(this.satellite1);
        this.satellite2 = new Satellite(2);
        this.satellites.push(this.satellite2);
        this.funk.add(this.satellite2.getMesh());
        CollisionatorSingleton.add(this.satellite2);
        this.satellite3 = new Satellite(3);
        this.satellites.push(this.satellite3);
        this.funk.add(this.satellite3.getMesh());
        CollisionatorSingleton.add(this.satellite3);
        this.satellite4 = new Satellite(4);
        this.satellites.push(this.satellite4);
        this.funk.add(this.satellite4.getMesh());
        CollisionatorSingleton.add(this.satellite4);
    }
    /**
     * At the end of each loop iteration, satellite regains a little energy.
     */
    endCycle(): void {
        this.rotate();
        for (let i = 0; i < this.satellites.length; i++) {
            this.satellites[i].endCycle(this.funk.rotation.y);
        }
        for (let j = 0; j < this.bases.length; j++) {
            this.bases[j].endCycle(this.funk.rotation.y);
        }
        if (this.isActive) {
            this.quadrantBlue = this.base1.getActive();
            this.quadrantGreen = this.base2.getActive();
            this.quadrantPurple = this.base3.getActive();
            this.quadrantYellow = this.base4.getActive();
            this.isActive = this.quadrantBlue || this.quadrantGreen || this.quadrantPurple || this.quadrantYellow;
            if (!this.isActive) {
                // Game over...Show dead planet.
                this.funkMaterial.map = this.deadPlanetTexture;
                this.funkMaterial.needsUpdate = true;
                // Game over...Blow 'em up!
                for (let i = 0; i < this.satellites.length; i++) {
                    this.satellites[i].impact(this.satellites[i]);
                }
            }
        }
    }
    /**
     * If it's determined that player wanted to fire a weapon, find closest charged satellite to click point,
     * and instruct it to launch the projectile.
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param point point with x,z coordinates where player click mouse on game area.
     */
    fire(scene: Scene, point: Vector3): void {
        if (this.isActive) {
            const distancesToTarget: number[] = [];
            for (let i = 0; i < 4; i++) {
                distancesToTarget.push(this.satellites[i].getDistanceToTarget(point, this.funk.rotation.y));
            }
            const indexOfMinValue = distancesToTarget.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
            this.satellites[indexOfMinValue].fire(scene, point);
        }
    }
    /**
     * Gets the viability of the planet, which will always be true..
     * @returns flag to signal non-destruction. True = not destroyed. False = destroyed.
     */
    getActive(): boolean {
        return true;
    }
    /**
     * Gets the current radius of the bounding box (circle) of the collidable.
     * @returns number to represent pixel distance from object center to edge of bounding box.
     */
    getCollisionRadius(): number {
        return 0.4;
    }
    /**
     * Gets the current position of the planet.
     * @returns the array is of length 2 with x coordinate being first, and then z coordinate.
     */
    getCurrentPosition(): number[] {
        return [0, 0];
    }
    /**
     * Gets the name of the planet.
     * @returns the name of the planet.
     */
    getName(): string {
        return this.funk.name;
    }
    /**
     * Called when something collides with asteroid, which destroys it.
     * @param self the thing to remove from collidables...and scene.
     * @returns whether or not impact means removing item from the scene.
     */
    impact(self: Collidable): boolean {
        return false;
    }
    /**
     * Getter for recharge of planet shield rate.
     * @returns percentage of productivity the remaining quadrants can produce for shields.
     */
    getPowerRegenRate(): number {
        if (!this.isActive) return -5;
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
            quadrantBlue: this.quadrantBlue,
            quadrantGreen: this.quadrantGreen,
            quadrantPurple: this.quadrantPurple,
            quadrantYellow: this.quadrantYellow,
        };
    }
    /**
     * States it is a passive type or not. Two passive types cannot colllide with each other.
     * @returns True is passive | False is not passive
     */
    isPassive(): boolean {
        return true;
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
    private rotate(): void {
        const twoPi = 2 * Math.PI;
        this.currentRotation += 0.001;
        if (this.currentRotation >= twoPi) {
            this.currentRotation -= twoPi
        }
        this.funk.rotation.set(0, this.currentRotation, 0);
    }
}