import {
    Color,
    DoubleSide,
    Geometry,
    Line,
    LineBasicMaterial,
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    Scene,
    Shape,
    ShapeGeometry,
    Vector3 } from "three";

const BUTTON_SIZE = 0.4;

export class ControlPanel {
    /**
     * Controls the buttons material.
     */
    private buttonMaterial: MeshBasicMaterial;
    /**
     * Keeps track of level's current color
     */
    private currentColor: Color;
    /**
     * Player chosen difficulty level.
     */
    private difficulty: number;
    /**
     * Line mesh for border of entire panel.
     */
    private panelBorder: Line;
    /**
     * Controls the panel's border material.
     */
    private panelBorderMaterial: LineBasicMaterial;
    /**
     * Tracks state of game pause.
     */
    private pause: boolean = false;
    /**
     * Mesh for the pause button.
     */
    private pauseButton: Mesh;
    /**
     * Controls the pause button's border material.
     */
    private pauseButtonBorderMaterial: LineBasicMaterial;
    /**
     * Tracks state of game play.
     */
    private play: boolean = false;
    /**
     * Mesh for the play button.
     */
    private playButton: Mesh;
    /**
     * Controls the play button's border material.
     */
    private playButtonBorderMaterial: LineBasicMaterial;
    /**
     * Reference to the scene, used to remove asteroid from rendering cycle once destroyed.
     */
    private scene: Scene;
    /**
     * Constructor for the ControlPanel class
     * @param scene         graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param x             upper left x point of control panel.
     * @param z             upper left z point of control panel.
     * @param difficulty    player chosen difficulty level.
     * @hidden
     */
    constructor(scene: Scene, x: number, z: number, difficulty: number, color: Color) {
        this.scene = scene;
        this.difficulty = difficulty;
        this.currentColor = color;
        const clickMaterial = new MeshBasicMaterial({
            color: 0x0000FF,
            opacity: 0,
            side: DoubleSide,
            transparent: true });
        this.buttonMaterial = new MeshBasicMaterial({
            color: this.currentColor,
            opacity: 1,
            side: DoubleSide,
            transparent: true });
        //
        // Control Panel
        //
        const panelBorderGeometry = new Geometry();
        panelBorderGeometry.vertices.push(
            new Vector3(x, 0, z),
            new Vector3(x + (7.875 * BUTTON_SIZE), 0, z),
            new Vector3(x + (7.875 * BUTTON_SIZE), 0, z + (1.5 * BUTTON_SIZE)),
            new Vector3(x, 0, z + (1.5 * BUTTON_SIZE)),
            new Vector3(x, 0, z));
        this.panelBorderMaterial = new LineBasicMaterial({
            color: this.currentColor,
            opacity: 1,
            transparent: true });
        this.panelBorder = new Line(panelBorderGeometry, this.panelBorderMaterial);
        this.scene.add(this.panelBorder);
        //
        // Pause Button
        //
        // Pause button click barrier.
        const pauseBarrierGeometry = new PlaneGeometry( BUTTON_SIZE, BUTTON_SIZE, 0, 0 );
        const pauseBarrier = new Mesh( pauseBarrierGeometry, clickMaterial );
        pauseBarrier.name = 'Pause Button';
        pauseBarrier.position.set(x + (BUTTON_SIZE / 2) + (0.25 * BUTTON_SIZE), 1, z + (BUTTON_SIZE / 2) + (0.25 * BUTTON_SIZE));
        pauseBarrier.rotation.set(1.5708, 0, 0);
        this.scene.add(pauseBarrier);
        // Pause button border.
        const pauseButtonBorderGeometry = new Geometry();
        pauseButtonBorderGeometry.vertices.push(
            new Vector3(0, 0, 0),
            new Vector3(BUTTON_SIZE, 0, 0),
            new Vector3(BUTTON_SIZE, 0, BUTTON_SIZE),
            new Vector3(0, 0, BUTTON_SIZE),
            new Vector3(0, 0, 0));
        this.pauseButtonBorderMaterial = new LineBasicMaterial({
            color: this.currentColor,
            opacity: 1,
            transparent: true });
        const pauseButtonBorder = new Line(pauseButtonBorderGeometry, this.pauseButtonBorderMaterial);
        // Left bar of pause button.
        const pauseBarGeometry = new PlaneGeometry((0.75 * BUTTON_SIZE), (0.25 * BUTTON_SIZE), 0, 0 );
        const pauseBar1 = new Mesh( pauseBarGeometry, this.buttonMaterial );
        pauseBar1.position.set((0.25 * BUTTON_SIZE), 0, (0.508333333334 * BUTTON_SIZE));
        pauseBar1.rotation.set(1.5708, 0, 1.5708);
        // Right bar of pause button.
        const pauseBar2 = new Mesh( pauseBarGeometry, this.buttonMaterial );
        pauseBar2.position.set((0.75 * BUTTON_SIZE), 0, (0.508333333334 * BUTTON_SIZE));
        pauseBar2.rotation.set(1.5708, 0, 1.5708);
        // The melding of the complete pause button.
        this.pauseButton = new Mesh();
        this.pauseButton.position.set(x + (0.25 * BUTTON_SIZE), 0, z + (0.25 * BUTTON_SIZE));
        this.pauseButton.add(pauseButtonBorder);
        this.pauseButton.add(pauseBar1);
        this.pauseButton.add(pauseBar2);
        this.scene.add(this.pauseButton);
        // Play button border.
        const playButtonBorderGeometry = new Geometry();
        playButtonBorderGeometry.vertices.push(
            new Vector3(0, 0, 0),
            new Vector3(BUTTON_SIZE, 0, 0),
            new Vector3(BUTTON_SIZE, 0, BUTTON_SIZE),
            new Vector3(0, 0, BUTTON_SIZE),
            new Vector3(0, 0, 0));
        this.playButtonBorderMaterial = new LineBasicMaterial({
            color: this.currentColor,
            opacity: 1,
            transparent: true });
        const playButtonBorder = new Line(playButtonBorderGeometry, this.playButtonBorderMaterial);
        // Left bar of play button.
        const xPlay = (0.0625 * BUTTON_SIZE);
        const yPlay = (0.375 * BUTTON_SIZE);
        const playTriangle = new Shape();
        playTriangle.moveTo( xPlay, yPlay );
        playTriangle.lineTo( xPlay + (0.45 * BUTTON_SIZE), yPlay - (0.375 * BUTTON_SIZE) );
        playTriangle.lineTo( xPlay, yPlay - (0.75 * BUTTON_SIZE) );
        playTriangle.lineTo( xPlay, yPlay );
        const playTriangleGeometry = new ShapeGeometry(playTriangle);
        const playTriangleMesh = new Mesh( playTriangleGeometry, this.buttonMaterial );
        playTriangleMesh.position.set((0.25 * BUTTON_SIZE), 0, (0.508333333334 * BUTTON_SIZE));
        playTriangleMesh.rotation.set(-1.5708, 0, 0);
        // The melding of the complete play button.
        this.playButton = new Mesh();
        this.playButton.position.set(x + (0.25 * BUTTON_SIZE), 0, z + (0.25 * BUTTON_SIZE));
        this.playButton.add(playButtonBorder);
        this.playButton.add(playTriangleMesh);
        this.scene.add(this.playButton);
        // If hardcore difficulty, play button is inaccessible.
        if (difficulty === 3) {
            this.buttonMaterial.opacity = 0.2;
            this.pauseButtonBorderMaterial.opacity = 0.2;
            this.playButtonBorderMaterial.opacity = 0.2;
        }
        this.playButton.visible = false;
    }
    /**
     * At the end of each loop iteration, control panel is told to hide or not.
     * @param hide hide the control panel if new level, so old color isn't showing.
     */
    endCycle(hide?: boolean): void {
        if (hide) {
            this.pauseButton.visible = false;
            this.playButton.visible = false;
            this.panelBorder.visible = false;
            return;
        }
    }
    /**
     * Getter for game pause state.
     * @returns TRUE --> game is paused | FALSE --> game is not paused.
     */
    isPaused(): boolean {
        if (this.difficulty < 3) {
            return this.pause;
        }
        return false;
    }
    /**
     * Only recreate the digits with the new color
     * @param color level color, grabbed from the LevelHandler
     */
    nextLevel(color: Color) {
        this.currentColor = color;
        this.panelBorderMaterial.color = this.currentColor;
        this.buttonMaterial.color = this.currentColor;
        this.pauseButtonBorderMaterial.color = this.currentColor;
        this.pauseButton.visible = true;
        this.playButtonBorderMaterial.color = this.currentColor;
        // this.playButton.visible = true;
        this.panelBorder.visible = true;
    }
    /**
     * Alerts control panel that pause button has been clicked by user.
     */
    pauseChange(): void {
        this.pause = !this.pause;
        if (this.pause) {
            this.playButton.visible = true;
            this.pauseButton.visible = false;
        } else {
            this.pauseButton.visible = true;
            this.playButton.visible = false;
        }
    }
}