import { distinctUntilChanged, of } from "rxjs"

const nums$ = of(1, 1, 2, 2, 3, 4, 5, 1, 6, 7)

nums$.pipe(distinctUntilChanged())

nums$.subscribe(console.log)
