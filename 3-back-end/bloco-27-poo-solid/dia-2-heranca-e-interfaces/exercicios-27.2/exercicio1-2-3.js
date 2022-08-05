"use strict";
class Tv {
    constructor(b, s, r, c) {
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;
    }
    turnOn() {
        console.log(`Marca ${this._brand} `);
    }
}
