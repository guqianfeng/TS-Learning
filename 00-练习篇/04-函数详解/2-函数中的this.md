# 2-函数中的this

> 知识大纲

* 无论是js还是ts，函数中的this都是我们需要关心的，那函数中的this的类型该如何标注呢？
    * 普通函数
        * 对于普通的函数而言，this是会随着调用环境的变化而变化的，所以默认情况下，普通函数中的this被标注为any，但我们可以通过函数的第一个参数位(它不占据实际参数位置)上显式的标注this的类型
            ```ts
            interface T{
                a: number;
                fn: (x: number) => void;
            }
            let obj1: T = {
                a: 1,
                fn(x: number){
                    //不标注this就是any类型
                    console.log(this)
                }
            }

            let obj2: T = {
                a: 1,
                fn(this: T, x: number){
                    //通过第一个参数位标注this类型，它对实际参数不会有影响
                    console.log(this); //T
                }
            }
            obj2.fn(1);
            ```
    * 箭头函数
        * 箭头函数中的this不能像普通函数那样进行标注，它的this指向它所在的作用域this的标注类型
            ```ts
            interface T {
                a: number;
                fn: (x: number) => void;
            }
            let obj2: T = {
                a: 3,
                fn(this: T){
                    return () => {
                        console.log(this) //T
                    }
                }
            }
            ```

> 目录

* [返回目录](../../README.md)