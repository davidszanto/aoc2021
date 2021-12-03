import { getDataFromFile } from '../utils.js';
import { threeFirst, threeSecond } from './three.js';

describe("Testing day 3", () => {
    test('Day 3 Tests, first', async () => {
        const data = getDataFromFile('./three/test.txt');
        
        const result = threeFirst(data);
        expect(result).toEqual(198);
    });
    
    test('Day 3 Tests, second', async () => {
        const data = getDataFromFile('./three/test.txt');

        const result = threeSecond(data);
        expect(result).toEqual(230);
    });
});