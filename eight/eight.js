import _ from "lodash";
import { getLinesFromText } from "../utils.js";

const first = (data) => {
    const lines = getLinesFromText(data);
    let unique = 0;

    lines.forEach(line => {
        const digits = line
            .split('|')[1]
            .trimStart()
            .split(' ');

        digits.filter(digit => {
            if (digit.length === 2 || digit.length === 3 || digit.length === 4 || digit.length === 7) {
                unique++;
            }
        })
    });

    return unique;
}

const second = (data) => {
    const lines = getLinesFromText(data);
    let sum = 0;

    lines.forEach(line => {
        const observations = line
            .split('|')[0]
            .trim()
            .split(' ');

        const digits = line
            .split('|')[1]
            .trimStart()
            .split(' ');

        const sorted = _.sortBy(observations, x => x.length);
        const unique = _.uniq(sorted).map(x => x.split(''));
    
        let one = unique[0].sort();

        const middles = _.intersection(...unique.filter(x => x.length === 5)); // get the codes for the middle horizontal ones
        const b = _.difference(unique[2], one, middles)[0]; // get the code for b
    
        let fives = unique.filter(x => x.length === 5);
        let sixs = unique.filter(x => x.length === 6);
    
        let five = fives.filter(x => x.some(a => a === b))[0].sort();
        let three = fives.filter(x => !x.some(a => a === b) && x.some(a => a === one[0]) && x.some(a => a === one[1]))[0].sort();
        let two = fives.filter(x => !_.isEqual(x, five) && !_.isEqual(x, three))[0].sort();
    
        let nine = sixs.filter(x => 3 === _.intersection(x, middles).length && 2 === _.intersection(x, one).length)[0].sort();
        let six = sixs.filter(x => 1 === _.intersection(x, one).length)[0].sort();

        let num = 0;
        digits.map(x => x.split('').sort()).forEach((digit, i) => {
            if (digit.length === 2) {
                num += 1 * Math.pow(10, 3 - i);
            } else if (_.isEqual(digit, two)) {
                num += 2 * Math.pow(10, 3 - i);
            } else if (_.isEqual(digit, three)) {
                num += 3 * Math.pow(10, 3 - i);
            } else if (digit.length === 4) {
                num += 4 * Math.pow(10, 3 - i);
            } else if (_.isEqual(digit, five)) {
                num += 5 * Math.pow(10, 3 - i);
            } else if (_.isEqual(digit, six)) {
                num += 6 * Math.pow(10, 3 - i);
            } else if (digit.length === 3) {
                num += 7 * Math.pow(10, 3 - i);
            } else if (digit.length === 7) {
                num += 8 * Math.pow(10, 3 - i);
            } else if (_.isEqual(digit, nine)) {
                num += 9 * Math.pow(10, 3 - i);
            }
        });

        sum += num;
    });

    return sum;
}

export {
    first as eightFirst,
    second as eightSecond
}