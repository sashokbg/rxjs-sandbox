import {Subject} from "rxjs";

const subject$ = new Subject();

console.log("Start script");

setTimeout(() => {
  subject$.next("HELLO");
}, 2000);

console.log(subject$);
console.log("End");
