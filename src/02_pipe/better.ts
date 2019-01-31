import {filter, map} from 'rxjs/operators';
import {of, pipe} from "rxjs";

console.log('=== Start ===');

const nums = of(1, 2, 3, 4, 5);

nums.pipe(
  filter((n: number) => n % 2 !== 0),
  map(n => n * n)
).subscribe(x => console.log(x));