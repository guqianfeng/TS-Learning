# 配置tsconfig.json-文件选项

> 练习
1. 如果清空下tsconfig.json，就是按照默认配置编译ts文件
2. ts文件指的是**ts**，**d.ts**，**tsx**
3. 文件选项各属性的说明
    1. files
        * 这个配置选项是个数组
        * 配置需要编译成js的文件，不配置files，默认是项目下所有的文件都会编译     
        * 示例代码如下
            ```
            {
              "files": [
                 "src/aaa.ts"
              ]
            }
            ```
    2. include
        * 编译器需要编译的文件目录，这个的选项也是个数组
        * 示例代码如下
            ```
            {
              "files": [
                 "src/aaa.ts"
              ],
              "include": [
                "src"
              ]
            }
            ```
        * 上述代码意思就是编译src下所有的ts文件    
        * 支持通配符，比如`src/*`表示只会编译src一级目录下的文件  
        * 所以`src/*/*`这个只会编译src下二级目录的文件
    3. exclude
        * 表示编译器需要排除的文件或者文件夹
        * 默认会排除所有的node_modules和声明文件
        * 示例代码如下
            ```
            {
              "files": [
                 "src/aaa.ts"
              ],
              "include": [
                "src"
              ],
              "exclude": [
                "src/libs"
              ]
            }
            ```     
        * 上述配置表示的就是src下的aaa要编译成js，src的目录下除了libs以外要编译成js文件
    4. compileOnSave
        * 保存文件的时候，让编译器自动编译     
4. 配置文件可以继承
    * 我们可以把基础的抽离出来
    * 我们新建一个**tsconfig.base.json**
    * 把前面写的内容剪切出来，放在**tsconfig.base.json**中  
    * 然后在**tsconfig.json**中，用extends属性继承
        ```
        {
          "extends": "./tsconfig.base.json"
        }
        ```   
    * 继承的时候也可以覆盖父类的配置属性 
        ```
        {
          "extends": "./tsconfig.base.json",
          "exclude": []
        }
        ``` 
    * 我们可以看到父类的exclude是排除了src/libs下的ts文件，但我们继承的时候exclude又不排除任何文件
    * 所以这里实际生效的就是不排除任何其他文件                  