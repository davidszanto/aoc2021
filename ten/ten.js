import _ from "lodash";
import { getLinesFromText } from "../utils.js";

const pairs = {
    ')': {
        char: '(',
        points: 3
    },
    ']': {
        char: '[',
        points: 57
    },
    '}': {
        char: '{',
        points: 1197
    },
    '>': {
        char: '<',
        points: 25137
    },
}

const secondPairs = {
    '(': 1,
    '[': 2,
    '{': 3,
    '<': 4
}

const first = (data) => {
    const lines = getLinesFromText(data);
    const stack = [];

    let sum = 0;

    lines.forEach(line => {
        for(let par of line.split('')) {
            if (par === '(' ||
                par === '[' ||
                par === '{' ||
                par === '<') {
                    stack.push(par);
                }
            else {
                const open = stack.pop();
                if (pairs[par].char !== open) {
                    sum += pairs[par].points;
                    break;
                }
            }
        }
    });

    return sum;
}

const second = (data) => {
    const lines = getLinesFromText(data);
    let stack = [];
    const sums = [];

    for(let line of lines) {
        let incorrect = false;
        stack = [];

        for(let par of line.split('')) {
            if (par === '(' ||
                par === '[' ||
                par === '{' ||
                par === '<') {
                    stack.push(par);
                }
            else {
                const open = stack.pop();
                if (pairs[par].char !== open) {
                    incorrect = true;
                    break;
                }
            }
        }

        if (incorrect) {
            continue;
        }

        let sum = 0;
        while(stack.length !== 0) {
            const open = stack.pop();
            sum = sum * 5 + secondPairs[open];
        }

        sums.push(sum)
    };

    return sums.sort((a, b) => b - a)[Math.floor(sums.length / 2)];
}

export {
    first as tenFirst,
    second as tenSecond
}