import {delay} from 'rxjs/operators';
import {concat, of} from 'rxjs';

console.log('=== Start ===');

const nums1 = of(1).pipe(delay(3000));
const nums2 = of(2).pipe(delay(1000));
const nums3 = of(3).pipe(delay(2000));

concat(nums1, nums2, nums3).subscribe(x => console.log(x));

