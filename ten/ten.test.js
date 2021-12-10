import { getDataFromFile } from '../utils.js';
import { tenFirst, tenSecond } from './ten.js';


describe("Testing day 10", () => {
    test('Day 10 Tests, first', async () => {
        const data = getDataFromFile('./ten/test.txt');
        const result = tenFirst(data);
    
        expect(result).toEqual(26397);
    });
    
    test('Day 10 Tests, second', async () => {
        const data = getDataFromFile('./ten/test.txt');
        const result = tenSecond(data);
    
        expect(result).toEqual(288957);
    });
});