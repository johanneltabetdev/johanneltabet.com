<template>
  <div
    v-observe-visibility="{ callback: setIsVisible, once: true }"
    :class="{ '-loaded': state.isLoaded, 'lazy-image': lazy }"
  >
    <img :srcset="srcset" :sizes="sizes" :alt="item.alt || ''" @load="setIsLoaded" />
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'

import screens from '~/utils/screens'

export default defineComponent({
  props: {
    item: { type: Object, default: () => ({}) },
    lazy: { type: Boolean, default: true },
  },
  setup(props) {
    const state = reactive({
      isVisible: false,
      isLoaded: false,
      shouldLoad: computed(() => (props.lazy ? state.isVisible : true)),
    })
    const setIsVisible = () => (state.isVisible = true)
    const setIsLoaded = () => (state.isLoaded = true)

    const mapSizes = isSrcSet =>
      Object.entries(screens)
        .reduce((acc, [key, value]) => {
          const size = props.item[key]
          const string = isSrcSet ? `${size} ${value}w` : `(min-width: ${value}px) ${value}px`
          return size ? [string, ...acc] : acc
        }, [])
        .join(',\n')

    const srcset = computed(() => {
      if (!state.shouldLoad) return ''
      return mapSizes(true)
    })
    const sizes = computed(() => mapSizes())

    return { state, srcset, sizes, setIsVisible, setIsLoaded }
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
