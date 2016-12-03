var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname)

module.exports = {
	entry:{
		app:'./src/App.js' //webpack编译的入口文件为 app.js
	},
	output:{
		path:'./dist',
		filename:'[name].js' //生成后的js文件名称与entry这个对象中的键保持一致，所以这里生成将会是app.js
	},
 	resolve: {
    extensions: ['', '.js', '.vue'], //这里如果不配置则在一个.vue中通过 from 'hello' 时就必须协商hello.vue
    alias: {
      'vue$': 'vue/dist/vue.common.js', //实时编译用，不配置则启动webpack-dev-server报错，路径指向vue包的dist目录中的vue.common.js文件
      'src': path.resolve(__dirname, 'src'), 
      'comp': path.resolve(__dirname, 'src/components')  //将当前文件所在目录加上src/components 配置为一个别名为components
    }
  },
	module: {
		loaders: [
			{
		        test: /\.vue$/,
		        loader: 'vue'
	        },
			{
		        test: /\.js$/,
		        loader: 'babel',
		        exclude: /node_modules/
	       },
			{
				test: /\.css$/,
				loader: 'url'
			}

		]
	},
	plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
