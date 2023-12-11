import {run} from './index.js';

function test(x, y) {
  console.log(`${x} === ${y}`);
  console.log((x === y) ? 'ok' : 'not ok');
}

test(run(['A', 'B', 'C', 'D']), 115);
test(run(['A', 'A', 'A', 'A']), 180);
test(run(['B', 'B', 'B', 'B', 'B']), 120);
test(run(['B', 'A', 'B', 'B', 'A']), 175);
test(run(['C', 'A', 'A', 'C', 'B', 'C', 'D', 'D']), 198);
test(run(['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C']), 200);
test(run(['A', 'A', 'A', 'B', 'B', 'B', 'B', 'C',  'D', 'D']), 243);
