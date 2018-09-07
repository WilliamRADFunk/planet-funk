export interface Collidable {
    /**
     * Gets the viability of the object.
     * @returns flag to signal non-destruction. True = not destroyed. False = destroyed.
     */
    getActive: () => boolean;
    /**
     * Gets the current position of the collidable object.
     * @returns the array is of length 2 with x coordinate being first, and then z coordinate.
     */
    getCurrentPosition: () => number[];
    /**
     * Call to collidable object that it has been struck.
     */
    impact: () => void;
}