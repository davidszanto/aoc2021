import { readFileSync } from 'fs';

Array.prototype.skip = function (count) {
    return this.filter((_, i) => i >= count);
};

Array.prototype.take = function (count) {
    return this.filter((_, i) => i < count);
};

// DATA METHODS

const getDataFromFile = (path) => {
    return readFileSync(path, 'utf-8');
}

const getLinesFromText = (data) => {
    const lines = data.split('\n');
    return lines;
}

const getLinesBatchedAsNumMat = (data, batchSize, offset) => {
    let lines = data.split('\n').filter(l => l != '');

    //Validation
    if ( (lines.length - offset) % batchSize != 0 ) {
        throw new Error(`Cannot generate batches with this offset [${offset}] and batchSize [${batchSize}]`)
    }

    const batchCount = (lines.length - offset) / batchSize;
    let matrices = [];
    lines = lines.skip(offset);

    for (let i = 0; i < batchCount; i++) {
        const batch = lines.take(batchSize);
        const matrix = [];
        batch.forEach(x => {
            x = x.trimStart();
            x = x.replace(/  /g, ' ');

            matrix.push(x.split(' ').map(c => +c));
        });

        matrices.push(matrix);
        lines = lines.skip(batchSize);
    }

    return matrices;
}

// CONVERSIONS
const convertBinaryStringToNumber = (txt) => {
    let number = 0;
    txt.split('').forEach(c => {
        number = number << 1;
        number = number | +c;
    });

    return +number;
}

export { getDataFromFile, getLinesFromText, convertBinaryStringToNumber, getLinesBatchedAsNumMat }