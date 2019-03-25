import {delay, mergeMap} from 'rxjs/operators';
import {of} from "rxjs";

console.log('=== Start ===');

const timer$ = of("<Button Clicked>").pipe(delay(1000));
const click$ = of(timer$).pipe(delay(1000));

click$.pipe(
  mergeMap((timer$) => {
    console.log("DO CLICK");
    return timer$
  })
).subscribe(result => console.log('DO TIMEOUT', result));
