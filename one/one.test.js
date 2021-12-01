import { first, second } from './one.js';
import { getDataFromFile } from '../utils.js';


describe("Testing day 1", () => {
    test('Day 1 Tests, first', async () => {
        const data = getDataFromFile('./one/test.txt');
        const result = first(data);
    
        expect(result).toEqual(7);
    });
    
    test('Day 1 Tests, second', async () => {
        const data = getDataFromFile('./one/test.txt');
        const result = second(data);
    
        expect(result).toEqual(5);
    });
});