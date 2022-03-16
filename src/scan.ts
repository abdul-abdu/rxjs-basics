import { from } from "rxjs"
import { map, scan, distinctUntilKeyChanged } from "rxjs/operators"
const users = [
  { name: "Doe", loggedId: false, token: null },
  { name: "John", loggedId: true, token: null },
  { name: "ALi", loggedId: true, token: "123" },
  { name: "John", loggedId: true, token: null },
  { name: "ALi", loggedId: true, token: "123" },
]

const state$ = from(users).pipe(scan((acc, curr) => ({ ...acc, ...curr }), {}))

const name$ = state$.pipe(
  distinctUntilKeyChanged("name"),
  map((state) => state.name),
)

name$.subscribe(console.log)
