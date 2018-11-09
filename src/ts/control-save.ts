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

/**
 * @class
 * Save button that draws and maintains click area for save button.
 */
export class ControlSave {
    /**
     * Mesh for the save button.
     */
    private saveButton: Mesh;
    /**
     * Material for the disk portion of the button.
     */
    private saveDiskMaterial: MeshBasicMaterial;
    /**
     * Controls the save button's border material.
     */
    private saveButtonBorderMaterial: LineBasicMaterial;
    /**
     * Constructor for the ControlSave class
     * @param scene         graphic rendering scene object. Used each iteration to redraw things contained in scene.
     * @param pos           upper left [x, z] point of control panel.
     * @param size          size modifier for button.
     * @param color         color to use for button and button material.
     * @param color         color to use for button and button material.
     * @param clkMat        consistent click material used for all control panel buttons.
     * @hidden
     */
    constructor(scene: Scene, pos: [number, number], size: number, color: Color, clkMat: MeshBasicMaterial) {
        // Save button click barrier.
        const saveBarrierGeometry = new PlaneGeometry( size, size, 0, 0 );
        const saveBarrier = new Mesh( saveBarrierGeometry, clkMat );
        saveBarrier.name = 'Save Button';
        saveBarrier.position.set(pos[0] + (size / 2) + (0.25 * size), 1, pos[1] + (size / 2) + (0.25 * size));
        saveBarrier.rotation.set(1.5708, 0, 0);
        scene.add(saveBarrier);
        // Save button border.
        const saveButtonBorderGeometry = new Geometry();
        saveButtonBorderGeometry.vertices.push(
            new Vector3(0, 0, 0),
            new Vector3(size, 0, 0),
            new Vector3(size, 0, size),
            new Vector3(0, 0, size),
            new Vector3(0, 0, 0));
        this.saveButtonBorderMaterial = new LineBasicMaterial({
            color: color,
            opacity: 1,
            transparent: true });
        const saveButtonBorder = new Line(saveButtonBorderGeometry, this.saveButtonBorderMaterial);
        // Triangle of play button.
        this.saveDiskMaterial = new MeshBasicMaterial({
            color: color,
            opacity: 1,
            side: DoubleSide,
            transparent: true });
        const xPlay = (0.0625 * size);
        const yPlay = (0.375 * size);
        const playTriangle = new Shape();
        playTriangle.moveTo( xPlay, yPlay );
        playTriangle.lineTo( xPlay + (0.45 * size), yPlay - (0.375 * size) );
        playTriangle.lineTo( xPlay, yPlay - (0.75 * size) );
        playTriangle.lineTo( xPlay, yPlay );
        const playTriangleGeometry = new ShapeGeometry(playTriangle);
        const saveDisk = new Mesh( playTriangleGeometry, this.saveDiskMaterial );
        saveDisk.position.set((0.25 * size), 0, (0.508333333334 * size));
        saveDisk.rotation.set(-1.5708, 0, 0);
        // The melding of the complete save button.
        this.saveButton = new Mesh();
        this.saveButton.position.set(pos[0] + (0.25 * size), 0, pos[1] + (0.25 * size));
        this.saveButton.add(saveButtonBorder);
        this.saveButton.add(saveDisk);
        scene.add(this.saveButton);
    }
    /**
     * Changes button material to match new level color.
     * @param color threeJS color value to use on button
     */
    changeColor(color: Color): void {
        this.saveButtonBorderMaterial.color = color;
        this.saveDiskMaterial.color = color;
    }
    /**
     * Changes button opacity.
     * @param color opacity fraction to use on button material.
     */
    changeOpacity(opacity: number): void {
        this.saveButtonBorderMaterial.opacity = opacity;
        this.saveDiskMaterial.opacity = opacity;
    }
    /**
     * Hide the save button (state related).
     * Default is to show.
     */
    hide(): void {
        this.saveButton.visible = false;
    }
    /**
     * Show the save button (state related).
     * Default is to show.
     */
    show(): void {
        this.saveButton.visible = true;
    }
}