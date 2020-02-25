let obj = {};
let arr = [1, 2, 3];
let data = new Date();
/* interface Person {
    name: string;
    age: number;
}

let user: Person = {
    name: 'gqf',
    age: 28,
    // gender: 'M', //会报错
}

let gqf: Person = {
    name: 'gqf',
    age: 28
} */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let userA = new Person('aaa', 10);
let userB = new Person('bbb', 20);
console.log(userA);
console.log(userB);
function ajax(options) {
}
ajax({
    url: '',
    method: ''
});
