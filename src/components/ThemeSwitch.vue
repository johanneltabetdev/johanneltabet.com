<template>
  <label class="theme-switch" for="theme-switch">
    <input id="theme-switch" v-model="isDark" class="theme-switch__input" type="checkbox" />
    <span class="theme-switch__slider" />
    <span class="theme-switch__icon">
      <component :is="!isDark ? 'SunIcon' : 'MoonIcon'" />
    </span>
  </label>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from '@nuxtjs/composition-api'

import SunIcon from '~/assets/svg/sun.svg'
import MoonIcon from '~/assets/svg/moon.svg'

export default defineComponent({
  components: { SunIcon, MoonIcon },
  setup() {
    const isDark = ref(false)
    onMounted(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDark.value = true
      }
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        isDark.value = e.matches
      })
    })
    watch(isDark, val => {
      document.documentElement.dataset.theme = val ? 'dark' : 'light'
    })
    return { isDark }
  },
})
</script>

<style lang="postcss">
.theme-switch {
  @apply hidden;
}
@screen sm {
  .theme-switch {
    width: 64px;
    height: 34px;
    @apply block cursor-pointer relative inline-block;
  }
}
.theme-switch__input {
  @apply w-0 h-0 opacity-0;
}
.theme-switch__slider {
  background-color: #ddd;
  @apply absolute top-0 right-0 bottom-0 left-0 rounded-full;
}
.theme-switch__slider:before {
  content: '';
  bottom: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  @apply absolute rounded-full bg-white transition duration-200;
}
.theme-switch__input:checked + .theme-switch__slider {
  background-color: var(--brand);
}
.theme-switch__input:focus + .theme-switch__slider {
  box-shadow: 0 0 1px var(--brand);
}
.theme-switch__input:checked + .theme-switch__slider:before {
  transform: translateX(28px);
}
.theme-switch__icon {
  right: 11px;
  position: absolute;
  top: 7px;
  width: 18px;
  height: 18px;
  opacity: 0.5;
}
.theme-switch__icon svg {
  fill: white;
}
.theme-switch__input:checked + * + .theme-switch__icon {
  left: 8px;
  top: 8px;
  right: auto;
  transform: rotate(25deg);
  opacity: 1;
}
</style>
