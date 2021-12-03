import { convertBinaryStringToNumber, getLinesFromText } from "../utils.js";

const first = (data) => {
    const lines = getLinesFromText(data);
    
    let gamma = false;
    let epsilon = false;

    for(let i = 0; i < lines[0].length; i++) {
        let ones = 0;

        lines.forEach(x => {
            ones += +x[i];
        });

        gamma   = gamma << 1;
        epsilon = epsilon << 1;

        gamma   = gamma   | ones > lines.length/2;
        epsilon = epsilon | ones <= lines.length/2;
    }

    return gamma * epsilon;
}

const second = (data) => {
    const dataLines = getLinesFromText(data);
    let lines = dataLines;
    let oxygenRating = 0;
    let co2Rating = 0;

    for (let i = 0; i < dataLines[0].length; i++) {
        const newLines = selectValues(lines, i, true);
        lines = newLines;

        if (newLines.length < 2) {
            oxygenRating = convertBinaryStringToNumber(newLines[0]);
            break;
        }
    }

    lines = dataLines;

    for (let i = 0; i < dataLines[0].length; i++) {
        const newLines = selectValues(lines, i, false);
        lines = newLines;

        if (newLines.length < 2) {
            co2Rating = convertBinaryStringToNumber(newLines[0]);
            break;
        }
    }

    return oxygenRating * co2Rating;
}

const selectValues = (lines, index, flag) => {
    let bitAtIndex = 0;
    let ones = 0;

    lines.forEach(x => {
        ones += +x[index];
    });

    if (ones === lines.length/2) {
        bitAtIndex = flag ? 1 : 0;
    } else {
        bitAtIndex = flag ? ones > lines.length/2 : ones < lines.length/2;
    }
    
    const newLines = lines.filter(x => +x[index] == bitAtIndex);

    return newLines;
}

export {
    first as threeFirst,
    second as threeSecond
}