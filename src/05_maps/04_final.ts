import {delay, mergeMap} from 'rxjs/operators';
import {of} from "rxjs";

console.log('=== Start ===');

const timer$ = of("Button Clicked").pipe(delay(1000));
const click$ = of(timer$).pipe(delay(1000));

click$.pipe(
  mergeMap((timer$) => {
    console.log("click");
    return timer$
  })
).subscribe(result => console.log(result));
