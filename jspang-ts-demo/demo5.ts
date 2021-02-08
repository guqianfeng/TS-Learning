/**
 * 函数参数和返回类型的注解
 */

function getSum (a: number, b: number): number {
  //  return a + b + '';
   return a + b;
}

function hello (): void {
  console.log('hello')
}

function errorFn (): never {
  throw new Error('xxx')
}

function forFn (): never {
  while(true) {}
}

function getNum ({one}: {one: number}): number {
  console.log(one)
  return one;
}

getNum({one: 10})