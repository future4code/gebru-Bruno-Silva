import express from "express"
import cors from "cors"
import { afazeres } from "./exercicio3"
import { Request, Response } from "express"


const app = express()
app.use(express.json())
app.use(cors())

app.post('/afazeres/create', (req: Request, res: Response) => {
    try{

        // const userId = req.body.userId
        // const id = req.body.id
        // const title = req.body.title
        // const completed = req.body.completed

        const { userId, id, title, completed } = req.body

        console.log( userId, id, title, completed)

        afazeres.push({userId, id, title, completed})

        res.status(200).send(afazeres)
    }
    catch(error){
        res.status(400).end("Usuário não encontrado!")
    }
})


app.listen(3003, () => {
    console.log("Servidor ON")
})