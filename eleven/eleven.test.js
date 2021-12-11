import { getDataFromFile } from '../utils.js';
import { elevenFirst, elevenSecond } from './eleven.js';

describe("Testing day 11", () => {
    test('Day 11 Tests, first', async () => {
        const data = getDataFromFile('./eleven/test.txt');
        const result = elevenFirst(data);
    
        expect(result).toEqual(1656);
    });
    
    test('Day 11 Tests, second', async () => {
        const data = getDataFromFile('./eleven/test.txt');
        const result = elevenSecond(data);
    
        expect(result).toEqual(195);
    });
});