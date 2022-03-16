import { fromEvent, map, sampleTime } from "rxjs"

const click$ = fromEvent(document, "click")

click$
  .pipe(
    sampleTime(4000),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
  )
  .subscribe(console.log)
