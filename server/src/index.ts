import express, { Request, Response, NextFunction } from 'express'
import statusRouter from './routes/status.route';
import usersRoute from './routes/users.route'
const connection = require('./models/connect')

const app = express()
 // configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuração de rotas
app.use(usersRoute);
app.use(statusRouter);



// inicialização do server
app.listen(3001,()=>{
    console.log("Server rodando na porta 3001");
    
})