import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO } from "../model/user";

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          
    
          res.status(201).send({ message: "Usuário criado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

   
    
 



}
