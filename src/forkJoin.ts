import {
  delay,
  empty,
  endWith,
  filter,
  forkJoin,
  map,
  of,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  timer,
} from "rxjs"

const observable = forkJoin([
  of(1),
  of(3),
  of(4),
  of(5),
]).pipe(tap((t) => console.log("TTT", t)))
// const observable = of(2).pipe(filter((t) => t > 2))

observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("This is how it ends!"),
})
