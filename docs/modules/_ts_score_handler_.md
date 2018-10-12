[planet-funk](../README.md) > ["ts/score-handler"](../modules/_ts_score_handler_.md)

# External module: "ts/score-handler"

## Index

### Classes

* [ScoreHandler](../classes/_ts_score_handler_.scorehandler.md)

### Type aliases

* [ScoreDigits](_ts_score_handler_.md#scoredigits)
* [ScoreGeometries](_ts_score_handler_.md#scoregeometries)

### Variables

* [loader](_ts_score_handler_.md#loader)
* [positionIndex](_ts_score_handler_.md#positionindex)
* [scoreFont](_ts_score_handler_.md#scorefont)

---

## Type aliases

<a id="scoredigits"></a>

###  ScoreDigits

**Ƭ ScoreDigits**: *`Mesh`[]*

*Defined in [ts/score-handler.ts:11](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L11)*

___
<a id="scoregeometries"></a>

###  ScoreGeometries

**Ƭ ScoreGeometries**: *`TextGeometry`[]*

*Defined in [ts/score-handler.ts:10](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L10)*

___

## Variables

<a id="loader"></a>

### `<Const>` loader

**● loader**: *`FontLoader`* =  new FontLoader()

*Defined in [ts/score-handler.ts:15](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L15)*

Loads the font from a json file.

___
<a id="positionindex"></a>

### `<Const>` positionIndex

**● positionIndex**: *`number`[]* =  [ -3.5, -3.15, -2.8, -2.45, -2.1, -1.75, -1.4, -1.05, -0.7, -0.35 ]

*Defined in [ts/score-handler.ts:30](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L30)*

Iterable list of x positions for each digit of the score. Necessary since constantly recreating TextGeometries with each new score is very costly.

___
<a id="scorefont"></a>

### `<Let>` scoreFont

**● scoreFont**: *`Font`*

*Defined in [ts/score-handler.ts:19](https://github.com/WilliamRADFunk/planet-funk/blob/cf5d1fe/src/ts/score-handler.ts#L19)*

The loaded font, used for the scoreboard.

___

