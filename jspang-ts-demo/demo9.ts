/**
 * 初识接口2
 * 接口可以用propname来定义任何key值
 * 接口可以继承
 * 接口可以约束类
 */

interface Person {
  name: string;
  age: number;
  [propname: string]: any;
  say(): string;
}

interface Development extends Person {
  dev(): void
}

class FrontDevelopment implements Development {
  name = 'gqf'
  age = 28
  hobby = '开发'
  say () {
    return ''
  }
  dev () {
    console.log('开发')
  }
}