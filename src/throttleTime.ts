import {
  debounce,
  distinctUntilChanged,
  fromEvent,
  interval,
  pluck,
  throttleTime,
} from "rxjs"
const input = document.createElement("input")

const click$ = fromEvent(document, "click")
console.log("Debaounce")

const input$ = fromEvent(input, "keyup").pipe(
  throttleTime(3000),
  pluck("target", "value"),
  distinctUntilChanged(),
)

input$.subscribe(console.log)

document.children.item(0).appendChild(input)
