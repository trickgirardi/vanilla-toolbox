import express from 'express'
import bodyParser from 'body-parser'
import taskController from './controller/task.js'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use('/task', taskController)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/task', taskController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})