# 使用Jest进行单元测试

> 知识大纲
* 之前学习的编译工具，代码检查工具，都分为babel系和非babel系，单元测试工具其实也是这样
* 编译工具
    1. ts-loader
    2. @babel/preset-typescript
* 代码检查工具
    1. eslint + typescript-eslint
    2. babel-eslint
* 单元测试工具
    1. ts-jest
    2. babel-jest
    
> 练习
1. ts-jest
    1. dev环境安装
        1. jest
        2. ts-jest
    2. 配置脚本(在package.json中)
        1. 在scripts的test属性中
        2. `"test": "jest"`    
    3. 生成jest的配置文件
        1. 输入命令`npx ts-jest config:init`
        2. 打开配置文件看下代码    
            ```
            module.exports = {
              preset: 'ts-jest',
              testEnvironment: 'node',
            };
            ```
    4. 我们在src下新建个math.ts,写几个函数为了之后的测试 
        * 具体代码如下
            ```
            function addFn(a: number, b: number): number{
                return a + b;
            }
            
            function subFn(a: number, b: number): number{
                return a - b;
            }
            
            module.exports = {
                addFn,
                subFn
            };
            ```       
    5. 编写测试用例并测试
        1. 在根目录下新建test目录，在test下在新建**math.test.ts**   
        2. 编写代码
            ```
            import math = require("../src/math");
            
            test("add: 1 + 1 = 2", () => {
               expect(math.addFn(1, 1)).toBe(2);
            });
            
            test("sub: 1 - 2 = -1", () => {
                expect(math.subFn(1, 2)).toBe(-1);
            });
    
            ```    
        3. 执行`npm run test`     
2. babel-jest
    1. dev环境安装
        1. jest
        2. babel-jest
        3. @types/jest          
    2. 和之前一样编写测试脚本
        1. package.json中需要写test脚本
        2. 将之前写的math.ts和math.test.ts拷贝到babel项目
    3. `npm run test`测试依然通过
    4. babel-jest依然没有类型检查，依然需要执行类型检查脚本`npm run type-check`           
        