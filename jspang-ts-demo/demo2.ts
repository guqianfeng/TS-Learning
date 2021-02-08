/**
 * 静态类型
 */
const pi: number = 3.1415926;
console.log(pi.toFixed(2));

interface Person {
  name: string,
  age: number
}

const person: Person = {
  name: 'gqf',
  age: 4
}

console.log(person.age)