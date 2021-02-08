/**
 * 抽象类
 */

abstract class Letter {
  abstract write(): void;
}

class A extends Letter {
  write() {
    console.log('我是A')
  }
}

class B extends Letter {
  write() {
    console.log('我是B')
  }
}

class C extends Letter {
  write() {
    console.log('我是C')
  }
}