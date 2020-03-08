class Animal {
    constructor(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }
}
class Dog extends Animal {
    constructor(type, name, age) {
        super(type, name, age);
        this.type = type;
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + "吃狗粮");
    }
    log() {
        console.log(`这条${this.type}叫${this.name}`);
    }
}
class Cat extends Animal {
    constructor(type, name, age) {
        super(type, name, age);
        this.type = type;
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + "吃猫粮");
    }
    log() {
        console.log(`这只${this.type}叫${this.name}`);
    }
}
const dog = new Dog("柯基", "哈哈", 1);
dog.log();
dog.eat();
const cat = new Cat("折耳", "嘻嘻", 2);
cat.log();
cat.eat();
