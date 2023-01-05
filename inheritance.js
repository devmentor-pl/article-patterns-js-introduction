/* Dziedziczenie */
class Airport {
    constructor(name, runways, activeRunway, communication) {
        this.name = name;
        this.runways = runways;
        this.activeRunway = activeRunway;
        this.communication = communication;
    }

    setActiveRunway(runway) {
        this.activeRunway = runway;
    }
}

class PolishAirport extends Airport {
    constructor(name, runways, activeRunway, communication) {
        super(name, runways, activeRunway, communication);
        this.country = 'Poland';
    }
}

const warsawAirport = new Airport('EPWA', [11, 15, 29, 33], null, {
    tower: 118.3,
    ground: 121.9,
    approach: 125.05
});

const krakowAirport = new PolishAirport('EPKK', [7, 25], 7, {
    tower: 123.25,
    ground: 118.1,
    approach: 121.07
});

console.log(krakowAirport);
