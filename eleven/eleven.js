import { convertToMatrix, getLinesFromText } from "../utils.js";

const first = (data) => {
    const lines = getLinesFromText(data);
    const matrix = convertToMatrix(lines);
    let sum = 0;

    for (let i = 0; i < 100; i++) {
        const positions = getNinePositions(matrix);
        addOneToEachPoint(matrix);

        positions.forEach(position => {
            sum += addEnergyToAdjacent(matrix, position.x, position.y, positions);
        });
    }

    return sum;
}

const second = (data) => {
    const lines = getLinesFromText(data);
    const matrix = convertToMatrix(lines);
    let count = 0;

    for (; !checkMatrix(matrix); count++) {
        const positions = getNinePositions(matrix);
        addOneToEachPoint(matrix);

        positions.forEach(position => {
            addEnergyToAdjacent(matrix, position.x, position.y, positions);
        });
    }

    return count;
}

// METHODS
const checkMatrix = (matrix) => {
    for(let row of matrix) {
        for (let point of row) {
            if (point !== 0) {
                return false;
            }
        }
    }

    return true;
}

const getNinePositions = (matrix) => {
    const positions = [];

    matrix.forEach((row, i) => {
        row.forEach((point, j) => {
            if (point === 9) {
                positions.push({x: i, y: j});
            }
        })
    });

    return positions;
} 

const addOneToEachPoint = (matrix) => {
    matrix.forEach((row, i) => {
        row.forEach((point, j) => {
            matrix[i][j] = point + 1;

            if (matrix[i][j] === 10) {
                matrix[i][j] = 0;
            }
        })
    });
}

const addEnergyToAdjacent = (matrix, x, y, positions) => {
    if (matrix[x][y] < 9 && !positions.some(pos => pos.x === x && pos.y === y)) {
        matrix[x][y]++;
        return 0;
    }

    matrix[x][y] = 0;
    positions.push({x, y});

    let sum = 1;

    if (x > 0) {
        if (!positions.some(pos => pos.x === x - 1 && pos.y === y)) {
            sum += addEnergyToAdjacent(matrix, x - 1, y, positions); // Right adj
        }

        if (y > 0 && !positions.some(pos => pos.x === x - 1 && pos.y === y - 1)) {
            sum += addEnergyToAdjacent(matrix, x - 1, y - 1, positions); // Top-right adj
        }
    }

    if (y > 0) {
        if (!positions.some(pos => pos.x === x && pos.y === y - 1)) {
            sum += addEnergyToAdjacent(matrix, x, y - 1, positions); // Top adj
        }

        if (x < matrix.length - 1 && !positions.some(pos => pos.x === x + 1 && pos.y === y - 1)) {
            sum += addEnergyToAdjacent(matrix, x + 1, y - 1, positions); // Top-left adj
        }
    }

    if (x < matrix.length - 1) {
        if (!positions.some(pos => pos.x === x + 1 && pos.y === y)) {
            sum += addEnergyToAdjacent(matrix, x + 1, y, positions); // Left
        }

        if (y < matrix[0].length - 1 && !positions.some(pos => pos.x === x + 1 && pos.y === y + 1)) {
            sum += addEnergyToAdjacent(matrix, x + 1, y + 1, positions); // Bottom - left
        }
    }

    if (y < matrix[0].length - 1) {
        if (!positions.some(pos => pos.x === x && pos.y === y + 1)) {
            sum += addEnergyToAdjacent(matrix, x, y + 1, positions); // Bottom
        }

        if (x > 0 && !positions.some(pos => pos.x === x - 1 && pos.y === y + 1)) {
            sum += addEnergyToAdjacent(matrix, x - 1, y + 1, positions); // Bottom - right
        }
    }

    return sum;
}

export {
    first as elevenFirst,
    second as elevenSecond
}