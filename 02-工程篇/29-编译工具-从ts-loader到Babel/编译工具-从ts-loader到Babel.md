# 编译工具-从ts-loader到Babel

> 知识大纲
1. ts-loader
    * 这里要先纠正下之前**webpack.config.js**的错误配置
    * 关于环境判断的代码应该是这样的
        ```
        const merge = require('webpack-merge')
        const baseConfig = require('./webpack.base.config')
        const devConfig = require('./webpack.dev.config')
        const proConfig = require('./webpack.pro.config')
        
        // 之前有问题，正确的判断逻辑请看之后的代码
        // let config = process.NODE_ENV === 'development' ? devConfig : proConfig
        //
        // module.exports = merge(baseConfig, config)
        
        module.exports = (env, argv) => {
          let config = argv.mode === "development" ? devConfig : proConfig;
          return merge(baseConfig, config)
        };

        ```
    * 关于base配置文件中，需要讲下ts-loader的一个options的属性**transpileOnly** 
    * 官方的解释是这样的
        * **现在，ts-loader 已经开始使用 TypeScript 内置 watch mode API，
            可以明显减少每次迭代时重新构建的模块数量。experimentalWatchApi 
            与普通 TypeScript watch mode 共享同样的逻辑，
            并且在开发环境使用时非常稳定。此外开启 transpileOnly，用于真正快速增量构建。**   
        * 具体代码如下
            ```
            module.exports = {
              // ...
              test: /\.tsx?$/,
              use: [
                {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                  },
                },
              ],
            };
            ```
    * 简单的说**transpileOnly**缺点就是不进行类型检查，只是编译，所以速度会快很多
    * 可以独立的安装一个插件，进行类型检查，该检查在独立的进程中，不会影响构建速度
        * **fork-ts-checker-webpack-plugin**
        * 使用`npm i fork-ts-checker-webpack-plugin -D`安装
        * 在base.config中引入进来    
        
2. awesome-typescript-loader
    * 与ts-loader的主要区别:
        1. 更适合与Babel集成，使用Babel的转义和缓存
        
        2. 不需要安装额外的插件，就可以把类型检查放在独立进程中进行    
            
3. Babel
    * 使用了Typescript，为什么还需要Babel
    * 编译能力来看，tsc和babel是差不多的
    * 类型检查能力来看，tsc是有类型检查的，但babel是没有的
    * 插件来看，tsc是没有插件的，而babel有非常丰富的插件
    * babel7之前是不支持ts的

4. 总结
    1. 如果没有使用Babel，首选TypeScript自身的编译器(可配合ts-loader使用)
    2. 如果项目中已经使用了Babel，安装@babel/preset-typescript(可配合tsc做类型检查)
    3. 两种编译工具不要混用
> 练习
1. ts-loader 
    1. 在base.config配置transpileOnly
    2. 安装fork-ts-checker-webpack-plugin
    3. 在base.config引入，具体代码如下
        ```
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
        
        module.exports = {
            entry: './src/index.ts',
            output: {
                filename: 'app.js'
            },
            resolve: {
                extensions: ['.js', '.ts', '.tsx']
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/i,
                        use: [{
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true
                            }
                        }],
                        exclude: /node_modules/
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/tpl/index.html'
                }),
                new ForkTsCheckerWebpackPlugin()
            ]
        }

        ```
2. awesome-typescript-loader
    1. 首先需要安装下，`npm i awesome-typescript-loader -D` 
    2. 我们需要修改配置文件
        1. loader属性变更
        2. 这个loader也是有transpileOnly属性，我们先改为默认的false      
        3. 把前面的ts-loader的插件引用注释掉
        4. 代码具体如下
            ```
            const HtmlWebpackPlugin = require('html-webpack-plugin');
            // const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
            
            module.exports = {
                entry: './src/index.ts',
                output: {
                    filename: 'app.js'
                },
                resolve: {
                    extensions: ['.js', '.ts', '.tsx']
                },
                module: {
                    rules: [
                        {
                            test: /\.tsx?$/i,
                            use: [{
                                // loader: 'ts-loader',
                                loader: 'awesome-typescript-loader',
                                options: {
                                    transpileOnly: false
                                }
                            }],
                            exclude: /node_modules/
                        }
                    ]
                },
                plugins: [
                    new HtmlWebpackPlugin({
                        template: './src/tpl/index.html'
                    }),
                    // new ForkTsCheckerWebpackPlugin()
                ]
            }

            ```    
    3. 我们可以构建下项目，然后修改下transpileOnly属性，在构建看下速度的差异
        * 构建指令`npm run build`
    4. 我们使用下自带的插件  
        * `const { CheckerPlugin } = require("awesome-typescript-loader");`  
        * 使用的方式也很简单，就和之前的那个一样new一下就可以了
        * 最终代码如下
            ```
            const HtmlWebpackPlugin = require('html-webpack-plugin');
            // const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
            const { CheckerPlugin } = require("awesome-typescript-loader");
            
            module.exports = {
                entry: './src/index.ts',
                output: {
                    filename: 'app.js'
                },
                resolve: {
                    extensions: ['.js', '.ts', '.tsx']
                },
                module: {
                    rules: [
                        {
                            test: /\.tsx?$/i,
                            use: [{
                                // loader: 'ts-loader',
                                loader: 'awesome-typescript-loader',
                                options: {
                                    transpileOnly: true
                                }
                            }],
                            exclude: /node_modules/
                        }
                    ]
                },
                plugins: [
                    new HtmlWebpackPlugin({
                        template: './src/tpl/index.html'
                    }),
                    // new ForkTsCheckerWebpackPlugin()
                    new CheckerPlugin()
                ]
            }

            ```
    5. awesome-typescript-loader类型检查进程，可能会有遗漏
    6. 综合对比推荐使用ts-loader的默认设置         
    
3. 使用babel创建工程
    1. 创建项目
    2. 需要安装的devDependencies
        1. **@babel/cli**            
        2. **@babel/core**            
        3. **@babel/plugin-proposal-class-properties**            
        4. **@babel/plugin-proposal-object-rest-spread**            
        5. **@babel/preset-env**            
        6. **@babel/preset-typescript**
    3. .babelrc配置文件
        ```
        {
            "presets": [
                "preset-env",
                "preset-typescript"
            ],
            "plugins": [
                "plugin-proposal-class-properties",
                "plugin-proposal-object-rest-spread"
            ]
        }
        ```                
    4. 创建src目录，创建index.ts文件，编写些代码
        ```
        class A{
            a: number = 1
        }
        let {x, y, ...z} = {x: 1, y: 2, a: 3, z: 4}
        let n = {x, y, ...z}
        ```
    5. 编译及使用ts做类型检查
        1. 先看下编译脚本
            1. 在package.json的scripts属性中，添加build属性
            2. `"build": "babel src --out-dir dist --extensions \".ts,.tsx\""` 
        2. 类型检查
            1. 需要安装typescript，`npm i typescript -D`
            2. `tsc --init`
            3. 在tsconfig中开启选项**noEmit**，这个选项意思是不会做任何输出文件，只会做类型检查
            4. 添加类型检查脚本，在package.json的scripts属性中添加**type-check**
            5. `"type-check": "tsc --watch"`
            6. 输入`npm run type-check`,这个就会实时的监控，做ts类型检查    
    6. 不支持命名空间
    7. 类型断言要使用as
    8. 不支持常量枚举
    9. 不支持`export = s`    
         