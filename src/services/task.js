let tasks = []

export const listTasks = () => {
    return tasks
}

export const createTask = (task) => {
    console.log(task)
    tasks.push(task)
}