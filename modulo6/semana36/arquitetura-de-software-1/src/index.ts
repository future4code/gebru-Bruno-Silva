import { app } from "./app"
import { createUser } from './endpoints/createUser'
import { createTask } from './endpoints/createTask'


app.post('/user', createUser)

app.post('/task', createTask)


