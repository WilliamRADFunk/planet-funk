[planet-funk](../README.md) > ["ts/displays/save-handler"](../modules/_ts_displays_save_handler_.md)

# External module: "ts/displays/save-handler"

## Index

### Classes

* [SaveHandler](../classes/_ts_displays_save_handler_.savehandler.md)

### Variables

* [positionIndex](_ts_displays_save_handler_.md#positionindex)

---

## Variables

<a id="positionindex"></a>

### `<Const>` positionIndex

**● positionIndex**: *`number`[]* =  [ -3.2, -2.7, -2.2, -1.7, -1.2, -0.7, -0.2, 0.3, 0.8, 1.3, 1.8, 2.3, 2.8, 3.3, 3.8, 4.3 ]

*Defined in [ts/displays/save-handler.ts:16](https://github.com/WilliamRADFunk/planet-funk/blob/84f9ac1/src/ts/displays/save-handler.ts#L16)*

Iterable list of x positions for each digit of the save code. Necessary since constantly recreating TextGeometries with each new score is very costly.

___

