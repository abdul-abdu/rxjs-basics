import { fromEvent, map, mapTo, pluck } from "rxjs"

const keyup$ = fromEvent(document, "keyup")
// const keyKode$ = keyup$.pipe(map((event: KeyboardEvent) => event.code))
// const keyKodeWithPluck$ = keyup$.pipe(pluck("code"))

const pressed$ = keyup$.pipe(
  mapTo("Key Pressed")
)

pressed$.subscribe(console.log)
