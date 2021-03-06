<template>
  <label class="theme-switch" for="theme-switch">
    <input id="theme-switch" v-model="isDark" class="theme-switch__input" type="checkbox" />
    <span class="theme-switch__slider" />
    <span class="theme-switch__icon">{{ !isDark ? '☀️' : '🌙' }}</span>
  </label>
</template>

<script>
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isDark = ref(false)
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
  background-color: #ccc;
  @apply absolute top-0 right-0 bottom-0 left-0 rounded-full transition duration-500;
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
.theme-switch__input:checked + * + .theme-switch__icon {
  left: 7px;
  right: auto;
}
.theme-switch__icon {
  right: 10px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
