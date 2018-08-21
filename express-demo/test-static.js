const express = require('express')
const exStatic = require('express-static')

const app = express()

// app.use(express.static('public'))
app.use('/static', express.static('public'))

app.listen(8080)