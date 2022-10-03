export const login = (
   password: number
) => password === 12345678
      ? "token"
      : undefined