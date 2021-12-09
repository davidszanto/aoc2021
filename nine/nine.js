import _ from "lodash";
import { getLinesFromText } from "../utils.js";

let memo = [];

const first = (data) => {
    const lines = getLinesFromText(data);
    let sum = 0;

    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            if ((i < lines.length - 1 ? +lines[i][j] < +lines[i + 1][j] : true) &&
                (i > 0 ? +lines[i][j] < +lines[i - 1][j] : true) &&
                (j < lines[i].length - 1 ? +lines[i][j] < +lines[i][j + 1] : true) &&
                (j > 0 ? +lines[i][j] < +lines[i][j - 1] : true)) {
                    sum += +lines[i][j] + 1;
                    memo = [];
                }
        }
    }

    return sum;
}

const second = (data) => {
    const lines = getLinesFromText(data);
    const basins = [];

    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            if ((i < lines.length - 1 ? +lines[i][j] < +lines[i + 1][j] : true) &&
                (j < lines[i].length - 1 ? +lines[i][j] < +lines[i][j + 1] : true) &&
                (i > 0 ? +lines[i][j] < +lines[i - 1][j] : true) &&
                (j > 0 ? +lines[i][j] < +lines[i][j - 1] : true)) {
                    memo.push({i: i, j: j});
                    basins.push(extendBasin(i, j, lines));
                }
        }
    }

    let prod = 1;
    _.take(basins.sort((a, b) => b - a), 3).forEach(basin => prod *= basin);

    return prod;
}

//Finesse: Recursion with global memoization.
const extendBasin = (i, j, lines) => {
    if(+lines[i][j] === 9) {
        return 0;
    }

    let sum = 0;

    if (i > 0 && !_.some(memo, x => x.i === i - 1 && x.j === j)) {
        memo.push({i: i - 1, j: j});
        sum += extendBasin(i - 1, j, lines);
    }
    if (j > 0 && !_.some(memo, x => x.i === i && x.j === j - 1)) {
        memo.push({i: i, j: j - 1});
        sum += extendBasin(i, j - 1, lines);
    }
    if (i < lines.length - 1 && !_.some(memo, x => x.i === i + 1 && x.j === j)) {
        memo.push({i: i + 1, j: j});
        sum += extendBasin(i + 1, j, lines);
    }

    if (j < lines[i].length - 1 && !_.some(memo, x => x.i === i && x.j === j + 1)) {
        memo.push({i: i, j: j + 1});
        sum += extendBasin(i, j + 1, lines);
    }

    return sum + 1;
}

export {
    first as nineFirst,
    second as nineSecond
}