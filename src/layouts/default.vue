<template>
  <div>
    <Navigation />
    <Nuxt class="main" />
    <Footer />
  </div>
</template>

<script>
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

import { provideStore } from '~/store'

import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  components: { Navigation, Footer },
  setup() {
    const { $axios } = useContext()
    const options = useAsync(() => $axios.get('/api/options'))
    provideStore({ options })
  },
})
</script>
