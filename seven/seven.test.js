import { getDataFromFile } from '../utils.js';
import { sevenFirst, sevenSecond } from './seven.js';


describe("Testing day 7", () => {
    test('Day 7 Tests, first', async () => {
        const data = getDataFromFile('./seven/test.txt');
        const result = sevenFirst(data);
    
        expect(result).toEqual(37);
    });
    
    test('Day 7 Tests, second', async () => {
        const data = getDataFromFile('./seven/test.txt');
        const result = sevenSecond(data);
    
        expect(result).toEqual(168);
    });
});