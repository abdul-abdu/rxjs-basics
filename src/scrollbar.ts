import { fromEvent, map } from "rxjs"

const calculateScrollPercent = (e: Element): number => {
  const { scrollTop, scrollHeight, clientHeight } = e
  return (scrollTop / (scrollHeight - clientHeight)) * 100
}

// elements
const progressBar = document.querySelector(".progress-bar")

// Streams
const scroll$ = fromEvent(document, "scroll")
const progress$ = scroll$.pipe(
  map(({ target }) => calculateScrollPercent(target.documentElement)),
)

progress$.subscribe((percent) => {
  progressBar.style.width = `${percent}%`
})
