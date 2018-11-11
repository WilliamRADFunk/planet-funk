import {
    BoxGeometry,
    CircleGeometry,
    Color,
    DoubleSide,
    Font,
    Geometry,
    Line,
    LinearFilter,
    LineBasicMaterial,
    Mesh,
    MeshBasicMaterial,
    MeshLambertMaterial,
    MeshPhongMaterial,
    PlaneGeometry,
    Scene,
    Shape,
    ShapeGeometry,
    TextGeometry,
    TextGeometryParameters,
    Texture,
    Vector3 } from "three";
import { Projectile } from "./weapons/projectile";

export class HelpHandler {
    /**
     * Controls the overall rendering of the asteroid
     */
    private asteroid: Mesh;
    /**
     * Controls the overall rendering of the missile head
     */
    private headMesh: Mesh;
    /**
     * Loaded font for display text.
     */
    private helpFont: Font;
    /**
     * Controls the color of the text display material
     */
    private helpMaterial: MeshLambertMaterial;
    /**
     * First example missile
     */
    private missileExample1: Projectile;
    /**
     * Mouse pointer
     */
    private mouse: Mesh;
    /**
     * Controls the overall rendering of the saucer
     */
    private saucer: Mesh;
    /**
     * Controls the overall rendering of the satellite
     */
    private satelliteContainer: Mesh;
    /**
     * Reference to the scene, used to remove and reinstall text geometries.
     */
    private scene: Scene;
    /**
     * All the background sections of the help screen.
     */
    private sections: Mesh[] = [];
    /**
     * Controls the overall rendering of the missile tail
     */
    private tailMesh: Line;
    /**
     * Since most of the text on the menu has same parameters, use one variable.
     */
    private textHeaderParams: TextGeometryParameters;
    /**
     * Since most of the text on the menu has same parameters, use one variable.
     */
    private textpParams: TextGeometryParameters;
    /**
     * All the texts of the help screen.
     */
    private texts: Mesh[] = [];
    /**
     * Constructor for the HelpHandler class
     * @param scene graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param helpFont loaded font to use for help display text.
     * @hidden
     */
    constructor(scene: Scene, helpFont: Font, saucerTextures: Texture[], asteroidTexture: Texture) {
        this.helpFont = helpFont;
        this.scene = scene;

        const sectionMaterial = new MeshBasicMaterial( {color: 0x111111, opacity: 1, transparent: false, side: DoubleSide} );
        const sectionMaterialGlow = new MeshPhongMaterial( {color: 0x0955FF, opacity: 0.2, transparent: true, side: DoubleSide} );
        const sectionBackingGeometrySides = new PlaneGeometry( 3, 2.3, 0, 0 );
        const sectionGlowGeometrySides = new PlaneGeometry( 3.2, 2.4, 0, 0 );
        const sectionBackingGeometryMiddle = new PlaneGeometry( 4.5, 2.3, 0, 0 );
        const sectionGlowGeometryMiddle = new PlaneGeometry( 4.7, 2.4, 0, 0 );

        this.sections[0] = new Mesh( sectionBackingGeometrySides, sectionMaterial );
        this.sections[0].position.set(-4.25, 1, -1.4);
        this.sections[0].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[0]);

        this.sections[1] = new Mesh( sectionGlowGeometrySides, sectionMaterialGlow );
        this.sections[1].position.set(-4.25, 1.1, -1.4);
        this.sections[1].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[1]);

        const saucerGeometry = new CircleGeometry(0.2, 16, 16);
        const saucerMaterial = new MeshPhongMaterial();
        saucerMaterial.map = saucerTextures[Math.floor((Math.random() * 5) +0)];
        saucerMaterial.map.minFilter = LinearFilter;
        saucerMaterial.shininess = 0;
        saucerMaterial.transparent = true;
        this.saucer = new Mesh(saucerGeometry, saucerMaterial);
        this.saucer.position.set(-5.3, 0.6, -1.8);
        this.saucer.rotation.set(-1.5708, 0, 0);
        this.saucer.name = `Help-Saucer`;
        this.scene.add(this.saucer);

        const asteroidGeometry = new CircleGeometry(0.2, 16, 16);
        const asteroidMaterial = new MeshPhongMaterial();
        asteroidMaterial.map = asteroidTexture;
        asteroidMaterial.map.minFilter = LinearFilter;
        asteroidMaterial.shininess = 0;
        asteroidMaterial.transparent = true;
        this.asteroid = new Mesh(asteroidGeometry, asteroidMaterial);
        this.asteroid.position.set(-5.3, 0.6, -1.2);
        this.asteroid.rotation.set(-1.5708, 0, 0);
        this.asteroid.name = `Help-Asteroid`;
        this.scene.add(this.asteroid);

        const headGeometry = new CircleGeometry(0.06, 32);
        const headMaterial = new MeshBasicMaterial({
            color: 0xFF3F34,
            opacity: 1,
            transparent: true
        });
        this.headMesh = new Mesh(headGeometry, headMaterial);
        this.headMesh.position.set(-5.2, 0.6, -0.7);
        this.headMesh.rotation.set(-1.5708, 0, 0);
        this.headMesh.name = `Help-Missile`;
        this.scene.add(this.headMesh);

        const tailGeometry = new Geometry();
        tailGeometry.vertices.push(
            new Vector3(-5.2, 0.61, -0.7),
            new Vector3(-5.4, 0.61, -0.5));
        const tailMaterial = new LineBasicMaterial({color: 0x00B39F});
        this.tailMesh = new Line(tailGeometry, tailMaterial);
        this.scene.add(this.tailMesh);

        this.textHeaderParams = {
            font: this.helpFont,
            size: 0.2,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 0.5,
            bevelSegments: 3
        };
        this.textpParams = {
            font: this.helpFont,
            size: 0.13,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 0.5,
            bevelSegments: 3
        };
        this.helpMaterial = new MeshLambertMaterial( {color: 0x00B39F, opacity: 1, transparent: true} );

        const pointsGeometry = new TextGeometry(`Points`, this.textHeaderParams);
        this.texts[0] = new Mesh( pointsGeometry, this.helpMaterial );
        this.texts[0].position.set(-4.8, 0.6, -2.2);
        this.texts[0].rotation.x = -1.5708;
        this.scene.add(this.texts[0]);

        const pointsSaucerGeometry = new TextGeometry(`50 x difficulty`, this.textpParams);
        this.texts[1] = new Mesh( pointsSaucerGeometry, this.helpMaterial );
        this.texts[1].position.set(-4.8, 0.6, -1.7);
        this.texts[1].rotation.x = -1.5708;
        this.scene.add(this.texts[1]);

        const pointsAsteroidGeometry = new TextGeometry(`5 x difficulty`, this.textpParams);
        this.texts[2] = new Mesh( pointsAsteroidGeometry, this.helpMaterial );
        this.texts[2].position.set(-4.8, 0.6, -1.1);
        this.texts[2].rotation.x = -1.5708;
        this.scene.add(this.texts[2]);

        const pointsMissileGeometry = new TextGeometry(`10 x difficulty`, this.textpParams);
        this.texts[3] = new Mesh( pointsMissileGeometry, this.helpMaterial );
        this.texts[3].position.set(-4.8, 0.6, -0.5);
        this.texts[3].rotation.x = -1.5708;
        this.scene.add(this.texts[3]);

        this.sections[2] = new Mesh( sectionBackingGeometryMiddle, sectionMaterial );
        this.sections[2].position.set(0, 1, -1.4);
        this.sections[2].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[2]);

        this.sections[3] = new Mesh( sectionGlowGeometryMiddle, sectionMaterialGlow );
        this.sections[3].position.set(0, 1.1, -1.4);
        this.sections[3].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[3]);

        const FireGeometry = new TextGeometry(`Left Click to Fire`, this.textHeaderParams);
        this.texts[4] = new Mesh( FireGeometry, this.helpMaterial );
        this.texts[4].position.set(-1.6, 0.6, -2.2);
        this.texts[4].rotation.x = -1.5708;
        this.scene.add(this.texts[4]);

        this.missileExample1 = new Projectile(scene, -2, -0.5, 1.5, -1.7, 3.6999999999999997, new Color(0x00B39F), false, 0.02);

        // The square bulk of the satellite
        const satelliteBodyGeometry = new BoxGeometry(0.1, 0.1, 0.1);
        const satelliteBodyMaterial = new MeshBasicMaterial({color: 0xF6C123});
        const satelliteBody = new Mesh(satelliteBodyGeometry, satelliteBodyMaterial);
        // The little fins on the sides of the satellite.
        const satelliteWingsGeometry = new BoxGeometry(0.3, 0.001, 0.05);
        const satelliteWingsMaterial = new MeshBasicMaterial({color: 0x555555});
        const satelliteWings = new Mesh(satelliteWingsGeometry, satelliteWingsMaterial);
        satelliteWings.position.y += 0.05;
        // The energy meter adjacent to each satellite.
        const satelliteEnergyGeometry = new BoxGeometry(0.3, 0.001, 0.05);
        const satelliteEnergyMaterial = new MeshBasicMaterial({color: 0x00FF00});
        const satelliteEnergy = new Mesh(satelliteEnergyGeometry, satelliteEnergyMaterial);
        satelliteEnergy.position.y += 0.05;
        satelliteEnergy.position.z += 0.1;
        // Attaches wings and meter to satellite body for rendering efficiency.
        satelliteBody.add(satelliteWings);
        satelliteBody.add(satelliteEnergy);
        // Container for all the pieces of the satellite, to allow them all to be updated at same time.
        const satelliteContainerGeometry = new BoxGeometry(0.3, 0.3, 0.3);
        const satelliteContainerMaterial = new MeshBasicMaterial({
            opacity: 0,
            transparent: true
        });
        this.satelliteContainer = new Mesh(satelliteContainerGeometry, satelliteContainerMaterial);
        this.satelliteContainer.position.set(-2, 0.50, -0.5);
        this.satelliteContainer.rotation.y = -0.785398;
        this.satelliteContainer.name = `Help-Satellite`;
        // Adds container, and by proxy, all satellite pieces, to the scene.
        this.satelliteContainer.add(satelliteBody);
        this.scene.add(this.satelliteContainer);

        const mouseMaterial = new MeshBasicMaterial({
            color: 0xFFFFFF,
            opacity: 1,
            side: DoubleSide,
            transparent: true });

        const xPlay = 0;
        const yPlay = 0;
        const mouse = new Shape();
        mouse.moveTo( xPlay, yPlay );
        mouse.lineTo( xPlay, yPlay - 0.25 );
        mouse.lineTo( xPlay + 0.05, yPlay - 0.20 );
        mouse.lineTo( xPlay + 0.1, yPlay - 0.30 );
        mouse.lineTo( xPlay + 0.12, yPlay - 0.30 );
        mouse.lineTo( xPlay + 0.1, yPlay - 0.20 );
        mouse.lineTo( xPlay + 0.15, yPlay - 0.20 );
        // mouse.lineTo( xPlay, yPlay );
        const mouseGeometry = new ShapeGeometry(mouse);
        this.mouse = new Mesh( mouseGeometry, mouseMaterial );
        this.mouse.position.set(1.5, 0, -1.7);
        this.mouse.rotation.set(-1.5708, 0, 0);
        scene.add(this.mouse);

        this.sections[4] = new Mesh( sectionBackingGeometrySides, sectionMaterial );
        this.sections[4].position.set(4.25, 1, -1.4);
        this.sections[4].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[4]);

        this.sections[5] = new Mesh( sectionGlowGeometrySides, sectionMaterialGlow );
        this.sections[5].position.set(4.25, 1.1, -1.4);
        this.sections[5].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[5]);

        this.deactivate();
    }
    activate() {
        this.asteroid.visible = true;
        this.headMesh.visible = true;
        this.missileExample1 = new Projectile(this.scene, -2, -0.5, 1.5, -1.7, 3.6999999999999997, new Color(0x00B39F), false, 0.02);
        this.mouse.visible = true;
        this.saucer.visible = true;
        this.satelliteContainer.visible = true;
        this.tailMesh.visible = true;
        this.sections.filter(x => x.visible = true);
        this.texts.filter(x => x.visible = true);
    }
    deactivate() {
        this.asteroid.visible = false;
        this.headMesh.visible = false;
        this.missileExample1.destroy();
        this.mouse.visible = false;
        this.saucer.visible = false;
        this.satelliteContainer.visible = false;
        this.tailMesh.visible = false;
        this.sections.filter(x => x.visible = false);
        this.texts.filter(x => x.visible = false);
    }
    /**
     * Moves the animated help items.
     */
    endCycle(): void {
        if (!this.missileExample1.endCycle()) {
            this.missileExample1.removeFromScene(this.scene);
            this.missileExample1 = new Projectile(this.scene, -2, -0.5, 1.5, -1.7, 3.6999999999999997, new Color(0x00B39F), false, 0.02);
        }
    }
}