// WIP
// Just an idea to  support timers that count while app is in background
// since intervals wont work
//
// for example if you want an alarm
// you can schedule a notification and use this to display remaining time if you want to countdown

export class BackgroundTimer {
  tickInterval
  initialDate
  time = 0

  start() {
    if (!this.initialDate) this.initialDate = Date.now()
    this.tickInterval = setInterval(this.tick, 1000)
  }

  stop() {
    clearInterval(this.tickInterval)
  }

  reset() {
    this.initialDate = Date.now()
  }

  tick() {
    this.time = (Date.now() - this.initialDate) / 1000
    console.log(this.time)
  }
}
