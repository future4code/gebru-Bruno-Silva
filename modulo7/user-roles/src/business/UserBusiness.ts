import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
} from "../model/user";

export class UserBusiness {
  public createUser = async () => {
    try {
      



      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  
  
}
