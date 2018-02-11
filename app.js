'use strict'
const express = require('express')
const mongoose = require('mongoose')
const api = require('./router')

const PORT = 8080
const HOST = '0.0.0.0'

const app = express();

mongoose.connect('mongodb://kuken:rbra@212.47.237.59:27017/social_net');

app.get('/', (req, res) => {
    res.json({
        msg: 'Running'
    })
})

app.use(api)

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
