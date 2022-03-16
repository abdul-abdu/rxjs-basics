import { from, fromEvent, map, takeWhile } from "rxjs"

const nums$ = from([1, 2, 3, 4, 5])
const click$ = fromEvent(document, "click")

click$
  .pipe(
    map((e) => ({
      x: e.clientX,
      y: e.clientY,
    })),
    takeWhile(({ y }) => y <= 200),
  )
  .subscribe({
    next: console.log,
    complete: () => console.log("asdasdas"),
  })
