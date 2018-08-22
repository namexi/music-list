/**
 * Created by 40663 on 2018/8/21.
 */

"use strict"

const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')

http.createServer((request,response) => {
    let pathUrl = request.url
    // 配置主页
    if (pathUrl=== '/') {
        fs.readFile(path.join(__dirname,"index.html"),'utf8',(err,data) => {
            if (err) return response.end('您要的页面已走失')
            response.writeHead(200,{
                'Content-type':'text/html'
            })
            response.end(data)
        })
    }else if (pathUrl === '/add') {

    }else if (pathUrl=== '/edit') {

    }else if (pathUrl=== '/remove') {

    }
})
.listen(3000,'127.0.0.1',() => {
    console.log(' Server is running at port 3000')
})