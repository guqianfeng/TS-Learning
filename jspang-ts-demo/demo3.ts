/**
 * 基础静态类型对象静态类型
 */
let str: string = '123';
let num: number = 123;

let obj: {
  name: string,
  age?: number
} = {
  name: 'test'
}

let arr: string[] = ['12']


class Person{}
let p: Person = new Person()

let jianxiaojiejie: () => string = () => '123';