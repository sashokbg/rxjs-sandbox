import { delay, take } from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';

console.log('=== Start ===');

const nums1 = of(1, 9).pipe(delay(3000), take(2));
const nums2 = of(2, 4).pipe(delay(500), take(2));
const nums3 = of(3, 5).pipe(delay(2000), take(2));

forkJoin(nums1, nums2, nums3).subscribe(x => console.log(x));

