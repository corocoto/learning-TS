class Typescript {
    version: string
    constructor(version: string) {
        this.version = version;
    }
    info(name: string): string{
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class Car{
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string) {
       this.model = theModel;
    }
}

class Car2 {
    readonly numberOfWheels: number = 4;

    constructor(readonly model: string) {}
}

// модификаторы
class Animal {
    protected voice: string = '';
    public color: string = 'white';

    constructor() {
        this.go();
    }

    private go(): void{
        console.log('Go');
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void{
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoice('Meow');
console.log(cat.color);


// абстрактные классы
abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component{
    render(): void {
        console.log('Component is render');
    }
    info(): string {
        return 'Some info';
    }
}