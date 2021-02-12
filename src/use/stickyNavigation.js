import raf from '~/utils/raf'

export default function stickyNavigation($el) {
  let lastScroll = 0
  let lastTranslateY = 0
  $el.style.setProperty('transform', 'translate3d(0, var(--y), 0)')

  const handleScroll = () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop
    const direction = scroll > lastScroll ? 1 : -1
    let translateY = 0
    if (direction === -1) {
      if (lastScroll < 30) {
        $el.style.setProperty('--y', '0px')
        return
      }
      const offset = lastScroll - scroll
      translateY = Math.min(lastTranslateY + offset, 0)
      $el.style.setProperty('--y', `${translateY}px`)
    } else {
      const offset = scroll - lastScroll
      translateY = Math.max(lastTranslateY - offset, -$el.clientHeight)
      $el.style.setProperty('--y', `${translateY}px`)
    }
    lastTranslateY = translateY
    lastScroll = scroll
  }

  const scrollListener = raf(handleScroll)
  window.addEventListener('scroll', scrollListener)
}
