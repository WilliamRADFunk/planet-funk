import {
    BoxGeometry,
    Color,
    Geometry,
    Line,
    LineBasicMaterial, 
    Mesh, 
    MeshBasicMaterial,
    Scene,
    Vector3 } from "three";
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
     * Number in the creation order. Needed later to scale energy bar.
     */
    index: number ;
    /**
     * Flag to signal if satellite has been destroyed or not. True = not destroyed. False = destroyed.
     */
    private isActive: boolean = true;
    /**
     * Amount of energy at the satellite's disposal.
     */
    private energyLevel: number = 1000;
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

        this.satelliteBodyGeometry = new BoxGeometry(0.1, 0.1, 0.1);
        this.satelliteBodyMaterial = new MeshBasicMaterial({color: colorArray[index-1]});
        this.satelliteBody = new Mesh(this.satelliteBodyGeometry, this.satelliteBodyMaterial);

        this.satelliteWingsGeometry = new BoxGeometry(positionArray[index-1].xc, 0.001, positionArray[index-1].zc);
        this.satelliteWingsMaterial = new MeshBasicMaterial({color: 0x555555});
        this.satelliteWings = new Mesh(this.satelliteWingsGeometry, this.satelliteWingsMaterial);
        this.satelliteWings.position.y -= 0.05;

        this.satelliteEnergyGeometry = new BoxGeometry(positionArray[index-1].xc, 0.001, positionArray[index-1].zc);
        this.satelliteEnergyMaterial = new MeshBasicMaterial({color: 0x00FF00});
        this.satelliteEnergy = new Mesh(this.satelliteEnergyGeometry, this.satelliteEnergyMaterial);
        this.satelliteEnergy.position.set(-positionArray[index-1].xb * 0.1, 0, -positionArray[index-1].zb * 0.1);

        this.satelliteBody.add(this.satelliteWings);
        this.satelliteBody.add(this.satelliteEnergy);

        this.satelliteContainerGeometry = new BoxGeometry(0.3, 0.3, 0.3);
        this.satelliteContainerMaterial = new MeshBasicMaterial({
            opacity: 0,
            transparent: true
        });
        this.satelliteContainer = new Mesh(this.satelliteContainerGeometry, this.satelliteContainerMaterial);
        this.satelliteContainer.position.set(positionArray[index-1].xb, 0, positionArray[index-1].zb);
        this.satelliteContainer.name = `satellite${index}`;

        this.satelliteContainer.add(this.satelliteBody);
    }
    /**
     * At the end of each loop iteration, satellite regains a little energy.
     */
    endCycle() {
        if (this.isActive) {
            this.energyLevel += 1;
            this.updateEnergyBar();
        }
    }
    /**
     * If it's determined that this weapon is closest to click point, and it has the power,
     * it will create and launch the projectile, subtract the energy used, and call to update energy bar.
     * @param scene     graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param point     point with x,z coordinates where player click mouse on game area.
     * @param rotaion   parent rotation to calculate proper origin point.
     */
    fire(scene: Scene, point: Vector3, rotation: number) {
        if (this.isActive && this.energyLevel >= 250) {
            // TODO: Create projectile and send it on its way.
            this.energyLevel -= 250;
            this.updateEnergyBar();
        }
        // Get accurate origin point for projectile fire trail.
        const rot = (rotation < 0 && rotation > -1.54) ? rotation : 1.57079644 - rotation;
        const x = (this.satelliteBody.position.x - positionArray[this.index-1].xb) * Math.cos(rot) -
            (this.satelliteBody.position.z - positionArray[this.index-1].zb) * Math.sin(rot) +
            positionArray[this.index-1].xb;
        const y = this.satelliteBody.position.y;
        const z = (this.satelliteBody.position.x - positionArray[this.index-1].xb) * Math.sin(rot) +
        (this.satelliteBody.position.z - (-positionArray[this.index-1].zb)) * Math.cos(rot) +
        positionArray[this.index-1].xb;
        // TODO: Create projectile thing, passing origin and destination to its constructor.
        const geometry = new Geometry();
        geometry.vertices.push(
            new Vector3(x, y-0.2, z),
            new Vector3(point.x, point.y-0.2, point.z));

        const line = new Line(geometry, new LineBasicMaterial({color: colorArray[this.index-1]}));
        scene.add(line);

        setTimeout(() => {
            scene.remove(line);
        }, 5000);
    }
    /**
     * Calculate distance "as the crow flies" from satellite to target.
     * @returns number of pixelsm from satellite to target.
     */
    getDistanceToTarget(targetX: number, targetZ: number): number {
        // TODO: Calculate distance "as the crow flies" from satellite to target. Return number of pixels.
        return 0;
    }
    /**
     * Provides the created mesh so it can be added to the mesh of a parent object like the planet.
     * @returns the satellite's mesh
     */
    getMesh() {
        return this.satelliteContainer;
    }
    /**
     * Called when something collides with satellite, which destroys it.
     */
    impact() {
        if (this.isActive) {
            this.isActive = false;
            (this.satelliteBody.material as any).color.setHex(0x333333);
            this.satelliteEnergy.visible = false;
        }
    }
    /**
     * Changes the size and color of the energy bar.
     */
    updateEnergyBar() {
        // TODO: Scales the energy bar based on energy in store.
        // TODO: Less than 25% should be red. Less than 50% should be yellow. More than 50% should be green.
    }
}