import express, { response } from 'express';
const app = express();

app.get("/", function(req, res) {
    res.send("hello word")
})

app.listen(3001, () => {
    console.log("rodando servidor")
})