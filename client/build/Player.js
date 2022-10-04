"use strict";
class Player {
    constructor(id, firstName, lastName, jerseyNumber, position, picture) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._jerseyNumber = jerseyNumber;
        this._position = position;
        this._picture = picture;
    }
    // === GET METHODS ===
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get jerseyNumber() {
        return this._jerseyNumber;
    }
    get position() {
        return this._position;
    }
    get picture() {
        return this._picture;
    }
    get id() {
        return this._id;
    }
    // === SET METHODS ===
    set firstName(name) {
        this._firstName = name;
    }
    set lastName(name) {
        this._lastName = name;
    }
    set jerseyNumber(num) {
        this._jerseyNumber = num;
    }
    set position(position) {
        this._position = position;
    }
    set picture(picture) {
        this._picture = picture;
    }
}
