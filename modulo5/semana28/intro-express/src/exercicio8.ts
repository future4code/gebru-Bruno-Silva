import express from "express"
import cors from "cors"
import { posts } from "./exercicio6"
import { Request, Response } from "express"


const app = express()
app.use(express.json())
app.use(cors())

app.get('/postsUser', (req: Request, res: Response) => {
    try{
        const userId = Number(req.query.id)

        let userPost: {}[] = []
        for(let element of posts) {
            if (element.id === userId) {
                userPost.push(userId)
            }
        }
        res.status(200).send(userPost)
    }

    catch(error){
        res.status(400).end("Post não encontrado!")
    }
})

app.listen(3003, () => {
    console.log("Servidor ON")
})