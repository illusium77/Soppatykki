export class Ingredient {

    name: string;

    constructor(name?: string) {
        this.name = name;
    }

    clone(): Ingredient {

        let copy = new Ingredient;
        copy.name = this.name;

        return copy;
    }
}