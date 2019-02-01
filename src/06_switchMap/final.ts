import {delay, mergeMap, switchMap} from 'rxjs/operators';
import {interval, of, Subject} from "rxjs";

console.log('=== Start ===');

const timer$ = of("Button Clicked").pipe(delay(1000));
const click$ = of(timer$).pipe(delay(1000));

click$.pipe(
  switchMap((interval) => {
    console.log("click");
    return interval
  })
).subscribe(result => console.log(result));
