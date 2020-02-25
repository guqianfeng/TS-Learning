let obj: Object = {};
let arr: Array<number> = [1, 2, 3];
let data: Date = new Date();

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
    constructor(public name: string, public age: number){

    }
}

let userA: Person = new Person('aaa', 10);
let userB: Person = new Person('bbb', 20);
console.log(userA);
console.log(userB);

interface AjaxOptions {
    url: string;
    method: string;
}

function ajax(options: AjaxOptions){

}

ajax({
    url: '',
    method: ''
})