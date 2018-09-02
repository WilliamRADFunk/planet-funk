import { AmbientLight, CanvasRenderer, Scene, WebGLRenderer, PerspectiveCamera, Raycaster, Vector2 } from 'three';

import { Planet } from './planet';
import { Shield } from './shield';
import { Satellite } from './satellite';
/**
 * Placeholder function typically used to initiate the applications loop.
 */
export default () => {
    // Establish initial window size.
    let WIDTH: number = window.innerWidth * 0.99;
    let HEIGHT: number = window.innerHeight * 0.99;
    // Create ThreeJS scene.
    const scene = new Scene();
    // Choose WebGL renderer if browser supports, otherwise fall back to canvas renderer.
    const renderer: WebGLRenderer|CanvasRenderer = ((window as any)['WebGLRenderingContext']) ?
        new WebGLRenderer() : new CanvasRenderer();
    // Make it black and size it to window.
    (renderer as any).setClearColor(0x000000, 0);
    renderer.setSize( WIDTH, HEIGHT );
    renderer.autoClear = false;
    // An all around brightish light that hits everything equally.
    scene.add(new AmbientLight(0xCCCCCC));
    // Render to the html container.
    const container = document.getElementById('mainview');
	container.appendChild( (renderer as any).domElement );
    // Set up player's ability to see the game, and focus center on planet.
    const camera =  new PerspectiveCamera( 25, WIDTH / HEIGHT, 0.01, 1000 );
	camera.position.set(0, 20, 0);
    camera.lookAt(scene.position);
    /**
     * Gracefully handles a change in window size, by recalculating shape and updating camera and renderer.
     */
    const onWindowResize = () => {
        WIDTH = window.innerWidth * 0.99;
        HEIGHT = window.innerHeight * 0.99;
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
        renderer.setSize( WIDTH, HEIGHT );
    };
    onWindowResize();
    window.addEventListener( 'resize', onWindowResize, false);
    // Create player's planet, which will also create its four satellites.
    const planet = new Planet;
    planet.addToScene(scene);
    // Create shield around the planet.
    const shield = new Shield();
    shield.addToScene(scene);
    shield.activate();
    // Click event listener that turns shield on or off if player clicks on planet.
    const raycaster = new Raycaster();
    document.onclick = event => {
        const mouse = new Vector2();
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1;
        raycaster.setFromCamera( mouse.clone(), camera );
        const thingsTouched = raycaster.intersectObjects(scene.children);
        thingsTouched.forEach(el => {
            if (el.object.name === 'Planet') {
                if (shield.getIsActive()) shield.deactivate();
                else shield.activate();
                return;
            }
        });
    };
    /**
     * The render loop. Everything that should be checked, called, or drawn in each animation frame.
     */
    const render = () => {
        planet.rotate();
        shield.endCycle(planet.getPowerRegenRate());
        renderer.render( scene, camera );
	    requestAnimationFrame( render );
    };
    // Kick off the first render loop iteration.
    renderer.render( scene, camera );
	requestAnimationFrame( render );
}