import { UserBusiness } from "../../src/business/UserBusiness";
import { USER_ROLES } from "../../src/model/User";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { TokenGeneratorMock } from "./mocks/TokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

const userDatabaseMock = new UserDatabaseMock();
const idGeneratorMock = new IdGeneratorMock();
const tokenGeneratorMock = new TokenGeneratorMock();
const hashGeneratorMock = new HashManagerMock();

const userBusinessTest = new UserBusiness(
  userDatabaseMock,
  hashGeneratorMock,
  idGeneratorMock,
  tokenGeneratorMock
);

describe.skip("Testando o signup do userBusiness", () => {
  test("1. Caso de erro: nome inválido", async () => {
    expect.assertions(3);
    try {
      const name = "";
      const email = "email@email";
      const password = "password";
      const role = USER_ROLES.NORMAL;

      await userBusinessTest.signup(name, email, password, role);
    } catch (error: any) {
      expect(error).toBeDefined();
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe("Missing input");
    }
  });

  test("2. Caso de erro: email inválido", async () => {
    expect.assertions(3);
    try {
      const name = "name";
      const email = "email";
      const password = "password";
      const role = USER_ROLES.NORMAL;

      await userBusinessTest.signup(name, email, password, role);
    } catch (error: any) {
      expect(error).toBeDefined();
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe("Invalid email");
    }
  });

  test("3. Caso de erro: email inválido", async () => {
    expect.assertions(3);
    try {
      const name = "name";
      const email = "email@email";
      const password = "pass";
      const role = USER_ROLES.NORMAL;

      await userBusinessTest.signup(name, email, password, role);
    } catch (error: any) {
      expect(error).toBeDefined();
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe("Invalid password");
    }
  });

  test("4. Caso de erro: role inválido", async () => {
    expect.assertions(3);
    try {
      const name = "name";
      const email = "email@email";
      const password = "password";
      const role = "";

      await userBusinessTest.signup(name, email, password, role);
    } catch (error: any) {
      expect(error).toBeDefined();
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe("Missing input");
    }
  });

  test("5. Caso de sucesso: token gerado", async () => {
    expect.assertions(2);
    try {
      const name = "name";
      const email = "email@email";
      const password = "password";
      const role = USER_ROLES.NORMAL;

      const result = await userBusinessTest.signup(name, email, password, role);
      expect(result).toBeDefined();
      expect(result).toEqual({ accessToken: "token" });
    } catch (error: any) {}
  });
});


describe("Testando o login do userBusiness", () => {

    test("1. Caso de erro: email não encontrado", async () => {
        expect.assertions(2);
        try {
          const email = "email@email.com";
          const password = "password";
      
          await userBusinessTest.login( email, password);
          
        } catch (error: any) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toEqual("Invalid credentials");        
        }
      });  
      
      test("2. Caso de erro: senha incorreta", async () => {
        expect.assertions(2);
        try {
          const email = "email@email";
          const password = "123456";
      
          const result = await userBusinessTest.login( email, password);
        } catch (error: any) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toEqual("Invalid credentials");        
        }
      }); 
   
    test("3. Caso de sucesso: token gerado", async () => {
      expect.assertions(2);
      try {
        const email = "email@email";
        const password = "password";
    
        const result = await userBusinessTest.login( email, password);
        expect(result).toBeDefined();
        expect(result).toEqual({ accessToken: "token" });
      } catch (error: any) {}
    });
  });