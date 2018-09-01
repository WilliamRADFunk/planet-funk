import { Scene } from 'three';

import { Planet } from './Planet';
/**
 * Placeholder function typically used to initiate the applications loop.
 */
const init = () => {
    const scene = new Scene();
    const planet = new Planet;
    planet.addToScene(scene);
    console.log('Hello, World!');
}