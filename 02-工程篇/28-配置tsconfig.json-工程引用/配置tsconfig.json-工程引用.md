# 配置tsconfig.json-工程引用

> 背景
* src下有这么几个目录， server， client， common
    * server - 代表后端的代码
    * client - 代表前端的代码
    * common - 前后端公共使用的部分
* 和src平级有个test目录
    * test主要放前后端的测试用例
    * 这边就简单的只有2个文件在test目录分别是**client.test.ts**,**server.test.ts**,代表前端测试用例和后端测试用例     
    
* 构建的时候有各种问题，比如
    * 不能单独构建client的应用或者server的应用    
    * 不想把测试用例构建在dist目录下
    * 单个配置文件不能解决这类问题
    
* 工程引用就是来解决这个问题的，有利于把大的项目拆成小的项目，还可以通过增量编译，提升编译速度    
    
> 练习 
1. 每个小工程都提供一个tsconfig.json
    * client目录下，新建个tsconfig.json
    * server目录下，新建个tsconfig.json
    * common目录下，新建个tsconfig.json
    * 子配置文件都可以单独配置输出路径,这里用client举例子
        ```
        "compilerOptions": {
            "outDir": "../../dist/client"
        }
        ```
    * 子配置文件可以继承base的tsconfig.json,使用属性**extends: "../../tsconfig.json"**
    * client和server需要配置依赖项
        ```
        "references": [
            {
                "path": "../common"
            }
        ]
        ```
2. base的tsconfig.json中
    * 要添加个属性**composite: true**，表示工程引用  
    * 要添加个属性**declaration: true**，表示声明文件 
    
3. test目录下也需要新建tsconfig.json
    * 同样需要继承base的配置
    * test需要依赖client和server
    
4. 工程构建
    * 这里拿server端的举例，**tsc -b src/server --verbose**
    * -b 表示build            
    * --verbose 表示需要打印出一些构建信息
    
5. 可以参考ts官方的配置文件  
    * [官方网站](https://github.com/microsoft/TypeScript)  