import express from "express"
import cors from "cors"
import { Request, Response } from "express"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/test", (req: Request, res: Response) => {          
    res.send("API ON")
})

app.listen(3003, () => {
    console.log("Servidor ON")
})