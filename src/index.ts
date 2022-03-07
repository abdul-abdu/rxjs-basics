import "./scrollbar"
import "./index.css"
import { from, reduce, interval, take, scan, map } from "rxjs"

const user = [
  { name: "John Doe", loggedIn: false, token: null },
  { name: "Natali", loggedIn: false, token: null },
  { name: "Abli", loggedIn: false, token: null },
  { name: "Sabina", loggedIn: true, token: "alala" },
]

const observer = { next: console.log, complete: () => console.log("complete") }

const state$ = from(user).pipe(scan((acc, curr) => ({ ...acc, ...curr }), {}))

const name$ = state$.pipe(map((state) => state.name))

name$.subscribe(console.log)
