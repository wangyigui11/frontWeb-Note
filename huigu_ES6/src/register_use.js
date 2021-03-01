/* 
   @babel/register模块改写require命令,  为它加上一个钩子

   每当使用require加载.js .jsx .es .es6后缀名的文件, 就会先用babel进行转码
   使用时首先加载@babel/register
*/

require('@babel/register')
require('./es6.js')

