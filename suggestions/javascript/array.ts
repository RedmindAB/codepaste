export const getSortAlphabeticallyByKeyFunction = (key: string) => (
  a: any,
  b: any
) => {
  if (a[key] < b[key]) return -1
  if (a[key] > b[key]) return 1
  return 0
}

export function shuffle(arr: any[]) {
  const shuffledArr = [...arr]
  let currentIndex = arr.length
  let temporaryValue: any

  while (0 !== currentIndex) {
    let randomIndex: number
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = shuffledArr[currentIndex]
    shuffledArr[currentIndex] = shuffledArr[randomIndex]
    shuffledArr[randomIndex] = temporaryValue
  }

  return shuffledArr
}

export function newArray(slots: number, mapFn: (index: number) => any) {
  return Array(slots)
    .fill(null)
    .map((_, index) => mapFn(index))
}
