<template>
  <div class="wrap">
    <h1 class="mb-2">{{ contact.title }}</h1>
    <p class="text-lg font-medium">{{ contact.content }}</p>
    <transition name="fade" mode="out-in">
      <FormBuilder
        v-if="!result"
        :fields="fields"
        :is-loading="isLoading"
        submit-button-label="Send message"
        class="mt-12"
        @submit="submit"
      />
      <h2 v-else class="text-lg font-medium mt-8">
        {{ `${result.status === 'mail_sent' ? '✅' : '❌'} ${result.message}` }}
      </h2>
    </transition>
  </div>
</template>

<script>
import { defineComponent, useContext, ref } from '@nuxtjs/composition-api'
import FormBuilder from '~/components/FormBuilder.vue'

const FIELDS = {
  name: {
    type: 'text',
    required: true,
    label: 'Name',
  },
  email: {
    type: 'email',
    required: true,
    label: 'Email',
  },
  message: {
    type: 'textarea',
    required: false,
    label: 'Message',
  },
}

const transform = data => {
  const emailBody = {
    'your-name': data.name,
    'your-email': data.email,
    'your-message': data.message,
  }
  const form = new FormData()
  Object.keys(emailBody).forEach(key => {
    form.append(key, emailBody[key])
  })
  return form
}

export default defineComponent({
  components: { FormBuilder },
  setup() {
    const { $axios } = useContext()
    const isLoading = ref(false)
    const result = ref(null)
    const submit = async data => {
      isLoading.value = true
      try {
        result.value = await $axios.post(
          '/contact-form-7/v1/contact-forms/241/feedback',
          transform(data),
        )
      } catch (err) {
        throw new Error(err)
      }
      isLoading.value = false
    }
    return { fields: FIELDS, submit, isLoading, result }
  },
  async asyncData({ app }) {
    const contact = await app.$axios.get('/api/contact')
    return { contact }
  },
  head: () => ({ title: 'Contact | Johann Eltabet' }),
})
</script>
