import { getLinesFromText } from "../utils.js";
import _ from 'lodash';

const first = (data) => {
    const lines = getLinesFromText(data);
    const nodes = lines.map(line => {
        return {
            a: line.split('-')[0],
            b: line.split('-')[1]
        }
    });

    let sum = 0;
    nodes.filter(x => x.a === 'start' || x.b === 'start').forEach(start => {
        sum += getWaysToEnd(start.a === 'start' ? start.b : start.a, nodes, ['start']);
    });

    return sum;
}

const second = (data) => {
    const lines = getLinesFromText(data);
    const links = lines.map(line => line.split('-'));
    const next = (u) => [
        ...links.filter((link) => link[0] === u).map((link) => link[1]),
        ...links.filter((link) => link[1] === u).map((link) => link[0]),
      ]
    
      let frontier = [{ u: 'start', visited: [], canSkip: true }]
      let p = 0
    
      while (frontier.length > 0) {
        let { u, visited, canSkip } = frontier.pop()
    
        visited = [...visited]
        if (u === u.toLowerCase()) visited.push(u)
    
        for (const v of next(u)) {
          if (v === 'end') {
            p++
          } else {
            if (visited.includes(v)) {
              if (canSkip && v !== 'start') {
                frontier.push({ u: v, visited, canSkip: false })
              }
            } else {
              frontier.push({ u: v, visited, canSkip })
            }
          }
        }
      }
    
      return p
}

// METHODS
const getWaysToEnd = (node, nodes, excluded) => {
    if (excluded.some(a => a === node)) {
        return 0;
    }
    
    if (node === 'end' || excluded.some(a => a === node)) {
        return 1;
    }

    let ex = excluded;
    if (node[0] >= 'a' && node[0] <= 'z') {
        ex = [...excluded, node];
    }

    let sum = 0;

    nodes
        .filter(x => x.a === node || x.b === node)
        .filter(x => !excluded.some(a => a === x.a) && !excluded.some(a => a === x.b))
        .forEach(x => sum += getWaysToEnd(x.a === node ? x.b : x.a, nodes, ex));
    
    return sum;
}

export {
    first as twelveFirst,
    second as twelveSecond
}