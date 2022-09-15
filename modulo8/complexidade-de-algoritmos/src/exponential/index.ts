import { login } from "./login"

const crackPassword = (
   passwordLength: number
) => {

   for (let i = 0; i < 10 ** passwordLength; i++) {
      console.count()

      const token = login(i)
      if (token) return token
   }
}

crackPassword(4)