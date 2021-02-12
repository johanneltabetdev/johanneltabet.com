import Vue from 'vue'

const inBrowser = process.client
const hasIntersectionObserver = inBrowser && 'IntersectionObserver' in window

const plugin = {
  install() {
    this.items = []
    this.options = { rootMargin: '0px 0px 20% 0px', threshold: 0.01 }
    Vue.directive(
      'observe-visibility',
      this.bind.bind(this),
      this.update.bind(this),
      this.unbind.bind(this),
    )
    if (hasIntersectionObserver) {
      this.createObserver()
    } else {
      // Force load callback for browser with no IO support
      this.items.forEach(item => {
        const options = this.processOptions(item.options.value)
        options.callback(true, item.el)
      })
    }
  },
  createObserver() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const { target } = entry
        const current = this.items.find(item => item.el === target)
        const options = current ? this.processOptions(current.options.value) : {}
        if (options.once) {
          if (entry.isIntersecting || entry.intersectionRatio) {
            observer.unobserve(target)
            options.callback(true, target)
            this.removeItem(target)
          }
        } else {
          const result = entry.isIntersecting && entry.intersectionRatio > 0
          options.callback(result, target)
        }
      })
    }, this.options)
  },
  bind(el, options) {
    const { value } = options
    if (!value) return
    el.vueVisibilityState = true
    const exists = this.items.some(item => item === { el, options })
    if (!exists) this.items.push({ el, options })
    if (this.observer) {
      this.observer.observe(el)
    } else if (this.processItemsInViewListener) {
      this.processItemsInViewListener()
    }
  },
  update(el, { value }, vnode) {
    if (!value) this.unbind(el)
    const state = el.vueVisibilityState
    if (state) {
      this.observer.observe(el)
    } else {
      this.bind(el, { value }, vnode)
    }
  },
  unbind(el) {
    const state = el.vueVisibilityState
    if (state) delete el.vueVisibilityState
    this.removeItem(el)
  },
  processOptions(value) {
    return typeof value === 'function' ? { callback: value } : value
  },
  removeItem(el) {
    this.items = this.items.filter(item => item.el !== el)
  },
}

Vue.use(plugin)
