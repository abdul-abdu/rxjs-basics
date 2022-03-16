import { debounceTime, fromEvent, interval, takeUntil } from "rxjs"
import { ajax } from "rxjs/ajax"
import { mergeMap } from "rxjs/operators"
const input = document.createElement("input")

const click$ = fromEvent(document, "click")
const mousedown$ = fromEvent(document, "mousedown")
const mouseup$ = fromEvent(document, "mouseup")
console.log("Flattening")

const interval$ = interval(1000)

const input$ = fromEvent(input, "keyup").pipe(
  mergeMap((event) => {
    const term = event.target.value
    return ajax.getJSON(`https://api.github.com/users/${term}`)
  }),
  debounceTime(1000),
)

mousedown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$))))
  .subscribe(console.log)

document.children.item(0).appendChild(input)
