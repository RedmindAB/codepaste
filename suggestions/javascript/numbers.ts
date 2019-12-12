export function randomize(val1: number, val2?: number) {
  if (val2) {
    return Math.floor(val1 + Math.random() * (val2 - val1))
  }

  return Math.floor(Math.random() * val1 + 1)
}
