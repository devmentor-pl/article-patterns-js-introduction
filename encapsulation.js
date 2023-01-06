class Navigation {
    // # jako pole prywatne
    #L1 = 1602;

    // _ jako pole chronione
    _L2 = 3218;

    getDistanceTo(x) {
        const position = this._getCurrentPosition();
        return this._calculateDistanceToX(position, x, this.#L1);
    }
}

// SyntaxError: Private field '#L1' must be declared in an enclosing class
// console.log(carNavigation.#L1);

class BikeNavigation extends Navigation {
    getFieldValues() {
        console.log(this._L2); // 3218
        console.log(this.#L1); // Error Private field '#L1'
    }
}

const bikeNavigation = new BikeNavigation();
bikeNavigation.getFieldValues();
