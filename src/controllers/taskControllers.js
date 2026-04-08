//arquivo controller

const taskService = require ('../services/taskServices');

//função auxiliar para ler body
const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            resolve(JSON.parse(body));
        });
    });
};

//criar tarefa
const createTask = async (req,res) => {
    const body = await getRequesteBody (req);

    const task = taskService.addTask(body.title);

    req.statusCode = 201;
    res.end(JSON.stringify(task));
};

//listar tarefas
const listTasks = (req, res) => {
    const tasks = taskService.getTasks();

    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
};

//atualizar tarefa
const updateTask = async (req, res, id) => {
    const body = await getRequestBody(req);

    const task = taskService.updateTask(id, body.title);

    if(!task){
        res.statusCode = 404;
        return res.end (JSON.stringify(
            { message: 'Não encontrada' }
        ));
    }

    res.end(JSON.stringify({ messsage: 'Removida'}));
};

module.exports = {
    createTask,
    listTasks,
    updateTask,
    deleteTask
}