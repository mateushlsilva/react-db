const express = require('express')

const app = express();
const db = require('./models/db')

app.get("/", (req, res) => {
    res.send("hello word")
})



app.listen(3001, () => {
    console.log("rodando servidor")
})