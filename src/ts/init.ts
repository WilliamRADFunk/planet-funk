import {
    AmbientLight,
    CanvasRenderer,
    DoubleSide,
    Mesh,
    MeshBasicMaterial,
    OrthographicCamera,
    PlaneGeometry,
    Raycaster,
    Scene,
    WebGLRenderer,
    Vector2 } from 'three';

import { CollisionatorSingleton } from './collisionator';
import { Planet } from './planet';
import { Shield } from './shield';
import { AsteroidGenerator } from './asteroid-generator';
import { ScoreHandler } from './score-handler';
import { EnemyMissileGenerator } from './enemy-missile-generator';
import { LevelHandler } from './level-handler';
import { SaucerGenerator } from './saucer-generator';
/**
 * Placeholder function typically used to initiate the applications loop.
 */
export default () => {
    let isGameLive = true;
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
    const camera =  new OrthographicCamera( -6, 6, -6, 6, 0, 100 );
	camera.position.set(0, -20, 0);
    camera.lookAt(scene.position);
    /**
     * Gracefully handles a change in window size, by recalculating shape and updating camera and renderer.
     */
    const onWindowResize = () => {
        WIDTH = window.innerWidth * 0.99;
        HEIGHT = window.innerHeight * 0.99;
        if(WIDTH < HEIGHT) HEIGHT = WIDTH;
        else WIDTH = HEIGHT;
        renderer.setSize( WIDTH, HEIGHT );
        document.getElementById('mainview').style.left = (((window.innerWidth * 0.99) - WIDTH) / 2) + 'px';
    };
    onWindowResize();
    window.addEventListener( 'resize', onWindowResize, false);
    // Create player's planet, which will also create its four satellites.
    const planet = new Planet;
    planet.addToScene(scene);
    CollisionatorSingleton.add(planet);
    // Create shield around the planet.
    const shield = new Shield();
    shield.addToScene(scene);
    CollisionatorSingleton.add(shield);
    // Create the click collision layer
    const clickBarrierGeometry = new PlaneGeometry( 12, 12, 0, 0 );
    const clickBarrierMaterial = new MeshBasicMaterial( {opacity: 0, transparent: true, side: DoubleSide} );
    const clickBarrier = new Mesh( clickBarrierGeometry, clickBarrierMaterial );
    clickBarrier.name = 'Click Barrier';
    clickBarrier.position.set(0, 0, 0);
    clickBarrier.rotation.set(1.5708, 0, 0);
    scene.add(clickBarrier);
    // Click event listener that turns shield on or off if player clicks on planet. Fire weapon otherwise.
    const raycaster = new Raycaster();
    document.onclick = event => {
        const mouse = new Vector2();
        event.preventDefault();
        // Gets accurate click positions using css and raycasting.
        const position = {
            left: container.offsetLeft,
            top: container.offsetTop
        };
        const scrollUp = document.getElementsByTagName('body')[0].scrollTop;
        if (event.clientX !== undefined) {
            mouse.x = ((event.clientX - position.left) / container.clientWidth) * 2 - 1;
            mouse.y = - ((event.clientY - position.top + scrollUp) / container.clientHeight) * 2 + 1;
        }
        raycaster.setFromCamera(mouse, camera);
        const thingsTouched = raycaster.intersectObjects(scene.children);
        let launchFlag = true;
        // Detection for player clicked on planet for shield manipulation.
        thingsTouched.forEach(el => {
            if (el.object.name === 'Shield') {
                if (shield.getActive()) shield.deactivate();
                else shield.activate();
                launchFlag = false;
                return;
            }
        });
        // Detection for where (if not planet) player clicked to fire satellite weapons.
        if (launchFlag) {
            thingsTouched.forEach(el => {
                if (el.object.name === 'Click Barrier') {
                    planet.fire(scene, el.point);
                    return;
                }
            });
        }
    };
    const levelHandler = new LevelHandler(scene);
    const scoreboard = new ScoreHandler(scene, levelHandler.getColor());
    const asteroidGenerator = new AsteroidGenerator(scene, scoreboard);
    const saucerGenerator = new SaucerGenerator(scene, scoreboard);
    const enemyMissileGenerator = new EnemyMissileGenerator(scene, scoreboard, levelHandler.getColor());
    let jobCounter = 0;
    let noMissiles = false;
    let noAsteroids = false;
    let noSaucers = false;
    /**
     * The render loop. Everything that should be checked, called, or drawn in each animation frame.
     */
    const render = () => {
        jobCounter++;
        if (jobCounter > 10) jobCounter = 0;

        // Only run operations allowed during a fluctuating banner animation.
        if (levelHandler.isAnimating()) {
            const levelBannerPeak = levelHandler.runAnimationCycle();
            if (levelBannerPeak && isGameLive) {
                scoreboard.nextLevel(levelHandler.getColor());
            }
            // Periodically check if things collided.
            if (jobCounter === 10) {
                CollisionatorSingleton.checkForCollisions(scene);
            }
            // Let the last explosions finish off even during next level banner animation.
            noAsteroids = asteroidGenerator.endCycle(isGameLive);
            noSaucers = saucerGenerator.endCycle(isGameLive);
            noMissiles = enemyMissileGenerator.endCycle(isGameLive);
            // To give the game over screen a more interesting feel,
            // spawn moer asteroids and missiles after they've exhausted themselves.
            if (noAsteroids && noMissiles && (noSaucers || !isGameLive)) {
                enemyMissileGenerator.refreshLevel(levelHandler.getLevel(), levelHandler.getColor());
                asteroidGenerator.refreshLevel(levelHandler.getLevel());
                saucerGenerator.refreshLevel(levelHandler.getLevel());
            }
            // The world keeps on spinning.
            planet.endCycle();
            // If dead, drain the battery. If not, let charging get a head start.
            shield.endCycle(planet.getPowerRegenRate());
        // Run operations unrelated to fluctuating banner animation
        } else {
            // Checks to make sure game isn't over.
            if (isGameLive) {
                const status = planet.getStatus();
                isGameLive = status.quadrantBlue || status.quadrantGreen || status.quadrantPurple || status.quadrantYellow;
                // If game is over, stop increasing the score.
                scoreboard.endCycle();
                // If game is over, level can't change.
                levelHandler.endCycle();
                if (!isGameLive) levelHandler.endGame();
            }
            // Periodically check if things collided.
            if (jobCounter === 10) {
                CollisionatorSingleton.checkForCollisions(scene);
            }
            noAsteroids = asteroidGenerator.endCycle(isGameLive);
            noSaucers = saucerGenerator.endCycle(isGameLive);
            noMissiles = enemyMissileGenerator.endCycle(isGameLive);
            planet.endCycle();
            shield.endCycle(planet.getPowerRegenRate());
            // Game is still live but there are no more enemy missiles or asteroids.
            // Increase the level and refresh everything.
            if (isGameLive && noAsteroids && noMissiles && noSaucers) {
                levelHandler.nextLevel();
                scoreboard.endCycle(true);
                asteroidGenerator.refreshLevel(levelHandler.getLevel());
                saucerGenerator.refreshLevel(levelHandler.getLevel());
                enemyMissileGenerator.refreshLevel(levelHandler.getLevel(), levelHandler.getColor());
            }
        }
        renderer.render( scene, camera );
	    requestAnimationFrame( render );
    };
    // Kick off the first render loop iteration.
    renderer.render( scene, camera );
	requestAnimationFrame( render );
}