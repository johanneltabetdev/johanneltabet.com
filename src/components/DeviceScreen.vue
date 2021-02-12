<template>
  <div class="device-screen">
    <div class="device-screen-header"><span /></div>
    <div class="device-screen-image" :style="{ paddingTop: `${image.ratio}%` }">
      <LazyImage :item="image" />
    </div>
  </div>
</template>

<script>
import LazyImage from '~/components/LazyImage.vue'

export default {
  components: { LazyImage },
  props: {
    image: { type: Object, default: () => ({}) },
  },
}
</script>

<style lang="postcss">
.device-screen-image {
  @apply relative h-0;
  background: #f7f7f7;
}
.device-screen-image img {
  @apply object-cover absolute top-0 left-0 w-full h-full;
}
.device-screen-header {
  background: linear-gradient(to bottom, #ddd 0, #ccc 100%);
  @apply h-5 relative rounded-t pl-1;
}
.device-screen-header span,
.device-screen-header:before,
.device-screen-header:after {
  content: '';
  display: block;
  height: 7px;
  width: 7px;
  float: left;
  margin-left: 4px;
  margin-top: 7px;
  background: #eee;
  border-radius: 50%;
}
</style>
