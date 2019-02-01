import {delay, map, mergeAll} from 'rxjs/operators';
import {of} from "rxjs";

console.log('=== Start ===');

const timer$ = of("Button Clicked").pipe(delay(1000));
const click$ = of(timer$).pipe(delay(1000));

click$.pipe(
  map((myTimer) => {
    console.log("click");
    return myTimer;
  }),
  mergeAll()
).subscribe(result => console.log(result));
