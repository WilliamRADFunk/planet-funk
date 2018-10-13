[planet-funk](../README.md) > ["ts/score-handler"](../modules/_ts_score_handler_.md)

# External module: "ts/score-handler"

## Index

### Classes

* [ScoreHandler](../classes/_ts_score_handler_.scorehandler.md)

### Type aliases

* [ScoreDigits](_ts_score_handler_.md#scoredigits)
* [ScoreGeometries](_ts_score_handler_.md#scoregeometries)

### Variables

* [positionIndex](_ts_score_handler_.md#positionindex)

---

## Type aliases

<a id="scoredigits"></a>

###  ScoreDigits

**Ƭ ScoreDigits**: *`Mesh`[]*

*Defined in [ts/score-handler.ts:10](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/score-handler.ts#L10)*

___
<a id="scoregeometries"></a>

###  ScoreGeometries

**Ƭ ScoreGeometries**: *`TextGeometry`[]*

*Defined in [ts/score-handler.ts:9](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/score-handler.ts#L9)*

___

## Variables

<a id="positionindex"></a>

### `<Const>` positionIndex

**● positionIndex**: *`number`[]* =  [ -3.5, -3.15, -2.8, -2.45, -2.1, -1.75, -1.4, -1.05, -0.7, -0.35 ]

*Defined in [ts/score-handler.ts:15](https://github.com/WilliamRADFunk/planet-funk/blob/05e0e7f/src/ts/score-handler.ts#L15)*

Iterable list of x positions for each digit of the score. Necessary since constantly recreating TextGeometries with each new score is very costly.

___

