<template>
  <nav class="nav right-0 left-0 fixed z-10 font-bold">
    <div class="wrap flex justify-between items-center">
      <nuxt-link class="lg:text-xl" to="/">Johann Eltabet</nuxt-link>
      <ul class="nav-items flex items-center text-sm lg:text-base -mr-2 py-3 lg:py-6">
        <li class="sm:pr-2"><nuxt-link to="/">Work</nuxt-link></li>
        <li class="sm:pr-2"><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        <ThemeSwitch class="ml-6" />
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import ThemeSwitch from '~/components/ThemeSwitch.vue'

export default defineComponent({
  components: { ThemeSwitch },
})
</script>

<style lang="postcss">
.nav {
  background: var(--header-bg);
  backdrop-filter: saturate(180%) blur(20px);
}
.nav .nav-items a {
  color: var(--gray);
  @apply p-2;
}
.nav a.nuxt-link-exact-active {
  color: var(--text);
  @apply pointer-events-none;
}
</style>
