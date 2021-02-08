/**
 * 元组使用和类型约束
 */

 // 该行代码如果把20年龄放在中间也不会报错，所以元组是这么诞生的
//  let xiaojiejie: (string | number)[] = ['a', 'teacher', 20]


let xiaojiejie: [string, string, number] = ['a', 'teacher', 20];

let xiaojiejies: [string, string, number][] = [
  ['a', 'teacher', 20],
  ['b', 'development', 18],
]

