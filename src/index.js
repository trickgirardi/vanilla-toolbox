import express from 'express';
import taskController from './controller/task.js';


const app = express();
const port = 3010;

app.listen(port, ( => {
  console.log(`App rodando na porta ${port}`)
}))

app.use('/task', taskController)
