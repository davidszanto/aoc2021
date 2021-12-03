import { readFileSync } from 'fs';

const getDataFromFile = (path) => {
    return readFileSync(path, 'utf-8');
}

const getLinesFromText = (data) => {
    const lines = data.split('\n');
    return lines;
} 

const convertBinaryStringToNumber = (txt) => {
    let number = 0;
    txt.split('').forEach(c => {
        number = number << 1;
        number = number | +c;
    });

    return +number;
}

export { getDataFromFile, getLinesFromText, convertBinaryStringToNumber }