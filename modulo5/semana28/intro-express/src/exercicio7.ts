import express from "express"
import cors from "cors"
import { posts } from "./exercicio6"
import { Request, Response } from "express"


const app = express()
app.use(express.json())
app.use(cors())

app.get('/posts', (req: Request, res: Response) => {
    try{
        const listaPosts = posts

        const postagem = listaPosts.map((post) => {
            return post.title
        })

        res.status(200).send(postagem)
    }
    catch(error){
        res.status(400).end("Post não encontrado!")
    }
})

app.listen(3003, () => {
    console.log("Servidor ON")
})