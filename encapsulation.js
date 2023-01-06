class Navigation {
    // # jako pole prywatne
    #L1 = 1602;

    getDistanceTo(x) {
        const position = this._getCurrentPosition();
        return this._calculateDistanceToX(position, x, this.#L1);
    }
}

const carNavigation = new Navigation();

// SyntaxError: Private field '#L1' must be declared in an enclosing class
console.log(carNavigation.#L1);
