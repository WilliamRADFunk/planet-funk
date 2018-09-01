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
    funkGeometry: SphereGeometry;
    /**
     * Controls the color of the planet material
     */
	funkMaterial: MeshPhongMaterial;
    /**
     * Controls the overall rendering of the planet
     */
    funk: Mesh;
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
        this.funk.rotation.set(0, 0, 0);
        this.funk.name = "Planet";
    }
    /**
     * Adds planet object to the three.js scene
     */
    addToScene(scene: Scene): void {
        scene.add(this.funk);
    }
    /**
     * Getter for status of the planet's four populated quadrants. True = Alive | False = Dead
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
     * Removes planet object from the three.js scene
     */
    removeFromScene(scene: Scene): void {
        scene.remove(this.funk);
    }
    /**
     * Spins planet at its set rate
     */
    rotate(): void {
        this.funk.rotateY(-0.001);
    }
}