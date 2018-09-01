# Planet Funk
(In Progress) A just for fun, if "Toejam &amp; Earl" and "Mission Command" had a baby, planet defense game.</br></br>

***

## Intro

Planet Funk is under attack by the Federation of Tone Deaf Worlds. Their leader, Emperor Monotonous IV, in a fit of jealousy, had ordered the total annhilation of your rhythym-loving people.</br></br>

Seeing as you were the Funkiest of them all, your people have united their ability to jam and chose you to focus their bodacious talents in defense of all that is groovy.</br></br>

***

## Instructions

Touching screen, or clicking the left mouse button on play area will fire nearest working defensive weapon at the place of touch/click</br></br>

Touching screen, or clicking the left mouse button on Planet Funk will erect a temporary force field of protection if both A) one isn't already up, and B) there is enough energy in reserve. If energy is out, nothing happens. If barrier is already up, it will deactivate the barrier.</br></br>

Time recharges energy for both defensive weapons and barriers.</br></br>

Weapons that have been struck are rendered inactive and useless.</br></br>

Fewer active weapons allows the remaining weapons to charge faster.</br></br>

Fewer unscathed populated areas on the planet means slower planet shield recharge rate.</br></br>

***

## Endgame

When the planet has lost all four of its populated quadrants, GAME OVER.</br></br>

Score is determined by a timer, and destroyed enemy units. Every second alive adds a point to total score.</br></br>

Every 100,000 points will revive a damaged weapon. If all weapons are undamaged, a decimated populated area is rebuilt. If all weapons and populated areas are intact, then it's just points.</br></br>

***

## Classes

Detailed [documentation](docs/README.md)</br></br>

***

## First Steps

1. Navigate to the root folder where you want your project to reside.</br></br>

2. Run `git clone https://github.com/WilliamRADFunk/planet-funk.git`.</br></br>

3. Run `npm install`. If failure, see Common Gotchas section below.</br></br>

4. Run `npm run start` and then simply navigate to `http://localhost:8080` in your browser.</br></br>

***

## New to Gulp

-- Make sure to install Gulp at the global level, as this is a necessary step to make the boilerplate's scripts run.</br></br>

`npm install -g gulp`</br></br>

***

## Common Gotchas

--Might get a failure to fully install when running `npm install`</br></br>

Try running `npm install --ignore-scripts`</br></br>

-- Might get the error</br>
"Error: ENOENT: no such file or directory, scandir 'your-path/small-project-boilerplate\node_modules\node-sass\vendor'"</br></br>

To remedy this, simply run `npm rebuild node-sass`</br></br>

-- If you're running the `npm run readme` command, and your classes are not all present.</br></br>

Make sure you aren't importing a capitalized version of the name (ie. `import { Doug } from './Doug'` when it should in fact be `import { Doug } from './doug'`) assuming of course you've name the file with standard camelCase.
