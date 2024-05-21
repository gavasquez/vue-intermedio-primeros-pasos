<script lang="ts" src="./CounterView.ts">
//import { ref } from 'vue'
// con defineComponent
/* export default defineComponent({
  setup() {
    const counter = ref(5)

    const increase = () => {
      counter.value++
    }

    return { counter, increase }
  }
}) */

/* const counter = ref(5)

const increase = () => {
  counter.value++
} */
</script>

<template>
  <h1>Counter View: {{ counter }}</h1>
  <button @click="increase">+1</button>
</template>
