import { useState } from 'react'

export function useBigState<State>(initalState: State) {
  const [state, replaceState] = useState<State>(initalState)

  const setState = (obj: Partial<State>) => {
    const newState = state

    for (const key in obj) {
      newState[key] = obj[key]
    }

    replaceState(newState)
  }

  return [state, setState] as [State, typeof setState]
}
