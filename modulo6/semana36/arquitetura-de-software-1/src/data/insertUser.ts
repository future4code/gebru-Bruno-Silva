import { connection } from "../connection";
import { user } from "../types/user";

export const insertUser = async(
   user: user
) => {
   await connection.insert({
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      password: user.password
   }).into('Architecture_User')
}