import {from, interval, Observable, of, Subject} from "rxjs";
import {delay, take} from "rxjs/operators";

const observable = of(1);

observable.subscribe(console.log);

const observable2 = new Observable(function(observer) {
  observer.next('Hello');
  observer.next('World');
});

observable2.subscribe(console.log);

const observable3 = from([1, 2, 3, 4, 5]);

observable3.subscribe(console.log);

// Same thing

let event = new Subject();

setTimeout(() => {
  event.next("EVENT")
}, 250);

let event2 = of("EVENT").pipe(delay(250));

const observable4 = interval(1000).pipe(take(2));

observable4.subscribe(console.log);
