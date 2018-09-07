import { Collidable } from "./collidable";

class Collisionator {
    /**
     * Registered list of things that can are collidable.
     */
    collisionItems: Collidable[];
    /**
     * Constructor for the Collisionator class
     * @hidden
     */
    constructor() {}
    /**
     * Adds a collidable object to the list.
     * @param collidable the object with collidable characteristics to add to the collidables list.
     */
    add(collidable: Collidable) {
        this.collisionItems.push(collidable);
    }
    /**
     * Check for collisions between two or more object, and signal them to impact.
     */
    checkForCollisions() {
        
    }
    /**
     * Removes a collidable object to the list.
     * @param collidable the object with collidable characteristics to remove to the collidables list.
     */
    remove(collidable: Collidable) {
        const index = this.collisionItems.indexOf(collidable);
        if (index > -1) {
            this.collisionItems.splice(index, 1);
        }
    }
}
// TODO: Also need to get radius of reach
export const CollisionatorSingleton = new Collisionator();