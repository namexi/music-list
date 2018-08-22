/**
 * Created by 40663 on 2018/8/21.
 */

"use strict"

const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')

http.createServer((reqest,response) => {
    let pathUrl = request.url
    if (pathUrl=== '/') {

    }else if (pathUrl === '/add') {

    }else if (pathUrl=== '/edit') {

    }else if (pathUrl=== '/remove') {

    }
    })
.listen(3000,'127.0.0.1',() => {
    console.log(' Server is running at port 3000')
})