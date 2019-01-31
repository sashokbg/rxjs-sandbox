import {filter, flatMap, map, mergeAll, mergeMap} from 'rxjs/operators';
import {merge, Observable, of, Subject, timer} from "rxjs";

console.log('=== Start ===');

const click$ = new Subject();
const timer$ = new Subject();

setTimeout(() => {
  click$.next(timer$)
}, 1000);

setTimeout(() => {
  timer$.next("Button timeout !");
}, 1000);

// NAIVE

click$.subscribe(result => console.log(result));
