# ES6与CommonJS的模块系统

> 知识大纲

1. ES6的模块系统
2. CommonJS的模块系统

> 练习
1. ES6的模块系统
    1. 在src下新建一个文件夹es6
    2. 里面分别有3个模块(ts文件)，分别是a,b,c
    3. 他们之间的依赖关系是c依赖a，a依赖b
    4. 为了看出最后的执行效果，我们在index中，import的模块是c
    
        ![](./images/准备工作.jpg)
        
    5. a.ts的代码
        ```typescript
        // 单独导出
        export let a = 1;
        
        //批量导出
        let b = 2;
        let c = 3;
        export {b, c};
        
        //导出接口
        export interface P {
            x: number,
            y: number
        }
        
        // 导出函数
        export function f(){}
        
        //导出时起别名
        function g(){}
        export {g as G};
        
        //默认导出,无需函数名
        export default function(){
            console.log("i am default");
        }
        
        //引入外部模块，重新导出
        export {str as hello} from './b';

        ```
    6. b.ts的代码
        ```typescript
        export const str = "Hello";
        ```    
        
    7. c.ts的代码
        ```
        import {a, b, c} from './a'; //批量导入
        import { P } from './a'; //导入接口
        import {f as F} from "./a"; //导入函数
        import * as All from "./a"; //导入模块中所有成员，绑定在All上
        import myFunction from "./a"; //不加{}，导入默认的
        
        console.log(a, b, c);
        let p: P = {
            x: 3,
            y: 4
        };
        console.log(p);
        console.log(F);
        console.log(All);
        
        myFunction();
        ```    
    8. 控制台信息
    
        ![](./images/控制台信息.jpg)
        
2. CommonJS的模块系统
    1. 在src下新建一个文件夹node
    2. 里面分别有3个模块(ts文件)，分别是a.node,b.node,c.node 
    3. 他们之间的依赖关系是c依赖了a和b
    4. a.node的代码
        ```
        let a = {
            x: 1,
            y: 2
        };
        // 整体导出
        module.exports = a;
        
        export {} //解决报错问题
        ```    
    5. b.node的代码
        ```
        //导出多个变量
        exports.c = 3;
        exports.d = 4;
        ```   
    6. c.node的代码
        ```
        let c1 = require("./a.node");
        let c2 = require("./b.node");
        
        console.log(c1);
        console.log(c2);
        ```    
    7. 用node命令执行
    
        ![](./images/node命令执行.jpg)     