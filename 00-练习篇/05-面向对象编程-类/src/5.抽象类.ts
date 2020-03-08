abstract class Animal{
    constructor(
        public type: string,
        public name: string,
        public age: number
    ){

    }
    abstract eat(): void;
}

class Dog extends Animal{
    constructor(
        public type: string,
        public name: string,
        public age: number
    ){
        super(type, name, age);
    }

    eat(){
        console.log(this.name + "吃狗粮")
    }
}

class Cat extends Animal{
    constructor(
        public type: string,
        public name: string,
        public age: number
    ){
        super(type, name, age);
    }

    eat(){
        console.log(this.name + "吃猫粮")
    }
}