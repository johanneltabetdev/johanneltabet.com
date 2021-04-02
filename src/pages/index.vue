<template>
  <div class="wrap">
    <div class="intro" v-html="options.intro" />
    <ul class="pt-24 lg:-mx-4 lg:pt-32 lg:pb-12 flex flex-wrap justify-between">
      <li
        v-for="item in works"
        :key="item.id"
        class="w-full lg:p-4"
        :class="{ 'lg:w-6/12 mb-12 lg:mb-6': !item.featured, 'mb-12': item.featured }"
      >
        <Project :class="{ '-half': !item.featured }" :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useStore } from '~/store'

import Project from '~/components/Project.vue'

export default defineComponent({
  components: { Project },
  setup() {
    const { options = {} } = useStore()
    return { options }
  },
  async asyncData({ app }) {
    const works = await app.$axios.get('/api/works')
    return { works }
  },
})
</script>

<style lang="postcss">
.intro h1 br {
  display: none;
}
@screen sm {
  .intro h1 br {
    display: block;
  }
}
</style>
