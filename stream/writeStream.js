'use strict'

const fs = require('fs')

var ws1 = fs.createWriteStream('output1.txt', 'utf-8')
ws1.write('练得身形似鹤形，\n')
ws1.write('千株松下两函经。\n')
ws1.write('我来问道无余说，\n')
ws1.write('云在青天水在瓶。\n')
ws1.end()

var ws2 = fs.createWriteStream('output2.txt', 'utf-8')
ws2.write('天地不仁以万物为刍狗，\n')
ws2.write('圣人不仁以百姓为刍狗。\n')
ws2.end()