//
//*************************************************************
//*************************************************************
// * Name: server.js                               		      *
// * Description: Server file for creating local host to run  *
// * Author: Zachary Mollenhour                               *
// * Date: May 27th, 2020				                      *
//*************************************************************


const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes') // includes the routes.js file
const cors = require('cors') // includes cors module

require('dotenv').config()
//telling express to use CORS and JSON
app.use(cors())
app.use(express.json())

//tells the express server to use the routes in routes.js
app.use(routes) 

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

app.listen(process.env.PORT, () => {
    console.log("The api is running...")
})