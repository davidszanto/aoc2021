import { getDataFromFile } from '../utils.js';
import { sixFirst, sixSecond } from './six.js';


describe("Testing day 6", () => {
    test('Day 6 Tests, first', async () => {
        const data = getDataFromFile('./six/test.txt');
        const result = sixFirst(data);
    
        expect(result).toEqual(5934);
    });
    
    test('Day 6 Tests, second', async () => {
        const data = getDataFromFile('./six/test.txt');
        const result = sixSecond(data);
    
        expect(result).toEqual(26984457539);
    });
});