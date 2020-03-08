class Teacher {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {
        console.log(`${this.age}岁的${this.name}性别是${this.gender}`);
    }
}
// let teacher = new Teacher('gqf', 28, '男');
// teacher.eat();
function fn1(arg) {
    arg.eat();
}
fn1(new Teacher('gqf', 28, '男'));
function fn2(arg) {
    new arg('gqf', 28, '男').eat();
}
fn2(Teacher);
