import {
    AmbientLight,
    CanvasRenderer,
    DoubleSide,
    Font,
    FontLoader,
    Mesh,
    MeshBasicMaterial,
    OrthographicCamera,
    PlaneGeometry,
    Raycaster,
    Scene,
    TextureLoader,
    WebGLRenderer,
    Vector2, 
    Texture,
    Camera} from 'three';

import { CollisionatorSingleton } from './collisionator';
import { Planet } from './player/planet';
import { Shield } from './player/shield';
import { AsteroidGenerator } from './asteroids/asteroid-generator';
import { ScoreHandler } from './displays/score-handler';
import { EnemyMissileGenerator } from './enemies/enemy-missile-generator';
import { LevelHandler } from './displays/level-handler';
import { SaucerGenerator } from './enemies/saucer-generator';
import { Menu } from './displays/menu';
import { ControlPanel } from './controls/control-panel';

/**
 * Loads the graphic for asteroid.
 */
const asteroidLoader = new TextureLoader();
/**
 * The loaded texture, used for the asteroids.
 */
let asteroidTexture: Texture;
/**
 * Loads the graphics for buildings.
 */
const buildingLoaders: TextureLoader[] = [
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader()
];
/**
 * The loaded textures, used for the buildings.
 */
const buildingTextures: Texture[] = [];
/**
 * The camera for main menu
 */
let cameraMenu: Camera;
/**
 * Loads the font from a json file.
 */
const fontLoader = new FontLoader();
/**
 * The loaded font, used for the scoreboard.
 */
let gameFont: Font;
/**
 * Flag to allow menu rendering to continue.
 */
let isMenuMode: boolean = true;
/**
 * Instance of Menu for controlling buttons and menu lighting.
 */
let menu: Menu;
/**
 * Loads the graphics for planet.
 */
const planetLoaders: TextureLoader[] = [
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader()
];
/**
 * The loaded textures, used for the planet.
 */
const planetTextures: Texture[] = [];
/**
 * The renderer for main menu
 */
let rendererMenu: WebGLRenderer|CanvasRenderer;
/**
 * Loads the graphics for saucers.
 */
const saucerLoaders: TextureLoader[] = [
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader(),
    new TextureLoader()
];
/**
 * The loaded textures, used for the saucers.
 */
const saucerTextures: Texture[] = [];
/**
 * The scene for main menu.
 */
let sceneMenu: Scene;
/**
 * Loads the graphics for specMap.
 */
const specMapLoader = new TextureLoader();
/**
 * The loaded font, used for the scoreboard.
 */
let specMap: Texture;
/**
 * Passes the callback functions to font and texture loaders,
 * each fitted with their chance to check if all others are done.
 */
const loadAssets = () => {
    // Callback function to set the asteroid texture once it is finished loading.
    asteroidLoader.load( 'assets/images/asteroid.png', texture => {
        asteroidTexture = texture;
        checkAssetsLoaded();
    });
    // Get the ball rolling on each of the five saucer texture loads.
    buildingLoaders.forEach((loader, index) => {
        buildingLoaders[index].load( `assets/images/building${index + 1}.png`, texture => {
            buildingTextures[index] = texture;
            checkAssetsLoaded();
        });
    });
    // Callback function to set the scoreboard font once it is finished loading.
    fontLoader.load( 'assets/fonts/Light Pixel-7_Regular.json', font => {
        gameFont = font;
        checkAssetsLoaded();
    });
    // Callback function to set the planet foundation texture once it is finished loading.
    planetLoaders[0].load( 'assets/images/funkmap.jpg', texture => {
        planetTextures[0] = texture;
        checkAssetsLoaded();
    });
    // Callback function to set the planet dead texture once it is finished loading.
    planetLoaders[2].load( 'assets/images/funkmap_dead.jpg', texture => {
        planetTextures[2] = texture;
        checkAssetsLoaded();
    });
    // Callback function to set the planet bump texture once it is finished loading.
    planetLoaders[1].load( 'assets/images/funkbump.jpg', texture => {
        planetTextures[1] = texture;
        checkAssetsLoaded();
    });
    // Get the ball rolling on each of the five saucer texture loads.
    saucerLoaders.forEach((loader, index) => {
        saucerLoaders[index].load( `assets/images/saucer${index + 1}.png`, texture => {
            saucerTextures[index] = texture;
            checkAssetsLoaded();
        });
    });
    // Callback function to set the specMap texture once it is finished loading.
    specMapLoader.load( 'assets/images/funkspec.jpg', texture => {
        specMap = texture;
        checkAssetsLoaded();
    });
};
/**
 * Checks to see if all assets are finished loaded. If so, start rendering the game.
 */
const checkAssetsLoaded = () => {
    if (gameFont && asteroidTexture && specMap &&
        buildingTextures.length === buildingLoaders.length &&
        saucerTextures.length === saucerLoaders.length &&
        planetTextures.length === planetLoaders.length) {
        loadMenu();
    }
};
const loadMenu = () => {
    // Establish initial window size.
    let WIDTH: number = window.innerWidth * 0.99;
    let HEIGHT: number = window.innerHeight * 0.99;
    // Create ThreeJS scene.
    sceneMenu = new Scene();
    // Choose WebGL renderer if browser supports, otherwise fall back to canvas renderer.
    rendererMenu = ((window as any)['WebGLRenderingContext']) ?
        new WebGLRenderer() : new CanvasRenderer();
    // Make it black and size it to window.
    (rendererMenu as any).setClearColor(0x000000, 0);
    rendererMenu.setSize( WIDTH, HEIGHT );
    rendererMenu.autoClear = false;
    // An all around brightish light that hits everything equally.
    // sceneMenu.add(new AmbientLight(0xCCCCCC));
    // Render to the html container.
    const container = document.getElementById('mainview');
	container.appendChild( (rendererMenu as any).domElement );
    // Set up player's ability to see the game, and focus center on planet.
    cameraMenu =  new OrthographicCamera( -6, 6, -6, 6, 0, 100 );
	cameraMenu.position.set(0, -20, 0);
    cameraMenu.lookAt(sceneMenu.position);
    /**
     * Gracefully handles a change in window size, by recalculating shape and updating cameraMenu and rendererMenu.
     */
    const onWindowResize = () => {
        WIDTH = window.innerWidth * 0.99;
        HEIGHT = window.innerHeight * 0.99;
        if(WIDTH < HEIGHT) HEIGHT = WIDTH;
        else WIDTH = HEIGHT;
        rendererMenu.setSize( WIDTH, HEIGHT );
        document.getElementById('mainview').style.left = (((window.innerWidth * 0.99) - WIDTH) / 2) + 'px';
        document.getElementById('mainview').style.width = WIDTH + 'px';
        document.getElementById('mainview').style.height = HEIGHT + 'px';
    };
    onWindowResize();
    window.addEventListener( 'resize', onWindowResize, false);
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
        raycaster.setFromCamera(mouse, cameraMenu);
        const thingsTouched = raycaster.intersectObjects(sceneMenu.children);
        // Detection for player clicked on planet for shield manipulation.
        thingsTouched.forEach(el => {
            if (el.object.name === 'Start') {
                const difficulty = menu.pressedStart();
                setTimeout(() => {
                    isMenuMode = false;
                    container.removeChild( (rendererMenu as any).domElement );
                    loadGame(difficulty);
                }, 750);
            } else if (el.object.name === 'Easy') {
                menu.changeDifficulty(0);
            } else if (el.object.name === 'Normal') {
                menu.changeDifficulty(1);
            } else if (el.object.name === 'Hard') {
                menu.changeDifficulty(2);
            } else if (el.object.name === 'Hardcore') {
                menu.changeDifficulty(3);
            } else if (el.object.name === 'Load') {
                const validLoad = menu.pressedLoad();
                setTimeout(() => {
                    if (validLoad) {
                        console.log('Transitioning to load menu...');
                        menu.returnToMainMenu();
                    }
                }, 750);
            } else if (el.object.name === 'Help') {
                console.log('Transitioning to help menu...');
                menu.pressedHelp();
            } else if (el.object.name === 'Return') {
                console.log('Transitioning to menu...');
                menu.pressedReturn();
                setTimeout(() => {
                    menu.returnToMainMenu();
                }, 250);
            }
        });
    };
    menu = new Menu(sceneMenu, gameFont, saucerTextures, asteroidTexture, buildingTextures, specMap, planetTextures);
    startMenuRendering();
};
const startMenuRendering = () => {
    /**
     * The render loop. Everything that should be checked, called, or drawn in each animation frame.
     */
    const render = () => {
        if (isMenuMode) {
            menu.endCycle();
            rendererMenu.render( sceneMenu, cameraMenu );
            requestAnimationFrame( render );
        }
    };
    // Kick off the first render loop iteration.
    rendererMenu.render( sceneMenu, cameraMenu );
	requestAnimationFrame( render );
};
/**
 * All things game related. Only starts when all assets are finished loading.
 * @param difficulty player's choice in difficulty level.
 */
const loadGame = (difficulty: number) => {
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
        document.getElementById('mainview').style.width = WIDTH + 'px';
        document.getElementById('mainview').style.height = HEIGHT + 'px';
    };
    onWindowResize();
    window.addEventListener( 'resize', onWindowResize, false);
    // Create player's planet, which will also create its four satellites.
    const planet = new Planet();
    planet.addToScene(scene, planetTextures, buildingTextures, specMap);
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

    // Create Score and Level handlers 
    const levelHandler = new LevelHandler(scene, gameFont, difficulty);
    const scoreboard = new ScoreHandler(scene, levelHandler.getColor(), gameFont);
    // Create all unit generators that can be dangerous to player
    const asteroidGenerator = new AsteroidGenerator(scene, scoreboard, asteroidTexture, difficulty);
    const saucerGenerator = new SaucerGenerator(scene, scoreboard, saucerTextures, difficulty);
    const enemyMissileGenerator = new EnemyMissileGenerator(scene, scoreboard, levelHandler.getColor(), difficulty);
    // Create control panel in upper right corner of screen.
    const controlPanel = new ControlPanel(scene, 3.95, -5.55, difficulty, levelHandler.getColor(), gameFont);

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
        // Detection for player clicked on pause button
        thingsTouched.forEach(el => {
            if (el.object.name === 'Pause Button') {
                controlPanel.pauseChange();
                launchFlag = false;
                return;
            }
            if (el.object.name === 'Help Button') {
                controlPanel.helpChange();
                launchFlag = false;
                return;
            }
            if (el.object.name === 'Save Button') {
                console.log('Save!');
                controlPanel.save();
                launchFlag = false;
                return;
            }
        });
        if (!controlPanel.isPaused()) {
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
        }
    };
    
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

        if (controlPanel.isPaused()) {
            // When paused, do nothing but render.
        // Only run operations allowed during a fluctuating banner animation.
        } else if (levelHandler.isAnimating()) {
            const levelBannerPeak = levelHandler.runAnimationCycle();
            if (levelBannerPeak && isGameLive) {
                controlPanel.nextLevel(levelHandler.getColor());
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
            // spawn more asteroids and missiles after they've exhausted themselves.
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
                // No matter what let control panel be visible again.
                controlPanel.endCycle();
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
                controlPanel.endCycle(true);
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
};
/**
 * Called by DOM when page is finished loading. Now load assets, then the game.
 */
export default () => {
    loadAssets();
}