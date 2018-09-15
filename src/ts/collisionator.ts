import { Collidable } from "./collidable";
import { Scene } from "three";

class Collisionator {
    /**
     * Registered list of things that can are collidable.
     */
    collisionItems: Collidable[] = [];
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
     * @param scene  graphic rendering scene object. Used each iteration to redraw things contained in scene.
     */
    checkForCollisions(scene: Scene) {
        for (let i = 0; i < this.collisionItems.length; i++) {
            if (!this.collisionItems[i].getActive()) continue;
            for (let j = i+1; j < this.collisionItems.length; j++) {
                if (!this.collisionItems[j].getActive()) continue;
                if (this.collisionItems[i].isPassive() && this.collisionItems[j].isPassive()) continue;
                const posI = this.collisionItems[i].getCurrentPosition();
                const posJ = this.collisionItems[j].getCurrentPosition();
                const radI = this.collisionItems[i].getCollisionRadius();
                const radJ = this.collisionItems[j].getCollisionRadius();
                const dist = Math.sqrt(
                    (posJ[0] - posI[0]) * (posJ[0] - posI[0]) +
                    (posJ[1] - posI[1]) * (posJ[1] - posI[1])
                );
                if (radI + radJ > dist) {
                    console.log('Boom!');
                    const entityI = this.collisionItems[i];
                    const entityJ = this.collisionItems[j];
                    if (entityI.impact(entityI) &&
                    typeof entityI.removeFromScene === 'function') {
                        entityI.removeFromScene(scene);
                    }
                    if (entityJ.impact(entityJ) &&
                    typeof entityJ.removeFromScene === 'function') {
                        entityJ.removeFromScene(scene);
                    }
                }
            }
        }
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