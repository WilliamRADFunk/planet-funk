import {
    Color,
    DoubleSide,
    Font,
    Geometry,
    Line,
    LineBasicMaterial,
    MeshBasicMaterial,
    Scene,
    Vector3 } from "three";
import { ControlPause } from "./control-pause";
import { ControlPlay } from "./control-play";
import { ControlHelp } from "./control-help";
import { ControlSave } from "./control-save";
/**
 * A constant size / position modifier to shrink or expand the entire panel symmetrically from one variable.
 */
const BUTTON_SIZE = 0.4;
/**
 * @class
 * Control panel that handles all of the buttons and their states.
 */
export class ControlPanel {
    /**
     * Controls the buttons material.
     */
    private buttonMaterial: MeshBasicMaterial;
    /**
     * Controls the help button.
     */
    private controlHelp: ControlHelp;
    /**
     * Controls the pause button.
     */
    private controlPause: ControlPause;
    /**
     * Controls the play button.
     */
    private controlPlay: ControlPlay;
    /**
     * Controls the save button.
     */
    private controlSave: ControlSave;
    /**
     * Keeps track of level's current color
     */
    private currentColor: Color;
    /**
     * Player chosen difficulty level.
     */
    private difficulty: number;
    /**
     * Tracks state of game help menu.
     */
    private help: boolean = false;
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
    constructor(scene: Scene, x: number, z: number, difficulty: number, color: Color, font: Font) {
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
            new Vector3(x + (4 * BUTTON_SIZE), 0, z),
            new Vector3(x + (4 * BUTTON_SIZE), 0, z + (1.5 * BUTTON_SIZE)),
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
        this.controlPause = new ControlPause(
            this.scene,
            [x, z],
            BUTTON_SIZE,
            this.currentColor,
            this.buttonMaterial,
            clickMaterial);
        //
        // Play Button
        //
        this.controlPlay = new ControlPlay(
            this.scene,
            [x, z],
            BUTTON_SIZE,
            this.currentColor,
            this.buttonMaterial,
            clickMaterial);
        //
        // Help Button
        //
        this.controlHelp = new ControlHelp(
            this.scene,
            [x + (1.25 * BUTTON_SIZE), z],
            BUTTON_SIZE,
            this.currentColor,
            clickMaterial,
            font);
        //
        // Save Button
        //
        this.controlSave = new ControlSave(
            this.scene,
            [x + (2.5 * BUTTON_SIZE), 1, z],
            BUTTON_SIZE,
            this.currentColor,
            clickMaterial);
        //
        // If hardcore difficulty, play button is inaccessible.
        //
        if (difficulty === 3) {
            this.buttonMaterial.opacity = 0.5;
            this.controlPause.changeOpacity(0.5);
            this.controlPlay.changeOpacity(0.5);
            this.controlHelp.changeOpacity(0.5);
            this.controlSave.changeOpacity(0.5);
        }
        this.controlSave.changeOpacity(0.5); // TODO: Connect save functionality, and delete this.
        this.controlPlay.hide();
    }
    /**
     * At the end of each loop iteration, control panel is told to hide or not.
     * @param hide hide the control panel if new level, so old color isn't showing.
     */
    endCycle(hide?: boolean): void {
        if (hide) {
            this.controlPause.hide();
            this.controlPlay.hide();
            this.controlHelp.hide();
            this.controlSave.hide();
            this.panelBorder.visible = false;
            return;
        }
    }
    /**
     * Alerts control panel that help button has been clicked by user.
     */
    helpChange(): void {
        if (this.difficulty === 3) return;
        this.help = !this.help;
        if (this.help) {
            this.pause = true;
            this.controlPlay.show();
            this.controlPause.hide();
            this.controlHelp.activate();
        } else {
            this.pause = false;
            this.controlPause.show();
            this.controlPlay.hide();
            this.controlHelp.deactivate();
        }
    }
    /**
     * Getter for game help state.
     * @returns TRUE --> game is in help screen | FALSE --> game is not in help screen.
     */
    isHelp(): boolean {
        if (this.difficulty < 3) {
            return this.help;
        }
        return false;
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
        this.controlPause.changeColor(this.currentColor);
        this.controlPause.show();
        this.controlPlay.changeColor(this.currentColor);
        this.controlHelp.changeColor(this.currentColor);
        this.controlHelp.show();
        this.controlSave.changeColor(this.currentColor);
        this.controlSave.show();
        this.panelBorder.visible = true;
    }
    /**
     * Alerts control panel that pause button has been clicked by user.
     */
    pauseChange(): void {
        if (this.difficulty === 3) return;
        this.pause = !this.pause;
        if (this.pause) {
            this.controlPlay.show();
            this.controlPause.hide();
        } else {
            this.controlPause.show();
            this.controlPlay.hide();
            if (this.help) this.helpChange();
        }
    }
    save() {
        // Activate Save!!!
    }
}