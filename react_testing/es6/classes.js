class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        // console.log('hi' + this.name + this.color) 
        console.log(`Hi ${this.name}, ${this.color}`)
    }
};



class Lion extends Animal {
    constructor(name, color, home, role) {
        super(name, color);
        this.role = role;
        this.home = home;
    }
    roar() {
        console.log(`${this.role} of the ${this.home}`)
    }
}

let lion = new Lion("Mupasa", 'golden', 'King', 'Africa')

console.log(lion);
lion.speak()
lion.roar()
