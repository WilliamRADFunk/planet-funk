import { BoxGeometry, ImageUtils, LinearFilter, Mesh, MeshPhongMaterial, Scene } from "three";
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
    {xb: 0.48, zb: 0.48, ry: -2.35619},
    {xb: -0.49, zb: 0.49, ry: 2.35619},
    {xb: -0.49, zb: -0.49, ry: 0.785398}
];
/**
 * @class
 * Planetary base that player must defend.
 */
export class Base {
    /**
     * Number in the creation order. Needed later to identify base.
     */
    index: number ;
    /**
     * Controls size and shape of the base
     */
    private buildingGeometry: BoxGeometry;
    /**
     * Controls the color of the base material
     */
    private buildingMaterial: MeshPhongMaterial;
    /**
     * Controls the overall rendering of the base
     */
    private building: Mesh;
    /**
     * Constructor for the Base class
     * @param index order of creation, used for position 1/2 o'clock and clockwise, and appearance.
     * @hidden
     */
    constructor(index: number) {
        this.index = index;

        this.buildingGeometry = new BoxGeometry(0.5, 0.1, 0.5);
        this.buildingMaterial = new MeshPhongMaterial();
        this.buildingMaterial.map = ImageUtils.loadTexture(textureArray[index-1]);
        this.buildingMaterial.map.minFilter = LinearFilter;
        this.buildingMaterial.shininess = 10;
        this.buildingMaterial.transparent = true;
        this.building = new Mesh(this.buildingGeometry, this.buildingMaterial);
        this.building.rotation.set(0, positionArray[index-1].ry, 0);
        this.building.position.set(positionArray[index-1].xb, -0.1, positionArray[index-1].zb);
    }
    /**
     * Adds base object to the three.js scene
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     */
    addToScene(scene: Scene): void {
        scene.add(this.building);
    }
    /**
     * Provides the created mesh so it can be added to the mesh of a parent object like the planet.
     * @returns the base's mesh
     */
    getMesh() {
        return this.building;
    }
}