// elems

import { empty, fromEvent, timer } from "rxjs"
import {
  takeUntil,
  mergeMapTo,
  tap,
  finalize,
  switchMapTo,
  catchError,
} from "rxjs/operators"
import { ajax } from "rxjs/ajax"

const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const dogImg = document.getElementById("dog")
const pollingStatus = document.getElementById("polling-status")

// streems
const startClick$ = fromEvent(startBtn, "click")
const stopClick$ = fromEvent(stopBtn, "click")

startClick$
  .pipe(
    mergeMapTo(
      timer(0, 300).pipe(
        tap(() => {
          pollingStatus.innerHTML = "Active"
        }),
        switchMapTo(
          ajax.getJSON("https://random.dog/woof.json", {
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          }),
        ),
        catchError((e) => empty()),
        // takeUntil(stopClick$),
        finalize(() => (pollingStatus.innerHTML = "Stopped")),
      ),
    ),
  )
  .subscribe(console.log)
