/**
 * Created by 40663 on 2018/8/22.
 */
"use strict"
const fs = require('fs')

function getContType (extname) {
let data = fs.readFileSync("../mime.txt",'utf8')
data = JSON.parse(data)
let contType = data[extname]? data[extname]:'text/plain'
return contType
}

module.exports = getContType