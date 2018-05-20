class Dog {
    // Default constructor
    constructor(name) {
        this.name = name;
    }

    // Always returns woof
    speak() {
        return "woof";
    }
}

class Labrador extends Dog {
    // Default constructor calls parent constructor
    constructor(name, color, breedWeight) {
        super(name);
        this.color = color;
        this.breedWeight = breedWeight;
    }

    // Overrides parent speak()
    speak() {
        return "Labrador says WOOF";
    }
}