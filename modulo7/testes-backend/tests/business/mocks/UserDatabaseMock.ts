import { UserRepository } from "../../../src/business/UserRepository";
import { User, USER_ROLES } from "../../../src/model/User";


export class UserDatabaseMock implements UserRepository{
    async createUser(user: User): Promise<void> {
       console.log("Usuário criado")
    }
    async getUserByEmail(email: string): Promise<User | undefined> {
        
        if(email === "email@email" ){
            return new User("id", "name", "email@email", "password", USER_ROLES.NORMAL)
        } else {
            return undefined
        }         
    }
    async getUserById(id: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    async getAllUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
}