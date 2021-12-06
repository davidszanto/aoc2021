import { getLinesFromText } from "../utils.js";

const first = (data) => {
    const lines = getLinesFromText(data);
    const lanternfish = lines[0].split(',').map(x => +x);

    for (let i = 0; i < 80; i++) {
        [...lanternfish].forEach((fish, index) => {
            if (fish === 0) {
                lanternfish.push(8);
                lanternfish[index] = 6;
            } else {
                lanternfish[index]--;
            }
        })
    }

    return lanternfish.length;
}

const second = (data) => {
    const lines = getLinesFromText(data);
    let map = new Map();
    lines[0].split(',').forEach(x => map.set(+x, (map.get(+x) ?? 0) + 1));


    for (let i = 0; i < 256; i++) {
        const tempMap = new Map();
        for(let key of map.keys()) {
            if(key === 0) {
                tempMap.set(6, map.get(key) + (tempMap.get(6) ?? 0));
                tempMap.set(8, map.get(key) + (tempMap.get(8) ?? 0));
            } else {
                tempMap.set(key - 1, map.get(key) + (tempMap.get(key - 1) ?? 0));
            }
        }

        map = tempMap;
    }

    let counter = 0;
    for(let value of map.values()) {
        counter += value;
    }

    return counter;
}

export {
    first as sixFirst,
    second as sixSecond
}