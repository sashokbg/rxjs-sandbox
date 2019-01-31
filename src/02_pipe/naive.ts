import {of} from "rxjs";

console.log('=== Start ===');

const nums = of(1, 2, 3, 4, 5);

const filterOdd = (n: number) => n % 2 !== 0;
const powerTwo = (num) => num**2;

nums.subscribe(num => {
  if(filterOdd(num)){
    console.log(powerTwo(num));
  }
});


