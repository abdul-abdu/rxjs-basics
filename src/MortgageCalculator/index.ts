import { combineLatest, fromEvent } from "rxjs"
import { filter, map } from "rxjs/operators"
import { calculateMortgage, createInputValueStream } from "./helper"

const loanAmount = document.getElementById("loanAmount")
const interest = document.getElementById("interest")
const loanLength = document.querySelectorAll(".loanLength")
const expected = document.getElementById("expected")

const loanAmount$ = createInputValueStream(loanAmount)
const interest$ = createInputValueStream(interest)
const loanLength$ = createInputValueStream(loanLength)

combineLatest(interest$, loanAmount$, loanLength$)
  .pipe(
    map(([interest, loanAmount, loanLength]) =>
      calculateMortgage(interest, loanAmount, loanLength),
    ),
    filter((amount) => !isNaN(amount)),
  )
  .subscribe((t) => (expected.innerHTML = t))
