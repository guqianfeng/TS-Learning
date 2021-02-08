/**
 * 类型注解类型推断
 */

 let a = 1;
 let b = 2;

 function getSum (a: number, b: number) {
  //  return a + b + '';
   return a + b;
 }

 let sum = getSum(a, b);
 console.log(sum)