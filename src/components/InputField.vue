<template>
  <div class="input-field">
    <label class="mb-2 text-sm mb-2 block" :for="name">{{ label }}{{ required ? '*' : '' }}</label>
    <textarea v-if="type === 'textarea'" v-model="model" />
    <input
      v-else
      :id="name"
      v-model="model"
      :type="type"
      :name="name"
      :required="required"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: { type: String, default: null },
    label: { type: String, default: null },
    name: { type: String, default: null },
    type: { type: String, default: null },
    required: { type: Boolean, default: false },
    placeholder: { type: String, default: null },
  },
  setup(props, { emit }) {
    const model = computed({
      get: () => props.value,
      set: val => emit('input', val),
    })
    return { model }
  },
})
</script>

<style lang="postcss">
.input-field input,
.input-field textarea {
  border-color: var(--border);
  background: var(--input);
  @apply w-full px-3 py-2 mb-1 border-2 rounded-md;
}
.input-field input:focus,
.input-field textarea:focus {
  outline-color: var(--accent);
}
.input-field textarea {
  min-height: 200px;
}
</style>
