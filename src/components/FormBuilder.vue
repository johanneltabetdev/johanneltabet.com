<template>
  <form
    :class="['form-builder', { 'opacity-50 pointer-events-none': isLoading }]"
    @submit.prevent="onSubmit"
  >
    <div v-for="(item, name) in fields" :key="item.name" class="mb-4">
      <InputField
        v-if="['text', 'email', 'textarea', 'tel'].includes(item.type)"
        v-model="model[name]"
        :type="item.type"
        :name="name"
        :required="item.required"
        :placeholder="item.placeholder"
        :label="item.label"
      />
    </div>
    <div class="flex justify-end">
      <button type="submit" class="button -min-width mt-4">{{ submitLabel }}</button>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import InputField from '~/components/InputField.vue'

export default defineComponent({
  components: { InputField },
  props: {
    fields: { type: Object, default: () => ({}) },
    submitLabel: { type: String, default: 'Send' },
    isLoading: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const model = ref({})
    const onSubmit = () => emit('submit', model.value)
    return { model, onSubmit }
  },
})
</script>
