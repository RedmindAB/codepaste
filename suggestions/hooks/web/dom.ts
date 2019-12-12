export function retryIfNoElement(
  querySelector: string,
  callback: () => void,
  interval = 50,
  maxAttempts = 100,
  attempt = 0
) {
  const element = document.querySelector(querySelector)

  if (element) return callback()
  if (attempt === maxAttempts) return

  setTimeout(() => {
    retryIfNoElement(querySelector, callback, interval, maxAttempts, ++attempt)
  }, interval)
}
