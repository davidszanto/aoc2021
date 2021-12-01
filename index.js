import { getDataFromFile } from "./utils.js";
import { first, second } from "./one/one.js";

const args = process.argv.slice(2);

switch(+args) {
    case 1: {
        const path = "./one/input.txt";
        const data = getDataFromFile(path);
        const resultFirst = first(data);
        console.log(resultFirst);

        const resultSecond = second(data);
        console.log(resultSecond);

        break;
    }
    default: {
        console.error(args);
    }
}

