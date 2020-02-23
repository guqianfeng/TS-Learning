# 1-TypeScript初体验

> ts初体验 - 环境搭建与编译执行

* 环境搭建

    * 安装Node.js
    * 安装TypeScript编译器

* 编写代码及编译执行
* 一些有用的编译选项

    * outDir - 指定编译文件输出目录
    * target - 指定编译的代码版本目标，默认为es3
    * watch - 监听模式下运行，当文件发生改变的时候自动编译

* 编译配置文件

    * 指定加载的配置文件， --project或者-p        

> 学习目标

* 学会搭建ts环境
* 掌握ts代码的编译与运行

> 练习

* 最基本的操作
    * 新建个`gqf.ts`，随意写一行最简单的ts，`let str: string = 'gqf is 梅利奥猪猪';`  
    * 然后在终端执行`tsc gqf.ts`，就能发现多了个同名的`gqf.js`，里面的代码是`var str = 'gqf is 梅利奥猪猪';`
* 编译选项
    * outDir
        * 默认的编译后的文件和ts文件同目录下
        * 比如我想放在和src同级目录的dist文件夹，可以这么操作`tsc --outDir ./dist ./src/gqf.ts` 
        * 然后就能看到dist目录下的gqf.js了
    * target
        * 我们打开gqf.js，能看到代码还是`var str = 'gqf is 梅利奥猪猪';`
        * 但我们ts的代码明明是let，这里就可以使用target参数  
        * 我们改造下我们的ts文件
            ```typescript
            let str: string = 'gqf is 梅利奥猪猪';

            let data = {
                x: 1,
                y: 2,
            }
            ``` 
        * 先来试下es3编译出来的是什么样子的，发现我们data对象中y属性后面的逗号不见了  
            ```js
            var str = 'gqf is 梅利奥猪猪';
            var data = {
                x: 1,
                y: 2
            };
            ```     
        * 再试下es5，`tsc --outDir ./dist --target es5 ./src/gqf.ts`，能发现y属性后面逗号还在   
            ```js
            var str = 'gqf is 梅利奥猪猪';
            var data = {
                x: 1,
                y: 2,
            };
            ``` 
        * 最后es6，`tsc --outDir ./dist --target es6 ./src/gqf.ts`，能发现关键字var也不用了，使用了我们ts中写的let  
            ```js
            let str = 'gqf is 梅利奥猪猪';
            let data = {
                x: 1,
                y: 2,
            };
            ```  
    * watch
        * 每次重新编译比较麻烦，所以我们可以使用watch选项，只要ts发生改变，它会自动帮我们编译
        * 具体指令就在后面加个--watch即可`tsc --outDir ./dist --target es6 --watch ./src/gqf.ts` 

* ts配置文件
    * 每次输入指令，都要写一堆编译选项，显然不是很方便
    * 所以我们可以专门搞个配置文件`tsconfig.json`，把我们的编译选项卸载里面，后期直接执行tsc就可以了
        ```json
        {
            "compilerOptions": {
                "outDir": "./dist/",
                "target": "ES6",
                "watch": true
            },
            "include": ["./src/**/*"]
        }        
        ```
    * 注意include代表的是要编译哪些文件，指定目录下src，后面2个星号代表src下任意目录包括子目录，1个星号是指所有文件    
    * tsconfig其实是放在tsc执行的目录下，就比如我是在**01-TypeScript初体验**下新建了tsconfig,我执行tsc也是在这个目录下，
    在执行tsc的时候它会去找同级目录下tsconfig里的选项，从而进行编译
    * 当然我们也可以把配置文件放到其他地方，比如说项目中有各种各样的配置文件，我们有个专门的configs的文件夹对他们进行管理
        * 在**01-TypeScript初体验**下新建configs文件夹
        * 把前面的tsconfig.json放到该目录下，注意还要修改下相应的路径
            ```json
            {
                "compilerOptions": {
                    "outDir": "../dist/",
                    "target": "ES6",
                    "watch": true
                },
                "include": ["../src/**/*"]
            }            
            ```
        * 把我们之前的dist目录删了
        * 在**01-TypeScript初体验**执行命令`tsc -p ./configs`，因为我们的名字就叫tsconfig.json，所以默认不需要带，如果是gqf.json什么的就需要加`tsc -p ./configs/gqf.json` 
        * 执行后发现没有任何问题，也照样生成了我们的dist目录   


> 目录

* [返回目录](../../README.md)