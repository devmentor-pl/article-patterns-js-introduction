/* Abstrakcja */
class Airport {
    constructor(name, runways) {
        this.name = name;
        this.runways = runways;
    }
}

// PassengerAirport dziedziczy po klasie Airport
// i dodaje własne właściwości jak terminals i restaurants
class PassengerAirport extends Airport {
    constructor(name, runways, terminals, restaurants) {
        super(name, runways);
        this.terminals = terminals;
        this.restaurants = restaurants;
    }
}

// SimAirport dziedziczy po klasie Airport
// i dodaje własne właściwości jak activeRunway i communication
class SimulatorAirport extends Airport {
    constructor(name, runways, activeRunway, communication) {
        super(name, runways);
        this.activeRunway = activeRunway;
        this.communication = communication;
    }
    setActiveRunway(runway) {
        this.activeRunway = runway;
    }
}

// Przykady zastosowania
const newPassengerAirport = new PassengerAirport(
    'EPGD',
    [6, 24],
    {
        terminalName: 'A',
        capacity: 10000
    },
    {
        terminalName: 'B',
        capacity: 5000
    },
    [('McDonalds', 'KFC', 'Starbucks')]
);

const newSimAirport = new SimulatorAirport('EPGD', [6, 24], 6, [
    {
        tower: 118.3,
        isOnline: true
    },
    {
        ground: 121.9,
        isOnline: false
    }
]);

console.log('newPassengerAirport', newPassengerAirport);
console.log('newSimAirport', newSimAirport);
