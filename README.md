<!-- 安装所有的依赖包 -->
$ cd myapp
$ npm install

<!-- 在 MacOS 或 Linux 中，通过如下命令启动此应用： -->

$ DEBUG=myapp:* npm start

<!-- 在 Windows 中，通过如下命令启动此应用： --> 

set DEBUG=myapp:* & npm start 
 
<!-- 使用pm2管理器启动项目 -->
$ npm install pm2 -g
$ pm2 start ./bin/www


<!-- 然后在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了。 --> 