import {delay, mergeMap} from 'rxjs/operators';
import {of} from "rxjs";

console.log('=== Start ===');

const timer$ = of("Button Clicked").pipe(delay(1000));
const click$ = of(timer$).pipe(delay(1000));

click$.pipe(
  mergeMap((interval) => {
    console.log("click");
    return interval
  })
).subscribe(result => console.log(result));
