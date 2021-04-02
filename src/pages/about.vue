<template>
  <div class="about">
    <div class="wrap">
      <h1 class="mb-4 lg:mb-16">{{ about.title }}</h1>
      <div class="lg:flex lg:flex-wrap lg:justify-between">
        <div class="pt-1 pb-4 lg:pt-2 lg:pb-0 w-20 lg:w-40">
          <img class="rounded-full" src="/avatar.jpg" alt="" />
        </div>
        <div class="lg:w-9/12 pt-2 about__intro font-medium text-lg" v-html="about.content" />
      </div>
    </div>
    <div
      v-for="(section, key) in about.sections"
      :key="key"
      class="pt-16 lg:pt-24 mt-16 lg:mt-24 border-t border-solid border-color"
    >
      <div class="wrap lg:flex lg:flex-wrap lg:justify-between">
        <h2 class="lg:w-6/12 font-bold text-lg">{{ section.title }}</h2>
        <ul
          v-if="section.items"
          class="lg:w-6/12"
          :class="{ 'flex flex-wrap mb-0': section.inline }"
        >
          <li
            v-for="item in section.items"
            :key="item.date"
            :class="{ 'px-1 -inline': section.inline, 'mb-8': !section.inline }"
          >
            <p class="text-sm text-gray mb-1">{{ item.date }}</p>
            <h3 class="font-bold text-lg mb-2 flex flex-wrap justify-between">
              <span>{{ item.title }}</span>
              <img v-if="item.image" class="w-8 h-8 rounded-full" :src="item.image" />
            </h3>
            <div class="text-sm" v-html="item.description" />
          </li>
        </ul>
        <p v-else-if="section.content" class="font-medium text-lg" v-html="section.content" />
      </div>
    </div>
    <div class="wrap pt-4 lg:pt-16 pb-6 lg:pb-4 lg:flex justify-end">
      <div class="lg:w-6/12">
        <router-link class="button -min-width" to="/contact">Contact me</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  async asyncData({ app }) {
    const about = await app.$axios.get('/api/about')
    return { about }
  },
  head: () => ({ title: 'About Johann Eltabet' }),
})
</script>

<style lang="postcss">
.about__intro p {
  @apply mb-4;
}
.about li.-inline:not(:last-child) span:after {
  content: ',';
  display: inline;
}
</style>
