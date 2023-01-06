class Airport {
    navigationalAid = 'GPS';

    initApproach() {
        console.log(`Approach initiated with ${this.navigationalAid}`);
    }
}

class WarsawAirport extends Airport {}

class KrakowAirport extends Airport {
    // polimorfizm metody initApproach()
    initApproach() {
        this.navigationalAid = 'ILS';
        console.log(`Approach initiated with ${this.navigationalAid}`);
    }
}

const airport = new Airport();
const warsawAirport = new WarsawAirport();
const krakowAirport = new KrakowAirport();

airport.initApproach(); // Approach initiated with GPS
warsawAirport.initApproach(); // Approach initiated with GPS
krakowAirport.initApproach(); // Approach initiated with ILS
