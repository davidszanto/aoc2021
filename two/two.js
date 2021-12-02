import { getLinesFromText } from "../utils.js";

const first = (data) => {
    const lines = getLinesFromText(data);
    let horizontal = 0;
    let depth = 0;

    lines.forEach(x => {
        const [command, unit]  = x.split(' ');

        switch(command) {
            case 'forward': {
                horizontal += +unit;
                break;
            }
            case 'up': {
                depth -= +unit;
                break;
            }
            case 'down': {
                depth += +unit;
                break;
            }
            default:
                throw new Error('Something went wrong');
        }
    });

    return horizontal * depth;
}

const second = (data) => {
    const lines = getLinesFromText(data);
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    lines.forEach(x => {
        const [command, unit]  = x.split(' ');

        switch(command) {
            case 'forward': {
                horizontal += +unit;
                depth += +unit * aim;
                break;
            }
            case 'up': {
                aim -= +unit;
                break;
            }
            case 'down': {
                aim += +unit;
                break;
            }
            default:
                throw new Error('Something went wrong');
        }
    });

    return horizontal * depth;
}

export { first as twofirst, second as twosecond }