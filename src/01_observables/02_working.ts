import {Subject} from "rxjs";

const subject = new Subject();

console.log("Start script");

setTimeout(() => {
  subject.next("HELLO");
}, 1000);

subject.subscribe(
  (result) => console.log(result)
);
console.log("End");
