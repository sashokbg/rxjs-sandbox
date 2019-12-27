import {mergeMap, delay} from 'rxjs/operators';
import {interval, of, Subject} from "rxjs";

console.log('=== Start ===');

let timer$ = interval(1000);
const click$ = of(timer$, timer$);

click$.pipe(
  mergeMap((interval) => {
    console.log("DO CLICK");
    return interval
  })
).subscribe(result => console.log('DO TICK ', result));
