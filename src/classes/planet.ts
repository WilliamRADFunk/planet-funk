interface PlanetStatus {
    quadrantBlue: boolean;
    quadrantGreen: boolean;
    quadrantPurple: boolean;
    quadrantYellow: boolean;
}
class Planet {
    /**
     * Constructor for the Planet class
     * @hidden
     */
    constructor() {}
    /**
     * Getter for status of the planet's four populated quadrants. True = Alive | False = Dead
     * @returns an object with the four color-coded quadrants representing life/death of that area.
     */
    getStatus(): PlanetStatus {
        return {
            quadrantBlue: true,
            quadrantGreen: true,
            quadrantPurple: true,
            quadrantYellow: true,
        };
    }
}