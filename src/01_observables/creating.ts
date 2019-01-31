import {from, fromEvent, interval, Observable, of} from "rxjs";
import {take} from "rxjs/operators";

const observable = of(1);

observable.subscribe(console.log);

const observable2 = new Observable(function(observer) {
  observer.next('Hello');
  observer.next('World');
});

observable2.subscribe(console.log);

const observable3 = from([1, 2, 3, 4, 5]);

observable3.subscribe(console.log);

const observable4 = interval(1000).pipe(take(2));

observable4.subscribe(console.log);
