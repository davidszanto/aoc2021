import { getLinesFromText } from "../utils.js";

const first = (data) => {
    const lines = getLinesFromText(data);
    const numbers = lines[0].split(',').map(x => +x);
    
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    const fuels = [];

    for (let i = min; i < max + 1; i++) {
        let fuel = 0;
        numbers.forEach(number => {
            fuel += Math.abs(number - i);
        });

        fuels.push(fuel);
    }

    return Math.min(...fuels);
}

const second = (data) => {
    const lines = getLinesFromText(data);
    const numbers = lines[0].split(',').map(x => +x);
    
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    const fuels = [];

    for (let i = min; i < max + 1; i++) {
        let fuel = 0;
        numbers.forEach(number => {
            fuel += getFuel(Math.abs(number - i));
        });

        fuels.push(fuel);
    }

    return Math.min(...fuels);
}

const getFuel = (n) => {
    if (n === 0) {
        return 0;
    }

    return n + getFuel(n - 1);
}

export {
    first as sevenFirst,
    second as sevenSecond
}