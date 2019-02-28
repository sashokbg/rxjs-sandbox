import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

console.log('=== Start ===');

const timer$ = of("Button Clicked").pipe(delay(1000));
const click$ = of(timer$).pipe(delay(1000));

// WORKING

click$.subscribe((timeoutEvent$: Observable<string>) => {
  console.log('click');
  timeoutEvent$.subscribe(result => {
    console.log(result)
  });
});
