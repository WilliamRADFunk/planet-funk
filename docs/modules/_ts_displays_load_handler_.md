[planet-funk](../README.md) > ["ts/displays/load-handler"](../modules/_ts_displays_load_handler_.md)

# External module: "ts/displays/load-handler"

## Index

### Classes

* [LoadHandler](../classes/_ts_displays_load_handler_.loadhandler.md)

### Variables

* [positionIndex](_ts_displays_load_handler_.md#positionindex)

---

## Variables

<a id="positionindex"></a>

### `<Const>` positionIndex

**● positionIndex**: *`number`[]* =  [ -3.2, -2.7, -2.2, -1.7, -1.2, -0.7, -0.2, 0.3, 0.8, 1.3, 1.8, 2.3, 2.8, 3.3, 3.8, 4.3 ]

*Defined in [ts/displays/load-handler.ts:18](https://github.com/WilliamRADFunk/planet-funk/blob/e4c30d1/src/ts/displays/load-handler.ts#L18)*

Iterable list of x positions for each digit of the load code. Necessary since constantly recreating TextGeometries with each new score is very costly.

___

