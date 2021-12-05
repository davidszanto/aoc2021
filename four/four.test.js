import { fourFirst, fourSecond } from './four.js';
import { getDataFromFile } from '../utils.js';


describe("Testing day 4", () => {
    test('Day 4 Tests, first', async () => {
        const data = getDataFromFile('./four/test.txt');
        const result = fourFirst(data);
    
        expect(result).toEqual(4512);
    });
    
    test('Day 4 Tests, second', async () => {
        const data = getDataFromFile('./four/test.txt');
        const result = fourSecond(data);
    
        expect(result).toEqual(1924);
    });
});