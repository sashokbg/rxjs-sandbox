import {delay, filter, map} from 'rxjs/operators';
import {concat, forkJoin, merge, of} from "rxjs";

console.log('=== Start ===');

const nums = of(1, 2, 3, 4, 5);
const nums2 = of(7).pipe(delay(1000));
const nums3 = of(9).pipe(delay(2000));

concat(nums, nums2, nums3).subscribe(x => console.log(x));

