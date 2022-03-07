import { filter, fromEvent, map, Observable, of } from "rxjs"

// of(1, 2, 3, 4, 5)
//   .pipe(filter((num) => num > 2))
//   .subscribe(console.log)

const keyUp$ = fromEvent(document, "keyup")

const keycode$ = keyUp$.pipe(map((e: KeyboardEvent) => e.code))

const keyup$ = fromEvent(document, "keyup")

of(1, 2, 3, 4, 5)
  .pipe(filter((n) => n > 3))
  .subscribe(console.log)
