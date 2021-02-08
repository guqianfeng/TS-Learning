/**
 * 私有属性 get set的用法
 * 私有属性一般用_开头
 * 在暴露get和set方法，用于获取设置，为什么不直接用public，是因为我们get，set函数里还能做手脚~比如下面的案例
 */

class BeautifulGirl {
  constructor(private _age: number) {

  }

  get age () {
    return this._age - 10
  }

  set age (age: number) {
    this._age = age + 10;
  }
}

let bg = new BeautifulGirl(18)
bg.age = 18
console.log(bg.age);

class TestReadonly {
  constructor (public readonly name: string){}
}


let tr = new TestReadonly('你好啊')
console.log(tr.name);
// tr.name = '123'