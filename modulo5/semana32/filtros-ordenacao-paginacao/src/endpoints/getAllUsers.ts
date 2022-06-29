import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const getAllUsers = async(req: Request, res: Response): Promise<void> =>{
   let statusCode
   try {
      let name = req.query.name as string

      if(!name) {
         name = "%"
      }

      const result = await connection("aula48_exercicio")
      .where("name", "like", `%${name}%`)

      if(result.length < 1) {
         statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      const users = result.map(toUser)

      res.status(200).send(users)

   } catch (error: any) {
      res.status(statusCode || 400).send(error.message);
   }
}

const toUser = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      password: input.password,
   }
}