import { Router } from "express"

import { listTasks, createTask } from '../services/task.js'

const router = Router()

router.get('/', async (req, res) => {
    const taskList = await listTasks()
    res.send(taskList)
})

router.post('/', async (req, res) => {
    const task = await createTask(req.body)
    res.status(201).send(task)
})

router.put('/', () => {

})

router.delete('/', () => {
    res.send('DELETE TASK')
})

export default router