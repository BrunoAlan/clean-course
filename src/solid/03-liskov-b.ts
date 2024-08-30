export abstract class Vehicle {
    // getNumberOfSeats(): number {
    //     throw new Error('Method not implemented.');
    // }

    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    getNumberOfTeslaSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfAudiSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    getNumberOfToyotaSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    getNumberOfHondaSeats() {
        return this.numberOfSeats;
    }
}

export class Renault extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    getNumberOfRenaultSeats() {
        return this.numberOfSeats;
    }
}
