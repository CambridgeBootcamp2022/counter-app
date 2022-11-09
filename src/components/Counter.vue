<template>
  <div class="flex justify-content-center align-items-center flex-column">
    <div class="text-8xl pt-4">{{ counter.count }}</div>
    <div>
      <Button
        @click="counter.decreaseCount()"
        label="-"
        class="text-4xl p-4 mr-2"
      />

      <Button @click="counter.increaseCount()" label="+" class="text-4xl p-4" />
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../store'
const counter = useCounterStore()
</script>

<script>
export default {
  name: 'Counter',
}
</script>

<style scoped></style>
