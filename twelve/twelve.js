import { getLinesFromText } from "../utils.js";

let excluded = [];

const first = (data) => {
    const lines = getLinesFromText(data);
    const nodes = lines.map(line => {
        return {
            a: line.split('-')[0],
            b: line.split('-')[1]
        }
    });

    nodes.filter(x => x.a === 'start' || x.b === 'start').forEach(start => {
        getWaysToEnd(start.a === 'start' ? start.b : start.a, nodes, ['start']);
    });
}

const second = (data) => {
    const lines = getLinesFromText(data);

    //TODO
}

// METHODS
const getWaysToEnd = (node, nodes) => {
    if (node === 'end') {
        return;
    }

    let sum = 1;

    nodes
        .filter(x => x.a === node || x.b === node)
        .filter(x => !excluded.some(x.a) && !excluded.some(x.a))
        .forEach(x => sum += getWaysToEnd(x.a === node ? x.b : x.a, nodes, excluded));
    
    return sum;
}

export {
    first as twelveFirst,
    second as twelveSecond
}