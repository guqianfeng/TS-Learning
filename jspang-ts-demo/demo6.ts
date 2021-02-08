/**
 * 数组类型注解的方法
 */

 let numberArr_: number[] = [1, 2, 3]
 let strArr_: string[] = ['1', '2']
 let undeArr_: undefined[] = [undefined]
 let arr_: (string | number)[] = [1, '2', 3]

 type Girl = {
   name: string,
   age?: number,
 }

 class Woman {
   name: string;
   age?: number;
 }

 // 这个是自己尝试写的接口，想看下区别，貌似也可以
 interface Lady {
   name: string;
   age?: number;
 }

//  let girlsArr: {name: string, age?: number}[] = [
//   {name: 'Alice'},
//   {age: 10, name: "Mary"}
// ]

// let girlsArr: Girl[] = [
//   {name: 'Alice'},
//   {age: 10, name: "Mary"}
// ]

// let girlsArr: Woman[] = [
//   {name: 'Alice'},
//   {age: 10, name: "Mary"}
// ]

let girlsArr1: Lady[] = [
  {name: 'Alice'},
  {age: 10, name: "Mary"},
]

let girlsArr2: Woman[] = []

let girlsArr3: Girl[] = []