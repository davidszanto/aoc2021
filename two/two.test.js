import { getDataFromFile } from '../utils.js';
import { twofirst, twosecond } from './two.js'

describe("Testing day 2", () => {
    test('Day 2 Tests, first', async () => {
        const data = getDataFromFile('./two/test.txt');
        const result = twofirst(data);
    
        expect(result).toEqual(150);
    });
    
    test('Day 2 Tests, second', async () => {
        const data = getDataFromFile('./two/test.txt');
        const result = twosecond(data);
    
        expect(result).toEqual(900);
    });
});