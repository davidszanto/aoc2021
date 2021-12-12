import { getDataFromFile } from '../utils.js';
import { twelveFirst, twelveSecond } from './twelve.js';

describe("Testing day 3", () => {
    test('Day 3 Tests, first 1', async () => {
        const data = getDataFromFile('./twelve/test1.txt');
        
        const result = twelveFirst(data);
        expect(result).toEqual(10);
    });

    test('Day 3 Tests, first 2', async () => {
        const data = getDataFromFile('./twelve/test2.txt');
        
        const result = twelveFirst(data);
        expect(result).toEqual(10);
    });

    test('Day 3 Tests, first 3', async () => {
        const data = getDataFromFile('./twelve/test3.txt');
        
        const result = twelveFirst(data);
        expect(result).toEqual(10);
    });
    
    test('Day 3 Tests, second', async () => {
        const data = getDataFromFile('./twelve/test.txt');

        const result = twelveSecond(data);
    });
});