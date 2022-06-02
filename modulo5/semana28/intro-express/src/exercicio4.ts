import express from "express"
import cors from "cors"
import { usuarios } from "./exercicio3"
import { Request, Response } from "express"


const app = express()
app.use(express.json())
app.use(cors())

app.get('/usuarios', (req: Request, res: Response) => {
    try{
        const listaUsuarios = usuarios

        const user = listaUsuarios.map((usuario) => {
            return usuario.name
        })

        res.status(200).send(user)
    }
    catch(error){
        res.status(400).end("Usuário não encontrado!")
    }
})

app.listen(3003, () => {
    console.log("Servidor ON")
})