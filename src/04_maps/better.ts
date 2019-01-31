import {map, mergeAll} from 'rxjs/operators';
import {interval, Subject} from "rxjs";

console.log('=== Start ===');

const click$ = new Subject();
let timer$ = interval(1000);

setTimeout(() => {
  click$.next(timer$)
}, 1000);

click$.pipe(
  map((interval) => {
    console.log("click");
    return interval
  }),
  mergeAll()
).subscribe(result => console.log(result));