import { AmbientLight, CanvasRenderer, Scene, WebGLRenderer, PerspectiveCamera } from 'three';

import { Planet } from './Planet';
/**
 * Placeholder function typically used to initiate the applications loop.
 */
export default () => {
    const WIDTH: number = (window as any).innerWidth * 0.99;
    const HEIGHT: number = (window as any).innerHeight * 0.99;

    const scene = new Scene();

    const renderer: WebGLRenderer|CanvasRenderer = ((window as any)['WebGLRenderingContext']) ?
        new WebGLRenderer() : new CanvasRenderer();
    (renderer as any).setClearColor(0x000000, 0);
    renderer.setSize( WIDTH, HEIGHT );
    renderer.autoClear = false;

    scene.add(new AmbientLight(0x333333));

    const container = document.getElementById('mainview');
	container.appendChild( (renderer as any).domElement );

    const camera =  new PerspectiveCamera( 25, WIDTH / HEIGHT, 0.01, 1000 );
	camera.position.set(0, 40, 0);
    camera.lookAt(scene.position);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize( WIDTH, HEIGHT );

    const planet = new Planet;
    planet.addToScene(scene);

    const render = function() {
        planet.rotate();
        renderer.render( scene, camera );
	    requestAnimationFrame( render );
    }

    renderer.render( scene, camera );
	requestAnimationFrame( render );
}