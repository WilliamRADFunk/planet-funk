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
import { Planet } from "./player/planet";
import { Shield } from "./player/shield";

export class HelpHandler {
    /**
     * Controls the overall rendering of the asteroid
     */
    private asteroid: Mesh;
    /**
     * Click surface for the Return button.
     */
    private barrierReturn: Mesh;
    /**
     * Controls the overall rendering of the building
     */
    private building: Mesh;
    /**
     * Controls the overall rendering of the not destroyed buildings
     */
    private buildingsAlive: Mesh[] = [];
    /**
     * Controls the overall rendering of the destroyed buildings
     */
    private buildingsDead: Mesh[] = [];
    /**
     * Base texture images
     */
    private buildingTextures: Texture[];
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
     * Planet demonstration
     */
    private planet: Planet;
    /**
     * Planet texture images
     */
    private planetTextures: Texture[];
    /**
     * Controls the overall rendering of the return button display
     */
    private return: Mesh;
    /**
     * Controls size and shape of the return button text
     */
    private returnGeometry: TextGeometry;
    /**
     * Controls the overall rendering of the saucer
     */
    private saucer: Mesh;
    /**
     * Controls the overall rendering of the satellite
     */
    private satelliteContainer: Mesh;
    /**
     * Controls the overall rendering of the second satellite
     */
    private satelliteContainer2: Mesh;
    /**
     * Reference to the scene, used to remove and reinstall text geometries.
     */
    private scene: Scene;
    /**
     * Geometry for side help section backings
     */
    private sectionBackingGeometrySides: PlaneGeometry;
    /**
     * Geometry for middle help section backings
     */
    private sectionBackingGeometryMiddle: PlaneGeometry;
    /**
     * Geometry for side help section borders
     */
    private sectionGlowGeometrySides: PlaneGeometry;
    /**
     * Geometry for middle help section borders
     */
    private sectionGlowGeometryMiddle: PlaneGeometry;
    /**
     * Blackish background material for each help section.
     */
    private sectionMaterial: MeshBasicMaterial;
    /**
     * Bluish background border material for each help section.
     */
    private sectionMaterialGlow: MeshPhongMaterial;
    /**
     * All the background sections of the help screen.
     */
    private sections: Mesh[] = [];
    /**
     * Shield demonstration
     */
    private shield: Shield;
    /**
     * Texture image to help give the dead base its glossed over appearance.
     */
    private specMap: Texture;
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
     * @param saucerTextures texture images for the flying saucers.
     * @param asteroidTexture texture image for the asteroid.
     * @param buildingTextures texture images for the 4 bases.
     * @param specMap texture image to help give the dead base its glossed over appearance.
     * @param planetTextures texture images for the planet.
     * @hidden
     */
    constructor(
        scene: Scene,
        helpFont: Font,
        saucerTextures: Texture[],
        asteroidTexture: Texture,
        buildingTextures: Texture[],
        specMap: Texture,
        planetTextures: Texture[]) {
        this.helpFont = helpFont;
        this.scene = scene;
        this.buildingTextures = buildingTextures;
        this.planetTextures = planetTextures;
        this.specMap = specMap;

        this.sectionMaterial = new MeshBasicMaterial( {color: 0x111111, opacity: 1, transparent: false, side: DoubleSide} );
        this.sectionMaterialGlow = new MeshPhongMaterial( {color: 0x0955FF, opacity: 0.2, transparent: true, side: DoubleSide} );
        this.sectionBackingGeometrySides = new PlaneGeometry( 3, 2.3, 0, 0 );
        this.sectionGlowGeometrySides = new PlaneGeometry( 3.2, 2.4, 0, 0 );
        this.sectionBackingGeometryMiddle = new PlaneGeometry( 4.5, 2.3, 0, 0 );
        this.sectionGlowGeometryMiddle = new PlaneGeometry( 4.7, 2.4, 0, 0 );

        const totalMaterial = new MeshBasicMaterial( {color: 0x000000, opacity: 1, transparent: false, side: DoubleSide} );
        const totalBackingGeometry = new PlaneGeometry( 12, 10, 0, 0 );

        this.sections[0] = new Mesh( totalBackingGeometry, totalMaterial );
        this.sections[0].position.set(0, -10.1, 0);
        this.sections[0].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[0]);
        
        // Create the help collision layer
        const clickMaterial = new MeshBasicMaterial( {opacity: 0, transparent: true, side: DoubleSide} );
        const returnBarrierGeometry = new PlaneGeometry( 2, 0.8, 0, 0 );
        this.barrierReturn = new Mesh( returnBarrierGeometry, clickMaterial );
        this.barrierReturn.name = 'Return';
        this.barrierReturn.position.set(0.1, 0, 4);
        this.barrierReturn.rotation.set(1.5708, 0, 0);
        this.scene.add(this.barrierReturn);

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

        this.makeBox1(saucerTextures, asteroidTexture);

        const satelliteBodyGeometry = new BoxGeometry(0.1, 0.1, 0.1);
        const satelliteBodyMaterial = new MeshBasicMaterial({color: 0xF6C123});
        const satelliteWingsGeometry = new BoxGeometry(0.3, 0.001, 0.05);
        const satelliteWingsMaterial = new MeshBasicMaterial({color: 0x555555});
        const satelliteEnergyGeometry = new BoxGeometry(0.3, 0.001, 0.05);
        const satelliteEnergyMaterial = new MeshBasicMaterial({color: 0x00FF00});
        const satelliteContainerGeometry = new BoxGeometry(0.3, 0.3, 0.3);
        const satelliteContainerMaterial = new MeshBasicMaterial({
            opacity: 0,
            transparent: true
        });

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
        const mouseGeometry = new ShapeGeometry(mouse);

        this.makeBox2(
            satelliteBodyGeometry,
            satelliteBodyMaterial,
            satelliteWingsGeometry,
            satelliteWingsMaterial,
            satelliteEnergyGeometry,
            satelliteEnergyMaterial,
            satelliteContainerGeometry,
            satelliteContainerMaterial,
            mouseMaterial,
            mouseGeometry);
        
        const buildingGeometry = new BoxGeometry(0.5, 0.0001, 0.5);

        this.makeBox3(buildingGeometry);

        this.makeBox4(
            satelliteBodyGeometry,
            satelliteBodyMaterial,
            satelliteWingsGeometry,
            satelliteWingsMaterial,
            satelliteEnergyGeometry,
            satelliteEnergyMaterial,
            satelliteContainerGeometry,
            satelliteContainerMaterial,
            buildingGeometry);

        this.makeBox5();

        this.makeBox6(buildingGeometry);
        
        // Return button text
        this.returnGeometry = new TextGeometry(`RETURN`, this.textHeaderParams);
        this.return = new Mesh( this.returnGeometry, this.helpMaterial );
        this.return.position.set(-0.6, -11, 4.2);
        this.return.rotation.x = -1.5708;
        this.scene.add(this.return);

        this.deactivate();
    }
    activate() {
        this.asteroid.visible = true;
        this.barrierReturn.visible = true;
        this.building.visible = true;
        this.headMesh.visible = true;
        this.missileExample1 = new Projectile(this.scene, -2, -0.5, 1.5, -1.7, 3.6999999999999997, new Color(0x00B39F), false, 0.02, -11.5);
        this.mouse.visible = true;
        this.return.visible = true;
        this.saucer.visible = true;
        this.satelliteContainer.visible = true;
        this.satelliteContainer2.visible = true;
        this.tailMesh.visible = true;
        this.buildingsAlive.filter(x => x.visible = true);
        this.buildingsDead.filter(x => x.visible = true);
        this.sections.filter(x => x.visible = true);
        this.texts.filter(x => x.visible = true);

        this.planet = new Planet([-0.9, -12, 2]);
        this.planet.addToScene(this.scene, this.planetTextures, this.buildingTextures, this.specMap);
        this.shield = new Shield([-0.9, -22, 2]);
        this.shield.addToScene(this.scene);
    }
    deactivate() {
        this.asteroid.visible = false;
        this.barrierReturn.visible = false;
        this.building.visible = false;
        this.headMesh.visible = false;
        this.missileExample1.destroy();
        this.mouse.visible = false;
        this.return.visible = false;
        this.saucer.visible = false;
        this.satelliteContainer.visible = false;
        this.satelliteContainer2.visible = false;
        this.tailMesh.visible = false;
        this.buildingsAlive.filter(x => x.visible = false);
        this.buildingsDead.filter(x => x.visible = false);
        this.sections.filter(x => x.visible = false);
        this.texts.filter(x => x.visible = false);

        if (this.planet) {
            this.planet.removeFromScene(this.scene);
        }
        if (this.shield) {
            this.shield.destroy(this.scene);
        }
    }
    /**
     * Moves the animated help items.
     */
    endCycle(): void {
        if (!this.missileExample1.endCycle()) {
            this.missileExample1.removeFromScene(this.scene);
            this.missileExample1 = new Projectile(this.scene, -2, -0.5, 1.5, -1.7, 3.6999999999999997, new Color(0x00B39F), false, 0.02, -11.5);
        }
        this.planet.endCycle();
        this.shield.endCycle(this.planet.getPowerRegenRate());
    }
    private makeBox1(sTex: Texture[], astTex: Texture) {
        this.sections[1] = new Mesh( this.sectionBackingGeometrySides, this.sectionMaterial );
        this.sections[1].position.set(-4.25, -11, -1.4);
        this.sections[1].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[1]);

        this.sections[2] = new Mesh( this.sectionGlowGeometrySides, this.sectionMaterialGlow );
        this.sections[2].position.set(-4.25, -10.9, -1.4);
        this.sections[2].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[2]);

        const saucerGeometry = new CircleGeometry(0.2, 16, 16);
        const saucerMaterial = new MeshPhongMaterial();
        saucerMaterial.map = sTex[Math.floor((Math.random() * 5) +0)];
        saucerMaterial.map.minFilter = LinearFilter;
        saucerMaterial.shininess = 0;
        saucerMaterial.transparent = true;
        this.saucer = new Mesh(saucerGeometry, saucerMaterial);
        this.saucer.position.set(-5.3, -11.4, -1.8);
        this.saucer.rotation.set(-1.5708, 0, 0);
        this.saucer.name = `Help-Saucer`;
        this.scene.add(this.saucer);

        const asteroidGeometry = new CircleGeometry(0.2, 16, 16);
        const asteroidMaterial = new MeshPhongMaterial();
        asteroidMaterial.map = astTex;
        asteroidMaterial.map.minFilter = LinearFilter;
        asteroidMaterial.shininess = 0;
        asteroidMaterial.transparent = true;
        this.asteroid = new Mesh(asteroidGeometry, asteroidMaterial);
        this.asteroid.position.set(-5.3, -11.4, -1.2);
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
        this.headMesh.position.set(-5.2, -11.4, -0.7);
        this.headMesh.rotation.set(-1.5708, 0, 0);
        this.headMesh.name = `Help-Missile`;
        this.scene.add(this.headMesh);

        const tailGeometry = new Geometry();
        tailGeometry.vertices.push(
            new Vector3(-5.2, -11.3, -0.7),
            new Vector3(-5.4, -11.3, -0.5));
        const tailMaterial = new LineBasicMaterial({color: 0x00B39F});
        this.tailMesh = new Line(tailGeometry, tailMaterial);
        this.scene.add(this.tailMesh);

        const pointsGeometry = new TextGeometry(`Points`, this.textHeaderParams);
        this.texts[0] = new Mesh( pointsGeometry, this.helpMaterial );
        this.texts[0].position.set(-4.8, -11.4, -2.2);
        this.texts[0].rotation.x = -1.5708;
        this.scene.add(this.texts[0]);

        const pointsSaucerGeometry = new TextGeometry(`50 x difficulty`, this.textpParams);
        this.texts[1] = new Mesh( pointsSaucerGeometry, this.helpMaterial );
        this.texts[1].position.set(-4.8, -11.4, -1.7);
        this.texts[1].rotation.x = -1.5708;
        this.scene.add(this.texts[1]);

        const pointsAsteroidGeometry = new TextGeometry(`5 x difficulty`, this.textpParams);
        this.texts[2] = new Mesh( pointsAsteroidGeometry, this.helpMaterial );
        this.texts[2].position.set(-4.8, -11.4, -1.1);
        this.texts[2].rotation.x = -1.5708;
        this.scene.add(this.texts[2]);

        const pointsMissileGeometry = new TextGeometry(`10 x difficulty`, this.textpParams);
        this.texts[3] = new Mesh( pointsMissileGeometry, this.helpMaterial );
        this.texts[3].position.set(-4.8, -11.4, -0.5);
        this.texts[3].rotation.x = -1.5708;
        this.scene.add(this.texts[3]);
    }
    private makeBox2(
        sbg: BoxGeometry,
        sbm: MeshBasicMaterial,
        swg: BoxGeometry,
        swm: MeshBasicMaterial,
        seg: BoxGeometry,
        sem: MeshBasicMaterial,
        scg: BoxGeometry,
        scm: MeshBasicMaterial,
        mouseMat: MeshBasicMaterial,
        mouseGeom: ShapeGeometry) {
        this.sections[3] = new Mesh( this.sectionBackingGeometryMiddle, this.sectionMaterial );
        this.sections[3].position.set(0, -11, -1.4);
        this.sections[3].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[3]);

        this.sections[4] = new Mesh( this.sectionGlowGeometryMiddle, this.sectionMaterialGlow );
        this.sections[4].position.set(0, -10.9, -1.4);
        this.sections[4].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[4]);

        const FireGeometry = new TextGeometry(`Left Click to Fire`, this.textHeaderParams);
        this.texts[4] = new Mesh( FireGeometry, this.helpMaterial );
        this.texts[4].position.set(-1.6, -11.4, -2.2);
        this.texts[4].rotation.x = -1.5708;
        this.scene.add(this.texts[4]);
        // The missile and its built in animation
        this.missileExample1 = new Projectile(this.scene, -2, -0.5, 1.5, -1.7, 3.6999999999999997, new Color(0x00B39F), false, 0.02, -11.5);
        // The square bulk of the satellite
        const satelliteBody = new Mesh(sbg, sbm);
        // The little fins on the sides of the satellite.
        const satelliteWings = new Mesh(swg, swm);
        satelliteWings.position.y += 0.05;
        // The energy meter adjacent to each satellite.
        const satelliteEnergy = new Mesh(seg, sem);
        satelliteEnergy.position.y += 0.05;
        satelliteEnergy.position.z += 0.1;
        // Attaches wings and meter to satellite body for rendering efficiency.
        satelliteBody.add(satelliteWings);
        satelliteBody.add(satelliteEnergy);
        // Container for all the pieces of the satellite, to allow them all to be updated at same time.
        this.satelliteContainer = new Mesh(scg, scm);
        this.satelliteContainer.position.set(-2, -11.5, -0.5);
        this.satelliteContainer.rotation.y = -0.785398;
        this.satelliteContainer.name = `Help-Satellite`;
        // Adds container, and by proxy, all satellite pieces, to the scene.
        this.satelliteContainer.add(satelliteBody);
        this.scene.add(this.satelliteContainer);

        this.mouse = new Mesh( mouseGeom, mouseMat );
        this.mouse.position.set(1.5, -11.1, -1.7);
        this.mouse.rotation.set(-1.5708, 0, 0);
        this.scene.add(this.mouse);
    }
    private makeBox3(bg: BoxGeometry) {
        this.sections[5] = new Mesh( this.sectionBackingGeometrySides, this.sectionMaterial );
        this.sections[5].position.set(4.25, -11, -1.4);
        this.sections[5].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[5]);

        this.sections[6] = new Mesh( this.sectionGlowGeometrySides, this.sectionMaterialGlow );
        this.sections[6].position.set(4.25, -10.9, -1.4);
        this.sections[6].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[6]);

        const BaseGeometry = new TextGeometry(`Protect Bases`, this.textHeaderParams);
        this.texts[5] = new Mesh( BaseGeometry, this.helpMaterial );
        this.texts[5].position.set(3, -11.4, -2.2);
        this.texts[5].rotation.x = -1.5708;
        this.scene.add(this.texts[5]);
        
        const building1Material = new MeshPhongMaterial();
        building1Material.map = this.buildingTextures[0];
        building1Material.map.minFilter = LinearFilter;
        building1Material.shininess = 0;
        building1Material.transparent = true;
        const building2Material = new MeshPhongMaterial();
        building2Material.map = this.buildingTextures[1];
        building2Material.map.minFilter = LinearFilter;
        building2Material.shininess = 0;
        building2Material.transparent = true;
        const building3Material = new MeshPhongMaterial();
        building3Material.map = this.buildingTextures[2];
        building3Material.map.minFilter = LinearFilter;
        building3Material.shininess = 0;
        building3Material.transparent = true;
        const building4Material = new MeshPhongMaterial();
        building4Material.map = this.buildingTextures[3];
        building4Material.map.minFilter = LinearFilter;
        building4Material.shininess = 0;
        building4Material.transparent = true;

        this.buildingsAlive.push(new Mesh(bg, building1Material));
        this.buildingsAlive[0].position.set(3.2, -11.4, -1.6);
        this.buildingsAlive[0].name = `Help-Base-Protect-1`;
        this.scene.add(this.buildingsAlive[0]);
        this.buildingsAlive.push(new Mesh(bg, building2Material));
        this.buildingsAlive[1].position.set(3.9, -11.4, -1.6);
        this.buildingsAlive[1].name = `Help-Base-Protect-2`;
        this.scene.add(this.buildingsAlive[1]);
        this.buildingsAlive.push(new Mesh(bg, building3Material));
        this.buildingsAlive[2].position.set(4.6, -11.4, -1.6);
        this.buildingsAlive[2].name = `Help-Base-Protect-3`;
        this.scene.add(this.buildingsAlive[2]);
        this.buildingsAlive.push(new Mesh(bg, building4Material));
        this.buildingsAlive[3].position.set(5.3, -11.4, -1.6);
        this.buildingsAlive[3].name = `Help-Base-Protect-4`;
        this.scene.add(this.buildingsAlive[3]);

        const Regen1Geometry = new TextGeometry(`More Bases = Faster`, this.textpParams);
        this.texts[6] = new Mesh( Regen1Geometry, this.helpMaterial );
        this.texts[6].position.set(3, -11.4, -1);
        this.texts[6].rotation.x = -1.5708;
        this.scene.add(this.texts[6]);
    
        const Regen2Geometry = new TextGeometry(`Satellite & Shield`, this.textpParams);
        this.texts[7] = new Mesh( Regen2Geometry, this.helpMaterial );
        this.texts[7].position.set(3.2, -11.4, -0.7);
        this.texts[7].rotation.x = -1.5708;
        this.scene.add(this.texts[7]);
    
        const Regen3Geometry = new TextGeometry(`Regeneration`, this.textpParams);
        this.texts[8] = new Mesh( Regen3Geometry, this.helpMaterial );
        this.texts[8].position.set(3.4, -11.4, -0.4);
        this.texts[8].rotation.x = -1.5708;
        this.scene.add(this.texts[8]);
    }
    private makeBox4(
        sbg: BoxGeometry,
        sbm: MeshBasicMaterial,
        swg: BoxGeometry,
        swm: MeshBasicMaterial,
        seg: BoxGeometry,
        sem: MeshBasicMaterial,
        scg: BoxGeometry,
        scm: MeshBasicMaterial,
        bg: BoxGeometry) {
        this.sections[7] = new Mesh( this.sectionBackingGeometrySides, this.sectionMaterial );
        this.sections[7].position.set(-4.25, -11, 1.3);
        this.sections[7].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[7]);

        this.sections[8] = new Mesh( this.sectionGlowGeometrySides, this.sectionMaterialGlow );
        this.sections[8].position.set(-4.25, -10.9, 1.3);
        this.sections[8].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[8]);

        const recoverGeometry = new TextGeometry(`Points Recover`, this.textHeaderParams);
        this.texts[9] = new Mesh( recoverGeometry, this.helpMaterial );
        this.texts[9].position.set(-5.55, -11.4, 0.5);
        this.texts[9].rotation.x = -1.5708;
        this.scene.add(this.texts[9]);

        const pointsBuildingGeometry = new TextGeometry(`100,000 =`, this.textpParams);
        this.texts[10] = new Mesh( pointsBuildingGeometry, this.helpMaterial );
        this.texts[10].position.set(-5.1, -11.4, 1.2);
        this.texts[10].rotation.x = -1.5708;
        this.scene.add(this.texts[10]);

        const building1Material = new MeshPhongMaterial();
        building1Material.map = this.buildingTextures[0];
        building1Material.map.minFilter = LinearFilter;
        building1Material.shininess = 0;
        building1Material.transparent = true;

        this.building = new Mesh(bg, building1Material);
        this.building.position.set(-3.5, -11.4, 1.1);
        this.building.name = `Help-Base-Points`;
        this.scene.add(this.building);

        const pointsSatelliteGeometry = new TextGeometry(`50,000 =`, this.textpParams);
        this.texts[11] = new Mesh( pointsSatelliteGeometry, this.helpMaterial );
        this.texts[11].position.set(-5.1, -11.4, 2);
        this.texts[11].rotation.x = -1.5708;
        this.scene.add(this.texts[11]);

        const satelliteBody2 = new Mesh(sbg, sbm);
        const satelliteWings2 = new Mesh(swg, swm);
        satelliteWings2.position.y += 0.05;
        const satelliteEnergy2 = new Mesh(seg, sem);
        satelliteEnergy2.position.y += 0.05;
        satelliteEnergy2.position.z += 0.1;
        // Attaches wings and meter to satellite body for rendering efficiency.
        satelliteBody2.add(satelliteWings2);
        satelliteBody2.add(satelliteEnergy2);
        this.satelliteContainer2 = new Mesh(scg, scm);
        this.satelliteContainer2.position.set(-3.5, -11.4, 1.9);
        this.satelliteContainer2.name = `Help-Satellite-2`;
        // Adds container, and by proxy, all satellite pieces, to the scene.
        this.satelliteContainer2.add(satelliteBody2);
        this.scene.add(this.satelliteContainer2);
    }
    private makeBox5() {
        const sectionBackingGeometryMiddle = new PlaneGeometry( 4.5, 3.2, 0, 0 );
        const sectionGlowGeometryMiddle = new PlaneGeometry( 4.7, 3.3, 0, 0 );

        this.sections[9] = new Mesh( sectionBackingGeometryMiddle, this.sectionMaterial );
        this.sections[9].position.set(0, -11, 1.75);
        this.sections[9].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[9]);

        this.sections[10] = new Mesh( sectionGlowGeometryMiddle, this.sectionMaterialGlow );
        this.sections[10].position.set(0, -10.9, 1.75);
        this.sections[10].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[10]);

        const ShieldGeometry = new TextGeometry(`Click in Ring for Shield`, this.textHeaderParams);
        this.texts[12] = new Mesh( ShieldGeometry, this.helpMaterial );
        this.texts[12].position.set(-2.1, -11.4, 0.5);
        this.texts[12].rotation.x = -1.5708;
        this.scene.add(this.texts[12]);
    }
    private makeBox6(bg: BoxGeometry) {
        this.sections[11] = new Mesh( this.sectionBackingGeometrySides, this.sectionMaterial );
        this.sections[11].position.set(4.25, -11, 1.3);
        this.sections[11].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[11]);

        this.sections[12] = new Mesh( this.sectionGlowGeometrySides, this.sectionMaterialGlow );
        this.sections[12].position.set(4.25, -10.9, 1.3);
        this.sections[12].rotation.set(1.5708, 0, 0);
        this.scene.add(this.sections[12]);

        const Base1Geometry = new TextGeometry(`All Bases Dead`, this.textHeaderParams);
        this.texts[13] = new Mesh( Base1Geometry, this.helpMaterial );
        this.texts[13].position.set(3, -11.4, 0.5);
        this.texts[13].rotation.x = -1.5708;
        this.scene.add(this.texts[13]);

        const Base2Geometry = new TextGeometry(`=`, this.textpParams);
        this.texts[14] = new Mesh( Base2Geometry, this.helpMaterial );
        this.texts[14].position.set(4.2, -11.4, 1.8);
        this.texts[14].rotation.x = -1.5708;
        this.scene.add(this.texts[14]);

        const gameOverMaterial = new MeshLambertMaterial( {color: 0xFF0055, opacity: 1, transparent: true} );

        const Base3Geometry = new TextGeometry(`Game Over`, this.textHeaderParams);
        this.texts[15] = new Mesh( Base3Geometry, gameOverMaterial );
        this.texts[15].position.set(3.4, -11.4, 2.2);
        this.texts[15].rotation.x = -1.5708;
        this.scene.add(this.texts[15]);
        
        const building5Material = new MeshPhongMaterial();
        building5Material.map = this.buildingTextures[0];
        building5Material.map.minFilter = LinearFilter;
        building5Material.specularMap = this.specMap;
		building5Material.specularMap.minFilter = LinearFilter;
        building5Material.specular  = new Color(0x333333);
        building5Material.shininess = 0;
        building5Material.transparent = true;
        building5Material.opacity = 0.2;
        const building6Material = new MeshPhongMaterial();
        building6Material.map = this.buildingTextures[1];
        building6Material.map.minFilter = LinearFilter;
        building6Material.specularMap = this.specMap;
		building6Material.specularMap.minFilter = LinearFilter;
        building6Material.specular  = new Color(0x333333);
        building6Material.shininess = 0;
        building6Material.transparent = true;
        building6Material.opacity = 0.2;
        const building7Material = new MeshPhongMaterial();
        building7Material.map = this.buildingTextures[2];
        building7Material.map.minFilter = LinearFilter;
        building7Material.specularMap = this.specMap;
		building7Material.specularMap.minFilter = LinearFilter;
        building7Material.specular  = new Color(0x333333);
        building7Material.shininess = 0;
        building7Material.transparent = true;
        building7Material.opacity = 0.2;
        const building8Material = new MeshPhongMaterial();
        building8Material.map = this.buildingTextures[3];
        building8Material.map.minFilter = LinearFilter;
        building8Material.specularMap = this.specMap;
		building8Material.specularMap.minFilter = LinearFilter;
        building8Material.specular  = new Color(0x333333);
        building8Material.shininess = 0;
        building8Material.transparent = true;
        building8Material.opacity = 0.2;

        this.buildingsDead.push(new Mesh(bg, building5Material));
        this.buildingsDead[0].position.set(3.2, -11.4, 1.1);
        this.buildingsDead[0].name = `Help-Base-Protect-5`;
        this.scene.add(this.buildingsDead[0]);
        this.buildingsDead.push(new Mesh(bg, building6Material));
        this.buildingsDead[1].position.set(3.9, -11.4, 1.1);
        this.buildingsDead[1].name = `Help-Base-Protect-6`;
        this.scene.add(this.buildingsDead[1]);
        this.buildingsDead.push(new Mesh(bg, building7Material));
        this.buildingsDead[2].position.set(4.6, -11.4, 1.1);
        this.buildingsDead[2].name = `Help-Base-Protect-7`;
        this.scene.add(this.buildingsDead[2]);
        this.buildingsDead.push(new Mesh(bg, building8Material));
        this.buildingsDead[3].position.set(5.3, -11.4, 1.1);
        this.buildingsDead[3].name = `Help-Base-Protect-8`;
        this.scene.add(this.buildingsDead[3]);
    }
}