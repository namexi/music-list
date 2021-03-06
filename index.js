/**
 * Created by 40663 on 2018/8/21.
 */

"use strict"

const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')
const _ = require("underscore")
const contType = require('./public/js/contentType')
http.createServer((request,response) => {
    let pathUrl = request.url
    let method = request.method
    // 配置静态路由
    if (pathUrl.includes('.') && !pathUrl.includes('favicon.ico')) {
        fs.readFile(path.join(__dirname,pathUrl),(err,data) => {
            if (err) throw err
            let contData = contType(path.extname(pathUrl))
            response.writeHead(200,{
                "Content-type":contData
            })
            response.end(data)
        })
    }
    // 配置主页
    if (pathUrl=== '/') {
        fs.readFile(path.join(__dirname,"index.html"),'utf8',(err,data) => {
            if (err) return response.end('您要的页面已走失')
            response.writeHead(200,{
                'Content-type':'text/html'
            })
            response.end(data)
        })
    }
    // 配置添加功能
    else if (pathUrl === '/add' && method === "GET") {
        fs.readFile(path.join(__dirname,'add.html'),'utf8',(err,data) => {
            if (err) return response.end('您要的页面已走失')
            let tempData = checkout(data,'none','')
            response.writeHead(200,{
                'Content-type':'text/html'
            })
            response.end(tempData) 
        })
    }
    // 接收数据
    else if (pathUrl === '/add' && method === "POST") {
        let data = ''
        request.on('data',chunk => {
            data+=chunk
        })
        request.on('end',() => {
           data = querystring.parse(data)
           // 校验
           if (!data) {
            
           }
        })
    }
    else if (pathUrl=== '/edit') {

    }else if (pathUrl=== '/remove') {

    }
})
.listen(3000,'127.0.0.1',() => {
    console.log(' Server is running at port 3000')
})

function checkout(data,display,imassge) {
    let temp = _.template(data)
    data = temp({
        prompt:display,
        imassge:imassge
    })
    return data
}