
Planet Funk
===========

(In Progress) A just for fun, if "Toejam & Earl" and "Mission Command" had a baby, planet defense game.  
  

* * *

Intro
-----

Planet Funk is under attack by the Federation of Tone Deaf Worlds. Their leader, Emperor Monotonous IV, in a fit of jealousy, had ordered the total annhilation of your rhythym-loving people.  
  

Seeing as you were the Funkiest of them all, your people have united their ability to jam and chose you to focus their bodacious talents in defense of all that is groovy.  
  

* * *

Instructions
------------

Touching screen, or clicking the left mouse button on play area will fire nearest working defensive weapon at the place of touch/click  
  

Touching screen, or clicking the left mouse button on Planet Funk will erect a temporary force field of protection if both A) one isn't already up, and B) there is enough energy in reserve. If energy is out, nothing happens. If barrier is already up, it will deactivate the barrier.  
  

Time recharges energy for both defensive weapons and barriers.  
  

Weapons that have been struck are rendered inactive and useless.  
  

Fewer active weapons allows the remaining weapons to charge faster.  
  

Fewer unscathed populated areas on the planet means slower planet shield recharge rate.  
  

* * *

Endgame
-------

When the planet has lost all four of its populated quadrants, GAME OVER.  
  

Score is determined by a timer, and destroyed enemy units. Every second alive adds a point to total score.  
  

Every 100,000 points will revive a damaged weapon. If all weapons are undamaged, a decimated populated area is rebuilt. If all weapons and populated areas are intact, then it's just points.  
  

* * *

Classes
-------

Detailed [documentation](docs/README.md)  
  

* * *

First Steps
-----------

1.  Navigate to the root folder where you want your project to reside.  
      
    
2.  Run `git clone https://github.com/WilliamRADFunk/planet-funk.git`.  
      
    
3.  Run `npm install`. If failure, see Common Gotchas section below.  
      
    
4.  Run `npm run start` and then simply navigate to `http://localhost:8080` in your browser.  
      
    

* * *

New to Gulp
-----------

\-\- Make sure to install Gulp at the global level, as this is a necessary step to make the boilerplate's scripts run.  
  

`npm install -g gulp`  
  

* * *

Common Gotchas
--------------

--Might get a failure to fully install when running `npm install`  
  

Try running `npm install --ignore-scripts`  
  

\-\- Might get the error  
"Error: ENOENT: no such file or directory, scandir 'your-path/small-project-boilerplate\\node_modules\\node-sass\\vendor'"  
  

To remedy this, simply run `npm rebuild node-sass`  
  

\-\- If you're running the `npm run readme` command, and your classes are not all present.  
  

Make sure you aren't importing a capitalized version of the name (ie. `import { Doug } from './Doug'` when it should in fact be `import { Doug } from './doug'`) assuming of course you've name the file with standard camelCase.

## Index

### External modules

* ["index"](modules/_index_.md)
* ["ts/asteroids/asteroid"](modules/_ts_asteroids_asteroid_.md)
* ["ts/asteroids/asteroid-generator"](modules/_ts_asteroids_asteroid_generator_.md)
* ["ts/collidable"](modules/_ts_collidable_.md)
* ["ts/collisionator"](modules/_ts_collisionator_.md)
* ["ts/controls/control-exit"](modules/_ts_controls_control_exit_.md)
* ["ts/controls/control-help"](modules/_ts_controls_control_help_.md)
* ["ts/controls/control-panel"](modules/_ts_controls_control_panel_.md)
* ["ts/controls/control-pause"](modules/_ts_controls_control_pause_.md)
* ["ts/controls/control-play"](modules/_ts_controls_control_play_.md)
* ["ts/controls/control-save"](modules/_ts_controls_control_save_.md)
* ["ts/displays/help-handler"](modules/_ts_displays_help_handler_.md)
* ["ts/displays/level-handler"](modules/_ts_displays_level_handler_.md)
* ["ts/displays/load-handler"](modules/_ts_displays_load_handler_.md)
* ["ts/displays/menu"](modules/_ts_displays_menu_.md)
* ["ts/displays/save-handler"](modules/_ts_displays_save_handler_.md)
* ["ts/displays/score-handler"](modules/_ts_displays_score_handler_.md)
* ["ts/enemies/enemy-missile-generator"](modules/_ts_enemies_enemy_missile_generator_.md)
* ["ts/enemies/saucer"](modules/_ts_enemies_saucer_.md)
* ["ts/enemies/saucer-generator"](modules/_ts_enemies_saucer_generator_.md)
* ["ts/init"](modules/_ts_init_.md)
* ["ts/models/game-load-data"](modules/_ts_models_game_load_data_.md)
* ["ts/player/base"](modules/_ts_player_base_.md)
* ["ts/player/planet"](modules/_ts_player_planet_.md)
* ["ts/player/satellite"](modules/_ts_player_satellite_.md)
* ["ts/player/shield"](modules/_ts_player_shield_.md)
* ["ts/utils/convert-to-hex"](modules/_ts_utils_convert_to_hex_.md)
* ["ts/utils/convert-to-int"](modules/_ts_utils_convert_to_int_.md)
* ["ts/utils/create-save-code"](modules/_ts_utils_create_save_code_.md)
* ["ts/utils/decipher-save-code"](modules/_ts_utils_decipher_save_code_.md)
* ["ts/weapons/explosion"](modules/_ts_weapons_explosion_.md)
* ["ts/weapons/projectile"](modules/_ts_weapons_projectile_.md)

---

