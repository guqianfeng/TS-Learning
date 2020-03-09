class Person {
    // say(){} //这个猫里面没有会报错，玩意在方法中调用say就不行了
    eat() {
    }
}
class Cat {
    catchMouse() {
        // 这个不会报错，因为p.name猫里面是有这个属性
    }
    eat() {
    }
}
let person1 = new Person();
let cat1 = new Cat();
function fn1(p) {
    p.name;
}
fn1(cat1);
function fn2(arg) {
    arg.eat();
}
fn2(person1);
fn2(cat1);
