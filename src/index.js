import express from 'express'
import taskController from './controller/task.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/task', taskController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})