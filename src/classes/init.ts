import { AmbientLight, CanvasRenderer, Scene, WebGLRenderer, PerspectiveCamera, Raycaster, Vector2 } from 'three';

import { Planet } from './planet';
import { Shield } from './shield';
import { Satellite } from './satellite';
/**
 * Placeholder function typically used to initiate the applications loop.
 */
export default () => {
    let WIDTH: number = window.innerWidth * 0.99;
    let HEIGHT: number = window.innerHeight * 0.99;

    const scene = new Scene();

    const renderer: WebGLRenderer|CanvasRenderer = ((window as any)['WebGLRenderingContext']) ?
        new WebGLRenderer() : new CanvasRenderer();
    (renderer as any).setClearColor(0x000000, 0);
    renderer.setSize( WIDTH, HEIGHT );
    renderer.autoClear = false;

    scene.add(new AmbientLight(0xCCCCCC));

    const container = document.getElementById('mainview');
	container.appendChild( (renderer as any).domElement );

    const camera =  new PerspectiveCamera( 25, WIDTH / HEIGHT, 0.01, 1000 );
	camera.position.set(0, 20, 0);
    camera.lookAt(scene.position);

    const onWindowResize = () => {
        WIDTH = window.innerWidth * 0.99;
        HEIGHT = window.innerHeight * 0.99;
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
        renderer.setSize( WIDTH, HEIGHT );
    };

    onWindowResize();

    window.addEventListener( 'resize', onWindowResize, false);

    const planet = new Planet;
    const sat1 = new Satellite(1);
    planet.addToOrbit(sat1);
    const sat2 = new Satellite(2);
    planet.addToOrbit(sat2);
    const sat3 = new Satellite(3);
    planet.addToOrbit(sat3);
    const sat4 = new Satellite(4);
    planet.addToOrbit(sat4);
    planet.addToScene(scene);

    const shield = new Shield();
    shield.addToScene(scene);
    shield.activate();

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

    const render = () => {
        planet.rotate();
        shield.endCycle(planet.getPowerRegenRate());
        renderer.render( scene, camera );
	    requestAnimationFrame( render );
    };

    renderer.render( scene, camera );
	requestAnimationFrame( render );
}