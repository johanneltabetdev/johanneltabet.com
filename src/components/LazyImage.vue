<template>
  <div
    v-observe-visibility="{ callback: setIsVisible, once: true }"
    :class="{ '-loaded': state.isLoaded, 'lazy-image': lazy }"
  >
    <img :srcset="attrs.srcset" :sizes="attrs.sizes" :alt="item.alt || ''" @load="setIsLoaded" />
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'

import screens from '~/utils/screens'

export default defineComponent({
  props: {
    item: { type: Object, default: () => ({}) },
    lazy: { type: Boolean, default: true },
    includeSizes: { type: Array, default: () => [] },
  },
  setup(props) {
    const state = reactive({
      isVisible: false,
      isLoaded: false,
      shouldLoad: computed(() => (props.lazy ? state.isVisible : true)),
    })
    const setIsVisible = () => (state.isVisible = true)
    const setIsLoaded = () => (state.isLoaded = true)

    const attrs = computed(() => {
      const filteredSizes = Object.entries(screens).filter(([key]) =>
        props.includeSizes.includes(key),
      )
      const srcset = filteredSizes.reduce((acc, [key, value]) => {
        const src = props.item[key]
        return src ? [`${src} ${value}w`, ...acc] : acc
      }, [])
      const sizes = filteredSizes
        .reduce((acc, [key, value], i, arr) => {
          const size = props.item[key]
          const mediaQuery =
            i < arr.length ? `(min-width: ${value}px) ${(arr[i + 1] || [])[1] || 100}w` : `100vw`
          return size ? [`${mediaQuery}`, ...acc] : acc
        }, [])
        .reverse()
      return {
        srcset: !state.shouldLoad ? '' : srcset,
        sizes,
      }
    })

    return { state, attrs, setIsVisible, setIsLoaded }
  },
})
</script>

<style lang="postcss">
.lazy-image {
  @apply opacity-0 transition-all duration-300;
}
.lazy-image.-loaded {
  @apply opacity-100;
}
</style>
