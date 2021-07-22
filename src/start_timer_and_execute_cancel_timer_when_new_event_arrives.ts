import { delay, map, switchMap, tap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

console.log('Starting');

type HoverEvent = {
  name: string;
}

let hoverEvent$ = new Subject<HoverEvent>();
let hoverEvent: HoverEvent = {name: 'event1'};

of('', '').pipe(delay(300)).subscribe(() => {
  console.log('Emitting');
  hoverEvent$.next(hoverEvent);
})


hoverEvent$.asObservable().
pipe(
  map((hoverEvent: HoverEvent) => {
    console.log('Open', hoverEvent);
    return of(hoverEvent).pipe(delay(3000), tap(() => console.log('Closing')));
  }),
).pipe(
  switchMap((innerObs, a) => {
    return innerObs;
  }),
).subscribe((hoverEvent) => {
  console.log('After subscribe', hoverEvent)
})
