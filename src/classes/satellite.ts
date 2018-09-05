import {
    BoxGeometry,
    Color,
    Mesh, 
    MeshBasicMaterial,
    Scene,
    Vector3 } from "three";
import { Projectile } from "./projectile";
/**
 * Makes instatiateing the satellite's color by index easier and cleaner to read.
 */
const colorArray: Color[] = [
    new Color(0xF6C123),
    new Color(0xDF3156),
    new Color(0x32BD15),
    new Color(0x31E4DE)
];
/**
 * Makes instatiateing the satellite's position by index easier and cleaner to read.
 */
const positionArray: {xb: number; xc: number; zb: number; zc: number;}[] = [
    {xb: 0, zb: -1.25, xc: 0.3, zc: 0.05},
    {xb: 1.25, zb: 0, xc: 0.05, zc: 0.3},
    {xb: 0, zb: 1.25, xc: 0.3, zc: 0.05},
    {xb: -1.25, zb: 0, xc: 0.05, zc: 0.3}
];
/**
 * @class
 * Planetary defense satellite's that player used to fire at incoming threats.
 */
export class Satellite {
    /**
     * When distance is calculated just before firing, this is updated to be used in fire call.
     */
    currentDistance: number;
    /**
     * When origin is calculated just before firing, this is updated to be used in fire call.
     */
    currentOrigin: number[];
    /**
     * Max energy amount
     */
    private energyMax: number = 1000;
    /**
     * Amount of energy at the satellite's disposal.
     */
    private energyLevel: number = this.energyMax;
    /**
     * Number in the creation order. Needed later to scale energy bar.
     */
    index: number ;
    /**
     * Flag to signal if satellite has been destroyed or not.
     * True = not destroyed. False = destroyed.
     */
    private isActive: boolean = true;
    /**
     * Keeps track of live missiles, to pass along endCycle signals, and destroy calls.
     */
    private missiles: Projectile[] = [];
    /**
     * Controls size and shape of the satellite body
     */
    private satelliteBodyGeometry: BoxGeometry;
    /**
     * Controls size and shape of the satellite container
     */
    private satelliteContainerGeometry: BoxGeometry;
    /**
     * Controls size and shape of the satellite energy bar
     */
    private satelliteEnergyGeometry: BoxGeometry;
    /**
     * Controls size and shape of the satellite wings
     */
    private satelliteWingsGeometry: BoxGeometry;
    /**
     * Controls the color of the satellite body material
     */
    private satelliteBodyMaterial: MeshBasicMaterial;
    /**
     * Controls the color of the satellite container material
     */
    private satelliteContainerMaterial: MeshBasicMaterial;
    /**
     * Controls the color of the satellite energy bar material
     */
    private satelliteEnergyMaterial: MeshBasicMaterial;
    /**
     * Controls the color of the satellite wings material
     */
    private satelliteWingsMaterial: MeshBasicMaterial;
    /**
     * Controls the overall rendering of the satellite body
     */
    private satelliteBody: Mesh;
    /**
     * Controls the overall rendering of the satellite container
     */
    private satelliteContainer: Mesh;
    /**
     * Controls the overall rendering of the satellite energy bar
     */
    private satelliteEnergy: Mesh;
    /**
     * Controls the overall rendering of the satellite wings
     */
    private satelliteWings: Mesh;
    /**
     * Constructor for the Satellite class
     * @param index order of creation, used for position 12 o'clock and clockwise, and appearance.
     * @hidden
     */
    constructor(index: number) {
        this.index = index;
        // The square bulk of the satellite
        this.satelliteBodyGeometry = new BoxGeometry(0.1, 0.1, 0.1);
        this.satelliteBodyMaterial = new MeshBasicMaterial({color: colorArray[index-1]});
        this.satelliteBody = new Mesh(this.satelliteBodyGeometry, this.satelliteBodyMaterial);
        // The little fins on the sides of the satellite.
        this.satelliteWingsGeometry = new BoxGeometry(positionArray[index-1].xc, 0.001, positionArray[index-1].zc);
        this.satelliteWingsMaterial = new MeshBasicMaterial({color: 0x555555});
        this.satelliteWings = new Mesh(this.satelliteWingsGeometry, this.satelliteWingsMaterial);
        this.satelliteWings.position.y -= 0.05;
        // The energy meter adjacent to each satellite.
        this.satelliteEnergyGeometry = new BoxGeometry(positionArray[index-1].xc, 0.001, positionArray[index-1].zc);
        this.satelliteEnergyMaterial = new MeshBasicMaterial({color: 0x00FF00});
        this.satelliteEnergy = new Mesh(this.satelliteEnergyGeometry, this.satelliteEnergyMaterial);
        this.satelliteEnergy.position.set(-positionArray[index-1].xb * 0.1, 0, -positionArray[index-1].zb * 0.1);
        // Attaches wings and meter to satellite body for rendering efficiency.
        this.satelliteBody.add(this.satelliteWings);
        this.satelliteBody.add(this.satelliteEnergy);
        // Container for all the pieces of the satellite, to allow them all to be updated at same time.
        this.satelliteContainerGeometry = new BoxGeometry(0.3, 0.3, 0.3);
        this.satelliteContainerMaterial = new MeshBasicMaterial({
            opacity: 0,
            transparent: true
        });
        this.satelliteContainer = new Mesh(this.satelliteContainerGeometry, this.satelliteContainerMaterial);
        this.satelliteContainer.position.set(positionArray[index-1].xb, 0, positionArray[index-1].zb);
        this.satelliteContainer.name = `satellite${index}`;
        // Adds container, and by proxy, all satellite pieces, to the scene.
        this.satelliteContainer.add(this.satelliteBody);
    }
    /**
     * At the end of each loop iteration, satellite regains a little energy.
     */
    endCycle(): void {
        if (this.isActive) {
            this.energyLevel += 1;
            this.updateEnergyBar();
        }
        let tempMissiles = [];
        for (let i = 0; i < this.missiles.length; i++) {
            let missile = this.missiles[i];
            if (missile && !missile.endCycle()) {
                this.missiles[i] = null;
            }
            missile = this.missiles[i];
            if (missile) {
                tempMissiles.push(missile);
            }
        }
        this.missiles = tempMissiles.slice();
        tempMissiles = null;
    }
    /**
     * If it's determined that this weapon is closest to click point, and it has the power,
     * it will create and launch the projectile, subtract the energy used, and call to update energy bar.
     * @param scene         coordinates of game area that player clicked/touched.
     * @param targetPoint   point with x,z coordinates where player click mouse on game area.
     */
    fire(scene: Scene, targetPoint: Vector3): void {
        // Calculates click point from center of planet. If too close, prevent player from committing suicide.
        const xNullStep = targetPoint.x * targetPoint.x;
        const zNullStep = targetPoint.z * targetPoint.z;
        const distFromPlanetCenter = Math.sqrt(xNullStep + zNullStep);
        // Only fire if sat is alive and has adequate power.
        if (this.isActive && this.energyLevel >= 250 && distFromPlanetCenter > 1.4) {
            this.energyLevel -= 250;
            this.updateEnergyBar();
            // Once created, missile will fly itself, detonate itself, and rease itself.
            this.missiles.push(new Projectile(
                scene,
                this.currentOrigin[0],
                this.currentOrigin[1],
                targetPoint.x,
                targetPoint.z,
                this.currentDistance,
                colorArray[this.index-1]));
        }
    }
    /**
     * Calculate distance "as the crow flies" from satellite to target.
     * @param targetPoint   coordinates of game area that player clicked/touched.
     * @param rotation      current rotation amount of planetary body.
     * @returns             number of pixels from satellite to target.
     */
    getDistanceToTarget(targetPoint: Vector3, rotation: number): number {
        // If sat is dead or out of juice, return absurdly high number for distance.
        if (!this.isActive && this.energyLevel < 250) {
            return 1000;
        }
        // If it is alive and has power, perform calculation.
        let x, xb, z, zb, rot, cosRot, sinRot, satNum;
        const satX = this.satelliteBody.position.x;
        const satZ = this.satelliteBody.position.z;
        if (this.index % 2 === 1) {
            rot = -rotation;
            satNum = this.index - 1;
            cosRot = Math.cos(rot);
            sinRot = Math.sin(rot);
            xb = positionArray[satNum].xb;
            zb = positionArray[satNum].zb;
            x = (satX - xb) * cosRot - (satZ + zb) * sinRot + xb;
            z = (satX - xb) * sinRot + (satZ + zb) * cosRot + xb;
        } else {
            rot = -rotation + 1.57079644;
            satNum = this.index - 2;
            cosRot = Math.cos(rot);
            sinRot = Math.sin(rot);
            xb = positionArray[satNum].xb;
            zb = positionArray[satNum].zb;
            x = (satX - xb) * cosRot - (satZ + zb) * sinRot + xb;
            z = (satX - xb) * sinRot + (satZ + zb) * cosRot + xb;
        }
        // If satellite is closest, and it has the energy, this origin point won't need to be recalculated.
        this.currentOrigin = [x, z];
        // d = sqrt{ (x2-x1)^2 + (y2-y1)^2 }
        const xStep = (targetPoint.x - x) * (targetPoint.x - x);
        const zStep = (targetPoint.z - z) * (targetPoint.z - z);
        this.currentDistance = Math.sqrt(xStep + zStep);
        return this.currentDistance;
    }
    /**
     * Provides the created mesh so it can be added to the mesh of a parent object like the planet.
     * @returns the satellite's mesh
     */
    getMesh(): Mesh {
        return this.satelliteContainer;
    }
    /**
     * Called when something collides with satellite, which destroys it.
     */
    impact(): void {
        if (this.isActive) {
            this.isActive = false;
            (this.satelliteBody.material as any).color.setHex(0x333333);
            this.satelliteEnergy.visible = false;
        }
    }
    /**
     * Changes the size and color of the energy bar.
     */
    private updateEnergyBar(): void {
        if (this.energyLevel < 0) {
            this.energyLevel = 0;
        } else if (this.energyLevel > this.energyMax) {
            this.energyLevel = this.energyMax;
        }
        const percentOfTotal = this.energyLevel / this.energyMax;
        const x = positionArray[this.index-1].xc;
        const z = positionArray[this.index-1].zc;
        if (x > z) {
            this.satelliteEnergy.scale.x = percentOfTotal;
        } else {
            this.satelliteEnergy.scale.z = percentOfTotal;
        }
        if (percentOfTotal <= 0.25) {
            this.satelliteEnergyMaterial.color = new Color(0xDF3156);
        } else if (percentOfTotal <= 0.50) {
            this.satelliteEnergyMaterial.color = new Color(0xF6C123);
        } else {
            this.satelliteEnergyMaterial.color = new Color(0x00FF00);
        }
    }
}