import { Color, ImageUtils, LinearFilter, Mesh, MeshPhongMaterial, Scene, SphereGeometry } from 'three';
interface PlanetStatus {
    quadrantBlue: boolean;
    quadrantGreen: boolean;
    quadrantPurple: boolean;
    quadrantYellow: boolean;
}
export class Planet {
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