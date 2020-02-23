# 代码检查工具-从TSLint到ESLint

> 知识大纲
1. TSLint - 建议不学
2. ESLint
    1. 使用了TypeScript为什么还需要ESLint
    2. 两者都有语法错误的检查
    3. TS有类型检查，语言转换
    4. ESLint有代码风格的规范
    5. typescript-eslint
3. 官方宣布TypeScript转向ESLint的原因
    1. TSLint执行规则的方式存在一些架构问题，从而影响了性能，而修复这些问题会破坏现有的规则
    2. ESLint的性能更好，而且社区用户通常拥有ESLint的规则配置(比如针对React和Vue的规则)，
        而不会拥有TSLint的规则配置
        
> 练习
1. dev环境安装插件
    * **eslint**
    * **@typescript-eslint/eslint-plugin**
    * **@typescript-eslint/parser**
2. eslint的配置
    1. **.eslintrc.json**是配置文件   
    2. 具体配置项
        ```
        {
            "parser": "@typescript-eslint/parser",
            "plugins": ["@typescript-eslint"],
            "parserOptions": {
                "project": "./tsconfig.json"
            },
            "extends": [
                "plugins": "@typescript-eslint/recommended"
            ],
            "rules": {
                "@typescript-eslint/no-inferrable-types": "off"
            }
        }
        ```     
3. 在package.json中添加脚本
    1. 在scripts属性中添加
    2. `"lint": "eslint src --ext .js,.ts",`
    3. `npm run lint` 
    
4. babel-eslint与typescript-eslint
    * babel-eslint: 支持TypeScript没有额外的语法错误，抛弃TypeScript,不支持类型检查           
    * typescript-eslint: 基于TypeScript的AST，支持创建基于类型信息的规则(tsconfig.json)
    * 建议:
        * 两者底层机制不一样，不要一起使用
        * Babel体系建议使用babel-eslint，否则可以使用typescript-eslint


> 目录

* [返回目录](../../README.md)        