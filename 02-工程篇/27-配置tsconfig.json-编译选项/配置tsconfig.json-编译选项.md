# 配置tsconfig.json-编译选项

> 练习
1. compilerOptions指的就是编译选项
2. 各属性说明
    1. incremental
        * 增量编译
        * 主要作用是提高编译的速度，简单的说就是，
            一个文件编译后增加了东西再次编译，可以使用增量编译提高速度
            
    2. diagnostics
        * 打印编译的时间信息
        * 可以通过这个属性去观察incremental增量编译是否效率有所提高
     
    3. target
        * 目标语言的版本
        * 之前也有学习过，不在赘述      
    
    4. module
        * 生成代码的模块标准
        * 之前也有学习过，不在赘述         
        
    5. outFile
        * 将多个相互依赖的文件生成一个文件，可以用在AMD模块中 
        * 我们开启这个选项`"outFile": "./app.js", `
        * 在src下新建一个**amd.ts**,并编写代码
            ```typescript
            let gg: string = "gg";
            
            export = gg;
            ```      
        * 然后在index.ts中把它导入进来
            ```
            import gg = require("amd");
            
            console.log(gg);
            ```    
        * 配置选项module的值改为amd 
        * 使用tsc命令，就能看到index.ts和amd.ts生成了一个文件app.js   
            