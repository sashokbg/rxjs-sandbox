import {Observable, Subject} from "rxjs";

console.log('=== Start ===');

const click$ = new Subject();
const timer$ = new Subject();

setTimeout(() => {
  click$.next(timer$)
}, 1000);

setTimeout(() => {
  timer$.next("Button timeout !");
}, 2000);

// NAIVE

click$.subscribe((timeoutEvent$: Observable<string>) => {

  timeoutEvent$.subscribe(result => {
    console.log(result)
  });
});
