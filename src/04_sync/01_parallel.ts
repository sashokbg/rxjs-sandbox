import { delay, filter, take } from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';

console.log('=== Start ===');

const nums1 = of(1).pipe(delay(300));
const nums2 = of(2).pipe(delay(200));
const nums3 = of(3).pipe(delay(100));

forkJoin(nums1, nums2, nums3).subscribe(x => console.log(x));

