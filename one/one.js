import { getLinesFromText } from "../utils.js";

const first = (data) => {
    let increases = 0;
    const lines = getLinesFromText(data);

    lines.forEach((x, i) => {
        if (i > 0 && +x > +lines[i - 1]) {
            increases++;
        }
    });
    
    return increases;
}

const second = (data) => {
    let increases = 0;
    const lines = getLinesFromText(data);

    lines.forEach((x, i) => {
        if (i <= 0 || i >= lines.length - 2) {
            return;
        }

        const windowA = +lines[i - 1] + +x + +lines[i + 1];
        const windowB = +x + +lines[i + 1] + +lines[i + 2];

        if (windowB > windowA) {
            increases++;
        }
    });
    
    return increases;
}

export {
    first,
    second
}