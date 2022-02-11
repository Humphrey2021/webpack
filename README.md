# webpack
webpack相关

三个阶段
1. web1.0
未明确前端这个岗位，还处于编写静态页面，表单验证和动画效果
2. web2.0之AJAX
3. 大前端开发

现代Web开发“问题”

- 采用模块化开发
- 使用新特性提高效率保证安全性
- 实时监听开发过程使用热更新

使用Webpack实现项目工程化

定义：为现代`JavaScript`应用提供静态模块打包

- 打包：将不同类型资源按模块处理进行打包

- 静态：打包后最终产出静态资源

- 模块：webpack支持不同规范的模块化开发
```shell
yarn add webpack webpack-cli -D
# 打包
yarn webpack
# 修改入口文件，默认是`src/index.js`
yarn webpack --entry ./src/main.js
# 修改输出路径, 默认是根目录下的dist目录
yarn webpack --entry ./src/main.js --output-path ./build
```
