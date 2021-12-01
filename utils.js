import { readFileSync } from 'fs';

const getDataFromFile = (path) => {
    return readFileSync(path, 'utf-8');
}

const getLinesFromText = (data) => {
    const lines = data.split('\n');
    return lines;
} 

export { getDataFromFile, getLinesFromText }