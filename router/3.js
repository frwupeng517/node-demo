const express = require('express')

const app = express()

var warehouseRouter = express.Router()

warehouseRouter.get('/operate', function (req, res) {
  res.send('operate')
})

warehouseRouter.get('/operate/arrival', function (req, res) {
  res.send('operate/arrival')
})

app.use('/warehouse', warehouseRouter)

// var subRouter = warehouseRouter.Router()

// subRouter.get('/operate', function (req, res) {
//   res.send('operate')
// })

// warehouseRouter.use('/operate', subRouter)

app.listen(8080)