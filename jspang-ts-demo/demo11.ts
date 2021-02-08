/**
 * 访问类型
 * public 不写默认就是这个 类的内部外部都可以使用
 * private 只有类的内部才可以使用
 * protected 允许子类也可以使用，即在父类的外部，但子类可以用
 */

 class Pet {
   protected name: string
   constructor(name: string){
     this.name = name;
   }
   protected sayHi (): void {
    console.log('pet shout')
   }
 }

 class Cat extends Pet {
   sayHi () {
     this.name
     super.sayHi()
   }
 }

 let p = new Pet('cat')
//  console.log(p.name)
//  p.sayHi();