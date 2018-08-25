/**
 * Created by 40663 on 2018/8/22.
 */
"use strict"
const fs = require('fs')
const path = require("path")
function getContType (extname) {
let data = fs.readFileSync(`${path.dirname(__dirname)}/mime.txt`,'utf8')
data = JSON.parse(data)
let contType = data[extname]? data[extname]:'text/plain'
if (contType.startsWith("text/")) {
    contType+= '; charset=utf-8'
}
return contType
}

module.exports = getContType
