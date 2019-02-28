import {delay, filter, map} from 'rxjs/operators';
import {merge, of, Subject} from "rxjs";

console.log('=== Start ===');

const nums = of(1, 2, 3, 4, 5);
const nums2 = of(7).pipe(delay(1000));
const nums3 = of(9).pipe(delay(2000));

merge(nums, nums2, nums3, of(99)).pipe(
  filter((n: number) => n % 2 !== 0),
  map((num) => num ** 2)
).subscribe(x => console.log(x));

