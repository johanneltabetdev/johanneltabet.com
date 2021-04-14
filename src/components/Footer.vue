<template>
  <footer class="border-t border-color py-12 mt-8 lg:mt-24">
    <div class="wrap lg:flex lg:flex-wrap lg:justify-between">
      <div class="lg:w-4/12">
        <ul>
          <li class="mb-2"><nuxt-link to="/">Work</nuxt-link></li>
          <li class="mb-2"><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </div>
      <div class="lg:w-4/12 mt-6 lg:mt-0">
        <ul>
          <li v-for="link in links" :key="link" class="mb-2">
            <a :href="options[link]" target="_blank" rel="noopener">{{ link }}</a>
          </li>
        </ul>
      </div>
      <div class="lg:w-3/12 mt-6 lg:mt-0">
        <div class="text-xs mb-4" v-html="options.colophon" />
        <p class="text-xs">© Johann Eltabet {{ new Date().getFullYear() }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useStore } from '~/store'

const links = ['twitter', 'linkedin', 'github']

export default defineComponent({
  setup() {
    const { options = {} } = useStore()
    return { options, links }
  },
})
</script>

<style lang="postcss">
footer {
  @apply font-medium;
}
footer a {
  @apply capitalize transition;
}
footer .nuxt-link-exact-active {
  @apply font-bold;
  box-shadow: 0 1px 0;
}
</style>
