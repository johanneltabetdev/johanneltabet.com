export default function raf(callback = () => {}) {
  let timeout = false
  return function tick() {
    if (timeout) {
      window.cancelAnimationFrame(timeout)
    }
    timeout = window.requestAnimationFrame(() => {
      callback()
    })
  }
}
