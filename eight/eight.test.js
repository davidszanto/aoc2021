import { getDataFromFile } from '../utils.js';
import { eightFirst, eightSecond } from './eight.js';


describe("Testing day 8", () => {
    test('Day 8 Tests, first', async () => {
        const data = getDataFromFile('./eight/test.txt');
        const result = eightFirst(data);
    
        expect(result).toEqual(26);
    });
    
    test('Day 8 Tests, second', async () => {
        const data = getDataFromFile('./eight/test.txt');
        const result = eightSecond(data);
    
        expect(result).toEqual(61229);
    });
});