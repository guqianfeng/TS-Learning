# 配置tsconfig.json-编译选项

> 练习
* compilerOptions指的就是编译选项
* 各属性说明
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
    
    6. libs
        * TS需要引入的库，即声明文件
        * 就算不写的话也会有写默认的库
            * 比如说target如果是es5
            * 默认的库就是，**dom**，**es5**，**scripthost**   
        * 在index.ts中使用flat函数，`console.log([1,[2,3]].flat())`会有报错
        * 这个时候在libs添加"es2019.array"就解决了         
            
    7. allowJs和checkJs
        * allowJs允许编译JS文件，[js, jsx]  
        * checkJs一般会和allowJs一起使用，允许在js文件中报错
    
    8. outDir
        * 指定输出目录
        
    9. rootDir
        * 指定输入文件目录     
        
    10. declaration，declarationDir和emitDeclarationOnly
        * declaration - 用于生成声明文件，可以自动生成 
        * declarationDir - 声明文件的路径
        * emitDeclarationOnly - 只生成声明文件
        
    11. sourceMap，inlineSourceMap，declarationMap
        * 生成目标文件的sourceMap    
        * 生成目标文件的inlineSourceMap
        * 生成声明文件的sourceMap   
        
    12. typeRoots和types
        * typeRoots - 声明文件目录，默认node_modules/@types       
        * types - 声明文件包
        
    13. removeComments
        * 删除注释
        
    14. noEmit，noEmitOnError，noEmitHelpers和importHelpers
        * noEmit - 不输出文件
        * noEmitOnError - 发生错误时不输出文件
        * noEmitHelpers - 不生成helper函数，需额外安装ts-helpers
            * 这里可以先去看下ts类继承，然后编译后的js文件
        * importHelpers - 现在已经不需要安装ts-helpers,通过tslib引入helper函数，文件必须是模块 
    
    15. downlevelIteration
        * 降级遍历器的实现    
        
    16. strict
        * 开启所有严格的类型检查
        * 如果这个属性为true，类型检查选项则都为true          
        
    17. alwaysStrict
        * 在代码中注入**use strict**
        
    18. noImplicitAny
        * 不允许隐式的any类型
        
    19. strictNullChecks
        * 不允许把null，undefined赋值给其他类型    
        
    20. strictFunctionTypes
        * 不允许函数参数的双向协变
        
    21. strictPropertyInitialization
        * 类的实例必须要初始化 
        
    22. strictBindCallApply
        * 执行严格的bind, call, apply检查
        
    23. noImplicitThis
        * 不允许this有隐式的any类型 
        
    24. noUnusedLocals
        * 检查只声明未使用的局部变量                                     
    
    25. noUnusedParameters
        * 检查函数中未使用的参数
    
    26. noFallthroughCasesInSwitch
        * 防止switch语句贯穿
        
    27. noImplicitReturns
        * 每个分支都要有返回值
        * 开启这个选项，if，else都要有返回值            
    
    28. esModuleInterop
        * 允许**export = 导出**，由**import from**导入
        
    29. allowUmdGlobalAccess
        * 允许在模块中访问umd全局变量
        
    30. moduleResolution
        * 模块的解析策略，ts默认使用node    
        
    31. baseUrl
        * 解析非相对模块的基地址，默认就是当前目录
        
    32. path
        * 路径映射，相对于baseUrl
        
    33. rootDirs
        * 将多个目录放在一个虚拟目录下，用于运行时 
        * 注意: 和rootDir是2个完全不同的概念
        
    34. listEmittedFiles
        * 打印输出文件
   
    35. listFiles
        * 打印编译的文件(包括引用的声明文件)    

> 目录

* [返回目录](../../README.md)                               