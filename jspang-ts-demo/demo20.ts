/**
 * 函数中的泛型
 */

 /**
  * 这个函数，a可以传字符串或数字，b也可以传字符串和数字
  * 现在需求如果改成，如果一个传字符串，另外个也要传字符串
  * 这个时候就可以用到泛型
  * @param a 
  * @param b 
  */
function join (a: string | number, b: string | number) {
  return `${a}${b}`
}

function joinTest<T>(a: T, b: T){
  return `${a}${b}`
}

joinTest<string>('a','b')
joinTest<number>(1, 2)

/**
 * 参数是数组，也可以使用泛型
 */

function testArr<T>(arr: T[]){
  return arr;
}

testArr<string>(['1', '2'])
testArr<number>([1, 2])

/**
 * 多個泛型用逗号隔开
 */

function manyTest<K,V>(a:K, b:V) {
  return `${a}${b}`
}

manyTest<number, string>(1, '2')

/**
 * 虽然调用方法的时候可以省略<>，ts会类型推断，但不建议这么做
 */