


class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        console.log(this); // Wizard {}
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }

    play() {
        console.log(`WEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Tank');
const wizard2 = new Wizard('Shaun', 'Healer');