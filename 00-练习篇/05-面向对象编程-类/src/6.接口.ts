interface ILog{
    log(): void;
}
abstract class Animal{
    constructor(
        public type: string,
        public name: string,
        public age: number
    ){

    }
    abstract eat(): void;
}

class Dog extends Animal implements ILog{
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

    log(){
        console.log(`这条${this.type}叫${this.name}`)
    }
}

class Cat extends Animal implements ILog{
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

    log(){
        console.log(`这只${this.type}叫${this.name}`)
    }
}

const dog = new Dog("柯基", "哈哈", 1);
dog.log();
dog.eat();

const cat = new Cat("折耳", "嘻嘻", 2);
cat.log();
cat.eat();