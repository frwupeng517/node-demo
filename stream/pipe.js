'use strict'

const fs = require('fs')

var rs = fs.createReadStream('simple.txt', 'utf-8')
var ws = fs.createWriteStream('copy.txt', 'utf-8')

rs.pipe(ws)