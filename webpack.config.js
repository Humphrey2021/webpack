const path = require('path')

module.exports = {
    entry: './src/index.js', // 入口文件--可以使用相对路径
    output: { // 输出路径
        filename: 'build.js', // 输出文件名称
        path: path.resolve(__dirname, 'dist') // 输出路径--需要是绝对路径
    }
}