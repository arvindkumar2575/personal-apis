const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// add database file
require('./db/dbConn')

//middleWares
app.use(cors())
app.use(bodyParser.json())

// import routes
const routes = require('./src/routes')
app.use('/api',routes)

//Routes
// app.get('/', (req, res) => res.send('we are home!'))



app.listen(3000, () => console.log(`App started on ${process.env.PORT}`))
