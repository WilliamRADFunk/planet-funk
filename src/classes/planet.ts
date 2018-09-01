import { CylinderGeometry, Mesh, MeshBasicMaterial, Scene } from 'three';
interface PlanetStatus {
    quadrantBlue: boolean;
    quadrantGreen: boolean;
    quadrantPurple: boolean;
    quadrantYellow: boolean;
}
export class Planet {
    circleGeo: CylinderGeometry;
	circleMat: MeshBasicMaterial;
	circle: Mesh;
    /**
     * Constructor for the Planet class
     * @hidden
     */
    constructor() {
        this.circleGeo = new CylinderGeometry(1, 1, 0.1, 64);
        this.circleMat = new MeshBasicMaterial({color: 0x00FFFF});
        this.circle = new Mesh(this.circleGeo, this.circleMat);
        this.circle.position.set(0, 0, 0);
        this.circle.name = "Player";
    }
    /**
     * Adds planet object to the three.js scene
     */
    addToScene(scene: Scene): void {
        scene.add(this.circle);
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
     * Adds planet object from the three.js scene
     */
    removeFromScene(scene: Scene): void {
        scene.remove(this.circle);
    }
}