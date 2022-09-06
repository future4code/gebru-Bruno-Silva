import { IIDGenerator } from "../../../src/business/Ports";


export class IdGeneratorMock implements IIDGenerator {
    generate = jest.fn(()=> "id")
}