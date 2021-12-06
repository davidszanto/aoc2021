import { getLinesFromText } from "../utils.js";

const first = (data) => {
    const lines = getLinesFromText(data);

    const coords = convertLineToCoordinates(lines);
    const coordLines = getNonSkewLines(coords);
    const map = new Map();

    coordLines.forEach(line => {
        if (line.start.x === line.end.x) {
            const diff = Math.abs(line.start.y - line.end.y);
            const key = (y) => `${line.start.x},${y + (line.start.y <= line.end.y ? line.start.y : line.end.y)}`;
            [...Array(diff + 1).keys()].forEach(y => map.set(key(y), ( map.get(key(y)) ?? 0 ) + 1));
        } else {
            const diff = Math.abs(line.start.x - line.end.x);
            const key = (x) => `${x + (line.start.x <= line.end.x ? line.start.x : line.end.x)},${line.start.y}`;
            [...Array(diff + 1).keys()].forEach(x => map.set(key(x), ( map.get(key(x)) ?? 0 ) + 1));
        }
    });

    let counter = 0;
    for(let key of map.keys()) {
        if (map.get(key) > 1) {
            counter++;
        }
    }
    
    return counter;
}

const second = (data) => {
    const lines = getLinesFromText(data);
    const coords = convertLineToCoordinates(lines);
    const nonSkew = getNonSkewLines(coords);
    const skew = getSkewLines(coords);
    const map = new Map();

    nonSkew.forEach(line => {
        if (line.start.x === line.end.x) {
            const diff = Math.abs(line.start.y - line.end.y);
            const key = (y) => `${line.start.x},${y + (line.start.y <= line.end.y ? line.start.y : line.end.y)}`;
            [...Array(diff + 1).keys()].forEach(y => map.set(key(y), ( map.get(key(y)) ?? 0 ) + 1));
        } else {
            const diff = Math.abs(line.start.x - line.end.x);
            const key = (x) => `${x + (line.start.x <= line.end.x ? line.start.x : line.end.x)},${line.start.y}`;
            [...Array(diff + 1).keys()].forEach(x => map.set(key(x), ( map.get(key(x)) ?? 0 ) + 1));
        }
    });

    skew.forEach(line => {
        const xdir = line.start.x < line.end.x ? 1 : -1;
        const ydir = line.start.y < line.end.y ? 1 : -1;

        let currentCoords = line.start;

        do {
            const key = `${currentCoords.x},${currentCoords.y}`;
            map.set(key, (map.get(key) ?? 0 ) + 1);

            currentCoords.x += xdir;
            currentCoords.y += ydir;
        }
        while(currentCoords.x !== line.end.x + xdir && currentCoords.y !== line.end.y + ydir)
    });

    let counter = 0;
    for(let key of map.keys()) {
        if (map.get(key) > 1) {
            counter++;
        }
    }
    
    return counter;
}

const convertLineToCoordinates = (lines) => {
    return lines
        .map(line => {
            const coordinates = line.trim().split('->');
            const start = {};
            const end = {};

            start.x = +coordinates[0].split(',')[0];
            start.y = +coordinates[0].split(',')[1];
            end.x = +coordinates[1].split(',')[0];
            end.y = +coordinates[1].split(',')[1];

            return { start, end };
        });
}

const getNonSkewLines = (lines) => {
    return lines.filter(line => line.start.x === line.end.x || line.start.y === line.end.y);
}

const getSkewLines = (lines) => {
    return lines.filter(line => line.start.x !== line.end.x && line.start.y !== line.end.y);
}

export {
    first as fiveFirst,
    second as fiveSecond
}