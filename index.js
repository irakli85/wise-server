const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const CityModel = require('./model/Cities')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

app.get('cities', (req, res) => {
    CityModel.find()
    .then(cities => res.json(cities.at(0).cities))
    .catch(err => res.json(err))
})

app.listen(process.env.PORT, () => {
    console.log(`ვუსმენ ${process.env.PORT} პორტს`)
})
