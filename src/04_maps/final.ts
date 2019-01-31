import {mergeMap} from 'rxjs/operators';
import {interval, Subject} from "rxjs";

console.log('=== Start ===');

const click$ = new Subject();
let timer$ = interval(1000);

setTimeout(() => {
  click$.next(timer$)
}, 1000);

click$.pipe(
  mergeMap((interval) => {
    console.log("click");
    return interval
  })
).subscribe(result => console.log(result));
