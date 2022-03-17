import { interval, mapTo, scan, takeWhile, tap } from "rxjs"

const counter$ = interval(1000)
const countdown = document.getElementById("countdown")
const message = document.getElementById("message")

counter$
  .pipe(
    mapTo(-1),
    scan((accumulator, current) => {
      return accumulator + current
    }, 10),
    takeWhile((n) => n >= 0),
  )
  .subscribe((v) => {
    countdown.innerHTML = String(v)
    if (!v) {
      message.innerHTML = "Lift of"
    }
  })
