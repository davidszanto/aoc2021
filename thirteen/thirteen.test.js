import { getDataFromFile } from '../utils.js';
import { thirteenFirst, thirteenSecond } from './thirteen.js';


describe("Testing day 13", () => {
    test('Day 13 Tests, first', async () => {
        const data = getDataFromFile('./thirteen/test.txt');
        const result = thirteenFirst(data);
    
        expect(result).toEqual(17);
    });
    
    test('Day 13 Tests, second', async () => {
        const data = getDataFromFile('./thirteen/test.txt');
        const result = thirteenSecond(data);
    
        //expect(result).toEqual(16);
    });
});