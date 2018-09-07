import {
    CircleGeometry,
    Color,
    Geometry,
    Line,
    LineBasicMaterial,
    Mesh,
    MeshBasicMaterial,
    Scene,
    Vector3 } from "three";
import { Collidable } from "./collidable";
/**
 * @class
 * Projectile that represents missile unit in the game. It hits something, it blows up.
 */
export class Projectile implements Collidable {
    /**
     * Keeps track of how big explosions scale is at moment.
     */
    private currentExplosionScale: number = 1;
    /**
     * Keeps track of the x,z point the missile is at currently.
     */
    private currentPoint: number[];
    /**
     * Tracks the distance traveled thus far to update the calculateNextPoint calculation.
     */
    private distanceTraveled: number;
    /**
     * Keeps track of the x,z point of player's click point.
     */
    private endingPoint: number[];
    /**
     * Flag to signal if the missile has been destroyed.
     * True is not destroyed. False is destroyed.
     */
    private isActive: boolean = true;
    /**
     * Flag to signal if the missile is in explosion mode.
     * True is exploding. False is in motion.
     */
    private isExploding: boolean = false;
    /**
     * Flag to signal if the missile's explosion is expanding/contracting.
     * True is expanding. False is contracting..
     */
    private isExplosionGrowing: boolean = true;
    /**
     * Controls size and shape of the missile's glowing head.
     */
    private headGeometry: CircleGeometry;
    /**
     * Controls the color of the missile's glowing head material.
     */
    private headMaterial: MeshBasicMaterial;
    /**
     * Controls the overall rendering of the glowing head.
     */
    private headMesh: Mesh;
    /**
     * Keeps track of the x,z point where missile fired from.
     */
    private originalStartingPoint: number[];
    /**
     * Reference to the scene, used to remove projectile from rendering cycle once destroyed.
     */
    private scene: Scene;
    /**
     * The speed at which the missile travels.
     */
    private speed: number = 0.03;
    /**
     * Controls size and shape of the missile's fiery trail.
     */
    private tailGeometry: Geometry;
    /**
     * Controls the color of the missile's fiery trail material.
     */
    private tailMaterial: LineBasicMaterial;
    /**
     * Controls the overall rendering of the missile's fiery trail.
     */
    private tailMesh: Line;
    /**
     * The total distance from satellite to player's click point.
     */
    private totalDistance: number;
    /**
     * Constructor for the Projectile class
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param x1    origin point x of where the missile starts.
     * @param z1    origin point z of where the missile starts.
     * @param x2    final point x of where the missile starts.
     * @param z2    final point z of where the missile starts.
     * @param dist  total distance the missile must travel.
     * @param color color of the missile's fiery tail (matches satellite body color from which it came).
     * @hidden
     */
    constructor(scene: Scene, x1: number, z1: number, x2: number, z2: number, dist: number, color: Color) {
        this.scene = scene;
        this.originalStartingPoint = [x1, z1];
        this.currentPoint = [x1, z1];
        this.endingPoint = [x2, z2];
        this.totalDistance = dist;
        this.distanceTraveled = 0;
        // Calculates the first (second vertices) point.
        this.calculateNextPoint();
        // Creates the missile's fiery trail.
        this.tailGeometry = new Geometry();
        this.tailGeometry.vertices.push(
            new Vector3(x1, -0.2, z1),
            new Vector3(this.currentPoint[0], -0.2, this.currentPoint[1]));
        this.tailMaterial = new LineBasicMaterial({color: color});
        this.tailMesh = new Line(this.tailGeometry, this.tailMaterial);
        scene.add(this.tailMesh);
        // Glowing head of the missile.
        this.headGeometry = new CircleGeometry(0.06, 32);
        this.headMaterial = new MeshBasicMaterial({
            color: 0xFF3F34,
            opacity: 1,
            transparent: true
        });
        this.headMesh = new Mesh(this.headGeometry, this.headMaterial);
        this.headMesh.position.set(this.currentPoint[0], 0.21, this.currentPoint[1]);
        this.headMesh.rotation.set(-1.5708, 0, 0);
        scene.add(this.headMesh);
    }
    /**
     * Calculates the next point in the missile's point.
     */
    private calculateNextPoint(): void {
        this.distanceTraveled += this.speed;
        // (xt, yt) = ( ( (1 − t) * x0 + t * x1 ), ( (1 − t) * y0 + t * y1) )
        const t = this.distanceTraveled / this.totalDistance;
        this.currentPoint[0] = ((1 - t) * this.originalStartingPoint[0]) + (t * this.endingPoint[0]);
        this.currentPoint[1] = ((1 - t) * this.originalStartingPoint[1]) + (t * this.endingPoint[1]);
    }
    /**
     * At the end of each loop iteration, move the projectile a little.
     * @returns whether or not the projectile is done, and should be removed from satellite's list.
     */
    endCycle(): boolean {
        if (this.isActive && !this.isExploding) {
            this.calculateNextPoint();
            this.tailGeometry.vertices[1].x = this.currentPoint[0];
            this.tailGeometry.vertices[1].z = this.currentPoint[1];
            this.tailGeometry.verticesNeedUpdate = true;
            this.headMesh.position.set(this.currentPoint[0], -0.2, this.currentPoint[1]);

            if (this.distanceTraveled >= this.totalDistance) {
                this.headMaterial.color.set(new Color(0xF9A602));
                this.isExploding = true;
            }
            return true;
        } else if (this.isActive && this.isExploding) {
            if (this.isExplosionGrowing) {
                this.currentExplosionScale += 0.02;
                this.headMesh.scale.set(this.currentExplosionScale, this.currentExplosionScale, this.currentExplosionScale);
            } else {
                this.currentExplosionScale -= 0.02;
                this.headMaterial.opacity = this.currentExplosionScale;
            }
            if (this.isExplosionGrowing && this.currentExplosionScale >= 4) {
                this.currentExplosionScale = 1;
                this.isExplosionGrowing = false;
            } else if (!this.isExplosionGrowing && this.currentExplosionScale <= 0) {
                this.isActive = false;
            }
            return true;
        }
        this.scene.remove(this.tailMesh);
        this.scene.remove(this.headMesh);
        return false;
    }
    /**
     * Gets the viability of the explosive blast head.
     * @returns flag to signal non-destruction. True = not destroyed. False = destroyed.
     */
    getActive(): boolean {
        return this.isActive;
    }
    /**
     * Gets the current position of the explosive blast head.
     * @returns the array is of length 2 with x coordinate being first, and then z coordinate.
     */
    getCurrentPosition(): number[] {
        return [this.headMesh.position.x, this.headMesh.position.z];
    }
    /**
     * Called when something collides with asteroid, which destroys it.
     */
    impact(): void {}
}