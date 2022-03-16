import { fromEvent, interval, mergeMap, takeUntil } from "rxjs"

const click$ = fromEvent(document, "click")
const mousedown$ = fromEvent(document, "mousedown")
const mouseup$ = fromEvent(document, "mouseup")
const interval$ = interval(1000)

mousedown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$))))
  .subscribe(console.log)
