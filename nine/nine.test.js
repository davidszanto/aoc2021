import { getDataFromFile } from '../utils.js';
import { nineFirst, nineSecond } from './nine.js';


describe("Testing day 9", () => {
    test('Day 9 Tests, first', async () => {
        const data = getDataFromFile('./nine/test.txt');
        const result = nineFirst(data);
    
        expect(result).toEqual(15);
    });
    
    test('Day 9 Tests, second', async () => {
        const data = getDataFromFile('./nine/test.txt');
        const result = nineSecond(data);
    
        expect(result).toEqual(1134);
    });
});