import { getDataFromFile } from '../utils.js';
import { twelveFirst, twelveSecond } from './twelve.js';

describe("Testing day 12", () => {
    test('Day 12 Tests, first 1', async () => {
        const data = getDataFromFile('./twelve/test1.txt');
        
        const result = twelveFirst(data);
        expect(result).toEqual(10);
    });

    test('Day 12 Tests, first 2', async () => {
        const data = getDataFromFile('./twelve/test2.txt');
        
        const result = twelveFirst(data);
        expect(result).toEqual(19);
    });

    test('Day 12 Tests, first 3', async () => {
        const data = getDataFromFile('./twelve/test3.txt');
        
        const result = twelveFirst(data);
        expect(result).toEqual(226);
    });
    
    test('Day 12 Tests, second 1', async () => {
        const data = getDataFromFile('./twelve/test1.txt');
        
        const result = twelveSecond(data);
        expect(result).toEqual(36);
    });

    test('Day 12 Tests, second 2', async () => {
        const data = getDataFromFile('./twelve/test2.txt');
        
        const result = twelveSecond(data);
        expect(result).toEqual(103);
    });

    test('Day 12 Tests, second 3', async () => {
        const data = getDataFromFile('./twelve/test3.txt');
        
        const result = twelveSecond(data);
        expect(result).toEqual(3509);
    });
});