<template>
  <div class="project">
    <a class="project__image" target="_blank" :href="item.link">
      <LazyImage :item="project.thumbnail" />
    </a>
    <div class="project__infos mt-8 pl-2 sm:pl-6">
      <h3 class="text-xl lg:text-2xl font-bold">{{ project.title }}</h3>
      <p class="mt-1 lg:text-lg">{{ project.long_title }}</p>
      <a :href="item.link" target="_blank" class="mt-2 text-brand flex projects-center lg:text-lg">
        visit {{ project.linkDisplay }}
        <LinkIcon class="pl-2" />
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import LazyImage from '~/components/LazyImage.vue'
import LinkIcon from '~/assets/svg/link.svg'

export default defineComponent({
  components: { LazyImage, LinkIcon },
  props: { item: { type: Object, default: () => ({}) } },
  setup(props) {
    const { item: project } = props
    project.linkDisplay = project.link.replace(/(^\w+:|^)\/\//, '')
    return { project }
  },
})
</script>

<style lang="postcss">
.project__image {
  padding: 57% 0 0 0;
  background: var(--project-bg);
  @apply flex justify-center items-center relative overflow-hidden h-0 rounded-2xl;
}
@screen lg {
  .project__image {
    padding: 50% 0 0 0;
  }
}
.project__image > div {
  @apply absolute top-auto bottom-0 left-0 w-full h-full;
}
.project__image img {
  transform: translate(0, 6px);
  @apply object-cover absolute left-0 w-full transition duration-1000;
}
.project__image:hover img {
  transform: translate(0, 0);
}
.project__link {
  color: var(--brand);
}
.project__link svg {
  stroke: var(--brand);
}
</style>
