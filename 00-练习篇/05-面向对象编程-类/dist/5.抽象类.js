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
}
