import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  interval,
  pluck,
} from "rxjs"
const input = document.createElement("input")

const click$ = fromEvent(document, "click")
console.log("Debaounce")

const input$ = fromEvent(input, "keyup").pipe(
  debounce(() => interval(1000)),
  pluck("target", "value"),
  distinctUntilChanged(),
)

input$.subscribe(console.log)

document.children.item(0).appendChild(input)
