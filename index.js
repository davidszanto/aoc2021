import { getDataFromFile } from "./utils.js";
import { first, second } from "./one/one.js";
import { twofirst, twosecond } from "./two/two.js";
import { threeFirst, threeSecond } from "./three/three.js";
import { fourFirst, fourSecond } from "./four/four.js";
import { fiveFirst, fiveSecond } from "./five/five.js";
import { sixFirst, sixSecond } from "./six/six.js";
import { sevenFirst, sevenSecond } from "./seven/seven.js";
import { eightFirst, eightSecond } from "./eight/eight.js";
import { nineFirst, nineSecond } from "./nine/nine.js";
import { tenFirst, tenSecond } from "./ten/ten.js";
import { elevenFirst, elevenSecond } from "./eleven/eleven.js";
import { twelveFirst, twelveSecond } from "./twelve/twelve.js";


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
    case 2: {
        const path = "./two/input.txt";
        const data = getDataFromFile(path);
        const resultFirst = twofirst(data);
        console.log(resultFirst);

        const resultSecond = twosecond(data);
        console.log(resultSecond);

        break;
    }
    case 3: {
        const path = "./three/input.txt";
        const data = getDataFromFile(path);
        
        const resultFirst = threeFirst(data);
        console.log(resultFirst);

        const resultSecond = threeSecond(data);
        console.log(resultSecond);

        break;
    }
    case 4: {
        const path = "./four/input.txt";
        const data = getDataFromFile(path);
        
        const resultFirst = fourFirst(data);
        console.log(resultFirst);

        const resultSecond = fourSecond(data);
        console.log(resultSecond);

        break;
    }
    case 5: {
        const path = "./five/input.txt";
        const data = getDataFromFile(path);
        
        const resultFirst = fiveFirst(data);
        console.log(resultFirst);

        const resultSecond = fiveSecond(data);
        console.log(resultSecond);

        break;
    }
    case 6: {
        const path = "./six/input.txt";
        const data = getDataFromFile(path);
        
        const resultFirst = sixFirst(data);
        console.log(resultFirst);

        const resultSecond = sixSecond(data);
        console.log(resultSecond);

        break;
    }
    case 7: {
        const path = "./seven/input.txt";
        const data = getDataFromFile(path);
        
        const resultFirst = sevenFirst(data);
        console.log(resultFirst);

        const resultSecond = sevenSecond(data);
        console.log(resultSecond);

        break;
    }
    case 8: {
        const path = "./eight/input.txt";
        const data = getDataFromFile(path);
        
        const resultFirst = eightFirst(data);
        console.log(resultFirst);

        const resultSecond = eightSecond(data);
        console.log(resultSecond);

        break;
    }
    case 9: {
        const path = "./nine/input.txt";
        const data = getDataFromFile(path);
        
        const resultFirst = nineFirst(data);
        console.log(resultFirst);

        const resultSecond = nineSecond(data);
        console.log(resultSecond);

        break;
    }
    case 10: {
        const path = "./ten/input.txt";
        const data = getDataFromFile(path);
        
        const resultFirst = tenFirst(data);
        console.log(resultFirst);

        const resultSecond = tenSecond(data);
        console.log(resultSecond);

        break;
    }
    case 11: {
        const path = "./eleven/input.txt";
        const data = getDataFromFile(path);
        
        const resultFirst = elevenFirst(data);
        console.log(resultFirst);

        const resultSecond = elevenSecond(data);
        console.log(resultSecond);

        break;
    }
    case 12: {
        const path = "./twelve/input.txt";
        const data = getDataFromFile(path);
        
        const resultFirst = twelveFirst(data);
        console.log(resultFirst);

        const resultSecond = twelveSecond(data);
        console.log(resultSecond);

        break;
    }
    default: {
        console.error(args);
    }
}

