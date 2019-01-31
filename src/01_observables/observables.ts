import {Subject} from "rxjs";

const subject$ = new Subject();

setTimeout(() => {
  subject$.next("HELLO");
}, 1000);

console.log(subject$);