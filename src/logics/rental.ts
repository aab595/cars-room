import { IRental } from "./IRental"

export enum CarType {
    Sedan        = 100,
    Coupe        = 150,
    StationWagon = 200,
    Cabriolet    = 250,
    Roadster     = 300,
    PickUp       = 350,
    _4x4         = 400,
    Suv          = 450,
    Multipurpose = 500,
    Minivan      = 550,
    Sport        = 600
}

export class Rental implements IRental {
    constructor(private _type: CarType, private _number: number) { }

    getPrice(): number {
        return this._type.valueOf() * this._number
    }

    setType(_newType: CarType) {
        this._type = _newType
    }
    
    setNumber(_newNumber: number) {
        this._number = _newNumber
    }
}
