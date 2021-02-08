/**
 * 类的构造函数简便写法 及 继承的写法
 */

class Test {
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  constructor(public name: string){}
}

let t = new Test('test')
console.log(t.name)

class SubTest extends Test {
  constructor(public name: string, public subTest: string) {
    super(name)
  }
}

let st = new SubTest('主测试', '次要测试');
console.log(st.name, st.subTest);