import { Router } from "express"

const router = Router()

router.get('/', () => {
    res.send('GET TASKS')
})

router.post('/', () => {
    res.send('POST TASK')
})

router.put('/', () => {
    res.send('PUT TASK')
})

router.delete('/', () => {
    res.send('DELETE TASK')
})

export default router