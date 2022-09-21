const Sequelize = require('sequelize')

const db = new Sequelize("pessoas", "root", "fatecsjc", {
    host: 'localhost',
    dialect: 'mysql'
})

db.authenticate()
.then(function(){
    console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com banco de dados");
})

module.exports = db