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
                const entityI = this.collisionItems[i];
                const entityJ = this.collisionItems[j];
                if (!entityJ.getActive()) continue;
                if (entityI.isPassive() && entityJ.isPassive()) continue;
                if (!entityI.getName().indexOf('explosion') &&
                    !entityJ.getName().indexOf('explosion')) continue;
                if (!entityI.getName().indexOf('Asteroid') &&
                    !entityJ.getName().indexOf('Asteroid')) continue;
                const posI = entityI.getCurrentPosition();
                const posJ = entityJ.getCurrentPosition();
                const radI = entityI.getCollisionRadius();
                const radJ = entityJ.getCollisionRadius();
                const dist = Math.sqrt(
                    (posJ[0] - posI[0]) * (posJ[0] - posI[0]) +
                    (posJ[1] - posI[1]) * (posJ[1] - posI[1])
                );
                if (radI + radJ > dist) {
                    // console.log('Boom!', entityI.getName(), entityJ.getName());
                    if (entityI.impact(entityI, entityJ.getName()) &&
                    typeof entityI.removeFromScene === 'function') {
                        entityI.removeFromScene(scene);
                    }
                    if (entityJ.impact(entityJ, entityI.getName()) &&
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