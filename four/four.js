import { getLinesBatchedAsNumMat, getLinesFromText } from "../utils.js";

const first = (data) => {
    const lines = getLinesFromText(data);
    const draws = lines[0].split(',').map(x => +x);
    const bingos = getLinesBatchedAsNumMat(data, 5, 1);
    const marked = new Set();
    
    let drawCount = 4;
    let result;

    [...Array(4).keys()].forEach(x => marked.add(draws[x])); // No match possible until 5 draw!

    while(drawCount < draws.length) {
        marked.add(draws[drawCount]);
        result = checkRowWin(bingos, marked);

        if (result.win) {
            break;
        }

        result = checkColumnWin(bingos, marked);

        if (result.win) {
            break;
        }

        drawCount++;
    }

    return draws[drawCount] * getUnmarkedNumbers(bingos[result.boardNumber], marked);
}

const second = (data) => {
    const lines = getLinesFromText(data);
    const draws = lines[0].split(',').map(x => +x);
    const marked = new Set();
    
    let bingos = getLinesBatchedAsNumMat(data, 5, 1);
    let drawCount = 4;
    let result;

    [...Array(4).keys()].forEach(x => marked.add(draws[x])); // No match possible until 5 draw!

    while(drawCount < draws.length) {
        marked.add(draws[drawCount]);
        result = checkRowWin(bingos, marked);

        if (result.win) {
            if (bingos.length === 1){
                break;
            }

            bingos = bingos.filter((x, i) => i != result.boardNumber);
            continue;
        }

        result = checkColumnWin(bingos, marked);

        if (result.win) {
            if (bingos.length === 1){
                break;
            }

            bingos = bingos.filter((x, i) => i != result.boardNumber);
            continue;
        }

        drawCount++;
    }

    return draws[drawCount] * getUnmarkedNumbers(bingos[result.boardNumber], marked);
}

const checkRowWin = (bingos, marked) => {
    let win = false;
    let boardNumber = 0;

    for(let bingo of bingos) {
        for(let row of bingo) {
            let rowWin = true;

            for(let index of [...Array(5).keys()]) {
                if (!marked.has(row[index])) {
                    rowWin = false;
                    break;
                }
            }

            if (rowWin) {
                win = true;
                break;
            }
        }

        if (win) {
            break;
        }
        boardNumber++;
    };

    return { win, boardNumber };
}

const checkColumnWin = (bingos, marked, findFirstWin = true) => {
    let win = false;
    let boardNumber = 0;

    for(let bingo of bingos) {
        for(let index of [...Array(5).keys()]) {
            let columnWin = true;
            
            for(let row of bingo) {
                if (!marked.has(row[index])) {
                    columnWin = false;
                }
            }

            if (columnWin) {
                win = true;
                break;
            }
        }

        if (win) {
            break;
        }
        boardNumber++;
    }

    return { win, boardNumber };
}

const getUnmarkedNumbers = (bingo, marked) => {
    let sumOfUnmarked = 0;
    bingo.forEach(row => {
        [...Array(5).keys()].forEach(index => {
            if(!marked.has(row[index])) {
                sumOfUnmarked += row[index];
            }
        })
    })

    return sumOfUnmarked;
}

export {
    first as fourFirst,
    second as fourSecond
}