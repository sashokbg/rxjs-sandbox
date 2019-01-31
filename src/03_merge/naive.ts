import {delay, filter, map} from 'rxjs/operators';
import {merge, of, pipe, Subject} from "rxjs";

console.log('=== Start ===');

const nums = of(1, 2, 3, 4, 5);
const nums2 = of(7).pipe(delay(1000));
const nums3 = of(9).pipe(delay(2000));

const squareOddVals = pipe(
  filter((n: number) => n % 2 !== 0),
  map(n => n * n)
);

squareOddVals(nums3).subscribe(x => console.log(x));
squareOddVals(nums2).subscribe(x => console.log(x));
squareOddVals(nums).subscribe(x => console.log(x));
