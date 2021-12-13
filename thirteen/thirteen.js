import { getLinesFromText } from "../utils.js";
import _ from 'lodash';

const first = (data) => {
    const lines = getLinesFromText(data);

    let afterEmptyLine = false;
    const points = [];
    const instructions = [];

    lines.forEach(line => {
        if (line.trim().length === 0) {
            afterEmptyLine = true;
            return;
        }

        if (!afterEmptyLine) {
            points.push(line.trim().split(',').map(x => +x));
        }

        if (afterEmptyLine) {
            instructions.push(line.replace('fold along', '').trim().split('='));
        }
    }); 

    const newPoints = [];
    const instruction = instructions[0];
    const axis = +instruction[1];
    
    if (instruction[0] === 'x') {
        points.forEach(point => {
            if (point[0] < axis && !newPoints.some(p => p[0] === point[0] && p[1] === point[1])) {
                newPoints.push(point);
            } else if (point[0] > axis) {
                const x = 2 * axis - point[0];
                if (!newPoints.some(p => p[0] === x && p[1] === point[1])) {
                    newPoints.push([x, point[1]]);
                }
            }
        })
    } else {
        points.forEach(point => {
            if (point[1] < axis && !newPoints.some(p => p[0] === point[0] && p[1] === point[1])) {
                newPoints.push(point);
            } else if (point[1] > axis) {
                const y = 2 * axis - point[1];
                if (!newPoints.some(p => p[0] === point[0] && p[1] === y)) {
                    newPoints.push([point[0], y]);
                }
            }
        })
    }

    return newPoints.length;
}

const second = (data) => {
    const lines = getLinesFromText(data);

    let afterEmptyLine = false;
    let points = [];
    const instructions = [];

    lines.forEach(line => {
        if (line.trim().length === 0) {
            afterEmptyLine = true;
            return;
        }

        if (!afterEmptyLine) {
            points.push(line.trim().split(',').map(x => +x));
        }

        if (afterEmptyLine) {
            instructions.push(line.replace('fold along', '').trim().split('='));
        }
    }); 

    let newPoints = [];
    instructions.forEach(instruction => {
        newPoints = [];
        const axis = +instruction[1];
        
        if (instruction[0] === 'x') {
            points.forEach(point => {
                if (point[0] < axis && !newPoints.some(p => p[0] === point[0] && p[1] === point[1])) {
                    newPoints.push(point);
                } else if (point[0] > axis) {
                    const x = 2 * axis - point[0];
                    if (!newPoints.some(p => p[0] === x && p[1] === point[1])) {
                        newPoints.push([x, point[1]]);
                    }
                }
            })
        } else {
            points.forEach(point => {
                if (point[1] < axis && !newPoints.some(p => p[0] === point[0] && p[1] === point[1])) {
                    newPoints.push(point);
                } else if (point[1] > axis) {
                    const y = 2 * axis - point[1];
                    if (!newPoints.some(p => p[0] === point[0] && p[1] === y)) {
                        newPoints.push([point[0], y]);
                    }
                }
            })
        }

        points = newPoints;
    });

    const mx = _.max(newPoints.map(x => x[0]));
    const my = _.max(newPoints.map(x => x[1]));

    for (let j = 0; j < my + 1; j++) {
        let row = '';
        for (let i = 0; i < mx + 1; i++) {
            if (newPoints.some(x => x[0] === i && x[1] === j)) {
                row = row.concat("#");
            } else {
                row = row.concat(" ");
            }
        }

        console.log(row);
    }
}

export {
    first as thirteenFirst,
    second as thirteenSecond
}