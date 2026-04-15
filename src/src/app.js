//arquivo apps

const http = require('http');

//importa as rotas
const taskRoutes = require ('./routes/taskRoutes');

//cria um servidor
const server = http.createServer((req, res) => {

    //define cabeçalho JSON
    res.setHeader('Content-Type', 'application/json');

    //chama o roteador
    taskRoutes(req, res);
});

//porta
const PORT = 3000;

//inicia o servidor
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});