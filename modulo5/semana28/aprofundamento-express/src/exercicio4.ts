import express from "express"
import cors from "cors"
import { afazeres } from "./exercicio3"
import { Request, Response } from "express"


const app = express()
app.use(express.json())
app.use(cors())

app.get('/afazeres', (req: Request, res: Response) => {
    try{
        const listaDeAfazeres = afazeres

        const todo = listaDeAfazeres.map((todo) => {
            if(todo.completed === false){
                return todo.title
            }
        })

        res.status(200).send(todo)
    }
    catch(error){
        res.status(400).end("Usuário não encontrado!")
    }
})

app.listen(3003, () => {
    console.log("Servidor ON")
})