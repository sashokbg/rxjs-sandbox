import {mergeMap, switchMap} from 'rxjs/operators';
import {interval, Subject} from "rxjs";

console.log('=== Start ===');

const click$ = new Subject();
let timer$ = interval(1000);
let timer2$ = interval(1000);

setTimeout(() => {
  click$.next(timer$)
}, 500);

setTimeout(() => {
  click$.next(timer2$)
}, 2000);

click$.pipe(
  switchMap((interval) => {
    console.log("click");
    return interval
  })
).subscribe(result => console.log(result));
