import { IHashGenerator } from "../../../src/business/Ports";


export class HashManagerMock implements IHashGenerator {
    async hash(s: string): Promise<any> {
        return "hashPassword"
    }
    async compareHash(s: string, hash: string): Promise<boolean> {
        return s === hash
    }
    
}