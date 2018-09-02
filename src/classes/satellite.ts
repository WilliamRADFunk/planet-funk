import { BoxGeometry, Color, Mesh, MeshBasicMaterial } from "three";
/**
 * Makes instatiateing the satellite's color by index easier and cleaner to read.
 */
const colorArray: Color[] = [
    new Color(0xF6C123),
    new Color(0xDF3156),
    new Color(0x32FD15),
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
     * Controls size and shape of the satellite body
     */
    private satelliteBodyGeometry: BoxGeometry;
    /**
     * Controls size and shape of the satellite container
     */
    private satelliteContainerGeometry: BoxGeometry;
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
     * Controls the overall rendering of the satellite wings
     */
    private satelliteWings: Mesh;
    /**
     * Constructor for the Satellite class
     * @param index order of creation, used for position 12 o'clock and clockwise, and appearance.
     * @hidden
     */
    constructor(index: number) {
        this.satelliteBodyGeometry = new BoxGeometry(0.1, 0.1, 0.1);
        this.satelliteBodyMaterial = new MeshBasicMaterial({color: colorArray[index-1]});
        this.satelliteBody = new Mesh(this.satelliteBodyGeometry, this.satelliteBodyMaterial);
        // this.satelliteBody.position.set(positionArray[index-1].xb, 0, positionArray[index-1].zb);

        this.satelliteWingsGeometry = new BoxGeometry(positionArray[index-1].xc, 0.001, positionArray[index-1].zc);
        this.satelliteWingsMaterial = new MeshBasicMaterial({color: 0xFFFFFF});
        this.satelliteWings = new Mesh(this.satelliteWingsGeometry, this.satelliteWingsMaterial);
        this.satelliteWings.position.y -= 0.05;

        this.satelliteBody.add(this.satelliteWings);

        this.satelliteContainerGeometry = new BoxGeometry(0.3, 0.3, 0.3);
        this.satelliteContainerMaterial = new MeshBasicMaterial({
            opacity: 0,
            transparent: true
        });
        this.satelliteContainer = new Mesh(this.satelliteContainerGeometry, this.satelliteContainerMaterial);
        this.satelliteContainer.position.set(positionArray[index-1].xb, 0, positionArray[index-1].zb);
        this.satelliteContainer.name = `Satellite ${index}`;

        this.satelliteContainer.add(this.satelliteBody);
    }
    /**
     * Provides the created mesh so it can be added to the mesh of a parent object like the planet.
     * @returns the satellite's mesh
     */
    getMesh() {
        return this.satelliteContainer;
    }
}