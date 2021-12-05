import { getDataFromFile } from '../utils.js';
import { fiveFirst, fiveSecond } from './five.js';


describe("Testing day 5", () => {
    test('Day 5 Tests, first', async () => {
        const data = getDataFromFile('./five/test.txt');
        const result = fiveFirst(data);
    
        expect(result).toEqual(5);
    });
    
    test('Day 5 Tests, second', async () => {
        const data = getDataFromFile('./five/test.txt');
        const result = fiveSecond(data);
    
        expect(result).toEqual(12);
    });
});